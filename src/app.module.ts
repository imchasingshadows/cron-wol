import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { AppController } from "./app.controller";
import { WolModule } from "./wol/wol.module";

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), WolModule],
  controllers: [AppController],
})
export class AppModule {}
