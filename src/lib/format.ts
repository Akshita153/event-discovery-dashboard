export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  })

export const formatMonth = (yearMonth: string) =>
  new Date(`${yearMonth}-01`).toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

export const formatPrice = (price: number) =>
  price === 0 ? 'Free' : `₹${price.toLocaleString('en-IN')}`