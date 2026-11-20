type Props = {
  checked: boolean
  onChange: (value: boolean) => void
  label: string
}

export default function Toggle({ checked, onChange, label }: Props) {
  return (
    <div className='flex items-center gap-3'>
      <button
        type='button'
        role='switch'
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-brand ${
          checked ? 'bg-brand' : 'bg-ink/15'
        }`}
      >
        <span
          className={`absolute left-1 top-1 size-5 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </button>
      <span className='text-sm'>{label}</span>
    </div>
  )
}