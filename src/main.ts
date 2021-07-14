import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import * as expressBasicAuth from "express-basic-auth";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cs = app.get(ConfigService);
  app.use(
    expressBasicAuth({
      challenge: true,
      users: {
        [cs.get("APP_USERNAME")]: cs.get("APP_PASSWORD"),
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
