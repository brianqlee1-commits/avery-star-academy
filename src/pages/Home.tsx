import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { loadProgress, loadSettings, loadSchedule } from '../store'
import StarBar from '../components/ui/StarBar'
import { useState } from 'react'
import type { Subject } from '../types'

const floatEmojis = ['🦄', '⭐', '🦕', '🌈', '🐉', '🦋', '🌟', '🎀']

const SUBJECT_COLORS: Record<Subject, string> = {
  reading: 'from-blue-500 to-indigo-600',
  math: 'from-green-500 to-teal-600',
  vocabulary: 'from-cyan-500 to-blue-600',
  science: 'from-yellow-500 to-orange-500',
  'social-studies': 'from-pink-500 to-rose-600',
  'tag-prep': 'from-purple-600 to-violet-700',
  motivation: 'from-orange-500 to-red-500',
}

const SUBJECT_EMOJI: Record<Subject, string> = {
  reading: '📚', math: '🔢', vocabulary: '🔤', science: '🔬',
  'social-studies': '🌎', 'tag-prep': '🧠', motivation: '💪',
}

export default function Home() {
  const navigate = useNavigate()
  const progress = loadProgress()
  const settings = loadSettings()
  const schedule = loadSchedule()
  const name = settings.playerName || 'Avery'
  const [tapCount, setTapCount] = useState(0)

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  const hasSchedule = schedule.blocks.length > 0
  const completedCount = schedule.blocks.filter(b => b.completed).length
  const nextBlock = schedule.blocks.find(b => !b.completed)

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
        >{e}</motion.div>
      ))}

      <div className="w-full max-w-lg">
        <StarBar stars={progress.totalStars} />
      </div>

      {/* Logo */}
      <motion.div
        className="mt-8 text-center cursor-pointer select-none"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        onClick={handleLogoTap}
      >
        <motion.div
          className="text-7xl mb-2"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >⭐</motion.div>
        <h1 className="text-4xl font-black text-purple-700 leading-tight">Avery's</h1>
        <h1 className="text-4xl font-black text-pink-500 leading-tight">Star Academy</h1>
        <p className="text-purple-400 mt-1 font-bold text-xs">(tap logo 5× for parent mode)</p>
      </motion.div>

      {/* Greeting card */}
      <motion.div
        className="mt-5 bg-white/80 rounded-3xl px-6 py-4 text-center shadow-sm border-2 border-purple-100 max-w-sm w-full"
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
        {progress.totalStars > 0
          ? <p className="text-gray-600 mt-1">You have <span className="font-black text-yellow-500">{progress.totalStars} ⭐</span> — amazing!</p>
          : <p className="text-gray-600 mt-1">Ready to earn your first star? Let's go!</p>
        }
      </motion.div>

      {/* DLD Banner */}
      {schedule.isDLD && (
        <motion.div
          className="mt-3 bg-yellow-100 border-2 border-yellow-400 rounded-2xl px-5 py-3 max-w-sm w-full text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          <p className="font-black text-yellow-800">🖥️ Digital Learning Day!</p>
          <p className="text-yellow-700 text-sm font-bold">Follow today's plan below!</p>
        </motion.div>
      )}

      {/* Daily Focus banner (when no full schedule set) */}
      {!hasSchedule && settings.dailyFocus.enabled && settings.dailyFocus.subjects.length > 0 && (
        <motion.div
          className="mt-3 bg-yellow-100 border-2 border-yellow-300 rounded-2xl px-5 py-3 max-w-sm w-full text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
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

      {/* Today's Schedule mini-timeline */}
      {hasSchedule && (
        <motion.div
          className="mt-4 w-full max-w-sm"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
        >
          <div className="bg-white/80 rounded-3xl border-2 border-purple-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-50">
              <div className="flex items-center gap-2">
                <span className="text-xl">📋</span>
                <span className="font-black text-purple-700">Today's Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500">{completedCount}/{schedule.blocks.length} done</span>
                <button onClick={() => navigate('/planner')} className="text-xs font-black text-purple-500 bg-purple-50 px-2 py-1 rounded-lg">Edit</button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-gray-100">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-teal-400"
                animate={{ width: `${(completedCount / schedule.blocks.length) * 100}%` }}
              />
            </div>

            {/* Block list (first 4) */}
            <div className="divide-y divide-gray-50">
              {schedule.blocks.slice(0, 4).map((block, i) => {
                const color = SUBJECT_COLORS[block.subject as Subject] ?? 'from-purple-500 to-pink-500'
                const emoji = SUBJECT_EMOJI[block.subject as Subject] ?? '📚'
                return (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-3 px-4 py-2.5"
                  >
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-sm flex-shrink-0 ${block.completed ? 'opacity-50' : ''}`}>
                      {block.completed ? '✅' : emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-black capitalize truncate ${block.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{block.subject.replace('-', ' ')}</p>
                      <p className="text-xs font-bold text-gray-400 truncate capitalize">{block.topic} · {block.durationMinutes}min</p>
                    </div>
                    {!block.completed && block === nextBlock && (
                      <button
                        onClick={() => navigate('/planner')}
                        className={`text-xs font-black bg-gradient-to-r ${color} text-white px-3 py-1 rounded-lg shadow flex-shrink-0`}
                      >▶ Go</button>
                    )}
                  </motion.div>
                )
              })}
              {schedule.blocks.length > 4 && (
                <p className="text-center text-xs font-bold text-gray-400 py-2">+{schedule.blocks.length - 4} more</p>
              )}
            </div>

            {/* Go to planner */}
            <div className="px-4 py-3 border-t border-purple-50">
              <button
                onClick={() => navigate('/planner')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-2.5 rounded-xl text-sm"
              >
                📅 Open Full Plan
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Buttons */}
      <div className="mt-5 flex flex-col gap-3 w-full max-w-sm">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/choose')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-2xl py-5 rounded-3xl shadow-xl border-b-4 border-purple-700 active:border-b-0 active:translate-y-1 transition-all"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        >
          🚀 START LEARNING!
        </motion.button>

        <div className="grid grid-cols-3 gap-2">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/planner')}
            className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-black text-sm py-3.5 rounded-2xl shadow-lg border-b-4 border-teal-600"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          >
            📅 Plan Day
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/rewards')}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black text-sm py-3.5 rounded-2xl shadow-lg border-b-4 border-yellow-600"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          >
            🏆 Rewards
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/settings')}
            className="bg-gradient-to-r from-gray-400 to-slate-500 text-white font-black text-sm py-3.5 rounded-2xl shadow-lg border-b-4 border-gray-600"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          >
            ⚙️ Settings
          </motion.button>
        </div>
      </div>

      {/* Encouragement */}
      <motion.p
        className="mt-6 text-purple-400 font-bold text-center text-sm max-w-xs"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "You are smart, you are kind, and you can do hard things!" ✨
      </motion.p>
    </div>
  )
}
