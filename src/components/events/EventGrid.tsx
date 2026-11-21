import type { EventItem } from '../../types/event'
import EventCard from './EventCard'
import { motion } from 'framer-motion'

type Props = {
  events: EventItem[]
  savedIds: number[]
  onToggleSave: (id: number) => void
}

export default function EventGrid({ events, savedIds, onToggleSave }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {events.map((e, index) => (
        <motion.li
          key={e.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
        >
          <EventCard
            event={e}
            saved={savedIds.includes(e.id)}
            onToggleSave={onToggleSave}
          />
        </motion.li>
      ))}
    </ul>
  )
}