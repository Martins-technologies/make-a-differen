export function formatDate(value, locale = 'en-CA') {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}

export function formatCurrency(amount, currency = 'CAD', locale = 'en-CA') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
