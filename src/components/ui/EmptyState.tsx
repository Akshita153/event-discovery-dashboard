import type { ReactNode } from 'react'

type Props = {
  title: string
  message: string
  children?: ReactNode
}

export default function EmptyState({ title, message, children }: Props) {
  return (
    <div className='flex flex-col items-center px-6 py-16 text-center'>
      <svg viewBox='0 0 200 160' className='h-40 w-auto' aria-hidden='true'>
        
        <ellipse cx='100' cy='146' rx='62' ry='8' className='fill-ink/10' />

        
        <rect x='34' y='30' width='108' height='100' rx='14' className='fill-card stroke-ink/30' strokeWidth='3' />
        
        <rect x='34' y='30' width='108' height='28' rx='14' className='fill-brand' />
        <rect x='34' y='46' width='108' height='12' className='fill-brand' />
        
        <rect x='60' y='20' width='8' height='22' rx='4' className='fill-ink' />
        <rect x='108' y='20' width='8' height='22' rx='4' className='fill-ink' />

        
        <g className='fill-ink/15'>
          <circle cx='56' cy='78' r='5' />
          <circle cx='80' cy='78' r='5' />
          <circle cx='104' cy='78' r='5' />
          <circle cx='56' cy='100' r='5' />
          <circle cx='80' cy='100' r='5' />
        </g>

        
        <circle cx='128' cy='104' r='24' className='fill-card stroke-brand' strokeWidth='6' />
        <line x1='146' y1='122' x2='168' y2='144' className='stroke-brand' strokeWidth='8' strokeLinecap='round' />
        <path d='M121 97 L135 111 M135 97 L121 111' className='stroke-ink/50' strokeWidth='3' strokeLinecap='round' />
      </svg>

      <h3 className='mt-6 font-display text-2xl font-bold'>{title}</h3>
      <p className='mt-2 max-w-sm text-ink/60'>{message}</p>
      {children && <div className='mt-6'>{children}</div>}
    </div>
  )
}