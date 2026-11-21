import { Calendar, Heart, MapPin } from 'lucide-react'
import type { EventItem } from '../../types/event'
import { formatDate, formatPrice } from '../../lib/format'
import Tag from '../ui/Tag'
import { motion } from 'framer-motion'

type Props = {
  event: EventItem
  saved?: boolean
  onToggleSave?: (id: number) => void
}

export default function EventCard({ event, saved = false, onToggleSave }: Props) {
  const isFree = event.price === 0

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-ink/5 hover:shadow-xl transition-shadow'
    >

      <div className='relative aspect-[4/3] overflow-hidden'>
        <img src={event.image} alt={event.title} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' />
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent' />

        <span className='absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-ink'>
          {event.category}
        </span>

        <motion.button
          type='button'
          aria-label={saved ? `Remove ${event.title} from saved` : `Save ${event.title}`}
          aria-pressed={saved}
          whileTap={{ scale: 0.85 }}
          onClick={() => onToggleSave?.(event.id)}
          className='absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-card/90 text-ink focus-visible:ring-2 focus-visible:ring-brand'
        >
          <motion.span
            initial={false}
            animate={{ scale: saved ? [1, 1.4, 1] : 1 }}
            transition={{ duration: 0.35 }}
            className={saved ? 'text-rose-500' : ''}
          >
            <Heart size={20} fill={saved ? 'currentColor' : 'none'} />
          </motion.span>
        </motion.button>

        <span
          className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-sm font-semibold ${isFree ? 'bg-lime text-on-lime' : 'text-white'
            }`}
        >
          {formatPrice(event.price)}
        </span>
      </div>

      <div className='flex flex-1 flex-col gap-2 p-5'>
        <h3 className='font-display text-lg font-semibold leading-snug'>{event.title}</h3>
        <p className='flex items-center gap-2 text-sm text-ink/70'>
          <Calendar size={16} className='text-brand' aria-hidden='true' />
          {formatDate(event.date)}
        </p>
        <p className='flex items-center gap-2 text-sm text-ink/70'>
          <MapPin size={16} className='text-brand' aria-hidden='true' />
          {event.location}
        </p>
        <ul className='mt-auto flex flex-wrap gap-2 pt-2'>
          {event.tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}