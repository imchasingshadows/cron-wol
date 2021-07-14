import { Module } from "@nestjs/common";
import { WolService } from "./wol.service";
import { WolController } from "./wol.controller";
import { ConfigModule } from "@nestjs/config";
import wolConfiguration from "./wol.configuration";

@Module({
  imports: [ConfigModule.forFeature(wolConfiguration)],
  providers: [WolService],
  controllers: [WolController],
})
export class WolModule {}
