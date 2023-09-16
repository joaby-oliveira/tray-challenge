import { CartService, MessageService, EmailService } from "../services";

export class Factory {
  public static makeEmailService() {
    return new EmailService();
  }
  
  public static makeMessageService() {
    return new MessageService();
  }
  public static makeCartService() {
    return new CartService();
  }
}
