import { PRODUCT_CATEGORIES } from '../../../entities/product/model/productsData';

const CATEGORY_ICONS = {
  'فناجين وماغات سيراميك': (
    <path d="M4 8h12v6a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm12 1h2a2.5 2.5 0 010 5h-2M7 4c0 1-1 1.2-1 2m4-2c0 1-1 1.2-1 2m4-2c0 1-1 1.2-1 2" />
  ),
  'شموع عطرية': (
    <path d="M12 3c1.8 2.2 3 3.8 3 5.5A3 3 0 0112 11.5 3 3 0 019 8.5C9 6.8 10.2 5.2 12 3zM8 13h8v4a4 4 0 01-8 0v-4zM12 21v-4" />
  ),
  'لوحات مزينة بالورد': (
    <path d="M12 8a3 3 0 100-6 3 3 0 000 6zm-7 9a3 3 0 100-6 3 3 0 000 6zm14 0a3 3 0 100-6 3 3 0 000 6zM9.5 9.5L7 11m7.5-1.5L17 11m-5 2v4" />
  ),
  'لوحات فنية': (
    <path d="M4 5h16v14H4V5zm3 9l3-3 3 3 3-4 3 3M7 8h.01" />
  ),
  'باقات ورد': (
    <path d="M12 13c-2-1.5-3-3-3-4.5A3 3 0 0112 5.5 3 3 0 0115 8.5c0 1.5-1 3-3 4.5zm0 0v8m0-4c-2 0-4-1-5-2.5M12 17c2 0 4-1 5-2.5" />
  ),
  'ستاندات محابس للخطوبة': (
    <path d="M9 13a5 5 0 110-10 5 5 0 010 10zm7.5 2a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM4 17.5L9 15m7 0l4 2.5M12 21v-4" />
  ),
  'تخرج ومناسبات': (
    <path d="M2 9l10-5 10 5-10 5-10-5zm4 3v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" />
  ),
};

export default function CategoriesBar() {
  return (
    <section id="categories" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-extrabold tracking-widest text-brand-gold-dark">
            أقسام المتجر
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
سبعة أقسام… لكل مناسبة هدية
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-brand-navy/60">
            تصفح أقسامنا المتخصصة واختر القسم المناسب، أو قم بالتمرير لاستعراض
            كامل المنتجات مع التصفية التفاعلية.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <a
              key={category}
              href="#catalog"
              className="group flex flex-col items-center gap-4 rounded-3xl border border-brand-navy/5 bg-brand-pearl p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/50 hover:shadow-glow"
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-gold-dark shadow-card transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-brand-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  {CATEGORY_ICONS[category]}
                </svg>
              </span>
              <span className="text-sm font-extrabold leading-6 text-brand-navy">
                {category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
