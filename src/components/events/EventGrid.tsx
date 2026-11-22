import { AnimatePresence, motion } from 'framer-motion'
import type { EventItem } from '../../types/event'
import EventCard from './EventCard'
import TiltCard from '../ui/TiltCard'

type Props = {
  events: EventItem[]
  savedIds: number[]
  onToggleSave: (id: number) => void
}

export default function EventGrid({ events, savedIds, onToggleSave }: Props) {
  return (
    <ul className='relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
      <AnimatePresence mode='popLayout'>
        {events.map((e, index) => (
          <motion.li
            key={e.id}
            layout
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              layout: { type: 'spring', stiffness: 300, damping: 30 },
              duration: 0.45,
              delay: (index % 4) * 0.08,
            }}
          >
            <TiltCard>
              <EventCard
                event={e}
                saved={savedIds.includes(e.id)}
                onToggleSave={onToggleSave}
              />
            </TiltCard>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}