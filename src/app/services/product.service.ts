import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, retry, map } from 'rxjs/operators';
import { Product } from '../type/product.type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // JSON Server API base URL
  private apiUrl = '/products.json';

  constructor(private http: HttpClient) { }

 // Get all products
 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl).pipe(
    tap(_ => console.log('Fetched products')),
    catchError(this.handleError<Product[]>('getProducts', []))
  );
}

// Get product by id
getProduct(id: number): Observable<Product> {
  return this.http.get<Product[]>(this.apiUrl).pipe(
    map(products => products.find(product => product.id === id) as Product),
    tap(product => console.log('Fetched product id=${id}')),
    catchError(this.handleError<Product>('getProduct id=${id}'))
  );
}

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('${operation} failed: ${error.message}');
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
