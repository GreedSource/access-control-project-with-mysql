import { Module } from '@nestjs/common';
import { MeController } from './me.controller';
import { MeService } from './me.service';
import { UserModule } from '@modules/user/user.module';

@Module({
  controllers: [MeController],
  providers: [MeService],
  imports: [UserModule],
})
export class MeModule {}
