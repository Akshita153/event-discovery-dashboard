export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })

export const formatPrice = (price: number) =>
  price === 0 ? 'Free' : `₹${price.toLocaleString('en-IN')}`