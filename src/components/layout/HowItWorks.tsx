import { motion } from 'framer-motion'
import { CalendarCheck, Heart, Search } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/animations'

const steps = [
  { icon: Search, title: 'Discover', text: 'Search or filter by category, date and price.' },
  { icon: Heart, title: 'Save', text: 'Tap the heart on the events you like.' },
  { icon: CalendarCheck, title: 'Plan', text: 'Open your saved list and plan your week.' },
]

export default function HowItWorks() {
  return (
    <section aria-labelledby='how-title' className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
      <motion.div
        variants={stagger}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 id='how-title' variants={fadeUp} className='font-display text-3xl font-bold'>
          How it works
        </motion.h2>

        <ul className='mt-8 grid gap-6 md:grid-cols-3'>
          {steps.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className='rounded-3xl bg-card p-6 ring-1 ring-ink/5'
            >
              <span className='grid size-12 place-items-center rounded-2xl bg-lime text-on-lime'>
                <Icon size={22} aria-hidden='true' />
              </span>
              <h3 className='mt-4 font-display text-xl font-semibold'>
                {i + 1}. {title}
              </h3>
              <p className='mt-2 text-ink/70'>{text}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}