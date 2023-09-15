import * as dotenv from "dotenv";
dotenv.config();

async function sendMessage() {
  console.log(process.env.WHATSAPP_API_URL)
  console.log(process.env.WHATSAPP_API_TOKEN)
  const responseRaw = await fetch(process.env.WHATSAPP_API_URL ?? "", {
    method: "POST",
    body: JSON.stringify({
      phone: "+5514981010735",
      message: "Hello, World!",
    }),
    headers: {
      "Content-Type": "application/json",
      Token: process.env.WHATSAPP_API_TOKEN ?? "",
    },
  });

  const response = await responseRaw.json();

  console.log(response);
}

sendMessage()
