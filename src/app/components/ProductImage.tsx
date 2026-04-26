'use client';
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "../types/ProductType";
import Loading from "./Loading";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage({ product, fill }: ProductImageProps) {

    const [loading, setLoading] = useState(true);

    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.name}
            className={`object-contain mb-4 ${loading ? 'blur-2xl scale-110'  : 'blur-0'
                }`}
            onLoadingComplete={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image}
            width={100}
            alt={product.name}
            className={`object-contain mb-4 ${loading ? 'blur-sm animate-pulse' : 'blur-0'
                }`}
            onLoadingComplete={() => setLoading(false)}
        />
    )

}
