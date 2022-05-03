import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ProducerService } from './producer.service';

@Module({
  exports: [ProducerService, ConsumerService],
  providers: [ProducerService, ConsumerService],
})
export class KafkaModule {}
