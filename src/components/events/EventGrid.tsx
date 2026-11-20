import type { EventItem } from '../../types/event'
import EventCard from './EventCard'

type Props = {
  events: EventItem[]
  savedIds: number[]
  onToggleSave: (id: number) => void
}

export default function EventGrid({ events, savedIds, onToggleSave }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {events.map((e) => (
        <li key={e.id}>
          <EventCard
            event={e}
            saved={savedIds.includes(e.id)}
            onToggleSave={onToggleSave}
          />
        </li>
      ))}
    </ul>
  )
}