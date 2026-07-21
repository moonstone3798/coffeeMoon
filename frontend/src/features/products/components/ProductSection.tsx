import EmptyState from '@/features/products/components/EmptyState';
import LoadingState from '@/features/products/components/LoadingState';
import ProductGrid from '@/features/products/components/ProductGrid';

const ProductSection = () => {
  return (
    <section id="products">
      <h2>Nuestros productos</h2>
      <ProductGrid products={[]} />
      <EmptyState />
      <LoadingState />
    </section>
  );
};
export default ProductSection;
