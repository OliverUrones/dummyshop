export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]
  favourite: false,
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
