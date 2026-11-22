import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const box = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - box.left) / box.width - 0.5)
    y.set((e.clientY - box.top) / box.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={reduceMotion ? undefined : handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className='h-full'
    >
      {children}
    </motion.div>
  )
}