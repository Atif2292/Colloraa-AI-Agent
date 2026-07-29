// The real logo icon (cropped from the provided logo.png), not a
// hand-recreated shape — the earlier from-scratch SVG attempts didn't
// match the original closely enough.
export default function LogoMark({ className }: { className?: string }) {
  return <img src="/logo-icon.png" alt="" className={className} aria-hidden="true" />
}
