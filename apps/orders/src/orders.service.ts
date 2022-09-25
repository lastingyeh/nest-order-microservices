import { BILLING_SERVICE } from './constants/services';
import { OrdersRepository } from './orders.repository';
import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dtos/create-order.request';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async createOrder(request: CreateOrderRequest) {
    const session = await this.ordersRepository.startTransaction();

    try {
      const order = await this.ordersRepository.create(request, { session });

      await lastValueFrom(
        this.billingClient.emit('order_created', { request }),
      );

      await session.commitTransaction();

      return order;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
