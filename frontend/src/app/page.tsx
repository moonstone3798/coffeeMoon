import AboutSection from '@/features/about/components/AboutSection';
import ContactSection from '@/features/contact/components/ContactSection';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/features/hero/components/HeroSection'),
);

const ProductSection = dynamic(
  () => import('@/features/products/components/ProductSection'),
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </main>
  );
}
