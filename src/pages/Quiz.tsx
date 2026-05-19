import { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import type { Language, Subject, GradeLevel, Question } from '../types'
import { getQuestions } from '../data/questions'
import { addStars, unlockReward, loadProgress } from '../store'
import { checkNewRewards } from '../data/rewards'
import QuestionCard from '../components/questions/QuestionCard'
import RewardModal from '../components/ui/RewardModal'
import type { Reward } from '../types'
import StarBar from '../components/ui/StarBar'

const TOTAL_QUESTIONS = 8

function getStarLabel(correct: number, total: number): { emoji: string; msg: string } {
  const pct = correct / total
  if (pct === 1) return { emoji: '🌟🌟🌟', msg: 'PERFECT SCORE! You\'re incredible!' }
  if (pct >= 0.75) return { emoji: '⭐⭐⭐', msg: 'Amazing job! Keep shining!' }
  if (pct >= 0.5) return { emoji: '⭐⭐', msg: 'Great effort! You\'re learning!' }
  return { emoji: '⭐', msg: 'Good try! Every try makes you smarter!' }
}

export default function Quiz() {
  const { lang, subject, level } = useParams<{ lang: string; subject: string; level: string }>()
  const navigate = useNavigate()

  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)
  const [stars, setStars] = useState(0)
  const [newReward, setNewReward] = useState<Reward | null>(null)
  const [totalStarsNow, setTotalStarsNow] = useState(0)
  const [showCorrectFlash, setShowCorrectFlash] = useState<boolean | null>(null)

  useEffect(() => {
    const qs = getQuestions({
      language: lang as Language,
      subject: subject as Subject,
      level: level as GradeLevel,
      count: TOTAL_QUESTIONS,
    })
    // Fall back to any level if not enough questions
    if (qs.length < 3) {
      const fallback = getQuestions({ language: lang as Language, subject: subject as Subject, count: TOTAL_QUESTIONS })
      setQuestions(fallback.length > 0 ? fallback : qs)
    } else {
      setQuestions(qs)
    }
  }, [lang, subject, level])

  const handleAnswer = useCallback((wasCorrect: boolean) => {
    setShowCorrectFlash(wasCorrect)
    setTimeout(() => setShowCorrectFlash(null), 600)

    if (wasCorrect) setCorrect(prev => prev + 1)

    if (index + 1 >= questions.length || index + 1 >= TOTAL_QUESTIONS) {
      const starsEarned = wasCorrect ? correct + 1 : correct
      const key = `${lang}-${subject}`
      const updated = addStars(key, starsEarned)
      setStars(starsEarned)
      setTotalStarsNow(updated.totalStars)
      const newOnes = checkNewRewards(updated.totalStars, updated.unlockedRewards)
      if (newOnes.length > 0) {
        newOnes.forEach(r => unlockReward(r.id))
        setNewReward(newOnes[0])
      }
      setDone(true)
    } else {
      setIndex(prev => prev + 1)
    }
  }, [index, correct, questions.length, lang, subject])

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">⭐</div>
          <p className="text-purple-600 font-black text-xl">Loading your questions...</p>
        </div>
      </div>
    )
  }

  const subjectLabel = (subject ?? '').replace('-', ' ')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center px-4 py-6 relative overflow-hidden">
      {/* Flash feedback */}
      <AnimatePresence>
        {showCorrectFlash !== null && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-40"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: showCorrectFlash ? '#bbf7d0' : '#fecaca' }}
          />
        )}
      </AnimatePresence>

      <RewardModal
        reward={newReward}
        onClose={() => { setNewReward(null); if (done) navigate('/') }}
      />

      <div className="w-full max-w-lg">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate('/choose')} className="text-purple-600 font-bold text-lg">← Exit</button>
          <StarBar stars={totalStarsNow || loadProgress().totalStars} />
        </div>

        {/* Subject + progress */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-black text-purple-700 capitalize text-lg">
            {lang === 'spanish' ? '🇲🇽 ' : '🇺🇸 '}{subjectLabel} · Level {level}
          </span>
          <span className="text-sm font-bold text-gray-500">
            {Math.min(index + 1, questions.length)} / {Math.min(questions.length, TOTAL_QUESTIONS)}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-purple-100 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            animate={{ width: `${((index) / Math.min(questions.length, TOTAL_QUESTIONS)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Quiz or Done */}
        {!done ? (
          <AnimatePresence mode="wait">
            <QuestionCard
              key={questions[index]?.id}
              question={questions[index]}
              onAnswer={handleAnswer}
            />
          </AnimatePresence>
        ) : (
          <DoneScreen correct={correct} total={Math.min(questions.length, TOTAL_QUESTIONS)} stars={stars} onHome={() => navigate('/')} onRetry={() => { setIndex(0); setCorrect(0); setDone(false); setStars(0); setQuestions(getQuestions({ language: lang as Language, subject: subject as Subject, level: level as GradeLevel, count: TOTAL_QUESTIONS })) }} />
        )}
      </div>
    </div>
  )
}

function DoneScreen({ correct, total, stars, onHome, onRetry }: { correct: number; total: number; stars: number; onHome: () => void; onRetry: () => void }) {
  const { emoji, msg } = getStarLabel(correct, total)
  return (
    <motion.div
      className="text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <motion.div
        className="text-7xl mb-4"
        animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {emoji}
      </motion.div>
      <h2 className="text-3xl font-black text-purple-700 mb-2">Session Complete!</h2>
      <p className="text-xl font-bold text-gray-700 mb-4">{msg}</p>
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-purple-100 mb-6">
        <div className="text-5xl font-black text-purple-600">{correct}/{total}</div>
        <div className="text-gray-500 font-bold">correct answers</div>
        <div className="mt-3 text-2xl font-black text-yellow-500">+{stars} ⭐ earned!</div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-4 rounded-2xl shadow-lg text-lg"
        >
          🔄 Again!
        </button>
        <button
          onClick={onHome}
          className="flex-1 bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-black py-4 rounded-2xl shadow-lg text-lg"
        >
          🏠 Home
        </button>
      </div>
    </motion.div>
  )
}
