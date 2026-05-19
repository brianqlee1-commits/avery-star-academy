export type Language = 'english' | 'spanish'

export type Subject =
  | 'reading'
  | 'math'
  | 'science'
  | 'social-studies'
  | 'tag-prep'
  | 'motivation'
  | 'vocabulary'

export type QuizMode = 'lesson' | 'quiz'

// A worked example shown during the Demonstrate phase
export interface WorkedExample {
  visual?: string
  prompt: string
  answer: string
  explanation: string
}

// A guided practice question (simpler, hints enabled, 2 attempts)
export interface PracticeStep {
  visual?: string
  prompt: string
  options: string[]
  answer: string
  hint: string
  explanation: string
}

// A full lesson: Demonstrate → Practice → Quiz
export interface Lesson {
  id: string
  subject: Subject
  level: GradeLevel
  language: Language
  topic: string
  title: string
  visual: string            // big emoji for the concept
  tagline: string           // one-line hook shown on card
  explanation: string       // the "teach" text (2-4 sentences, kid-friendly)
  keyPoints: string[]       // 2-3 bullet points
  examples: WorkedExample[] // 2 worked examples shown step-by-step
  practiceSteps: PracticeStep[] // 3 guided questions
  quizTopics: string[]      // topic tags to pull quiz questions from main bank
}

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

export interface ScheduleBlock {
  id: string
  subject: Subject
  topic: string
  durationMinutes: number
  lang: Language
  mode: QuizMode
  completed: boolean
}

export interface DaySchedule {
  date: string
  isDLD: boolean
  blocks: ScheduleBlock[]
}
