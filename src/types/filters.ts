import type { Category } from './event'

export type CategoryFilter = 'All' | Category

export type Filters = {
  query: string
  category: CategoryFilter
  month: string // 'any' or '2026-12'
  maxPrice: number
  freeOnly: boolean
}