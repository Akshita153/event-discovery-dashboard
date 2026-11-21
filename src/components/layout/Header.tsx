import { Heart, Moon, Search, Sun } from 'lucide-react'
import type { Theme } from '../../hooks/useTheme'
import Logo from './Logo'
import { motion } from 'framer-motion'

type Props = {
  query: string
  onQueryChange: (value: string) => void
  savedCount: number
  onOpenSaved: () => void
  theme: Theme
  onToggleTheme: () => void
}

const iconButton =
  'grid size-11 place-items-center rounded-full border border-ink/10 bg-card focus-visible:ring-2 focus-visible:ring-brand'

export default function Header({ query, onQueryChange, savedCount, onOpenSaved, theme, onToggleTheme }: Props) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='sticky top-0 z-30 border-b border-ink/10 bg-paper/80 backdrop-blur'
    >

      <div className='mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6'>
        <Logo />

        <div className='relative max-w-md flex-1'>
          <label htmlFor='search' className='sr-only'>
            Search events
          </label>
          <Search
            size={18}
            aria-hidden='true'
            className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50'
          />
          <input
            id='search'
            type='search'
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder='Search events...'
            className='w-full rounded-full border border-ink/10 bg-card py-2.5 pl-11 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand'
          />
        </div>

        <div className='flex gap-2'>
          <button
            type='button'
            aria-label={`Saved events (${savedCount})`}
            onClick={onOpenSaved}
            className={`${iconButton} relative cursor-pointer`}
          >
            <Heart size={20} />
            {savedCount > 0 && (
              <span className='absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-brand text-xs text-white'>
                {savedCount}
              </span>
            )}
          </button>
          <button
            type='button'
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={onToggleTheme}
            className={iconButton}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}