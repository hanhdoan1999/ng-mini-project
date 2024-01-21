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
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  products!: Product[];

  constructor(private productService: BooksService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data: Product[]) => {
      this.products = data;
    });
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
        return "";
    }
  }
}
