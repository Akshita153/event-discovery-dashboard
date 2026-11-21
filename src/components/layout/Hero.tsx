import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/animations'

export default function Hero() {
  return (
    <section className='bg-linear-to-br from-paper via-paper to-lime/30'>
      <motion.div variants={stagger} initial='hidden' animate='show' className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24'>
      
      <motion.p variants={fadeUp} className='mb-6 inline-block rounded-full border border-ink/10 bg-card px-4 py-1.5 text-sm'>
          12 handpicked events this season
       </motion.p>

       <motion.h1 variants={fadeUp} className='max-w-3xl font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl'>
          Your next <span className='italic text-brand'>great night</span> starts here.
        </motion.h1>

        <motion.p variants={fadeUp} className='mt-6 max-w-xl text-lg text-ink/70'>
          Concerts, talks, food markets and late-night parties across Indian cities. Filter, save and plan in one place.
        </motion.p>

        <motion.a
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href='#events'
          className='mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-medium text-on-lime focus-visible:ring-2 focus-visible:ring-brand'
        >

          Explore events
          <ArrowDown size={18} aria-hidden='true' />
        </motion.a>
      </motion.div>
    </section>
  )
}