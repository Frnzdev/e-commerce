export type ProductType = {
  id: string;
  price: number | null;
  name: string;
  quntity?: number | 1;
  image: string;
  description: string | null;
  currency?: string;
};
