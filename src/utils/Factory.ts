import { CartService, MessageService } from "../services";

export class Factory {
  public static makeMessageService() {
    return new MessageService();
  }
  public static makeCartService() {
    return new CartService();
  }
}
