
import { ProductType } from "./types/ProductType";
import Product from "./components/Product";
import Stripe from "stripe";
async function getData(): Promise<ProductType[]> {

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-04-22.dahlia",
  });
  
  const products = await stripe.products.list();
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
  
      });
      return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        quantity: 1,
        image: product.images[0],
        currency: price.data[0].currency,
        description: product.description || null,
      }
    })
  )
  return formatedProducts;
}


export default async function Home() {

  const products = await getData();
  console.log(products)

  return (
    <div className="container mx-auto text-black pt-4 px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
