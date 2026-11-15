import { storeConfig } from '../../../shared/config/storeConfig';
import BrandButton from '../../../shared/ui/BrandButton';
import { WhatsappIcon } from '../../../features/order-via-whatsapp/ui/WhatsappOrderButton';
import { buildWhatsappUrl } from '../../../features/order-via-whatsapp/lib/buildWhatsappUrl';

const STATS = [
  { value: '100%', label: 'صناعة يدوية' },
  { value: '+500', label: 'هدية سعيدة' },
  { value: '7', label: 'أقسام متخصصة' },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-pearl">
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-blush blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:pt-40">
        <div className="space-y-7 text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/70 px-4 py-1.5 text-sm font-bold text-brand-gold-dark">
            <span className="h-2 w-2 rounded-full bg-brand-gold" />
            صناعة يدوية بحب في {storeConfig.city}
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.3] text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            هدايا تُروى كاللؤلؤ…
            <span className="mt-2 block text-brand-gold-dark">
              تُصنع يدوياً لتبقى ذكرى
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-9 text-brand-navy/70 lg:mx-0">
            {storeConfig.name} متجر متخصص بالفنون اليدوية: فناجين وماغات مزخرفة
            بعجينة السيراميك، شموع عطرية فواحة، لوحات فنية مزينة بالورد، وباقات
            وهدايا تخرج ومناسبات — كل قطعة تُصنع يدوياً وتُخصص باسم من تحب.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <BrandButton href="#catalog" variant="primary" size="lg">
              تصفح المنتجات
            </BrandButton>
            <BrandButton
              href={buildWhatsappUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <WhatsappIcon />
              اطلب عبر واتساب
            </BrandButton>
          </div>

          <dl className="flex items-center justify-center gap-10 pt-4 lg:justify-start">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-extrabold text-brand-gold-dark">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm font-bold text-brand-navy/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-brand-gold/40 to-brand-blush"
          />
          <div className="relative rotate-2 overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:rotate-0">
            <img
              src="/assets/products/crystal-champagne-set.jpg"
              alt="كاسات كريستال مزينة يدوياً من لؤلؤ"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3 shadow-card backdrop-blur">
            <img
              src={storeConfig.logo}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-brand-navy">
                {storeConfig.name}
              </p>
              <p className="text-xs font-bold text-brand-gold-dark">
                {storeConfig.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
