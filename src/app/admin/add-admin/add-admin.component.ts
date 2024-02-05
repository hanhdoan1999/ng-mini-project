import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { AddUserReq, Admin } from "../shared/models/admin";
import { ActionType } from "../../shared/Enum/enum";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent  implements OnChanges {
  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCreateAdmin: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditAdmin: EventEmitter<any> = new EventEmitter<any>();
  @Input()  visible : boolean = false;
  @Input()  loading : boolean = false;
  @Input() action: ActionType = ActionType.ADD;
  @Input() defaultData: Admin = {}

  registrationForm!: FormGroup;

  resetForm() {
    this.registrationForm.reset();
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  closeModal() {
    this.visible = false;
    this.toggleModal.emit(this.visible);
  }

  ngOnChanges() {
    if (this.action === ActionType.EDIT && Object.keys(this.defaultData).length !== 0) {
        this.populateData(this.defaultData);
    } 
  }

  populateData(data: any) {
    if (this.registrationForm) {
      this.registrationForm.patchValue({
        username: data?.username || '',
        password: data?.password || '',
        email: data?.email || '',
        fullName: data?.fullName || data?.name?.firstname || '',
        phone: data?.phone || '',
        address: data?.address?.street ||'',
        confirmPassword: data?.password || ''
      });
    }
  }
  
  // createForm() {
  //   this.registrationForm = this.fb.group({
  //     username: ['', [Validators.required, Validators.maxLength(20)]],
  //     password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
  //     email: ['', [Validators.required, Validators.email]],
  //     fullName: ['', [Validators.required, Validators.maxLength(50)]],
  //     phone: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]],
  //     address: ['', [Validators.required, Validators.maxLength(100)]],
  //     confirmPassword: ['', Validators.required],  // New field
  //   },{
  //     validators: this.matchValidator('password', 'confirmPassword')
  //   });
  // }

  createForm() {
    this.registrationForm = this.fb.group({
      username: [''],
      password: [''],
      email: [''],
      fullName: [''],
      phone: [''],
      address: [''],
      confirmPassword: [''],  // New field
    });
  }

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
        const control = abstractControl.get(controlName);
        const matchingControl = abstractControl.get(matchingControlName);
        if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
            return null;
        }
        if (control!.value !== matchingControl!.value) {
          const error = { confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
        }
    }
  }

  passwordMatchValidator(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!confirmPassword) {
      return null;
    }
    return password === confirmPassword ? null : { mismatchedPasswords: true };
  }
  

  passwordValidator(control: any) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return (regex.test(control!.value) || control!.value === "") ? null : { invalidPassword: true };
  }
  
  
  hasError(controlName: string, errorType: string): boolean {
    const control = this.registrationForm.get(controlName);
    return control !== null && control.hasError(errorType);
  }
  
  

  onSubmit() {
    if (this.registrationForm.valid) {
      const {confirmPassword,fullName, ...data} = this.registrationForm.value;
      const { id } = this.defaultData;
      const request = {
        ...data,
        name : {
          firstname: this.registrationForm.value.fullName
        },
        address : {
          street : this.registrationForm.value.address
        }
      }
      if(this.action === ActionType.ADD) {
        this.onCreateAdmin.emit(request);
      } else {
        this.onEditAdmin.emit({ id: id, request: request });
      }
    } else {
      this.validateFormFields(this.registrationForm);
    }
  }

  validateFormFields(formGroup: FormGroup | null) {
    if (formGroup !== null) {
      Object.values(formGroup.controls).forEach(control => {
        if (control instanceof FormGroup) {
          this.validateFormFields(control);
        } else {
          control?.markAsTouched({ onlySelf: true });
        }
      });
    }
  }  

}
