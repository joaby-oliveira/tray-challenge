import * as dotenv from "dotenv";
<<<<<<< HEAD
import { Env } from "./utils/Env";
dotenv.config();

async function sendMessage() {
  const responseRaw = await fetch(Env.get("WHATSAPP_API_URL"), {
=======
import { Env } from "./Env";
dotenv.config();

async function sendMessage() {
  const responseRaw = await fetch(Env.get("WHATSAPP_API_TOKEN"), {
>>>>>>> b854dfc83da6f08e563b3c55912a0fa4c70dfdae
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
