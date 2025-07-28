import { Module } from '@nestjs/common';
import { FnsServiceService } from './fns-service/fns-service.service';

@Module({
  providers: [FnsServiceService]
})
export class UtilsModule {}
