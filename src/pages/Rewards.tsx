import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { REWARDS } from '../data/rewards'
import { loadProgress } from '../store'
import { clsx } from 'clsx'

export default function Rewards() {
  const navigate = useNavigate()
  const progress = loadProgress()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-lg">
        <button onClick={() => navigate('/')} className="mb-4 text-purple-600 font-bold text-lg">← Back</button>
        <h1 className="text-3xl font-black text-purple-700 text-center mb-2">🏆 My Rewards</h1>
        <p className="text-center text-gray-500 mb-2 font-bold">
          Total Stars: <span className="text-yellow-500 font-black text-xl">⭐ {progress.totalStars}</span>
        </p>
        <p className="text-center text-purple-500 font-bold mb-6">
          {progress.unlockedRewards.length} of {REWARDS.length} friends unlocked!
        </p>

        <div className="grid grid-cols-2 gap-4">
          {REWARDS.map((reward, i) => {
            const unlocked = progress.unlockedRewards.includes(reward.id) || progress.totalStars >= reward.starsRequired
            return (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className={clsx(
                  'rounded-3xl p-5 text-center border-2 shadow-md',
                  unlocked
                    ? 'bg-white border-yellow-300'
                    : 'bg-gray-100 border-gray-200 opacity-70'
                )}
              >
                <motion.div
                  className="text-5xl mb-2"
                  animate={unlocked ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {unlocked ? reward.emoji : '🔒'}
                </motion.div>
                <div className={clsx('font-black text-sm', unlocked ? 'text-gray-800' : 'text-gray-400')}>
                  {unlocked ? reward.name : '???'}
                </div>
                <div className="text-xs font-bold mt-1">
                  {unlocked
                    ? <span className="text-green-500">✅ Unlocked!</span>
                    : <span className="text-purple-400">⭐ {reward.starsRequired} stars</span>
                  }
                </div>
                {unlocked && (
                  <p className="text-xs text-gray-500 mt-1">{reward.description}</p>
                )}
              </motion.div>
            )
          })}
        </div>

        {progress.totalStars === 0 && (
          <div className="mt-8 text-center">
            <p className="text-purple-500 font-bold">Answer questions to earn stars and unlock your friends!</p>
            <button
              onClick={() => navigate('/choose')}
              className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-3 px-8 rounded-2xl shadow-lg"
            >
              Start Learning! 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
