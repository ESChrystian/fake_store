'use client'
import { useCartStore } from "@/src/store";
import { ProductType } from "../types/ProductType"


export default function Button({ product }: { product: ProductType }) {
    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product)}
            className="bg-green-600 w-full text-sm font-light text-white px-2 py-2 rounded hover:bg-green-700 transition-colors duration-300 cursor-pointer">
            Adicionar ao carrinho
        </button>
    )
}