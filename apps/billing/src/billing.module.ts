import { ConfigModule } from '@nestjs/config';
import { AuthModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
    AuthModule
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
