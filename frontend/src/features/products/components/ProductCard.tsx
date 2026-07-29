import type { Product } from "@/features/products/types/product"
import CardComponent from "@/shared/components/card/CardComponent"

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <CardComponent
            imageUrl={`/images/${product.imageUrl}`}
            title={product.name}
            description={product.description}
            price={product.price}
        />
    )
}

export default ProductCard