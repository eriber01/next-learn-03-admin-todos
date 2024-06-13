'use client'
import Image from "next/image"
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"
import { Product } from '../data/products';
import { Star } from "./Star";
import { addProductToCart, removeProductToCart } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

export const ProductCard = ({ id, name, price, image, rating }: Product) => {
  const route = useRouter()
  const onAddToCard = () => {
    addProductToCart(id)
    route.refresh()
  }

  const onRemoveToCard = () => {
    removeProductToCart(id)
    route.refresh()
  }

  return (
    <div className=" shadow rounded-lg max-w-sm bg-gray-800 border-gray-100">

      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={image}
          alt="product image" />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight text-white">{name}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">

          {/* Stars */}

          {
            Array(rating).fill(0).map((_, index) => (
              <Star key={index} />
            ))
          }
          {/* Rating Number */}
          <span className="bg-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded text-blue-800 ml-3">
            {rating.toFixed(2)}
          </span>
        </div>


        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${price}</span>

          <div className="flex">
            <button
              onClick={onAddToCard}
              className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800">
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onRemoveToCard}
              className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800">
              <IoTrashOutline size={20} />
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}