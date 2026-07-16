import { useEffect } from 'react'

export default function PageMeta({ title }: { title: string }) {
  useEffect(() => {
    const previous = document.title
    document.title = `${title} — Colloraa`
    return () => {
      document.title = previous
    }
  }, [title])

  return null
}
