import { Cart } from "../models";
import { Env } from "../utils/Env";

export class MessageService {
  private token: string = Env.get("WHATSAPP_API_TOKEN");
  private url: string = Env.get("WHATSAPP_API_URL");

  public async sendMessage(cart: Cart) {
    const responseRaw = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify({
        phone: "+5514981010735",
        message: `Olá, ${cart.name}! Finalize sua compra do ${cart.product_name}. Total: ${cart.price}`,
      }),
      headers: {
        "Content-Type": "application/json",
        Token: this.token,
      },
    });

    const response = await responseRaw.json();
    return response;
  }
}
