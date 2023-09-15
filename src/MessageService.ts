import { Env } from "./utils/Env";

export class MessageService {
  private token!: string;
  private url!: string;

  constructor(token: string, url: string) {
    this.token = token;
    this.url = url;
  }
  public async sendMessage() {
    const responseRaw = await fetch(Env.get("WHATSAPP_API_URL"), {
      method: "POST",
      body: JSON.stringify({
        phone: "+5514981010735",
        message: "Hello, World!",
      }),
      headers: {
        "Content-Type": "application/json",
        Token: Env.get("WHATSAPP_API_TOKEN"),
      },
    });

    const response = await responseRaw.json();
    return response;
  }
}
