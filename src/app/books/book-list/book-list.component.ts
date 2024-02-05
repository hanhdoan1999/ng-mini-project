import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Product } from '../shared/models/book';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { BookAddComponent } from '../book-add/book-add.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    RatingModule,
    TagModule,
    DataViewModule,
    FormsModule,
    DropdownModule,
    ConfirmDialogModule,
    BookAddComponent,
    
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  
})
export class BookListComponent {
  products!: Product[];
  sortOptions: any;
  sortOrder: number = 0;
  sortField: string = '';
  visible: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private productService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllProduct();
    // this.productService.getProducts().then((data: Product[]) => {
    //   this.products = data;
    // });
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  openModalAddBook = () => {
    this.visible = !this.visible;
  };

  confirm2(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}

  getAllProduct = () => {
    return this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (error) => {
        console.error('Error in API request:', error);
      },
    });
  };

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  navigateToBookDetail(id: string) {
    this.router.navigate(['/list-book', id]);
  }
  getSeverity(product: Product) {
    // Your existing getSeverity logic
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
