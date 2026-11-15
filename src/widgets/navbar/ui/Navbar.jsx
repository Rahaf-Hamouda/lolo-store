import { useEffect, useState } from 'react';
import { storeConfig } from '../../../shared/config/storeConfig';
import BrandButton from '../../../shared/ui/BrandButton';
import { WhatsappIcon } from '../../../features/order-via-whatsapp/ui/WhatsappOrderButton';
import { buildWhatsappUrl } from '../../../features/order-via-whatsapp/lib/buildWhatsappUrl';

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'أقسامنا', href: '#categories' },
  { label: 'منتجاتنا', href: '#catalog' },
  { label: 'لماذا لؤلؤ؟', href: '#features' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-card backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={storeConfig.logo}
            alt={`شعار ${storeConfig.name}`}
            className="h-12 w-12 rounded-full object-cover shadow-card ring-2 ring-brand-gold/60"
          />
          <span className="leading-tight">
            <span className="block text-xl font-extrabold text-brand-navy">
              {storeConfig.name}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-brand-navy/75 transition-colors hover:text-brand-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BrandButton
            href={buildWhatsappUrl({})}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            size="sm"
          >
            <WhatsappIcon className="h-4 w-4" />
            اطلب الآن
          </BrandButton>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="فتح القائمة"
          aria-expanded={isMenuOpen}
          className="rounded-xl p-2 text-brand-navy transition-colors hover:bg-brand-pearl lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-brand-navy/10 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="قائمة الجوال">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-brand-navy/80 transition-colors hover:bg-brand-pearl hover:text-brand-gold-dark"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-4">
              <BrandButton
                href={buildWhatsappUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                <WhatsappIcon className="h-4 w-4" />
                اطلب عبر واتساب
              </BrandButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
