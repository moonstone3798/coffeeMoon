import ProductCard from "@/features/products/components/ProductCard"
import type { Product } from "@/features/products/types/product";
import styles from "@/features/products/styles/product.module.css";

interface ProductGridProps {
    products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div className={styles.gridProducts}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))  }
            
        </div>
    )
}
export default ProductGrid