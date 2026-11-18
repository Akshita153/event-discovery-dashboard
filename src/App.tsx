import eventsData from './data/events.json'
import type { EventItem } from './types/event'
import EventCard from './components/events/EventCard'

const events = eventsData as EventItem[]

export default function App() {
  return (
    <main className='p-8'>
      <div className='grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </main>
  )
}