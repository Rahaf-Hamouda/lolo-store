import Navbar from '../../../widgets/navbar/ui/Navbar';
import HeroSection from '../../../widgets/hero/ui/HeroSection';
import CategoriesBar from '../../../widgets/categories-showcase/ui/CategoriesBar';
import FeaturesSection from '../../../widgets/features-list/ui/FeaturesSection';
import ProductCatalog from '../../../widgets/product-catalog/ui/ProductCatalog';
import Footer from '../../../widgets/footer/ui/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-pearl font-tajawal">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesBar />
        <FeaturesSection />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}
