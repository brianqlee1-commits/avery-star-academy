import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import type { Language, Subject, GradeLevel, Lesson, PracticeStep } from '../types'
import { getLessons } from '../data/lessons'
import { getQuestions } from '../data/questions'
import type { Question } from '../types'
import { addStars, unlockReward, loadProgress, markBlockComplete } from '../store'
import { checkNewRewards } from '../data/rewards'
import type { Reward } from '../types'
import QuestionCard from '../components/questions/QuestionCard'
import RewardModal from '../components/ui/RewardModal'
import StarBar from '../components/ui/StarBar'

type Phase = 'demonstrate' | 'practice' | 'quiz' | 'complete'

const CPU_AVATAR = '🦉'

const SUBJECT_COLORS: Record<string, string> = {
  reading: 'from-blue-500 to-indigo-600',
  math: 'from-green-500 to-teal-600',
  vocabulary: 'from-cyan-500 to-blue-600',
  science: 'from-yellow-500 to-orange-500',
  'social-studies': 'from-pink-500 to-rose-600',
  'tag-prep': 'from-purple-600 to-violet-700',
  motivation: 'from-orange-500 to-red-500',
}

const SUBJECT_BG: Record<string, string> = {
  reading: 'bg-blue-50 border-blue-200',
  math: 'bg-green-50 border-green-200',
  vocabulary: 'bg-cyan-50 border-cyan-200',
  science: 'bg-yellow-50 border-yellow-200',
  'social-studies': 'bg-pink-50 border-pink-200',
  'tag-prep': 'bg-purple-50 border-purple-200',
  motivation: 'bg-orange-50 border-orange-200',
}

export default function LessonFlow() {
  const { lang, subject, level } = useParams<{ lang: string; subject: string; level: string }>()
  const [searchParams] = useSearchParams()
  const blockId = searchParams.get('block')
  const navigate = useNavigate()

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [phase, setPhase] = useState<Phase>('demonstrate')
  const [demoStep, setDemoStep] = useState(0)
  const [visibleKeyPoints, setVisibleKeyPoints] = useState(0)
  const [exampleRevealStep, setExampleRevealStep] = useState<'question' | 'answer' | 'why'>('question')

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
      navigate(`/quiz/${lang}/${subject}/${level}`)
    }
  }, [lang, subject, level, navigate])

  // Stagger key points animation
  useEffect(() => {
    if (phase === 'demonstrate' && demoStep === 0 && lesson) {
      setVisibleKeyPoints(0)
      let i = 0
      const timer = setInterval(() => {
        i++
        setVisibleKeyPoints(i)
        if (i >= lesson.keyPoints.length) clearInterval(timer)
      }, 600)
      return () => clearInterval(timer)
    }
  }, [phase, demoStep, lesson])

  useEffect(() => {
    if (lesson && phase === 'quiz') {
      const qs = getQuestions({
        language: lang as Language,
        subject: subject as Subject,
        level: level as GradeLevel,
        topic: lesson.quizTopics[0],
        count: 6,
      })
      if (qs.length < 4) {
        setQuizQuestions(getQuestions({ language: lang as Language, subject: subject as Subject, level: level as GradeLevel, count: 6 }))
      } else {
        setQuizQuestions(qs)
      }
    }
  }, [lesson, phase, lang, subject, level])

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-50">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="text-6xl">⭐</motion.div>
      </div>
    )
  }

  const step = lesson.practiceSteps[practiceIdx] as PracticeStep
  const subjectKey = subject ?? 'reading'
  const gradientClass = SUBJECT_COLORS[subjectKey] ?? 'from-purple-500 to-pink-500'
  const bgClass = SUBJECT_BG[subjectKey] ?? 'bg-purple-50 border-purple-200'
  const currentExample = lesson.examples[demoStep - 1]

  const PHASE_LABELS: Record<Phase, string> = { demonstrate: '📖 Learn', practice: `${CPU_AVATAR} Practice`, quiz: '🚀 Quiz', complete: '🏆 Done!' }
  const PHASE_NUMS: Record<Phase, number> = { demonstrate: 1, practice: 2, quiz: 3, complete: 3 }
  const phaseNum = PHASE_NUMS[phase]

  function handlePracticeSelect(opt: string) {
    if (practiceRevealed) return
    const isCorrect = opt === step.answer
    setPracticeSelected(opt)
    if (isCorrect) {
      setPracticeRevealed(true)
      setPracticeCorrect(prev => prev + 1)
      setTimeout(advancePractice, 1600)
    } else {
      const next = attempts + 1
      setAttempts(next)
      if (next >= 2) {
        setPracticeRevealed(true)
        setTimeout(advancePractice, 2200)
      } else {
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
      setAttempts(0); setShowHint(false); setPracticeSelected(null); setPracticeRevealed(false)
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
      if (newOnes.length > 0) { newOnes.forEach(r => unlockReward(r.id)); setNewReward(newOnes[0]) }
      if (blockId) markBlockComplete(blockId)
      setPhase('complete')
    } else {
      setQuizIdx(prev => prev + 1)
    }
  }

  function resetLesson() {
    setPhase('demonstrate'); setDemoStep(0); setPracticeIdx(0); setQuizIdx(0)
    setQuizCorrect(0); setPracticeCorrect(0); setAttempts(0); setShowHint(false)
    setPracticeSelected(null); setPracticeRevealed(false); setVisibleKeyPoints(0)
    setExampleRevealStep('question')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center px-4 py-5">
      <RewardModal reward={newReward} onClose={() => { setNewReward(null); navigate(blockId ? '/planner' : '/') }} />

      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(blockId ? '/planner' : '/choose')} className="text-purple-600 font-bold text-lg">← Exit</button>
          <StarBar stars={totalStarsNow} />
        </div>

        {/* Phase progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs font-black mb-1 px-1">
            {(['demonstrate', 'practice', 'quiz'] as Phase[]).map((p, i) => (
              <span key={p} className={clsx('flex items-center gap-1', phase === p ? 'text-purple-700' : i < phaseNum - 1 ? 'text-green-500' : 'text-gray-300')}>
                {i < phaseNum - 1 ? '✅' : phase === p ? '▶' : '○'}
                {({ demonstrate: 'Learn', practice: 'Practice', quiz: 'Quiz' } as Record<string, string>)[p]}
              </span>
            ))}
          </div>
          <div className="h-3 bg-purple-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${gradientClass} rounded-full`}
              animate={{ width: `${phaseNum === 1 ? 15 : phaseNum === 2 ? 50 : 90}%` }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Hero lesson card */}
        <motion.div
          className={`bg-gradient-to-r ${gradientClass} rounded-3xl p-4 mb-5 shadow-xl text-white flex items-center gap-4`}
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring' }}
        >
          <motion.div
            className="text-5xl"
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {lesson.visual}
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{PHASE_LABELS[phase]}</p>
            <h2 className="text-xl font-black leading-tight">{lesson.title}</h2>
            <p className="text-white/80 text-xs font-bold mt-0.5 truncate">{lesson.tagline}</p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">

          {/* ── DEMONSTRATE phase ── */}
          {phase === 'demonstrate' && (
            <motion.div key="demo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

              {demoStep === 0 && (
                <div className="space-y-4">
                  {/* Explanation */}
                  <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-purple-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💡</span>
                      <span className="font-black text-purple-700 text-sm uppercase tracking-wide">Here's the big idea</span>
                    </div>
                    <p className="text-gray-800 font-bold text-lg leading-relaxed">{lesson.explanation}</p>
                  </div>

                  {/* Key points — stagger in */}
                  <div className={`rounded-2xl p-4 border-2 ${bgClass}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">🔑</span>
                      <span className="font-black text-gray-700 text-sm uppercase tracking-wide">Key Points</span>
                    </div>
                    <div className="space-y-2">
                      {lesson.keyPoints.map((kp, i) => (
                        <AnimatePresence key={i}>
                          {i < visibleKeyPoints && (
                            <motion.div
                              initial={{ opacity: 0, x: -30, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                              className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                            >
                              <motion.span
                                className="text-xl mt-0.5 flex-shrink-0"
                                animate={{ rotate: [0, 15, -10, 0] }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                              >
                                ⭐
                              </motion.span>
                              <span className="font-bold text-gray-800 text-base leading-snug">{kp}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setDemoStep(1); setExampleRevealStep('question') }}
                    className={`w-full bg-gradient-to-r ${gradientClass} text-white font-black py-4 rounded-2xl shadow-xl text-xl border-b-4 border-black/20`}
                    animate={visibleKeyPoints >= lesson.keyPoints.length ? { scale: [1, 1.03, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    See Examples! 👀
                  </motion.button>
                </div>
              )}

              {demoStep > 0 && demoStep <= lesson.examples.length && (
                <div className="space-y-4">
                  {/* Example counter pills */}
                  <div className="flex justify-center gap-2">
                    {lesson.examples.map((_, i) => (
                      <div key={i} className={clsx('h-2 rounded-full transition-all duration-300', i < demoStep - 1 ? 'w-8 bg-green-400' : i === demoStep - 1 ? 'w-12 bg-purple-500' : 'w-8 bg-gray-200')} />
                    ))}
                  </div>

                  {/* Question card */}
                  <motion.div
                    key={`ex-${demoStep}`}
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-5 shadow-xl border-2 border-purple-100"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-black px-3 py-1 rounded-full text-white bg-gradient-to-r ${gradientClass}`}>
                        Example {demoStep} of {lesson.examples.length}
                      </span>
                    </div>
                    {currentExample.visual && (
                      <motion.div
                        className="text-6xl text-center mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {currentExample.visual}
                      </motion.div>
                    )}
                    <div className={`rounded-2xl p-4 border-2 ${bgClass} mb-4`}>
                      <p className="text-xs font-black text-gray-500 uppercase tracking-wide mb-1">❓ Question</p>
                      <p className="text-gray-800 font-bold text-lg leading-snug">{currentExample.prompt}</p>
                    </div>

                    <AnimatePresence>
                      {exampleRevealStep !== 'question' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          className="bg-green-50 rounded-2xl p-4 border-2 border-green-300 mb-3"
                        >
                          <p className="text-xs font-black text-green-600 uppercase tracking-wide mb-1">✅ Answer</p>
                          <p className="font-black text-gray-800 text-lg">{currentExample.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {exampleRevealStep === 'why' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          className="bg-yellow-50 rounded-2xl p-4 border-2 border-yellow-300"
                        >
                          <p className="text-xs font-black text-yellow-600 uppercase tracking-wide mb-1">💡 Why?</p>
                          <p className="text-gray-700 font-bold text-base leading-snug">{currentExample.explanation}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Step-by-step reveal button */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      if (exampleRevealStep === 'question') {
                        setExampleRevealStep('answer')
                      } else if (exampleRevealStep === 'answer') {
                        setExampleRevealStep('why')
                      } else {
                        if (demoStep < lesson.examples.length) {
                          setDemoStep(prev => prev + 1)
                          setExampleRevealStep('question')
                        } else {
                          setPhase('practice')
                        }
                      }
                    }}
                    className={`w-full bg-gradient-to-r ${gradientClass} text-white font-black py-4 rounded-2xl shadow-xl text-xl border-b-4 border-black/20`}
                  >
                    {exampleRevealStep === 'question' ? '👀 Show Answer'
                      : exampleRevealStep === 'answer' ? '💡 Show Why'
                      : demoStep < lesson.examples.length ? `Next Example →`
                      : `Got it! Let's Practice! ${CPU_AVATAR}`}
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}

          {/* ── PRACTICE phase ── */}
          {phase === 'practice' && (
            <motion.div key={`practice-${practiceIdx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

              {/* Professor Hoot banner */}
              <motion.div
                className="flex items-center gap-3 bg-indigo-50 rounded-2xl p-3 border-2 border-indigo-200 mb-4"
                animate={{ x: [0, 3, -3, 0] }} transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
                >{CPU_AVATAR}</motion.span>
                <p className="font-bold text-indigo-700 text-sm">
                  I'm here to help! <strong>2 tries</strong> per question. Ask for a hint anytime! 🌟
                </p>
              </motion.div>

              {/* Progress dots */}
              <div className="flex justify-center gap-3 mb-4">
                {lesson.practiceSteps.map((_, i) => (
                  <motion.div
                    key={i}
                    className={clsx('rounded-full transition-all duration-300', i < practiceIdx ? 'w-4 h-4 bg-green-400' : i === practiceIdx ? 'w-5 h-5 bg-purple-500 shadow-lg' : 'w-4 h-4 bg-gray-200')}
                    animate={i === practiceIdx ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                ))}
              </div>

              {/* Question card */}
              <div className="bg-white rounded-3xl p-5 shadow-xl border-2 border-purple-100 mb-4">
                {step.visual && (
                  <motion.div
                    className="text-5xl text-center mb-3"
                    animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  >{step.visual}</motion.div>
                )}
                <p className="text-xl font-bold text-gray-800 text-center leading-snug">{step.prompt}</p>
              </div>

              {/* Hint */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, height: 0 }}
                    animate={{ opacity: 1, scale: 1, height: 'auto' }}
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
                      whileTap={!practiceRevealed ? { scale: 0.95 } : {}}
                      onClick={() => handlePracticeSelect(opt)}
                      className={clsx(
                        'rounded-2xl p-4 text-lg font-black shadow-md border-2 transition-all text-center leading-tight',
                        !practiceRevealed && 'bg-white border-purple-200 text-gray-800 hover:border-purple-400 cursor-pointer hover:shadow-lg',
                        practiceRevealed && isCorrect && 'bg-green-400 border-green-500 text-white',
                        practiceRevealed && isSelected && !isCorrect && 'bg-red-400 border-red-500 text-white',
                        practiceRevealed && !isSelected && !isCorrect && 'bg-gray-100 border-gray-200 text-gray-400 opacity-60',
                      )}
                      animate={practiceRevealed && isCorrect ? { scale: [1, 1.08, 1] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {practiceRevealed && isCorrect && '✅ '}
                      {practiceRevealed && isSelected && !isCorrect && '❌ '}
                      {opt}
                    </motion.button>
                  )
                })}
              </div>

              {/* Hint button */}
              {!practiceRevealed && !showHint && (
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
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
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
              <motion.div
                className={`bg-gradient-to-r ${gradientClass} rounded-2xl p-3 mb-4 text-center text-white`}
                initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              >
                <p className="font-black text-lg">🚀 Now try it on your OWN!</p>
                <p className="text-white/80 text-sm font-bold">No hints this time — you've got this!</p>
              </motion.div>
              <div className="flex justify-between text-sm font-bold text-gray-500 mb-2">
                <span>Question {quizIdx + 1} of {quizQuestions.length}</span>
              </div>
              <div className="h-2.5 bg-purple-100 rounded-full mb-4 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${gradientClass} rounded-full`}
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
                className="text-8xl mb-3"
                animate={{ rotate: [0, -10, 10, -5, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2 }}
              >
                {quizCorrect === quizQuestions.length ? '🌟' : quizCorrect >= quizQuestions.length / 2 ? '⭐' : '💪'}
              </motion.div>
              <h2 className="text-3xl font-black text-purple-700 mb-1">Lesson Complete!</h2>
              <p className="text-purple-400 font-bold mb-5">{lesson.title}</p>

              {/* Score card */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-100 mb-5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className={`rounded-2xl p-4 border-2 ${bgClass} text-center`}>
                    <div className="text-4xl font-black text-indigo-600">{practiceCorrect}/{lesson.practiceSteps.length}</div>
                    <div className="text-sm text-gray-500 font-bold mt-1">🦉 Practice</div>
                  </div>
                  <div className="rounded-2xl p-4 border-2 bg-purple-50 border-purple-200 text-center">
                    <div className="text-4xl font-black text-purple-600">{quizCorrect}/{quizQuestions.length}</div>
                    <div className="text-sm text-gray-500 font-bold mt-1">🚀 Quiz</div>
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

              <div className="flex gap-3 mb-3">
                <button
                  onClick={resetLesson}
                  className="flex-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-black py-4 rounded-2xl shadow-lg text-lg"
                >🔄 Try Again</button>
                <button
                  onClick={() => navigate(blockId ? '/planner' : '/choose')}
                  className={`flex-1 bg-gradient-to-r ${gradientClass} text-white font-black py-4 rounded-2xl shadow-lg text-lg`}
                >{blockId ? '📅 Back to Plan' : '🎯 New Lesson'}</button>
              </div>
              <button onClick={() => navigate('/')} className="w-full text-purple-500 font-bold py-2">🏠 Go Home</button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
