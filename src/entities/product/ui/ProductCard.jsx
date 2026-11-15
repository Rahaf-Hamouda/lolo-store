export default function ProductCard({ product, onQuickView, actionSlot }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
      <button
        type="button"
        onClick={() => onQuickView?.(product)}
        className="relative block w-full cursor-pointer overflow-hidden text-right"
        aria-label={`عرض تفاصيل ${product.name}`}
      >
        <div className="aspect-[4/5] w-full overflow-hidden bg-brand-pearl">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-brand-navy/85 px-3 py-1 text-xs font-bold text-brand-pearl backdrop-blur">
          {product.categories[0]}
        </span>
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-navy">
            جديد
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-brand-navy">{product.name}</h3>
        <p className="line-clamp-2 flex-1 text-sm leading-6 text-brand-navy/65">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-end">
          <button
            type="button"
            onClick={() => onQuickView?.(product)}
            className="text-sm font-bold text-brand-navy/60 underline-offset-4 transition-colors hover:text-brand-gold-dark hover:underline"
          >
            عرض التفاصيل
          </button>
        </div>
        {actionSlot && <div className="mt-3">{actionSlot}</div>}
      </div>
    </article>
  );
}
