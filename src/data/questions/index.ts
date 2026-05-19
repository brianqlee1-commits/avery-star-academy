import type { Question, Subject, GradeLevel, Language } from '../../types'
import { readingQuestions } from './english/reading'
import { mathQuestions } from './english/math'
import { scienceQuestions } from './english/science'
import { socialStudiesQuestions } from './english/social-studies'
import { tagPrepQuestions } from './english/tag-prep'
import { motivationQuestions } from './english/motivation'
import { spanishReadingQuestions } from './spanish/reading'
import { spanishMathQuestions } from './spanish/math'

export const ALL_QUESTIONS: Question[] = [
  ...readingQuestions,
  ...mathQuestions,
  ...scienceQuestions,
  ...socialStudiesQuestions,
  ...(tagPrepQuestions as Question[]),
  ...motivationQuestions,
  ...spanishReadingQuestions,
  ...spanishMathQuestions,
]

export function getQuestions(opts: {
  subject?: Subject
  level?: GradeLevel
  language?: Language
  topic?: string
  count?: number
}): Question[] {
  let pool = ALL_QUESTIONS

  if (opts.language) pool = pool.filter(q => q.language === opts.language)
  if (opts.subject) pool = pool.filter(q => q.subject === opts.subject)
  if (opts.level) pool = pool.filter(q => q.level === opts.level)
  if (opts.topic) {
    const t = opts.topic.toLowerCase()
    pool = pool.filter(q => q.topic?.toLowerCase().includes(t) || q.prompt.toLowerCase().includes(t))
  }

  // Shuffle
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return opts.count ? shuffled.slice(0, opts.count) : shuffled
}

export function searchByCustomTopic(topic: string): Question[] {
  const keywords = topic.toLowerCase().split(/\s+/).filter(k => k.length > 2)
  return ALL_QUESTIONS.filter(q => {
    const haystack = `${q.topic ?? ''} ${q.prompt} ${q.subject}`.toLowerCase()
    return keywords.some(kw => haystack.includes(kw))
  }).sort(() => Math.random() - 0.5).slice(0, 10)
}

export const TOPICS_BY_SUBJECT: Record<string, string[]> = {
  'english-reading': ['phonics', 'sight words', 'rhyming', 'comprehension', 'vocabulary', 'story elements', 'main idea', 'author\'s purpose', 'figurative language', 'analogies', 'inference'],
  'english-math': ['counting', 'addition', 'subtraction', 'multiplication', 'division', 'shapes', 'fractions', 'measurement', 'patterns', 'word problems', 'place value', 'number patterns'],
  'english-science': ['living things', 'seasons', 'animals', 'plants', 'weather', 'life cycles', 'matter', 'solar system', 'ecosystems', 'adaptations', 'forces', 'human body'],
  'english-social-studies': ['community helpers', 'maps', 'geography', 'history', 'government', 'economics', 'civics', 'symbols'],
  'english-tag-prep': ['non-verbal patterns', 'verbal analogies', 'quantitative reasoning', 'classification', 'spatial reasoning', 'rotation', 'matrices'],
  'english-motivation': ['growth mindset', 'confidence', 'persistence', 'goal setting', 'kindness', 'resilience'],
  'spanish-reading': ['colores', 'números', 'animales', 'familia', 'vocabulario', 'comprensión', 'frases'],
  'spanish-math': ['suma', 'resta', 'multiplicación', 'fracciones', 'patrones', 'geometría'],
}
