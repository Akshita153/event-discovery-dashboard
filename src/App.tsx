import eventsData from './data/events.json'
import type { EventItem } from './types/event'
import EventCard from './components/events/EventCard'

const events = eventsData as EventItem[]

export default function App() {
  return (
    <main className='p-8'>
      <div className='grid max-w-3xl grid-cols-2 gap-6'>
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </main>
  )
}