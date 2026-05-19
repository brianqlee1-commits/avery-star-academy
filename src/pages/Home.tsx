import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { loadProgress, loadSettings } from '../store'
import StarBar from '../components/ui/StarBar'
import { useState } from 'react'

const floatEmojis = ['🦄', '⭐', '🦕', '🌈', '🐉', '🦋', '🌟', '🎀']

export default function Home() {
  const navigate = useNavigate()
  const progress = loadProgress()
  const settings = loadSettings()
  const name = settings.playerName || 'Avery'
  const [tapCount, setTapCount] = useState(0)

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  function handleLogoTap() {
    const next = tapCount + 1
    setTapCount(next)
    if (next >= 5) { setTapCount(0); navigate('/settings') }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center px-4 py-8 relative overflow-hidden">
      {/* Floating background emojis */}
      {floatEmojis.map((e, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20 pointer-events-none select-none"
          style={{ left: `${10 + i * 12}%`, top: `${5 + (i % 3) * 25}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          {e}
        </motion.div>
      ))}

      {/* Header */}
      <div className="w-full max-w-lg">
        <StarBar stars={progress.totalStars} />
      </div>

      {/* Logo / Title */}
      <motion.div
        className="mt-8 text-center cursor-pointer select-none"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        onClick={handleLogoTap}
      >
        <div className="text-7xl mb-2">⭐</div>
        <h1 className="text-4xl font-black text-purple-700 leading-tight">Avery's</h1>
        <h1 className="text-4xl font-black text-pink-500 leading-tight">Star Academy</h1>
        <p className="text-purple-400 mt-1 font-bold text-sm">(tap logo 5× for parent mode)</p>
      </motion.div>

      {/* Greeting */}
      <motion.div
        className="mt-6 bg-white/80 rounded-3xl px-6 py-4 text-center shadow-sm border-2 border-purple-100 max-w-sm w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-2xl font-black text-gray-800">
          {greeting}, <span className="text-pink-500">{name}</span>! 🎉
        </p>
        {progress.streakDays > 1 && (
          <p className="text-purple-600 font-bold mt-1">🔥 {progress.streakDays} day streak!</p>
        )}
        {progress.totalStars > 0 && (
          <p className="text-gray-600 mt-1">You have <span className="font-black text-yellow-500">{progress.totalStars} ⭐</span> — amazing!</p>
        )}
        {progress.totalStars === 0 && (
          <p className="text-gray-600 mt-1">Ready to earn your first star? Let's go!</p>
        )}
      </motion.div>

      {/* Daily Focus banner */}
      {settings.dailyFocus.enabled && settings.dailyFocus.subjects.length > 0 && (
        <motion.div
          className="mt-4 bg-yellow-100 border-2 border-yellow-300 rounded-2xl px-5 py-3 max-w-sm w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-black text-yellow-700 text-sm">📅 TODAY'S FOCUS</p>
          <p className="font-bold text-yellow-600 text-lg capitalize">
            {settings.dailyFocus.subjects.join(' · ')}
          </p>
          {settings.dailyFocus.customTopic && (
            <p className="text-yellow-600 text-sm">Topic: {settings.dailyFocus.customTopic}</p>
          )}
        </motion.div>
      )}

      {/* Main Buttons */}
      <div className="mt-8 flex flex-col gap-4 w-full max-w-sm">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/choose')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-2xl py-5 rounded-3xl shadow-xl border-b-4 border-purple-700 active:border-b-0 active:translate-y-1 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          🚀 START LEARNING!
        </motion.button>

        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/rewards')}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black text-lg py-4 rounded-2xl shadow-lg border-b-4 border-yellow-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            🏆 Rewards
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/settings')}
            className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-black text-lg py-4 rounded-2xl shadow-lg border-b-4 border-teal-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            ⚙️ Settings
          </motion.button>
        </div>
      </div>

      {/* Encouragement */}
      <motion.p
        className="mt-8 text-purple-400 font-bold text-center text-sm max-w-xs"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "You are smart, you are kind, and you can do hard things!" ✨
      </motion.p>
    </div>
  )
}
