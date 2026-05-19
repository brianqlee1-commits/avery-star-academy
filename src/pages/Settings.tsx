import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { loadSettings, saveSettings, updateDailyFocus } from '../store'
import type { Subject, Language } from '../types'
import { TOPICS_BY_SUBJECT } from '../data/questions'
import { clsx } from 'clsx'

const PIN = '1234' // default — can be changed in settings

const SUBJECT_OPTIONS: { id: Subject; label: string; emoji: string; langs: Language[] }[] = [
  { id: 'reading', label: 'Reading', emoji: '📚', langs: ['english', 'spanish'] },
  { id: 'math', label: 'Math', emoji: '🔢', langs: ['english', 'spanish'] },
  { id: 'science', label: 'Science', emoji: '🔬', langs: ['english'] },
  { id: 'social-studies', label: 'Social Studies', emoji: '🌎', langs: ['english'] },
  { id: 'tag-prep', label: 'TAG Prep', emoji: '🧠', langs: ['english'] },
  { id: 'motivation', label: 'Mindset & Me', emoji: '💪', langs: ['english'] },
]

export default function Settings() {
  const navigate = useNavigate()
  const settings = loadSettings()

  const [pin, setPin] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [pinError, setPinError] = useState(false)
  const [focus, setFocus] = useState(settings.dailyFocus)
  const [customTopic, setCustomTopic] = useState(settings.dailyFocus.customTopic)
  const [playerName, setPlayerName] = useState(settings.playerName)
  const [saved, setSaved] = useState(false)
  const [newPin, setNewPin] = useState('')

  function submitPin() {
    const correctPin = settings.parentPin || PIN
    if (pin === correctPin) { setUnlocked(true); setPinError(false) }
    else { setPinError(true); setPin('') }
  }

  function toggleSubject(s: Subject) {
    const current = focus.subjects
    const next = current.includes(s) ? current.filter(x => x !== s) : [...current, s]
    setFocus({ ...focus, subjects: next })
  }

  function save() {
    const s = loadSettings()
    s.playerName = playerName
    if (newPin.length === 4 && /^\d+$/.test(newPin)) s.parentPin = newPin
    saveSettings(s)
    updateDailyFocus({ ...focus, customTopic })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function clearProgress() {
    if (window.confirm('Clear ALL progress and stars? This cannot be undone!')) {
      localStorage.clear()
      navigate('/')
    }
  }

  const topicKeys = focus.subjects.map(s => `${focus.language}-${s}`)
  const suggestedTopics = topicKeys.flatMap(k => TOPICS_BY_SUBJECT[k] ?? [])

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-50 flex flex-col items-center justify-center px-4">
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 w-full max-w-sm text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="text-5xl mb-4">🔐</div>
          <h2 className="text-2xl font-black text-purple-700 mb-2">Parent Access</h2>
          <p className="text-gray-500 mb-6 text-sm">Enter your 4-digit PIN</p>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={pin}
            onChange={e => setPin(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submitPin()}
            className="w-full text-center text-2xl font-black border-2 border-purple-300 rounded-2xl py-3 mb-4 tracking-widest focus:outline-none focus:border-purple-500"
            placeholder="····"
            autoFocus
          />
          {pinError && <p className="text-red-500 font-bold mb-3">Wrong PIN, try again!</p>}
          <div className="flex gap-3">
            <button onClick={() => navigate('/')} className="flex-1 bg-gray-100 font-bold py-3 rounded-2xl text-gray-600">Cancel</button>
            <button onClick={submitPin} className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-3 rounded-2xl">Enter</button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Default PIN: 1234</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-50 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-lg">
        <button onClick={() => navigate('/')} className="mb-4 text-purple-600 font-bold text-lg">← Back</button>
        <h1 className="text-3xl font-black text-purple-700 mb-6">⚙️ Parent Settings</h1>

        {/* Player name */}
        <Section title="Player Name" emoji="👧">
          <input
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            className="w-full border-2 border-purple-200 rounded-2xl py-2 px-4 font-bold text-lg focus:outline-none focus:border-purple-500"
            placeholder="Avery"
          />
        </Section>

        {/* Daily Focus */}
        <Section title="Daily Focus" emoji="📅">
          <label className="flex items-center gap-3 mb-4 cursor-pointer">
            <div
              className={clsx('w-12 h-6 rounded-full transition-all', focus.enabled ? 'bg-purple-500' : 'bg-gray-300')}
              onClick={() => setFocus({ ...focus, enabled: !focus.enabled })}
            >
              <div className={clsx('w-6 h-6 bg-white rounded-full shadow transition-all', focus.enabled ? 'translate-x-6' : 'translate-x-0')} />
            </div>
            <span className="font-bold text-gray-700">{focus.enabled ? 'Daily focus ON' : 'Daily focus OFF'}</span>
          </label>

          {focus.enabled && (
            <>
              <p className="font-bold text-gray-700 mb-2">Language:</p>
              <div className="flex gap-2 mb-4">
                {(['english', 'spanish'] as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => setFocus({ ...focus, language: l })}
                    className={clsx('flex-1 py-2 rounded-xl font-black capitalize border-2', focus.language === l ? 'bg-purple-500 text-white border-purple-600' : 'bg-white text-gray-600 border-gray-200')}
                  >
                    {l === 'english' ? '🇺🇸' : '🇲🇽'} {l}
                  </button>
                ))}
              </div>

              <p className="font-bold text-gray-700 mb-2">Select subjects for today:</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {SUBJECT_OPTIONS.filter(s => s.langs.includes(focus.language)).map(s => (
                  <button
                    key={s.id}
                    onClick={() => toggleSubject(s.id)}
                    className={clsx('py-3 px-3 rounded-xl font-bold border-2 text-sm flex items-center gap-2', focus.subjects.includes(s.id) ? 'bg-purple-500 text-white border-purple-600' : 'bg-white text-gray-600 border-gray-200')}
                  >
                    <span>{s.emoji}</span> {s.label}
                  </button>
                ))}
              </div>

              <p className="font-bold text-gray-700 mb-2">Custom topic (optional):</p>
              <input
                value={customTopic}
                onChange={e => setCustomTopic(e.target.value)}
                placeholder="e.g. animals, addition, solar system..."
                className="w-full border-2 border-purple-200 rounded-xl py-2 px-4 font-bold focus:outline-none focus:border-purple-500 mb-3"
              />
              {suggestedTopics.length > 0 && (
                <div>
                  <p className="text-xs text-gray-500 mb-2 font-bold">Suggested topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(suggestedTopics)].map(t => (
                      <button
                        key={t}
                        onClick={() => setCustomTopic(t)}
                        className={clsx('text-xs px-3 py-1 rounded-full font-bold border capitalize', customTopic === t ? 'bg-purple-500 text-white border-purple-500' : 'bg-white text-purple-600 border-purple-200')}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </Section>

        {/* Change PIN */}
        <Section title="Change PIN" emoji="🔐">
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={newPin}
            onChange={e => setNewPin(e.target.value)}
            placeholder="Enter new 4-digit PIN"
            className="w-full border-2 border-purple-200 rounded-2xl py-2 px-4 font-bold text-lg tracking-widest focus:outline-none focus:border-purple-500"
          />
          {newPin.length > 0 && newPin.length < 4 && <p className="text-orange-500 text-sm mt-1">PIN must be 4 digits</p>}
          {newPin.length === 4 && <p className="text-green-500 text-sm mt-1">✅ New PIN ready — click Save!</p>}
        </Section>

        {/* Save */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={save}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-4 rounded-2xl shadow-lg text-xl mb-4"
        >
          {saved ? '✅ Saved!' : '💾 Save Settings'}
        </motion.button>

        {/* Danger zone */}
        <Section title="Danger Zone" emoji="⚠️">
          <button
            onClick={clearProgress}
            className="w-full bg-red-100 text-red-600 font-black py-3 rounded-2xl border-2 border-red-300"
          >
            🗑️ Clear All Progress
          </button>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-purple-100 mb-4">
      <h3 className="font-black text-purple-700 text-lg mb-3">{emoji} {title}</h3>
      {children}
    </div>
  )
}
