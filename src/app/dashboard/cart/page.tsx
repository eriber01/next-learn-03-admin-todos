import { Product, products } from "@/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";


export const metadata = {
  title: 'Carrito de compras',
  description: 'SEO Title',
};

interface ProductInCart {
  product: Product
  quantity: number
}

const getProductInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productInCart: ProductInCart[] = []

  for (const id of Object.keys(cart)) {
    const product = products.find(item => item.id === id)

    if (product) {
      productInCart.push({ product, quantity: cart[id] })
    }
  }

  return productInCart
}

export default function CartPage() {
  const cookiesStore = cookies()

  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}')
  const productInCart = getProductInCart(cart)

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productInCart.map(({ product, quantity }, index) => (
              <ItemCard product={product} quantity={quantity} key={index} />
            ))
          }
        </div>
        <div className="flex flex-col w-full sm:w-4/12">

        </div>
      </div>
    </div>
  );
}