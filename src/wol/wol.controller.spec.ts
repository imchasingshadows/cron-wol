import { Test, TestingModule } from "@nestjs/testing";
import { WolController } from "./wol.controller";

describe("WolController", () => {
  let controller: WolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WolController],
    }).compile();

    controller = module.get<WolController>(WolController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
