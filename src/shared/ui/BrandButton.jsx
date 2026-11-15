const variants = {
  primary:
    'bg-brand-gold text-brand-navy hover:bg-brand-gold-light focus-visible:ring-brand-gold',
  dark: 'bg-brand-navy text-brand-pearl hover:bg-brand-navy-dark focus-visible:ring-brand-navy',
  outline:
    'border-2 border-brand-gold text-brand-navy hover:bg-brand-gold hover:text-brand-navy focus-visible:ring-brand-gold',
  ghost:
    'bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:ring-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function BrandButton({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
