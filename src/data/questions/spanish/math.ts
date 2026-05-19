import type { Question } from '../../../types'

export const spanishMathQuestions: Question[] = [
  // === Kindergarten ===
  { id: 'sm-k-01', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '🔢', prompt: '¿Cómo se dice 3 en español?', options: ['tres', 'dos', 'uno', 'cuatro'], answer: 'tres',
    explanation: '¡Sí! 1=uno, 2=dos, 3=TRES, 4=cuatro, 5=cinco!' },
  { id: 'sm-k-02', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'suma',
    visual: '➕', prompt: 'En español: dos más tres son... (2 + 3 = ?)', options: ['cinco', 'cuatro', 'seis', 'siete'], answer: 'cinco',
    explanation: '2 + 3 = 5 = ¡CINCO! Dos MÁS tres son CINCO!' },
  { id: 'sm-k-03', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '🌟', prompt: 'How do you say TEN in Spanish?', options: ['diez', 'nueve', 'ocho', 'siete'], answer: 'diez',
    explanation: '10 = DIEZ! 6=seis, 7=siete, 8=ocho, 9=nueve, 10=diez!' },
  { id: 'sm-k-04', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'formas',
    visual: '⭕', prompt: '¿Cómo se dice CIRCLE in Spanish?', options: ['círculo', 'cuadrado', 'triángulo', 'rectángulo'], answer: 'círculo',
    explanation: 'Circle = CÍRCULO! Square = cuadrado, Triangle = triángulo!' },
  { id: 'sm-k-05', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'comparación',
    visual: '⚖️', prompt: '¿Cuál es más grande? (Which is bigger?) 8 o 5?', options: ['ocho (8)', 'cinco (5)', 'son iguales (equal)', 'no sé'], answer: 'ocho (8)',
    explanation: '8 (ocho) > 5 (cinco)! Eight is GREATER than five!' },
  { id: 'sm-k-06', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'resta',
    visual: '➖', prompt: 'Seis menos dos son... (6 - 2 = ?)', options: ['cuatro', 'tres', 'cinco', 'dos'], answer: 'cuatro',
    explanation: '6 - 2 = 4 = ¡CUATRO! Seis MENOS dos son CUATRO!' },

  // === 1st Grade ===
  { id: 'sm-1-01', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'suma',
    visual: '🌸', prompt: '¿Cuánto es ocho más siete? (8 + 7 = ?)', options: ['quince', 'catorce', 'dieciséis', 'trece'], answer: 'quince',
    explanation: '8 + 7 = 15 = ¡QUINCE! 11=once, 12=doce, 13=trece, 14=catorce, 15=quince!' },
  { id: 'sm-1-02', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'patrones',
    visual: '🔄', prompt: '¿Cuál es el siguiente número? 5, 10, 15, 20, ...', options: ['veinticinco', 'veinte', 'treinta', 'veintiuno'], answer: 'veinticinco',
    explanation: '25 = VEINTICINCO! Counting by 5s (de cinco en cinco)!' },
  { id: 'sm-1-03', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'resta',
    visual: '🍭', prompt: 'Tienes quince caramelos y comes seis. ¿Cuántos te quedan? (15 - 6 = ?)', options: ['nueve', 'ocho', 'diez', 'siete'], answer: 'nueve',
    explanation: '15 - 6 = 9 = NUEVE! ¡Muy bien con los problemas de palabras en español!' },
  { id: 'sm-1-04', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'valor posicional',
    visual: '🏠', prompt: 'En el número 35, ¿cuál es el dígito en el lugar de las DECENAS? (In 35, which digit is in the TENS place?)', options: ['3', '5', '35', '8'], answer: '3',
    explanation: 'En 35: el 3 está en las DECENAS (tens), el 5 está en las UNIDADES (ones)!' },

  // === 2nd Grade ===
  { id: 'sm-2-01', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'multiplicación',
    visual: '✖️', prompt: '¿Cuánto es dos por cinco? (2 × 5 = ?)', options: ['diez', 'siete', 'quince', 'ocho'], answer: 'diez',
    explanation: '2 × 5 = 10 = DIEZ! Dos POR cinco son DIEZ!' },
  { id: 'sm-2-02', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'fracciones',
    visual: '🍕', prompt: 'Si una pizza tiene 4 pedazos y comes 1, ¿qué fracción comiste?', options: ['un cuarto (1/4)', 'un medio (1/2)', 'tres cuartos (3/4)', 'un tercio (1/3)'], answer: 'un cuarto (1/4)',
    explanation: '1 de 4 pedazos = UN CUARTO (1/4)! ¡Perfecto!' },
  { id: 'sm-2-03', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'geometría',
    visual: '📐', prompt: '¿Cuántos lados tiene un rectángulo? (How many sides does a rectangle have?)', options: ['cuatro (4)', 'tres (3)', 'seis (6)', 'cinco (5)'], answer: 'cuatro (4)',
    explanation: 'Un rectángulo tiene CUATRO lados — ¡just like a square, but rectangles have 2 long and 2 short sides!' },

  // === 3rd Grade ===
  { id: 'sm-3-01', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'multiplicación',
    visual: '⭐', prompt: '¿Cuánto es siete por ocho? (7 × 8 = ?)', options: ['cincuenta y seis', 'cuarenta y ocho', 'sesenta y tres', 'cuarenta y dos'], answer: 'cincuenta y seis',
    explanation: '7 × 8 = 56 = CINCUENTA Y SEIS! This is a great math fact to know!' },
  { id: 'sm-3-02', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'división',
    visual: '➗', prompt: '¿Cuánto es treinta y seis entre cuatro? (36 ÷ 4 = ?)', options: ['nueve (9)', 'ocho (8)', 'siete (7)', 'diez (10)'], answer: 'nueve (9)',
    explanation: '36 ÷ 4 = 9 = NUEVE! ¡Excelente división!' },

  // === TAG Level ===
  { id: 'sm-t-01', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'razonamiento',
    visual: '🧩', prompt: 'En español: Si ⭐+⭐+⭐ = doce, ¿cuánto es ⭐+⭐?', options: ['ocho (8)', 'seis (6)', 'diez (10)', 'cuatro (4)'], answer: 'ocho (8)',
    explanation: '3 estrellas = 12, entonces 1 estrella = 4. ¡Dos estrellas = OCHO! ¡Genial!' },
  { id: 'sm-t-02', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'patrones',
    visual: '🔢', prompt: '¿Cuál es el número que falta? 3, 6, 12, 24, __', options: ['cuarenta y ocho (48)', 'treinta y seis (36)', 'cuarenta (40)', 'treinta (30)'], answer: 'cuarenta y ocho (48)',
    explanation: '¡Cada número se DUPLICA (doubles)! 24 × 2 = 48 = CUARENTA Y OCHO! ¡Fantástico!' },
]
