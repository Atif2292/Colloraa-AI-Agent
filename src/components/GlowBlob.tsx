export default function GlowBlob({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none animate-spin-slow rounded-full opacity-40 blur-[110px] ${className}`}
      style={{
        background:
          'conic-gradient(from 0deg, hsl(280 60% 45%), hsl(var(--primary)), hsl(25 100% 55%), hsl(280 60% 45%))',
      }}
    />
  )
}
