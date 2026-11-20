import { useEffect, useRef } from 'react'
import { Trash2, X } from 'lucide-react'
import type { EventItem } from '../../types/event'
import { formatDate, formatPrice } from '../../lib/format'

type Props = {
  events: EventItem[]
  onClose: () => void
  onRemove: (id: number) => void
}

export default function SavedDrawer({ events, onClose, onRemove }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // On open: remember what was focused, move focus into the drawer.
  // On close: give focus back.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => opener?.focus()
  }, [])

  // Escape key closes it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      <div className='fixed inset-0 z-40 bg-ink/40' onClick={onClose} aria-hidden='true' />

      <div
        role='dialog'
        aria-modal='true'
        aria-label='Saved events'
        className='fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl'
      >
        <div className='flex items-center justify-between border-b border-ink/10 p-5'>
          <h2 className='font-display text-2xl font-bold'>Saved events</h2>
          <button
            ref={closeRef}
            type='button'
            aria-label='Close saved events'
            onClick={onClose}
            className='grid size-10 place-items-center rounded-full hover:bg-ink/5 focus-visible:ring-2 focus-visible:ring-brand'
          >
            <X size={20} />
          </button>
        </div>

        {events.length === 0 ? (
          <p className='p-8 text-center text-ink/60'>
            Nothing saved yet. Tap the heart on an event to keep it here.
          </p>
        ) : (
          <ul className='flex-1 space-y-4 overflow-y-auto p-5'>
            {events.map((e) => (
              <li key={e.id} className='flex gap-4 rounded-2xl bg-card p-3 ring-1 ring-ink/5'>
                <img src={e.image} alt='' className='size-20 rounded-xl object-cover' />
                <div className='min-w-0 flex-1'>
                  <h3 className='truncate font-display font-semibold'>{e.title}</h3>
                  <p className='text-sm text-ink/60'>
                    {formatDate(e.date)} · {e.location}
                  </p>
                  <p className='text-sm font-medium'>{formatPrice(e.price)}</p>
                </div>
                <button
                  type='button'
                  aria-label={`Remove ${e.title} from saved`}
                  onClick={() => onRemove(e.id)}
                  className='self-start rounded-full p-2 hover:bg-ink/5 focus-visible:ring-2 focus-visible:ring-brand'
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}