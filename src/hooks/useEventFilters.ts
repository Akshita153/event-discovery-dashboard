import { useState } from 'react'
import type { EventItem } from '../types/event'
import type { Filters } from '../types/filters'

export function useEventFilters(events: EventItem[]) {
  
  const priceLimit = Math.ceil(Math.max(...events.map((e) => e.price)) / 100) * 100

  const initial: Filters = {
    query: '',
    category: 'All',
    month: 'any',
    maxPrice: priceLimit,
    freeOnly: false,
  }

  const [filters, setFilters] = useState<Filters>(initial)

  const update = (changes: Partial<Filters>) =>
    setFilters((prev) => ({ ...prev, ...changes }))

  const reset = () => setFilters(initial)

  
  const months = [...new Set(events.map((e) => e.date.slice(0, 7)))].sort()

  const q = filters.query.trim().toLowerCase()

  const results = events.filter((e) => {
    const matchesQuery =
      e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)
    const matchesCategory = filters.category === 'All' || e.category === filters.category
    const matchesMonth = filters.month === 'any' || e.date.startsWith(filters.month)
    const matchesPrice = e.price <= filters.maxPrice
    const matchesFree = !filters.freeOnly || e.price === 0
    return matchesQuery && matchesCategory && matchesMonth && matchesPrice && matchesFree
  })

  return { filters, update, reset, results, months, priceLimit }
}