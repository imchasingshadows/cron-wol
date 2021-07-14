import { Controller, Get } from "@nestjs/common";
import { WolService } from "./wol.service";

@Controller("wol")
export class WolController {
  constructor(private readonly wol: WolService) {}

  @Get("ics-unraid")
  sendManualPacket() {
    this.wol.wakeServer();
  }
}
