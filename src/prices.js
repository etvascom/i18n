export const buildFormatPrice =
  i18nProvider =>
  (cents, currency = 'eur') =>
    Number(fromCents(cents)).toLocaleString(i18nProvider.language, {
      style: 'currency',
      currency: currency.toUpperCase(),
    })

const fromCents = cents => (cents / 100).toFixed(2)
