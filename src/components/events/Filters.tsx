import type { CategoryFilter, Filters as FiltersState } from '../../types/filters'
import { formatMonth } from '../../lib/format'
import Toggle from '../ui/Toggle'

const CATEGORIES: CategoryFilter[] = ['All', 'Music', 'Tech', 'Nightlife', 'Food', 'Sports', 'Art']

type Props = {
  filters: FiltersState
  months: string[]
  priceLimit: number
  onChange: (changes: Partial<FiltersState>) => void
  onReset: () => void
}

const labelStyle = 'text-xs font-medium uppercase tracking-widest text-ink/60'

export default function Filters({ filters, months, priceLimit, onChange, onReset }: Props) {
  return (
    <section aria-label='Filters' className='rounded-3xl bg-card p-6 shadow-sm ring-1 ring-ink/5'>
      <fieldset>
        <legend className={labelStyle}>Category</legend>
        <div className='mt-3 flex flex-wrap gap-2'>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type='button'
              aria-pressed={filters.category === c}
              onClick={() => onChange({ category: c })}
              className={`rounded-full px-5 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand ${
                filters.category === c ? 'bg-brand text-white' : 'bg-ink/5 hover:bg-ink/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </fieldset>

      <div className='mt-6 grid items-end gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]'>
        <div>
          <label htmlFor='month' className={labelStyle}>
            Date
          </label>
          <div className='relative mt-3'>
            <select
              id='month'
              value={filters.month}
              onChange={(e) => onChange({ month: e.target.value })}
              className='w-full appearance-none rounded-full border border-ink/10 bg-card py-3 pl-4 pr-10 text-sm focus-visible:ring-2 focus-visible:ring-brand'
            >
              <option value='any'>Any date</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {formatMonth(m)}
                </option>
              ))}
            </select>
            <svg
              aria-hidden='true'
              viewBox='0 0 20 20'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.75'
              className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/60'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 8l4 4 4-4' />
            </svg>
          </div>
        </div>

        <div>
          <div className='flex justify-between'>
            <label htmlFor='price' className={labelStyle}>
              Max price
            </label>
            <span className='text-sm font-medium'>₹{filters.maxPrice.toLocaleString('en-IN')}</span>
          </div>
          <input
            id='price'
            type='range'
            min={0}
            max={priceLimit}
            step={100}
            value={filters.maxPrice}
            onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
            className='mt-4 w-full accent-brand'
          />
        </div>

        <div className='flex items-center gap-6'>
          <Toggle
            checked={filters.freeOnly}
            onChange={(value) => onChange({ freeOnly: value })}
            label='Free only'
          />
          <button
            type='button'
            onClick={onReset}
            className='text-sm text-ink/60 hover:text-ink focus-visible:ring-2 focus-visible:ring-brand'
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}