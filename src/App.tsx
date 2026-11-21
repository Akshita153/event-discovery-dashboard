import { useState } from 'react'
import eventsData from './data/events.json'
import type { EventItem } from './types/event'
import { useEventFilters } from './hooks/useEventFilters'
import { useSavedEvents } from './hooks/useSavedEvents'
import { useTheme } from './hooks/useTheme'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import Filters from './components/events/Filters'
import EventGrid from './components/events/EventGrid'
import SavedDrawer from './components/events/SavedDrawer'
import EmptyState from './components/ui/EmptyState'
import { AnimatePresence } from 'framer-motion'

const events = eventsData as EventItem[]

export default function App() {
  const { filters, update, reset, results, months, priceLimit } = useEventFilters(events)
  const { savedIds, toggleSave } = useSavedEvents()
  const { theme, toggleTheme } = useTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const savedEvents = events.filter((e) => savedIds.includes(e.id))

  return (
    <>
      <Header
        query={filters.query}
        onQueryChange={(value) => update({ query: value })}
        savedCount={savedIds.length}
        onOpenSaved={() => setDrawerOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id='top'>
        <Hero />

        <section id='events' className='mx-auto max-w-7xl scroll-mt-20 px-4 pb-20 sm:px-6'>
          <h2 className='mt-5 font-display text-4xl font-bold'>Upcoming events</h2>
          <p className='mt-2 text-ink/60'>
            Showing {results.length} of {events.length}
          </p>

          <div className='mt-8'>
            <Filters
              filters={filters}
              months={months}
              priceLimit={priceLimit}
              onChange={update}
              onReset={reset}
            />
          </div>

          <div className='mt-8'>
            {results.length === 0 ? (
              <EmptyState
                title='No events match'
                message='Try a different search or loosen the filters.'
              >
                <button
                  type='button'
                  onClick={reset}
                  className='rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
                >
                  Reset filters
                </button>
              </EmptyState>
            ) : (
              <EventGrid events={results} savedIds={savedIds} onToggleSave={toggleSave} />
            )}
          </div>
        </section>
      </main>

      <AnimatePresence>
  {drawerOpen && (
    <SavedDrawer
      events={savedEvents}
      onClose={() => setDrawerOpen(false)}
      onRemove={toggleSave}
    />
  )}
</AnimatePresence>
    </>
  )
}