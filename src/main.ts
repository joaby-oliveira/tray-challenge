import * as dotenv from "dotenv";
dotenv.config();
import { scheduleJob } from "node-schedule";
import { Factory } from "./utils";

function bootstrap() {
  const mailService = Factory.makeEmailService();
  const cartService = Factory.makeCartService();

  scheduleJob("*/2 * * * *", async () => {
    const carts = await cartService.getCarts();

    if (carts.length > 0) {
      for (const cart of carts) {
        mailService.sendEmail({
          from: "ichacaramarketplace@gmail.com",
          to: cart.email,
          subject: "Ei, acho que você esqueceu de alguma coisa!",
          text: "",
        });
        const messageService = Factory.makeMessageService();
        const res = await messageService.sendMessage(cart);
        console.log(res);
      }
      return;
    }
    console.log("Nenhum carrinho encontrado");
  });
}

bootstrap();
