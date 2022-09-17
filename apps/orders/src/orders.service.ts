import { OrdersRepository } from './orders.repository';
import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dtos/create-order.request';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  async createOrder(request: CreateOrderRequest) {
    return this.orderRepository.create(request);
  }
}
