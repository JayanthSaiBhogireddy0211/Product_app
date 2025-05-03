import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../type/product.type';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productClick = new EventEmitter<number>();
  
  onProductClick(): void {
    this.productClick.emit(this.product.id);
  }
}
