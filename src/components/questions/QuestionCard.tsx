import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Question, PatternQuestion } from '../../types'
import { clsx } from 'clsx'

interface Props {
  question: Question
  onAnswer: (correct: boolean) => void
  speak?: (text: string) => void
}

export default function QuestionCard({ question, onAnswer, speak }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  const isPattern = question.type === 'pattern'
  const pq = isPattern ? (question as PatternQuestion) : null
  const correctAnswer = String(question.answer)
  const options = question.options ?? []

  // Speak prompt when question mounts
  useEffect(() => {
    if (speak) speak(question.prompt)
  }, [question.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // Speak explanation when revealed
  useEffect(() => {
    if (revealed && speak && question.explanation) {
      const timeout = setTimeout(() => speak(question.explanation!), 400)
      return () => clearTimeout(timeout)
    }
  }, [revealed]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleSelect(opt: string) {
    if (revealed) return
    setSelected(opt)
    setRevealed(true)
    const correct = opt === correctAnswer
    setTimeout(() => {
      onAnswer(correct)
      setSelected(null)
      setRevealed(false)
    }, 1600)
  }

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      key={question.id}
    >
      {/* Visual aid */}
      {question.visual && (
        <div className="text-center text-5xl mb-4 animate-bounce-slow">{question.visual}</div>
      )}

      {/* Pattern display */}
      {isPattern && pq && (
        <div className="flex flex-wrap justify-center gap-3 mb-5 text-4xl">
          {pq.patternItems.map((item, i) => (
            <span key={i} className="drop-shadow">{item}</span>
          ))}
          <span className="w-10 h-10 border-4 border-dashed border-purple-400 rounded-lg flex items-center justify-center text-purple-400 text-2xl font-black">?</span>
        </div>
      )}

      {/* Prompt */}
      <div className="bg-white rounded-3xl p-5 mb-5 shadow-md border-2 border-purple-100 relative">
        <p className="text-xl font-bold text-gray-800 text-center leading-relaxed whitespace-pre-line">{question.prompt}</p>
        {speak && (
          <button
            onClick={() => speak(question.prompt)}
            className="absolute top-3 right-3 text-purple-300 hover:text-purple-500 text-xl transition-colors"
            title="Read aloud"
          >🔊</button>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          const isCorrect = opt === correctAnswer
          const isSelected = opt === selected

          return (
            <motion.button
              key={opt}
              whileHover={!revealed ? { scale: 1.04 } : {}}
              whileTap={!revealed ? { scale: 0.97 } : {}}
              onClick={() => handleSelect(opt)}
              className={clsx(
                'rounded-2xl p-4 text-lg font-black shadow-md border-2 transition-all duration-300 text-center leading-tight',
                !revealed && 'bg-white border-purple-200 text-gray-800 hover:border-purple-400 hover:bg-purple-50 cursor-pointer',
                revealed && isCorrect && 'bg-green-400 border-green-500 text-white scale-105',
                revealed && isSelected && !isCorrect && 'bg-red-400 border-red-500 text-white',
                revealed && !isSelected && !isCorrect && 'bg-gray-100 border-gray-200 text-gray-400 opacity-60',
              )}
            >
              {revealed && isCorrect && <span className="mr-1">✅</span>}
              {revealed && isSelected && !isCorrect && <span className="mr-1">❌</span>}
              {opt}
            </motion.button>
          )
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={clsx(
              'mt-4 rounded-2xl p-4 text-center font-bold text-lg border-2',
              selected === correctAnswer
                ? 'bg-green-50 border-green-300 text-green-800'
                : 'bg-orange-50 border-orange-300 text-orange-800'
            )}
          >
            {selected === correctAnswer ? '🌟 ' : '💡 '}
            {question.explanation}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
