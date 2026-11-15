import { ALL_FILTER, PRODUCT_CATEGORIES } from '../../../entities/product/model/productsData';

export default function CategoryFilter({ activeCategory, onChange }) {
  const tabs = [ALL_FILTER, ...PRODUCT_CATEGORIES];

  return (
    <div
      role="tablist"
      aria-label="تصفية المنتجات حسب الفئة"
      className="flex flex-wrap items-center justify-center gap-2.5"
    >
      {tabs.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95 ${
              isActive
                ? 'bg-brand-gold text-brand-navy shadow-glow'
                : 'bg-white text-brand-navy/70 shadow-card hover:bg-brand-navy hover:text-brand-pearl'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
