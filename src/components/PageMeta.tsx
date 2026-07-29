import { useEffect } from 'react'

const SITE_NAME = 'CloudAutoAI'
const SITE_URL = 'https://cloudautoai.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

type PageMetaProps = {
  title: string
  description: string
  path: string
  /** Full literal <title> text, bypassing the "title — SITE_NAME" template
   *  (used on the homepage so the brand name leads: "CloudAutoAI | ..."). */
  rawTitle?: string
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function PageMeta({ title, description, path, rawTitle }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = rawTitle ?? `${title} — ${SITE_NAME}`
    const url = `${SITE_URL}${path}`

    const previousTitle = document.title
    document.title = fullTitle

    setMetaTag('name', 'description', description)
    setLinkTag('canonical', url)

    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE)

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE)

    return () => {
      document.title = previousTitle
    }
  }, [title, description, path, rawTitle])

  return null
}
