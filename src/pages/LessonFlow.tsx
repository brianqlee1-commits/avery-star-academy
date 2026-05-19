import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import type { Language, Subject, GradeLevel, Lesson, PracticeStep } from '../types'
import { getLessons } from '../data/lessons'
import { getQuestions } from '../data/questions'
import type { Question } from '../types'
import { addStars, unlockReward, loadProgress } from '../store'
import { checkNewRewards } from '../data/rewards'
import type { Reward } from '../types'
import QuestionCard from '../components/questions/QuestionCard'
import RewardModal from '../components/ui/RewardModal'
import StarBar from '../components/ui/StarBar'

type Phase = 'demonstrate' | 'practice' | 'quiz' | 'complete'

const CPU_AVATAR = '🦉' // Professor Hoot guides practice

export default function LessonFlow() {
  const { lang, subject, level } = useParams<{ lang: string; subject: string; level: string }>()
  const navigate = useNavigate()

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [phase, setPhase] = useState<Phase>('demonstrate')
  const [demoStep, setDemoStep] = useState(0)           // which example we're showing

  // Practice state
  const [practiceIdx, setPracticeIdx] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [practiceSelected, setPracticeSelected] = useState<string | null>(null)
  const [practiceRevealed, setPracticeRevealed] = useState(false)
  const [practiceCorrect, setPracticeCorrect] = useState(0)

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [quizIdx, setQuizIdx] = useState(0)
  const [quizCorrect, setQuizCorrect] = useState(0)
  const [totalStarsNow, setTotalStarsNow] = useState(loadProgress().totalStars)
  const [newReward, setNewReward] = useState<Reward | null>(null)

  useEffect(() => {
    const lessons = getLessons({
      language: lang as Language,
      subject: subject as Subject,
      level: level as GradeLevel,
    })
    if (lessons.length > 0) {
      setLesson(lessons[0])
    } else {
      // No lesson for this combo — go straight to quiz
      navigate(`/quiz/${lang}/${subject}/${level}`)
    }
  }, [lang, subject, level, navigate])

  useEffect(() => {
    if (lesson && phase === 'quiz') {
      const qs = getQuestions({
        language: lang as Language,
        subject: subject as Subject,
        level: level as GradeLevel,
        topic: lesson.quizTopics[0],
        count: 6,
      })
      // If not enough topic-specific, pad with general subject questions
      if (qs.length < 4) {
        const general = getQuestions({ language: lang as Language, subject: subject as Subject, level: level as GradeLevel, count: 6 })
        setQuizQuestions(general)
      } else {
        setQuizQuestions(qs)
      }
    }
  }, [lesson, phase, lang, subject, level])

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-50">
        <div className="text-6xl animate-spin">⭐</div>
      </div>
    )
  }

  const step = lesson.practiceSteps[practiceIdx] as PracticeStep

  function handlePracticeSelect(opt: string) {
    if (practiceRevealed) return
    const isCorrect = opt === step.answer
    setPracticeSelected(opt)

    if (isCorrect) {
      setPracticeRevealed(true)
      setPracticeCorrect(prev => prev + 1)
      setTimeout(advancePractice, 1500)
    } else {
      const nextAttempts = attempts + 1
      setAttempts(nextAttempts)
      if (nextAttempts >= 2) {
        // Show answer after 2 wrong attempts
        setPracticeRevealed(true)
        setTimeout(advancePractice, 2000)
      } else {
        // Show hint after first wrong
        setShowHint(true)
        setPracticeSelected(null)
      }
    }
  }

  function advancePractice() {
    if (practiceIdx + 1 >= lesson!.practiceSteps.length) {
      setPhase('quiz')
    } else {
      setPracticeIdx(prev => prev + 1)
      setAttempts(0)
      setShowHint(false)
      setPracticeSelected(null)
      setPracticeRevealed(false)
    }
  }

  function handleQuizAnswer(wasCorrect: boolean) {
    if (wasCorrect) setQuizCorrect(prev => prev + 1)
    if (quizIdx + 1 >= quizQuestions.length) {
      const earned = wasCorrect ? quizCorrect + 1 : quizCorrect
      const key = `${lang}-${subject}`
      const updated = addStars(key, earned)
      setTotalStarsNow(updated.totalStars)
      const newOnes = checkNewRewards(updated.totalStars, updated.unlockedRewards)
      if (newOnes.length > 0) {
        newOnes.forEach(r => unlockReward(r.id))
        setNewReward(newOnes[0])
      }
      setPhase('complete')
    } else {
      setQuizIdx(prev => prev + 1)
    }
  }

  const PHASE_LABELS: Record<Phase, string> = { demonstrate: '📖 Learn', practice: `${CPU_AVATAR} Practice`, quiz: '🚀 Quiz', complete: '🏆 Done!' }
  const PHASE_NUMS: Record<Phase, number> = { demonstrate: 1, practice: 2, quiz: 3, complete: 3 }
  const phaseLabel = PHASE_LABELS[phase]
  const phaseNum = PHASE_NUMS[phase]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center px-4 py-5">
      <RewardModal reward={newReward} onClose={() => { setNewReward(null); navigate('/') }} />

      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate('/choose')} className="text-purple-600 font-bold text-lg">← Exit</button>
          <StarBar stars={totalStarsNow} />
        </div>

        {/* Phase progress bar */}
        <div className="mb-5">
          <div className="flex justify-between text-sm font-black mb-1">
            {(['demonstrate', 'practice', 'quiz'] as Phase[]).map((p, i) => (
              <span key={p} className={clsx('capitalize', phase === p ? 'text-purple-700' : i < phaseNum - 1 ? 'text-green-500' : 'text-gray-300')}>
                {i + 1}. {({ demonstrate: 'Learn', practice: 'Practice', quiz: 'Quiz' } as Record<string, string>)[p]}
                {i < phaseNum - 1 && ' ✓'}
              </span>
            ))}
          </div>
          <div className="h-3 bg-purple-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              animate={{ width: `${phaseNum === 1 ? 15 : phaseNum === 2 ? 50 : 85}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Lesson title */}
        <div className="text-center mb-4">
          <div className="text-5xl mb-1">{lesson.visual}</div>
          <h2 className="text-2xl font-black text-purple-700">{lesson.title}</h2>
          <p className="text-purple-400 font-bold text-sm">{phaseLabel}</p>
        </div>

        <AnimatePresence mode="wait">

          {/* ── DEMONSTRATE phase ── */}
          {phase === 'demonstrate' && (
            <motion.div key="demo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

              {demoStep === 0 && (
                /* Explanation card */
                <div className="space-y-4">
                  <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-purple-100">
                    <p className="text-gray-800 font-bold text-lg leading-relaxed">{lesson.explanation}</p>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-200">
                    <p className="font-black text-purple-700 mb-2 text-sm uppercase tracking-wide">Key Points</p>
                    <ul className="space-y-1">
                      {lesson.keyPoints.map((kp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 font-bold">
                          <span className="text-yellow-500 mt-0.5">⭐</span>{kp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setDemoStep(1)}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black py-4 rounded-2xl shadow-lg text-xl border-b-4 border-blue-700"
                  >
                    See Examples! 👀
                  </motion.button>
                </div>
              )}

              {demoStep > 0 && demoStep <= lesson.examples.length && (
                /* Worked example card */
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-3xl p-5 border-2 border-blue-200 shadow-md">
                    <p className="text-xs font-black text-blue-500 uppercase tracking-wide mb-2">
                      Example {demoStep} of {lesson.examples.length}
                    </p>
                    {lesson.examples[demoStep - 1].visual && (
                      <div className="text-4xl text-center mb-3">{lesson.examples[demoStep - 1].visual}</div>
                    )}
                    <p className="text-gray-800 font-bold text-lg mb-4">{lesson.examples[demoStep - 1].prompt}</p>
                    <div className="bg-green-100 rounded-xl p-3 border-2 border-green-300">
                      <p className="text-xs font-black text-green-600 mb-1">✅ ANSWER:</p>
                      <p className="font-black text-gray-800">{lesson.examples[demoStep - 1].answer}</p>
                    </div>
                    <div className="mt-3 bg-yellow-50 rounded-xl p-3 border-2 border-yellow-200">
                      <p className="text-xs font-black text-yellow-600 mb-1">💡 WHY:</p>
                      <p className="text-gray-700 font-bold text-sm">{lesson.examples[demoStep - 1].explanation}</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      if (demoStep < lesson.examples.length) setDemoStep(prev => prev + 1)
                      else setPhase('practice')
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black py-4 rounded-2xl shadow-lg text-xl border-b-4 border-blue-700"
                  >
                    {demoStep < lesson.examples.length ? `Next Example →` : `Got it! Let's Practice! ${CPU_AVATAR}`}
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}

          {/* ── PRACTICE phase ── */}
          {phase === 'practice' && (
            <motion.div key={`practice-${practiceIdx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

              {/* CPU helper banner */}
              <div className="flex items-center gap-3 bg-indigo-50 rounded-2xl p-3 border-2 border-indigo-200 mb-4">
                <span className="text-3xl">{CPU_AVATAR}</span>
                <p className="font-bold text-indigo-700 text-sm">
                  Professor Hoot is here to help! You have <strong>2 tries</strong> per question. Use the hint if you need it! 🌟
                </p>
              </div>

              {/* Practice progress dots */}
              <div className="flex justify-center gap-2 mb-4">
                {lesson.practiceSteps.map((_, i) => (
                  <div
                    key={i}
                    className={clsx('w-3 h-3 rounded-full transition-all', i < practiceIdx ? 'bg-green-400' : i === practiceIdx ? 'bg-purple-500 scale-125' : 'bg-gray-200')}
                  />
                ))}
              </div>

              {/* Question */}
              <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-purple-100 mb-4">
                {step.visual && <div className="text-4xl text-center mb-3">{step.visual}</div>}
                <p className="text-xl font-bold text-gray-800 text-center">{step.prompt}</p>
              </div>

              {/* Hint */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-3 mb-3 text-center"
                  >
                    <span className="font-black text-yellow-700">{CPU_AVATAR} Hint: </span>
                    <span className="font-bold text-yellow-800">{step.hint}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {step.options.map(opt => {
                  const isCorrect = opt === step.answer
                  const isSelected = opt === practiceSelected
                  return (
                    <motion.button
                      key={opt}
                      whileTap={!practiceRevealed ? { scale: 0.97 } : {}}
                      onClick={() => handlePracticeSelect(opt)}
                      className={clsx(
                        'rounded-2xl p-4 text-lg font-black shadow-md border-2 transition-all text-center leading-tight',
                        !practiceRevealed && 'bg-white border-purple-200 text-gray-800 hover:border-purple-400 cursor-pointer',
                        practiceRevealed && isCorrect && 'bg-green-400 border-green-500 text-white scale-105',
                        practiceRevealed && isSelected && !isCorrect && 'bg-red-400 border-red-500 text-white',
                        practiceRevealed && !isSelected && !isCorrect && 'bg-gray-100 border-gray-200 text-gray-400 opacity-60',
                      )}
                    >
                      {practiceRevealed && isCorrect && '✅ '}
                      {practiceRevealed && isSelected && !isCorrect && '❌ '}
                      {opt}
                    </motion.button>
                  )
                })}
              </div>

              {/* Hint button (before revealing) */}
              {!practiceRevealed && !showHint && attempts === 0 && (
                <button
                  onClick={() => setShowHint(true)}
                  className="w-full text-indigo-600 font-bold py-2 rounded-xl border-2 border-indigo-200 bg-indigo-50 text-sm"
                >
                  {CPU_AVATAR} Show Hint
                </button>
              )}

              {/* Explanation after reveal */}
              <AnimatePresence>
                {practiceRevealed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={clsx(
                      'rounded-2xl p-4 text-center font-bold text-base border-2 mt-2',
                      practiceSelected === step.answer ? 'bg-green-50 border-green-300 text-green-800' : 'bg-orange-50 border-orange-300 text-orange-800'
                    )}
                  >
                    {practiceSelected === step.answer ? '🌟 ' : `${CPU_AVATAR} `}
                    {step.explanation}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── QUIZ phase ── */}
          {phase === 'quiz' && quizQuestions.length > 0 && (
            <motion.div key="quiz" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {/* Transition banner */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-3 border-2 border-purple-200 mb-4 text-center">
                <p className="font-black text-purple-700">🚀 Now try it on your OWN!</p>
                <p className="text-sm font-bold text-purple-500">No hints this time — you've got this!</p>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-500 mb-2">
                <span>Question {quizIdx + 1} of {quizQuestions.length}</span>
              </div>
              <div className="h-2 bg-purple-100 rounded-full mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ width: `${(quizIdx / quizQuestions.length) * 100}%` }}
                />
              </div>
              <AnimatePresence mode="wait">
                <QuestionCard key={quizQuestions[quizIdx]?.id} question={quizQuestions[quizIdx]} onAnswer={handleQuizAnswer} />
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── COMPLETE phase ── */}
          {phase === 'complete' && (
            <motion.div key="complete" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
              <motion.div
                className="text-7xl mb-4"
                animate={{ rotate: [0, -10, 10, -5, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1 }}
              >
                {quizCorrect === quizQuestions.length ? '🌟' : quizCorrect >= quizQuestions.length / 2 ? '⭐' : '💪'}
              </motion.div>
              <h2 className="text-3xl font-black text-purple-700 mb-2">Lesson Complete!</h2>
              <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-purple-100 mb-5">
                <div className="flex justify-around mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-indigo-600">{practiceCorrect}/{lesson.practiceSteps.length}</div>
                    <div className="text-sm text-gray-500 font-bold">Practice</div>
                  </div>
                  <div className="text-3xl text-gray-300">|</div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">{quizCorrect}/{quizQuestions.length}</div>
                    <div className="text-sm text-gray-500 font-bold">Quiz</div>
                  </div>
                </div>
                <p className="font-bold text-gray-700 text-lg">
                  {quizCorrect === quizQuestions.length
                    ? '🏆 PERFECT! You mastered it!'
                    : quizCorrect >= quizQuestions.length * 0.7
                    ? '🌟 Great work! You\'re getting it!'
                    : '💪 Good try! Practice makes perfect!'}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setPhase('demonstrate'); setDemoStep(0); setPracticeIdx(0); setQuizIdx(0); setQuizCorrect(0); setPracticeCorrect(0); setAttempts(0); setShowHint(false); setPracticeSelected(null); setPracticeRevealed(false) }}
                  className="flex-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-black py-4 rounded-2xl shadow-lg text-lg"
                >
                  🔄 Try Again
                </button>
                <button
                  onClick={() => navigate('/choose')}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-4 rounded-2xl shadow-lg text-lg"
                >
                  🎯 New Lesson
                </button>
              </div>
              <button onClick={() => navigate('/')} className="w-full mt-3 text-purple-500 font-bold py-2">🏠 Go Home</button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
