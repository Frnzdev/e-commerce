import AddCart from "@/app/components/addCart";
import Product from "@/app/components/addCart";

import ProductImage from "@/app/components/ProductImage";
import { formatPrice } from "@/lib/utils";
import Stripe from "stripe";

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-03-31.basil",
  });
  const produto = await stripe.products.retrieve(id);
  const price = await stripe.prices.list({
    product: produto.id,
  });
  return {
    id: produto.id,
    price: price.data[0].unit_amount,
    name: produto.name,
    description: produto.description,
    currency: price.data[0].currency,
    image: produto.images[0] || "", // Assuming the first image is used
  };
}

export default async function ProductsPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-10">
      <ProductImage product={product} />
      <div className="flex flex-col">
        <div className="pb-4">
          <h1 className="text-2xl text-gray-300 font-bold ">
            {product.name}
            <h2 className="text-xl text-teal-600 font-bold">
              {formatPrice(product.price)}
            </h2>
          </h1>
        </div>
        <div className="pb-4 ">
          <p className="text-sm">{product.description}</p>
        </div>
        <AddCart product={product} />
      </div>
    </div>
  );
}
