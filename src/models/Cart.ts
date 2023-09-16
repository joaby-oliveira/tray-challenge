export interface Cart {
  email: string;
  name: string;
  phone: string;
  product_name: string;
  quantity: string;
  price: string;
  product_url: ProductUrl;
  product_image: ProductImage;
}

export interface ProductUrl {
  https: string;
}

export interface ProductImage {
  http: string;
  https: string;
}
