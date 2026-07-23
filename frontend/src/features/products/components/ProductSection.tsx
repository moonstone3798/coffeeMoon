import EmptyState from '@/features/products/components/EmptyState';
import LoadingState from '@/features/products/components/LoadingState';
import ProductGrid from '@/features/products/components/ProductGrid';
import styles from '../styles/product.module.css';
const ProductSection = () => {
  return (
    <section id="products" className={styles.products}>
      <h2>Nuestros productos</h2>
      <ProductGrid products={[]} />
      <EmptyState />
      <LoadingState />
    </section>
  );
};
export default ProductSection;
