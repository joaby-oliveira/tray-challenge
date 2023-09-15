import * as dotenv from "dotenv";
dotenv.config();
import { scheduleJob } from "node-schedule";

function bootstrap() {
  scheduleJob("*/5 * * * * *", () => {});
}

bootstrap();
