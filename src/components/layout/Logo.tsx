import { Ticket } from 'lucide-react'
import { APP_NAME } from '../../lib/brand'

export default function Logo() {
  return (
    <a href='#top' className='flex items-center gap-2 font-display text-xl font-bold'>
      <span className='grid size-9 place-items-center rounded-xl bg-brand text-white'>
        <Ticket size={20} aria-hidden='true' />
      </span>
      {APP_NAME}
    </a>
  )
}