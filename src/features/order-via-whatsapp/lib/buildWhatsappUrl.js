import { storeConfig } from '../../../shared/config/storeConfig';

export function buildWhatsappMessage({ product, note } = {}) {
  const lines = [`مرحباً متجر ${storeConfig.name} 🌸`];

  if (product) {
    lines.push(`أرغب بطلب المنتج التالي:`);
    lines.push(`• الاسم: ${product.name}`);
    lines.push(`• الفئة: ${product.categories.join('، ')}`);
  } else {
    lines.push('أرغب بالاستفسار عن منتجاتكم وطلب هدية مخصصة.');
  }

  if (note) lines.push(note);
  lines.push('شكراً لكم.');

  return lines.join('\n');
}

export function buildWhatsappUrl({ product, note } = {}) {
  const message = buildWhatsappMessage({ product, note });
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
