import { Hero } from '@/components/hero';
import { ProductProjects } from '@/components/product-projects';
import { GraphicDesign } from '@/components/graphic-design';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductProjects />
      <GraphicDesign />
      <Footer />
    </>
  );
}
