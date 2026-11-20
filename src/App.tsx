import { useState } from 'react'
import { useSavedEvents } from './hooks/useSavedEvents'
import SavedDrawer from './components/events/SavedDrawer'
import { useEventFilters } from './hooks/useEventFilters'
import Filters from './components/events/Filters'
import eventsData from './data/events.json'
import type { EventItem } from './types/event'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import EventGrid from './components/events/EventGrid'

const events = eventsData as EventItem[]

export default function App() {
  const { filters, update, reset, results, months, priceLimit } = useEventFilters(events)
  const { savedIds, toggleSave } = useSavedEvents()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const savedEvents = events.filter((e) => savedIds.includes(e.id))

  return (
    <>
      <Header
        query={filters.query}
        onQueryChange={(value) => update({ query: value })}
        savedCount={savedIds.length}
        onOpenSaved={() => setDrawerOpen(true)}
      />
      <main id='top'>
        <Hero />
        <section id='events' className='mx-auto max-w-7xl scroll-mt-20 px-4 pb-20 sm:px-6'>
          <h2 className='font-display text-4xl font-bold mt-5'>Upcoming events</h2>
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
              <p className='py-16 text-center text-ink/60'>No events match your filters.</p>
            ) : (
              <EventGrid events={results} savedIds={savedIds} onToggleSave={toggleSave} />
            )}
          </div>
          <div className='mt-8'>
            <EventGrid events={results} savedIds={savedIds} onToggleSave={toggleSave} />
          </div>
        </section>
      </main>
      {drawerOpen && (
        <SavedDrawer
          events={savedEvents}
          onClose={() => setDrawerOpen(false)}
          onRemove={toggleSave}
        />
      )}
    </>
  )
}