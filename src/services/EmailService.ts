import nodemailer from "nodemailer";
import { Env } from "../utils/Env";

export class EmailService {
  private username: string = Env.get("MAIL_USERNAME");
  private pass: string = Env.get("MAIL_PASSWORD");
  private clientId: string = Env.get("OAUTH_CLIENTID");
  private clientSecret: string = Env.get("OAUTH_CLIENT_SECRET");
  private token: string = Env.get("OAUTH_REFRESH_TOKEN");

  public async sendMail() {
    let transporter = nodemailer.createTransport({
      host: "gmail",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: this.username,
        pass: this.pass,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        refreshToken: this.token
      },
      logger: true,
    });

    let mailOptions = {
      from: "ichacaramarketplace@gmail.com",
      to: "ichacaramarketplace@gmail.com",
      subject: "Ei fulano, acho que você esqueceu de alguma coisa!",
      text: "",
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  }
}
