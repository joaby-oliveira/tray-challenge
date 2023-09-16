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
        message: `
        Ei, {{ contact.name || psiu }}! 
        Acho que você esqueceu de alguma coisa...
        \n\nNão acredito que você deixou escapar esses produtos no seu carrinho 👌😭.
        \n\nVamos te dar um descontinho especial por eles, mas tem que ser até o dia !
        \n\nSegue a lista dos produtos selecionados por você:
        \n\n👉 ${cart.product_name} - ${cart.price} - ${cart.product_url.https}
        `,
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
