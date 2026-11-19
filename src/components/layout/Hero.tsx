import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className='bg-linear-to-br from-paper via-paper to-lime/30'>
      <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24'>
        <p className='mb-6 inline-block rounded-full border border-ink/10 bg-card px-4 py-1.5 text-sm'>
          12 handpicked events this season
        </p>
        <h1 className='max-w-3xl font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl'>
          Your next <span className='italic text-brand'>great night</span> starts here.
        </h1>
        <p className='mt-6 max-w-xl text-lg text-ink/70'>
          Concerts, talks, food markets and late-night parties across Indian cities. Filter, save and plan in one place.
        </p>
        <a
          href='#events'
          className='mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-medium text-ink focus-visible:ring-2 focus-visible:ring-brand'
        >
          Explore events
          <ArrowDown size={18} aria-hidden='true' />
        </a>
      </div>
    </section>
  )
}