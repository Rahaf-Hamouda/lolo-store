const FEATURES = [
  {
    title: 'عجينة سيراميك يدوية 100%',
    description:
      'كل فنجان وماغ يُزخرف يدوياً بعجينة السيراميك عالية الجودة التي تحفظ تفاصيل الورد والفراشات وتدوم مع الاستخدام اليومي.',
    icon: (
      <path d="M7 11.5V6a2 2 0 114 0v5m0-2a2 2 0 114 0v2m0-1a2 2 0 114 0v4a7 7 0 01-7 7h-1a7 7 0 01-7-7v-2a2 2 0 114 0M12 2v2" />
    ),
  },
  {
    title: 'تخصيص كامل بالأسماء والألوان',
    description:
      'اختر الاسم، اللون، الورد، والعبارة — ننفذ تصميمك الخاص ليناسب ذوقك وذوق من تهديه، قطعة لا تتكرر.',
    icon: (
      <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    ),
  },
  {
    title: 'تغليف هدايا فاخر',
    description:
      'كل طلب يصل بتغليف أنيق يليق بالمناسبة — علب بشرائط، بطاقات إهداء مكتوبة بخط جميل، وتجهيز كامل للتسليم.',
    icon: (
      <path d="M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0H3m18 0l1.5-3.5a1 1 0 00-.9-1.5H15c-1.5 0-2.5.8-3 2-.5-1.2-1.5-2-3-2H2.4a1 1 0 00-.9 1.5L3 8m9-4v20M12 8s-1-3-4-3" />
    ),
  },
  {
    title: 'توصيل داخل دمشق وحجز مسبق',
    description:
      'نوصل طلبك داخل دمشق بعناية، ونستقبل الطلبات المسبقة للمناسبات والمواسم لضمان وصول هديتك في وقتها.',
    icon: (
      <path d="M3 7h11v10H3V7zm11 3h4l3 3v4h-7v-7zM7 20a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-extrabold tracking-widest text-brand-gold">
            وعد لؤلؤ
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-pearl sm:text-4xl">
            لماذا يختارنا أهل الذوق؟
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/50 hover:bg-white/10"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-brand-navy transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className="text-lg font-extrabold text-brand-pearl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-pearl/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
