import type { Category } from './event'

export type CategoryFilter = 'All' | Category

export type Filters = {
  query: string
  category: CategoryFilter
  month: string 
  maxPrice: number
  freeOnly: boolean
}