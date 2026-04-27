import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutingController } from './routing/routing.controller';
import { RoutingModule } from './routing/routing.module';

@Module({
  imports: [RoutingModule],
  controllers: [AppController, RoutingController],
  providers: [AppService],
})
export class AppModule {}
