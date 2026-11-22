import { motion } from 'framer-motion'

const photos = [
  { src: '/images/event-2.jpg', position: 'right-2 top-0 w-48 rotate-6', delay: 0 },
  { src: '/images/event-4.jpg', position: 'right-56 top-44 w-40 -rotate-6', delay: 0.5 },
  { src: '/images/event-6.jpg', position: 'right-6 top-80 w-44 rotate-3', delay: 1 },
]

export default function HeroVisuals() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] xl:block'
    >
      {photos.map((p) => (
        <motion.img
          key={p.src}
          src={p.src}
          alt=''
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 + p.delay },
            scale: { duration: 0.6, delay: 0.5 + p.delay },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
          }}
          className={`absolute aspect-[3/4] rounded-3xl border-4 border-card object-cover shadow-xl ${p.position}`}
        />
      ))}
    </div>
  )
}