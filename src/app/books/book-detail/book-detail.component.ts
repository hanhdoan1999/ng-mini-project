import { Component, OnInit } from '@angular/core';
import { BooksService } from "../books.service";
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, GalleriaModule, InputNumberModule, FormsModule, ButtonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit{
  images: any[] | undefined;
  quantity: number = 1;
    
  responsiveOptions: any[] | undefined;

  constructor(private photoService: BooksService) {}

  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
      this.responsiveOptions = [
          {
              breakpoint: '1024px',
              numVisible: 5
          },
          {
              breakpoint: '768px',
              numVisible: 3
          },
          {
              breakpoint: '560px',
              numVisible: 1
          }
      ];
  }
}
