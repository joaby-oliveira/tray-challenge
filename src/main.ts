import * as dotenv from "dotenv";
dotenv.config();
import { scheduleJob } from "node-schedule";
import { CartService } from "./services/CartService";

function bootstrap() {
  scheduleJob("*/30 * * * * *", async () => {
    const cartService = new CartService();

    const carts = await cartService.getCarts();

    if(carts.length > 0) {
      console.log("Carrinhos encontrados...", carts);
      return 
    }
    console.log("Nenhum carrinho encontrado");
  });
}

bootstrap();
