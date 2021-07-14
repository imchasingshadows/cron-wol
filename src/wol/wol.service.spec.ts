import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { Test, TestingModule } from "@nestjs/testing";
import { WolService } from "./wol.service";

describe("WolService", () => {
  let service: WolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, ScheduleModule.forRoot()],
      providers: [WolService],
    }).compile();

    service = module.get<WolService>(WolService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
