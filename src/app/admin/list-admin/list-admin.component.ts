import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from '../../books/shared/models/book';
import { BooksService } from '../../books/books.service';
import { Router } from '@angular/router';
import { Admin, Users } from '../shared/models/admin';
import { AdminService } from '../admin.service';
import { AddAdminComponent } from "../add-admin/add-admin.component";
import { UtilService } from "../../shared/services/Utils.service";
import { ActionType } from "../../shared/Enum/enum";

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrl: './list-admin.component.css',
})
export class ListAdminComponent {
  @ViewChild('registrationForm')
  registrationForm!: AddAdminComponent;

  users!: Admin[];
  sortOptions: any;
  sortOrder: number = 0;
  sortField: string = '';
  visible: boolean = false;
  loading: boolean = false;
  defaultData: Admin = {};

  action: ActionType = ActionType.ADD;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private adminService: AdminService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllAdmin();
  }

  toggleModal = (ev : boolean) => {
    this.visible = ev;
  };

  openModalEdit(user:Admin) {
    this.action =  ActionType.EDIT
    this.defaultData = {...user}
    this.visible = true;
  }

  confirm2(event: Event, user: Admin) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Bạn có chắc chắn muốn xoá không?',
        header: 'Xác nhận xoá',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
          if(user && user.id) {
            this.onDeleteAdmin(user.id)
          }
            // this.messageService.add({ severity: 'info', summary: 'Xoá', detail: 'You have accepted' });
        },
        reject: () => {}
    });
}

  getAllAdmin = () => {
    return this.adminService.getAllAdmin().subscribe({
      next: (res: Admin[]) => {
        this.users = res;
      },
      error: (error) => {
        console.error('Error in API request:', error);
      },
    });
  };

  onCreateAdmin = (req:Admin) => {
    this.loading = true;
    return this.adminService.createAdmin(req).subscribe({
      next: (res: Admin) => {
        if(res) {
          this.getAllAdmin();
          this.utilService.showSuccessMessage(
            'Success',
            'Admin created successfully!',
          );
          this.toggleModal(false);
          this.registrationForm.resetForm();   
        }
        },
      error: (error) => {
        this.utilService.showErrorMessage();
        console.error('Error in API request:', error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onEditAdmin = (ev:any) => {
    console.log(ev)
    const {id, request} = ev
    this.loading = true;
    return this.adminService.editAdmin(id,request).subscribe({
      next: (res: Admin) => {
        if(res) {
          this.getAllAdmin();
          this.utilService.showSuccessMessage(
            'Success',
            'Admin updated successfully!',
          );
          this.toggleModal(false);
          this.registrationForm.resetForm();   
        }
        },
      error: (error) => {
        this.utilService.showErrorMessage();
        console.error('Error in API request:', error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onDeleteAdmin = (id: string | number) => {
    this.loading = true;
    return this.adminService.deleteAdmin(id).subscribe({
      next: (res: any) => {
        if(res) {
          this.getAllAdmin();
          this.utilService.showSuccessMessage(
            'Success',
            'Delete Admin Successfully!',
          );
          this.toggleModal(false);
          this.registrationForm.resetForm();   
        }
        },
      error: (error) => {
        this.utilService.showErrorMessage();
        console.error('Error in API request:', error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }


  navigateToBookDetail(id: string) {
    this.router.navigate(['/list-book', id]);
  }
}
