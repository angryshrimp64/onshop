import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseRepository } from '../base.repository';
import { OrderCreateModel, OrderNoteModel, OrderResponse } from './model/index';

@Injectable()
export class OrderRepository extends BaseRepository {
  /// constructor
  constructor(private httpClient: HttpClient) {
    super();
  }

  /// methods
  public placeOrder(woocommerceOrder: {}): Observable<OrderResponse> {
    return this.httpClient.post<OrderCreateModel>(`${this.apiBaseUrl}/wp-json/onshop/v1/order`, woocommerceOrder).pipe(
      map((dto) => {
        const model = new OrderResponse();
        model.mapFromDto(dto);
        return model;
      })
    );
  }

  public getOrders(): Observable<Array<OrderResponse>> {
    return this.httpClient.get<Array<any>>(`${this.apiBaseUrl}/wp-json/onshop/v1/user/orders`).pipe(
      map((dtos) => {
        const result = [];
        for (const item of dtos) {
          const entity = new OrderResponse();
          entity.mapFromDto(item);
          result.push(entity);
        }
        return result;
      })
    );
  }

  public getOrder(id: number) {
    return this.httpClient.get<OrderResponse>(`${this.apiBaseUrl}/wp-json/onshop/v1/user/orders/` + id).pipe(
      map((resp) => {
        const model = new OrderResponse();
        model.mapFromDto(resp);
        return model;
      })
    );
  }

  public postNote(noteWo: string, id: number) {
    const woocommerceNote = new OrderNoteModel(noteWo);
    return this.httpClient.post<OrderCreateModel>(`${this.apiBaseUrl}/wp-json/onshop/v1/orders/${id}/notes`, woocommerceNote);
  }
}
