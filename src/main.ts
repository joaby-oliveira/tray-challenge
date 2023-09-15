import * as dotenv from "dotenv";
import { Env } from "./Env";
dotenv.config();

async function sendMessage() {
  const responseRaw = await fetch(Env.get("WHATSAPP_API_TOKEN"), {
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

  console.log(response);
}

sendMessage();
