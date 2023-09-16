import nodemailer from "nodemailer";
import { Env } from "../utils/Env";

export class EmailService {
  private username: string = Env.get("MAIL_USERNAME");
  private pass: string = Env.get("MAIL_PASSWORD");
  private transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: this.username,
      pass: this.pass,
    },
  });

  sendEmail(mailOptions: {
    from: string;
    to: string;
    subject: string;
    text: string;
  }) {
    return this.transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Erro: " + err);
        return;
      }
      console.log("Email enviado com sucesso");
    });
  }
}
