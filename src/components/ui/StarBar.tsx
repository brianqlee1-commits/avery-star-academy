import { getNextReward } from '../../data/rewards'
import { loadProgress } from '../../store'

interface Props {
  stars: number
}

export default function StarBar({ stars }: Props) {
  const progress = loadProgress()
  const next = getNextReward(stars, progress.unlockedRewards)
  const pct = next
    ? Math.min(100, Math.round((stars / next.starsRequired) * 100))
    : 100

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-2xl shadow-sm">
      <span className="text-xl">⭐</span>
      <span className="font-black text-purple-700 text-lg">{stars}</span>
      {next && (
        <>
          <div className="flex-1 h-3 bg-purple-100 rounded-full overflow-hidden mx-1">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-lg">{next.emoji}</span>
          <span className="text-xs text-purple-500 font-bold">{next.starsRequired - stars} more!</span>
        </>
      )}
    </div>
  )
}
