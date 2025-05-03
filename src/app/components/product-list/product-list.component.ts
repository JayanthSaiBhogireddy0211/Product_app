import { Component } from '@angular/core';
import { Product } from '../../type/product.type';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common'; // Add this import
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products$!: Observable<Product[]>;
  
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(): void {
    this.products$ = this.productService.getProducts();
  }
  
  onProductSelected(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
