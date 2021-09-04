import { Injectable, Logger } from "@nestjs/common";
import { SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";
import { CRON_TABS } from "./wol.constants";
import * as wol from "wol";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class WolService {
  private logger = new Logger(WolService.name);
  private enabled = this.cs.get("enabled");

  constructor(
    private readonly sr: SchedulerRegistry,
    private readonly cs: ConfigService,
  ) {
    if (this.enabled) {
      this.addCronJobs();
    }
  }

  wakeServer() {
    const address = this.cs.get("macAddress");
    this.sendMagicPacket(address);
  }

  private addCronJobs() {
    for (const { cron, name } of CRON_TABS) {
      const job = new CronJob(cron, () => {
        this.wakeServer();
      });

      this.sr.addCronJob(name, job);
      this.logger.log(`Registerd Job for: ${name}`);
      job.start();
    }
  }

  private async sendMagicPackets(addresses: string[]): Promise<void> {
    const promises = addresses.map((address) => {
      return this.sendMagicPacket(address);
    });

    await Promise.all(promises);
  }

  private async sendMagicPacket(address: string): Promise<void> {
    try {
      await wol.wake(address);
      this.logger.log("Sent Magic Packet", address);
    } catch (error) {
      this.logger.error(`Error Sending Magic Packet`, error, address);
    }
  }
}
