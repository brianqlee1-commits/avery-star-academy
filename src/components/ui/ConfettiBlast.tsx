import { useEffect, useState } from 'react'

const COLORS = ['#FF6B6B', '#FFE66D', '#4ECDC4', '#A78BFA', '#F472B6', '#34D399', '#60A5FA', '#FB923C']
const COUNT = 40

interface Particle {
  id: number
  x: number
  y: number
  color: string
  size: number
  rotation: number
  vx: number
  vy: number
}

export default function ConfettiBlast({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!active) { setParticles([]); return }
    setParticles(Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      x: 40 + Math.random() * 20,
      y: 50,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
      vx: (Math.random() - 0.5) * 200,
      vy: -200 - Math.random() * 200,
    })))
  }, [active])

  if (!active || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-sm animate-confetti"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            '--vx': `${p.vx}px`,
            '--vy': `${p.vy}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
