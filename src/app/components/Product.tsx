import { ProductType } from "../types/ProductType"
import  ProductImage  from "./ProductImage"
import { Star } from "lucide-react"
import { formatPrice } from "@/src/lib/utils"

type ProductProps = {
    product: ProductType

}
export default function Product({ product }: ProductProps) {
    return (
        <div className="bg-white flex flex-col justify-start px-4 py-4 rounded-2xl shadow-lg">
            <div className="flex items-center justify-start gap-1 mb-2">
                <Star size={20} />
                <span className="text-green-950 font-bold ">{product.currency}</span>
            </div>
            <div className="relative flex items-center justify-center h-64 w-full p-10  mb-4 ">
                <div className="absolute h-full w-full bg-green-200 rounded-[25px_25px_0px_25px] z-0
                before:h-[40px] before:w-[40px] before:bottom-[-40px] before:absolute before:bg-green-200 before:right-[0px]
                after:h-[40px] after:w-[40px] after:bottom-[-40px] after:absolute after:bg-white after:right-[-0px] after:rounded-[0px_25px_0px_0px]
                "></div>
                <div className="relative z-10 h-full w-full">
                    <ProductImage product={product} fill />
                </div>

            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-center px-10 mb-4">
                    <h2 className="text-lg text-center font-semibold md:text-[1rem]">{product.name}</h2>
                </div>
                <div className="flex items-center justify-center mb-10">
                    <h2 className="text-sm text-justify line-clamp-4">{product.description}</h2>
                </div>

                <div className="flex-col flex items-center justify-between gap-4 lg:flex-row">
                    <div className="flex items-center justify-start">
                        <p className="text-xl text-green-950 font-bold">{formatPrice(product.price)}</p>
                    </div>

                    <button className="bg-green-600 w-full text-sm font-light text-white px-2 py-2 rounded hover:bg-green-700 transition-colors duration-300 cursor-pointer">
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>

        </div>

    )
}