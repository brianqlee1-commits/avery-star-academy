export type Language = 'english' | 'spanish'

export type Subject =
  | 'reading'
  | 'math'
  | 'science'
  | 'social-studies'
  | 'tag-prep'
  | 'motivation'

export type GradeLevel = 'K' | '1' | '2' | '3' | 'TAG'

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'pattern'
  | 'match'

export interface Question {
  id: string
  type: QuestionType
  level: GradeLevel
  subject: Subject
  language: Language
  topic?: string
  prompt: string
  visual?: string          // emoji/symbol visual aid shown above prompt
  options?: string[]       // for multiple-choice, true-false
  answer: string | number  // correct option text or index
  explanation?: string     // short encouragement / explanation
  hint?: string
}

export interface PatternQuestion extends Question {
  type: 'pattern'
  patternItems: string[]   // the visible pattern items
  blankIndex: number       // which index is the blank
  options: string[]
}

export interface Reward {
  id: string
  name: string
  emoji: string
  description: string
  starsRequired: number
  unlocked: boolean
}

export interface Progress {
  totalStars: number
  subjectStars: Record<string, number>
  unlockedRewards: string[]
  levelProgress: Record<string, number>  // subject+level -> questions answered
  streakDays: number
  lastPlayed: string
}

export interface DailyFocus {
  enabled: boolean
  subjects: Subject[]
  customTopic: string
  language: Language
}

export interface Settings {
  parentPin: string
  dailyFocus: DailyFocus
  soundEnabled: boolean
  playerName: string
  favoriteCharacter: string
}
