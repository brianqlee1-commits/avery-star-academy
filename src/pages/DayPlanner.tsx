import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import type { Subject, Language, QuizMode } from '../types'
import { loadSchedule, saveSchedule } from '../store'
import { TOPICS_BY_SUBJECT } from '../data/questions'

interface BlockDraft {
  subject: Subject
  topic: string
  customTopic: string
  durationMinutes: number
  lang: Language
  mode: QuizMode
}

const SUBJECTS: { id: Subject; label: string; emoji: string; color: string; bg: string }[] = [
  { id: 'reading',       label: 'Reading',       emoji: '📚', color: 'from-blue-500 to-indigo-600',   bg: 'bg-blue-50 border-blue-300' },
  { id: 'math',          label: 'Math',           emoji: '🔢', color: 'from-green-500 to-teal-600',    bg: 'bg-green-50 border-green-300' },
  { id: 'vocabulary',    label: 'Vocabulary',     emoji: '🔤', color: 'from-cyan-500 to-blue-600',     bg: 'bg-cyan-50 border-cyan-300' },
  { id: 'science',       label: 'Science',        emoji: '🔬', color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-50 border-yellow-300' },
  { id: 'social-studies',label: 'Social Studies', emoji: '🌎', color: 'from-pink-500 to-rose-600',     bg: 'bg-pink-50 border-pink-300' },
  { id: 'tag-prep',      label: 'TAG Prep',       emoji: '🧠', color: 'from-purple-600 to-violet-700', bg: 'bg-purple-50 border-purple-300' },
  { id: 'motivation',    label: 'Mindset & Me',   emoji: '💪', color: 'from-orange-500 to-red-500',    bg: 'bg-orange-50 border-orange-300' },
]

const DURATIONS = [15, 20, 30, 45, 60]

const DEFAULT_DRAFT: BlockDraft = {
  subject: 'reading', topic: '', customTopic: '', durationMinutes: 30, lang: 'english', mode: 'lesson',
}

function uid() { return Math.random().toString(36).slice(2, 9) }

export default function DayPlanner() {
  const navigate = useNavigate()
  const [schedule, setSchedule] = useState(() => loadSchedule())
  const [adding, setAdding] = useState(false)
  const [draft, setDraft] = useState<BlockDraft>(DEFAULT_DRAFT)

  const topicKey = `${draft.lang}-${draft.subject}`
  const availableTopics = TOPICS_BY_SUBJECT[topicKey] ?? []

  const totalMinutes = schedule.blocks.reduce((s, b) => s + b.durationMinutes, 0)
  const completedCount = schedule.blocks.filter(b => b.completed).length

  function subjectInfo(id: Subject) {
    return SUBJECTS.find(s => s.id === id) ?? SUBJECTS[0]
  }

  function addBlock() {
    const topic = draft.customTopic.trim() || draft.topic
    if (!topic) return
    const newBlock = { id: uid(), subject: draft.subject, topic, durationMinutes: draft.durationMinutes, lang: draft.lang, mode: draft.mode, completed: false }
    const updated = { ...schedule, blocks: [...schedule.blocks, newBlock] }
    setSchedule(updated)
    saveSchedule(updated)
    setDraft(DEFAULT_DRAFT)
    setAdding(false)
  }

  function removeBlock(id: string) {
    const updated = { ...schedule, blocks: schedule.blocks.filter(b => b.id !== id) }
    setSchedule(updated)
    saveSchedule(updated)
  }

  function moveBlock(id: string, dir: -1 | 1) {
    const blocks = [...schedule.blocks]
    const i = blocks.findIndex(b => b.id === id)
    if (i + dir < 0 || i + dir >= blocks.length) return
    ;[blocks[i], blocks[i + dir]] = [blocks[i + dir], blocks[i]]
    const updated = { ...schedule, blocks }
    setSchedule(updated)
    saveSchedule(updated)
  }

  function toggleDLD() {
    const updated = { ...schedule, isDLD: !schedule.isDLD }
    setSchedule(updated)
    saveSchedule(updated)
  }

  function startBlock(b: typeof schedule.blocks[0]) {
    const path = b.mode === 'lesson'
      ? `/lesson/${b.lang}/${b.subject}/K?block=${b.id}`
      : `/quiz/${b.lang}/${b.subject}/K?block=${b.id}`
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => navigate('/')} className="text-purple-600 font-bold text-lg">← Back</button>
          <div className="flex-1">
            <h1 className="text-2xl font-black text-purple-700">📅 Day Planner</h1>
            <p className="text-purple-400 text-sm font-bold">Build Avery's learning schedule</p>
          </div>
          <button
            onClick={toggleDLD}
            className={clsx('px-3 py-1.5 rounded-full font-black text-xs border-2 transition-all', schedule.isDLD ? 'bg-yellow-400 text-yellow-900 border-yellow-500' : 'bg-white text-gray-500 border-gray-200')}
          >
            🖥️ DLD
          </button>
        </div>

        {/* DLD Banner */}
        <AnimatePresence>
          {schedule.isDLD && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="mb-4 bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-4 text-center"
            >
              <p className="font-black text-yellow-800 text-lg">🖥️ Digital Learning Day!</p>
              <p className="text-yellow-700 text-sm font-bold">This is a scheduled learning day — follow the plan below!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary stats */}
        {schedule.blocks.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-2xl p-3 text-center shadow-sm border-2 border-purple-100">
              <div className="text-2xl font-black text-purple-600">{schedule.blocks.length}</div>
              <div className="text-xs font-bold text-gray-500">Subjects</div>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center shadow-sm border-2 border-blue-100">
              <div className="text-2xl font-black text-blue-600">{totalMinutes}m</div>
              <div className="text-xs font-bold text-gray-500">Total Time</div>
            </div>
            <div className="bg-white rounded-2xl p-3 text-center shadow-sm border-2 border-green-100">
              <div className="text-2xl font-black text-green-600">{completedCount}/{schedule.blocks.length}</div>
              <div className="text-xs font-bold text-gray-500">Done</div>
            </div>
          </div>
        )}

        {/* Progress bar for day */}
        {schedule.blocks.length > 0 && (
          <div className="mb-5">
            <div className="h-3 bg-purple-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full"
                animate={{ width: `${schedule.blocks.length ? (completedCount / schedule.blocks.length) * 100 : 0}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <p className="text-xs font-bold text-gray-500 mt-1 text-right">{Math.round((completedCount / Math.max(1, schedule.blocks.length)) * 100)}% complete</p>
          </div>
        )}

        {/* Schedule blocks — timeline */}
        {schedule.blocks.length > 0 && (
          <div className="space-y-3 mb-5">
            {schedule.blocks.map((block, idx) => {
              const info = subjectInfo(block.subject)
              return (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={clsx(
                    'rounded-3xl border-2 overflow-hidden shadow-md transition-all',
                    block.completed ? 'opacity-60 bg-gray-50 border-gray-200' : 'bg-white border-purple-100'
                  )}
                >
                  {/* Colored top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${info.color}`} />
                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      {/* Subject icon */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                        {info.emoji}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-gray-800">{info.label}</span>
                          {block.completed && <span className="text-green-500 font-black text-sm">✅ Done!</span>}
                        </div>
                        <p className="text-sm font-bold text-purple-600 truncate capitalize">📌 {block.topic}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5 font-bold text-gray-600">⏱ {block.durationMinutes}min</span>
                          <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5 font-bold text-gray-600">
                            {block.mode === 'lesson' ? '📖 Learn It' : '🚀 Quiz'}
                          </span>
                          <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5 font-bold text-gray-600 capitalize">{block.lang === 'spanish' ? '🇲🇽' : '🇺🇸'}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-1 flex-shrink-0">
                        {!block.completed && (
                          <button
                            onClick={() => startBlock(block)}
                            className={`bg-gradient-to-r ${info.color} text-white font-black text-xs px-3 py-1.5 rounded-xl shadow`}
                          >▶ Start</button>
                        )}
                        <div className="flex gap-1">
                          <button onClick={() => moveBlock(block.id, -1)} disabled={idx === 0} className="text-gray-400 text-xs px-1.5 py-1 rounded-lg bg-gray-100 disabled:opacity-30">↑</button>
                          <button onClick={() => moveBlock(block.id, 1)} disabled={idx === schedule.blocks.length - 1} className="text-gray-400 text-xs px-1.5 py-1 rounded-lg bg-gray-100 disabled:opacity-30">↓</button>
                          <button onClick={() => removeBlock(block.id)} className="text-red-400 text-xs px-1.5 py-1 rounded-lg bg-red-50">✕</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Empty state */}
        {schedule.blocks.length === 0 && !adding && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-12 bg-white/60 rounded-3xl border-2 border-dashed border-purple-200 mb-5"
          >
            <div className="text-5xl mb-3">📋</div>
            <p className="font-black text-purple-600 text-lg">No plan yet!</p>
            <p className="text-gray-500 font-bold text-sm mt-1">Tap "Add Subject" to build today's schedule.</p>
          </motion.div>
        )}

        {/* Add block form */}
        <AnimatePresence>
          {adding && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-5 shadow-xl border-2 border-purple-200 mb-5"
            >
              <h3 className="font-black text-purple-700 text-lg mb-4">➕ Add a Subject Block</h3>

              {/* Language */}
              <p className="font-black text-gray-600 text-sm mb-2">Language</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {(['english', 'spanish'] as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => setDraft(d => ({ ...d, lang: l, topic: '' }))}
                    className={clsx('rounded-xl py-2 font-black text-sm border-2 capitalize transition-all', draft.lang === l ? 'bg-purple-500 text-white border-purple-600' : 'bg-white text-gray-600 border-gray-200')}
                  >
                    {l === 'english' ? '🇺🇸' : '🇲🇽'} {l}
                  </button>
                ))}
              </div>

              {/* Subject */}
              <p className="font-black text-gray-600 text-sm mb-2">Subject</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {SUBJECTS.filter(s => draft.lang === 'english' || ['reading', 'math'].includes(s.id)).map(s => (
                  <button
                    key={s.id}
                    onClick={() => setDraft(d => ({ ...d, subject: s.id, topic: '' }))}
                    className={clsx('rounded-xl py-2 px-3 font-black text-sm border-2 flex items-center gap-2 transition-all', draft.subject === s.id ? `bg-gradient-to-r ${s.color} text-white border-transparent` : 'bg-white text-gray-600 border-gray-200')}
                  >
                    <span>{s.emoji}</span><span>{s.label}</span>
                  </button>
                ))}
              </div>

              {/* Topic */}
              <p className="font-black text-gray-600 text-sm mb-2">Topic</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {availableTopics.map(t => (
                  <button
                    key={t}
                    onClick={() => setDraft(d => ({ ...d, topic: t, customTopic: '' }))}
                    className={clsx('rounded-full px-3 py-1 text-xs font-bold border-2 capitalize transition-all', draft.topic === t && !draft.customTopic ? 'bg-purple-500 text-white border-purple-600' : 'bg-white text-gray-600 border-gray-200')}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Or type a custom topic..."
                value={draft.customTopic}
                onChange={e => setDraft(d => ({ ...d, customTopic: e.target.value, topic: '' }))}
                className="w-full border-2 border-purple-200 rounded-xl px-4 py-2 font-bold text-gray-700 text-sm mb-4 focus:outline-none focus:border-purple-400"
              />

              {/* Duration */}
              <p className="font-black text-gray-600 text-sm mb-2">Duration</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {DURATIONS.map(d => (
                  <button
                    key={d}
                    onClick={() => setDraft(prev => ({ ...prev, durationMinutes: d }))}
                    className={clsx('rounded-xl px-4 py-2 font-black text-sm border-2 transition-all', draft.durationMinutes === d ? 'bg-blue-500 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200')}
                  >
                    {d}min
                  </button>
                ))}
              </div>

              {/* Mode */}
              <p className="font-black text-gray-600 text-sm mb-2">Activity</p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {([['lesson', '📖 Learn It!', 'Teach → Practice → Quiz'], ['quiz', '🚀 Quick Quiz', 'Jump straight to questions']] as const).map(([m, label, desc]) => (
                  <button
                    key={m}
                    onClick={() => setDraft(d => ({ ...d, mode: m }))}
                    className={clsx('rounded-xl p-3 font-bold text-sm border-2 text-left transition-all', draft.mode === m ? 'bg-purple-500 text-white border-purple-600' : 'bg-white text-gray-700 border-gray-200')}
                  >
                    <div className="font-black">{label}</div>
                    <div className={clsx('text-xs mt-0.5', draft.mode === m ? 'text-purple-100' : 'text-gray-400')}>{desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => { setAdding(false); setDraft(DEFAULT_DRAFT) }}
                  className="flex-1 py-3 rounded-2xl border-2 border-gray-200 font-black text-gray-500"
                >Cancel</button>
                <button
                  onClick={addBlock}
                  disabled={!draft.topic && !draft.customTopic.trim()}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black shadow-lg disabled:opacity-40"
                >✅ Add Block</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add button */}
        {!adding && (
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setAdding(true)}
            className="w-full py-4 rounded-2xl border-2 border-dashed border-purple-300 text-purple-600 font-black text-lg bg-white/60 mb-4"
          >
            ➕ Add Subject
          </motion.button>
        )}

        {/* Clear day */}
        {schedule.blocks.length > 0 && !adding && (
          <button
            onClick={() => { const e = { ...schedule, blocks: [] }; setSchedule(e); saveSchedule(e) }}
            className="w-full text-red-400 font-bold text-sm py-2"
          >
            🗑️ Clear Day
          </button>
        )}

      </div>
    </div>
  )
}
