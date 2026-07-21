import ProductCard from "@/features/products/components/ProductCard"
import type { Product } from "@/features/products/types/product";

interface ProductGridProps {
    products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))  }
            
        </div>
    )
}
export default ProductGrid