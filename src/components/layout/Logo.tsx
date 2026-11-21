import { motion } from 'framer-motion'
import { Ticket } from 'lucide-react'
import { APP_NAME } from '../../lib/brand'

export default function Logo() {
  return (
    <a href='#top' className='flex items-center gap-2 font-display text-xl font-bold'>
      <motion.span
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.3 }}
        whileHover={{ rotate: -10, scale: 1.1 }}
        className='grid size-9 place-items-center rounded-xl bg-brand text-white'
      >
        <Ticket size={20} aria-hidden='true' />
      </motion.span>
      {APP_NAME}
    </a>
  )
}