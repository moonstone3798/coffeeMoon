import './App.css';
import { lazy, Suspense } from 'react';

const HeroSection = lazy(
  () => import('@/features/hero/components/HeroSection'),
);
const ProductSection = lazy(
  () => import('@/features/products/components/ProductSection'),
);
import Header from '@/shared/components/header/Header';
import LoadingSection from '@/shared/components/loading/LoadingSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoadingSection />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <ProductSection />
        </Suspense>
      </main>
    </>
  );
}

export default App;
