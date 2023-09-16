import { Cart } from "../models/Cart";
import { Env } from "../utils/Env";

export class CartService {
  public url = Env.get("CART_API_URL");

  constructor() {}

  async getCarts(): Promise<Cart[]> {
    try {
      const responseRaw = await fetch(this.url, {
        method: "GET",
      });

      const response = await responseRaw.json();

      if (!response) {
        return [];
      }

      const carts: Cart[] = response.map((cart: { Cart: Cart }) => cart.Cart);

      return carts;
    } catch (error) {
      return [];
    }
  }
}
