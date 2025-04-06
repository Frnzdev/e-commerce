import { ProductType } from "@/types/ProductType";
import Image from "next/image";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const product = await getProducts();
  console.log(product);
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 xl:gap-6">
        {product.map((product: ProductType) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}
