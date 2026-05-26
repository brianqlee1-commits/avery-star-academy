import type { Progress, Settings, DailyFocus, DaySchedule, ScheduleBlock } from '../types'

const PROGRESS_KEY = 'asa_progress'
const SETTINGS_KEY = 'asa_settings'

const defaultProgress: Progress = {
  totalStars: 0,
  subjectStars: {},
  unlockedRewards: [],
  levelProgress: {},
  streakDays: 0,
  lastPlayed: '',
}

const defaultSettings: Settings = {
  parentPin: '1234',
  dailyFocus: {
    enabled: false,
    subjects: [],
    customTopic: '',
    language: 'english',
  },
  soundEnabled: true,
  voiceEnabled: true,
  playerName: 'Avery',
  favoriteCharacter: '',
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : { ...defaultProgress }
  } catch {
    return { ...defaultProgress }
  }
}

export function saveProgress(p: Progress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p))
}

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : { ...defaultSettings }
  } catch {
    return { ...defaultSettings }
  }
}

export function saveSettings(s: Settings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s))
}

export function addStars(subject: string, count: number): Progress {
  const p = loadProgress()
  p.totalStars += count
  p.subjectStars[subject] = (p.subjectStars[subject] ?? 0) + count
  const today = new Date().toDateString()
  if (p.lastPlayed !== today) {
    p.streakDays = p.lastPlayed === new Date(Date.now() - 86400000).toDateString()
      ? p.streakDays + 1
      : 1
    p.lastPlayed = today
  }
  saveProgress(p)
  return p
}

export function unlockReward(rewardId: string): Progress {
  const p = loadProgress()
  if (!p.unlockedRewards.includes(rewardId)) {
    p.unlockedRewards.push(rewardId)
    saveProgress(p)
  }
  return p
}

export function updateDailyFocus(focus: DailyFocus): void {
  const s = loadSettings()
  s.dailyFocus = focus
  saveSettings(s)
}

const SCHEDULE_KEY = 'asa_schedule'

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

export function loadSchedule(): DaySchedule {
  try {
    const raw = localStorage.getItem(SCHEDULE_KEY)
    if (!raw) return { date: todayISO(), isDLD: false, blocks: [] }
    const parsed: DaySchedule = JSON.parse(raw)
    // Reset completed flags if schedule is from a previous day
    if (parsed.date !== todayISO()) {
      return { date: todayISO(), isDLD: false, blocks: [] }
    }
    return parsed
  } catch {
    return { date: todayISO(), isDLD: false, blocks: [] }
  }
}

export function saveSchedule(s: DaySchedule): void {
  localStorage.setItem(SCHEDULE_KEY, JSON.stringify({ ...s, date: todayISO() }))
}

export function markBlockComplete(blockId: string): void {
  const s = loadSchedule()
  const block = s.blocks.find((b: ScheduleBlock) => b.id === blockId)
  if (block) { block.completed = true; saveSchedule(s) }
}
