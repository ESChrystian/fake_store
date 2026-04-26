'use client'

import { useCartStore } from "@/src/store";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
    const useStore = useCartStore();

    return (

        <>
            <div
                onClick={() => useStore.toggleCart()}
                className="flex items-center gap-1 cursor-pointer relative">
                <ShoppingCart size={20} />
                <span className="bg-orange-700 text-[0.7rem] font-extralight rounded-full h-4 w-4 text-center text-white
                            flex items-center justify-center
                            absolute left-3 bottom-3">
                    2
                </span>
            </div>


            {/* Painel do carrinho */}

            {
                useStore.isOpen && (
                    <div
                        onClick={() => useStore.toggleCart()}
                        className="fixed left-0 top-0 w-full h-full bg-black/25 shadow-lg p-4 z-50">
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute bg-[#fdf9ef] right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll text-black">
                            <h1>Meu Carrinho</h1>

                            {
                                useStore.cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 mb-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                        <div>
                                            <h2 className="font-bold">{item.name}</h2>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                )
            }
        </>


    )

}