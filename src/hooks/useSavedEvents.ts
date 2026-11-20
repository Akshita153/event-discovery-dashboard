import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mehfil-saved-events'

function readSaved(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as number[]) : []
  } catch {
    return []
  }
}

export function useSavedEvents() {
  const [savedIds, setSavedIds] = useState<number[]>(readSaved)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds))
  }, [savedIds])

  const toggleSave = (id: number) =>
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return { savedIds, toggleSave }
}