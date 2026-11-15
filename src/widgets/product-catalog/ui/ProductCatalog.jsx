import { useMemo, useState } from 'react';
import { ALL_FILTER, filterProductsByCategory } from '../../../entities/product/model/productsData';
import ProductCard from '../../../entities/product/ui/ProductCard';
import CategoryFilter from '../../../features/filter-products/ui/CategoryFilter';
import ProductModal from '../../../features/product-quick-view/ui/ProductModal';
import WhatsappOrderButton from '../../../features/order-via-whatsapp/ui/WhatsappOrderButton';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const visibleProducts = useMemo(
    () => filterProductsByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <section id="catalog" className="bg-brand-pearl py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-extrabold tracking-widest text-brand-gold-dark">
            المنتجات
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
            قطعنا اليدوية
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-brand-navy/60">
            اضغط على أي منتج لعرض تفاصيله عن قرب، ثم اطلبه مباشرة عبر واتساب
            مع إمكانية تخصيصه بالكامل.
          </p>
        </div>

        <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />

        <p className="mt-6 text-center text-sm font-bold text-brand-navy/50" aria-live="polite">
          {visibleProducts.length === 0
            ? 'قريباً — نجهز لكم تشكيلة جديدة في هذا القسم'
            : `${visibleProducts.length} ${visibleProducts.length === 1 ? 'منتج' : 'منتجات'}`}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setSelectedProduct}
              actionSlot={<WhatsappOrderButton product={product} size="sm" />}
            />
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <div className="mx-auto mt-8 max-w-md rounded-3xl bg-white p-10 text-center shadow-card">
            <p className="text-5xl font-extrabold text-brand-gold/40">قريباً</p>
            <p className="mt-4 leading-8 text-brand-navy/60">
              نعمل حالياً على إضافة منتجات جديدة في قسم «{activeCategory}».
              تابعونا على إنستغرام أو راسلونا على واتساب للاستفسار.
            </p>
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
