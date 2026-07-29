// The site's own yellow "C" mark — reads fine directly against the dark
// theme, so unlike earlier attempts it needs no light backing plate.
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M44 20.5
           A16 16 0 1 0 44 43.5"
        fill="none"
        stroke="#f4ed1a"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}
