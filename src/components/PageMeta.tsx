import { useEffect } from 'react'

export default function PageMeta({ title }: { title: string }) {
  useEffect(() => {
    const previous = document.title
    document.title = `${title} — CloudAutoAI`
    return () => {
      document.title = previous
    }
  }, [title])

  return null
}
