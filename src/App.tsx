import { useState } from 'react'
import eventsData from './data/events.json'
import type { EventItem } from './types/event'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import EventGrid from './components/events/EventGrid'

const events = eventsData as EventItem[]

export default function App() {
  const [query, setQuery] = useState('')

  const visible = events.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />
      <main id='top'>
        <Hero />
        <section id='events' className='mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6'>
          <h2 className='font-display text-4xl font-bold'>Upcoming events</h2>
          <p className='mt-2 text-ink/60'>
            Showing {visible.length} of {events.length}
          </p>
          <div className='mt-8'>
            <EventGrid events={visible} />
          </div>
        </section>
      </main>
    </>
  )
}