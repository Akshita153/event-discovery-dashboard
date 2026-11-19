import type { EventItem } from '../../types/event'
import EventCard from './EventCard'

export default function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {events.map((e) => (
        <li key={e.id}>
          <EventCard event={e} />
        </li>
      ))}
    </ul>
  )
}