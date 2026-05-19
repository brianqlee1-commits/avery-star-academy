import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Subject, Language, GradeLevel } from '../types'
import { loadSettings } from '../store'

interface SubjectConfig {
  id: Subject
  label: string
  emoji: string
  color: string
  border: string
  english: boolean
  spanish: boolean
}

const SUBJECTS: SubjectConfig[] = [
  { id: 'reading', label: 'Reading', emoji: '📚', color: 'from-blue-400 to-indigo-500', border: 'border-blue-600', english: true, spanish: true },
  { id: 'math', label: 'Math', emoji: '🔢', color: 'from-green-400 to-teal-500', border: 'border-green-600', english: true, spanish: true },
  { id: 'science', label: 'Science', emoji: '🔬', color: 'from-yellow-400 to-orange-500', border: 'border-yellow-600', english: true, spanish: false },
  { id: 'social-studies', label: 'Social Studies', emoji: '🌎', color: 'from-pink-400 to-rose-500', border: 'border-pink-600', english: true, spanish: false },
  { id: 'tag-prep', label: 'TAG Prep', emoji: '🧠', color: 'from-purple-500 to-violet-600', border: 'border-purple-700', english: true, spanish: false },
  { id: 'motivation', label: 'Mindset & Me', emoji: '💪', color: 'from-orange-400 to-red-500', border: 'border-orange-600', english: true, spanish: false },
]

const LEVELS: { id: GradeLevel; label: string; emoji: string }[] = [
  { id: 'K', label: 'Kindergarten', emoji: '🌱' },
  { id: '1', label: '1st Grade', emoji: '⭐' },
  { id: '2', label: '2nd Grade', emoji: '🌟' },
  { id: '3', label: '3rd Grade', emoji: '🚀' },
  { id: 'TAG', label: 'TAG Challenge', emoji: '🏆' },
]

export default function ChooseSubject() {
  const navigate = useNavigate()
  const settings = loadSettings()
  const [step, setStep] = useState<'lang' | 'subject' | 'level'>('lang')
  const [lang, setLang] = useState<Language>('english')
  const [subject, setSubject] = useState<Subject | null>(null)

  const focusSubjects = settings.dailyFocus.enabled ? settings.dailyFocus.subjects : []

  function handleSubject(s: Subject) {
    setSubject(s)
    setStep('level')
  }

  function handleLevel(level: GradeLevel) {
    navigate(`/quiz/${lang}/${subject}/${level}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-lg">
        {/* Back */}
        <button
          onClick={() => step === 'lang' ? navigate('/') : step === 'subject' ? setStep('lang') : setStep('subject')}
          className="mb-5 flex items-center gap-2 text-purple-600 font-bold text-lg"
        >
          ← Back
        </button>

        {/* Step: Language */}
        {step === 'lang' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-black text-purple-700 text-center mb-6">Which language?</h2>
            <div className="grid grid-cols-2 gap-4">
              {(['english', 'spanish'] as Language[]).map(l => (
                <motion.button
                  key={l}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setLang(l); setStep('subject') }}
                  className="bg-white rounded-3xl p-6 shadow-md border-4 border-purple-200 hover:border-purple-500 flex flex-col items-center gap-3 transition-all"
                >
                  <span className="text-5xl">{l === 'english' ? '🇺🇸' : '🇲🇽'}</span>
                  <span className="font-black text-xl text-gray-800 capitalize">{l}</span>
                  {l === 'spanish' && <span className="text-xs text-purple-500 font-bold">Reading & Math only</span>}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step: Subject */}
        {step === 'subject' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-black text-purple-700 text-center mb-2">What do you want to learn?</h2>
            {focusSubjects.length > 0 && (
              <p className="text-center text-yellow-600 font-bold text-sm mb-4">📅 Today's focus is highlighted!</p>
            )}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {SUBJECTS.filter(s => lang === 'english' ? s.english : s.spanish).map((s, i) => {
                const isFocused = focusSubjects.includes(s.id)
                return (
                  <motion.button
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSubject(s.id)}
                    className={`bg-gradient-to-br ${s.color} text-white rounded-3xl p-5 shadow-lg border-b-4 ${s.border} flex flex-col items-center gap-2 relative`}
                  >
                    {isFocused && (
                      <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-1 rounded-full">TODAY</span>
                    )}
                    <span className="text-4xl">{s.emoji}</span>
                    <span className="font-black text-lg text-center">{s.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Step: Level */}
        {step === 'level' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-black text-purple-700 text-center mb-6">Choose your level!</h2>
            <div className="flex flex-col gap-3">
              {LEVELS.map((lv, i) => (
                <motion.button
                  key={lv.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleLevel(lv.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-white border-2 shadow-md font-black text-xl text-gray-800 hover:border-purple-400 hover:bg-purple-50 transition-all ${lv.id === 'TAG' ? 'border-yellow-400 bg-yellow-50' : 'border-purple-200'}`}
                >
                  <span className="text-3xl">{lv.emoji}</span>
                  <div className="text-left">
                    <div>{lv.label}</div>
                    {lv.id === 'TAG' && <div className="text-sm text-yellow-600 font-bold">Extra challenge! 🔥</div>}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
