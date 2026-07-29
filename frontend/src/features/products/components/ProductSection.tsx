"use client";
import EmptyState from '@/features/products/components/EmptyState';
import LoadingState from '@/features/products/components/LoadingState';
import ProductGrid from '@/features/products/components/ProductGrid';
import styles from '../styles/product.module.css';
import useProducts from '../hooks/useProducts';
const ProductSection = () => {
  const { products, loading, error } = useProducts();
  return (
    <section id="products" className={styles.products}>
      <h2>Nuestros productos</h2>
    
      {loading ? <LoadingState  /> :
      error ? <p>{error}</p> : 
      products.length === 0 ? <EmptyState /> :  <ProductGrid products={products} />
      }
      
    </section>
  );
};
export default ProductSection;
