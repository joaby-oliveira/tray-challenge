import * as dotenv from "dotenv";
dotenv.config();
import { scheduleJob } from "node-schedule";
import { CartService } from "./services/CartService";
import { Factory } from "./utils";

function bootstrap() {
  scheduleJob("*/30 * * * * *", async () => {
    const cartService = Factory.makeCartService();

    const carts = await cartService.getCarts();

    if (carts.length > 0) {
      for (const cart of carts) {
        const messageService = Factory.makeMessageService();
        const res = await messageService.sendMessage(cart);
        console.log(res)
      }
      return;
    }
    console.log("Nenhum carrinho encontrado");
  });
}

bootstrap();
