import { useEffect, useState } from 'react';
import WhatsappOrderButton from '../../order-via-whatsapp/ui/WhatsappOrderButton';

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ProductModal({ product, onClose }) {
  const gallery = product?.images ?? (product ? [product.image] : []);
  const [activeImage, setActiveImage] = useState(gallery[0]);

  useEffect(() => {
    setActiveImage(product ? (product.images?.[0] ?? product.image) : undefined);
  }, [product]);

  useEffect(() => {
    if (!product) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-navy-dark/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-3xl bg-white shadow-2xl md:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute left-4 top-4 z-10 rounded-full bg-white/90 p-2 text-brand-navy shadow-card transition-transform hover:scale-105"
        >
          <CloseIcon />
        </button>

        <div className="bg-brand-pearl p-4 md:p-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={activeImage}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-2">
              {gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(src)}
                  aria-label="عرض صورة أخرى"
                  className={`overflow-hidden rounded-xl border-2 transition-all ${
                    src === activeImage
                      ? 'border-brand-gold'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="h-16 w-16 object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-brand-blush px-3 py-1 text-xs font-bold text-brand-navy"
              >
                {category}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-brand-navy">{product.name}</h3>
          <p className="leading-8 text-brand-navy/70">{product.description}</p>

          <div className="mt-auto space-y-4 border-t border-brand-navy/10 pt-4">
            <WhatsappOrderButton product={product} size="lg" />
            <p className="text-center text-xs text-brand-navy/50">
              يمكن تخصيص الاسم والألوان والتفاصيل عند الطلب — راسلنا على واتساب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
