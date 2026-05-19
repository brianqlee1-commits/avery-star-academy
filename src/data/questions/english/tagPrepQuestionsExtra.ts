import type { Question, PatternQuestion } from '../../../types'

// TAG Prep EXTRA — HEAVILY weighted toward NON-VERBAL reasoning (Avery's gap: 66th %ile)
// Each level: 15+ non-verbal pattern questions, 5 verbal analogies, 5 quantitative reasoning

export const tagPrepQuestionsExtra: (Question | PatternQuestion)[] = [

  // =====================================================================
  // KINDERGARTEN — NON-VERBAL PATTERNS (15 questions)
  // =====================================================================
  { id: 'tp2-nv-01', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🔴', prompt: 'What comes next in the pattern?',
    patternItems: ['🔴', '🔴', '🔵', '🔴', '🔴'],
    blankIndex: 5, options: ['🔵', '🔴', '🟢', '🟡'], answer: '🔵',
    explanation: 'The pattern is Red, Red, Blue repeating — so next is BLUE! Great pattern spotting!' },

  { id: 'tp2-nv-02', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🐱', prompt: 'Which animal comes next?',
    patternItems: ['🐶', '🐱', '🐶', '🐱', '🐶'],
    blankIndex: 5, options: ['🐶', '🐱', '🐰', '🐸'], answer: '🐱',
    explanation: 'Dog, Cat, Dog, Cat, Dog... then CAT! The ABAB pattern keeps repeating!' },

  { id: 'tp2-nv-03', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '⭐', prompt: 'What shape completes the pattern?',
    patternItems: ['⭐', '🔵', '🔺', '⭐', '🔵'],
    blankIndex: 5, options: ['🔺', '⭐', '🔵', '🟡'], answer: '🔺',
    explanation: 'Star, Circle, Triangle repeating — the 6th spot is TRIANGLE! Pattern of 3!' },

  { id: 'tp2-nv-04', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'size patterns',
    visual: '🐘', prompt: 'The animals are getting BIGGER. What comes next?',
    patternItems: ['🐭', '🐱', '🐶', '🐮'],
    blankIndex: 4, options: ['🐘', '🐭', '🦋', '🐙'], answer: '🐘',
    explanation: 'Mouse, Cat, Dog, Cow, ELEPHANT — each animal is bigger than the last!' },

  { id: 'tp2-nv-05', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🌕', prompt: 'What comes next?',
    patternItems: ['🌕', '🌕', '🌕', '⭐', '🌕', '🌕'],
    blankIndex: 6, options: ['🌕', '⭐', '🌙', '🌟'], answer: '🌕',
    explanation: 'Three Moons, then a Star, then the pattern repeats! Next is MOON again!' },

  { id: 'tp2-nv-06', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal classification',
    visual: '🗂️', prompt: 'Look at these shapes: 🔴🔴🔴🔺. Which one does NOT belong?',
    options: ['🔺 (triangle)', '🔴 (circle)', '🔴 (circle)', '🔴 (circle)'], answer: '🔺 (triangle)',
    explanation: 'The three circles are all round — the TRIANGLE is different because it has corners!' },

  { id: 'tp2-nv-07', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'AABB pattern',
    visual: '🟨', prompt: 'What comes next? (Notice the pairs!)',
    patternItems: ['🟨', '🟨', '🟥', '🟥', '🟨', '🟨'],
    blankIndex: 6, options: ['🟨', '🟥', '🟦', '🟩'], answer: '🟥',
    explanation: 'Yellow Yellow, Red Red — the AABB pattern! After two yellows and two yellows comes RED RED!' },

  { id: 'tp2-nv-08', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🔲', prompt: 'Look at this shape: ■. If you flip it upside down, what does it look like?',
    options: ['■ (same square)', '🔺 (triangle)', '● (circle)', '⬟ (diamond)'], answer: '■ (same square)',
    explanation: 'A square looks the SAME when you flip it! Squares are symmetrical — they look the same from any direction!' },

  { id: 'tp2-nv-09', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🍎', prompt: 'What comes next in the fruit pattern?',
    patternItems: ['🍎', '🍊', '🍎', '🍊', '🍎'],
    blankIndex: 5, options: ['🍊', '🍎', '🍋', '🍇'], answer: '🍊',
    explanation: 'Apple, Orange, Apple, Orange, Apple — then ORANGE! ABABAB pattern!' },

  { id: 'tp2-nv-10', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🔍', prompt: 'Three of these belong together. Which one does NOT? 🔵 🔴 🟢 🔶',
    options: ['🔶 (orange diamond)', '🔵 (blue circle)', '🔴 (red circle)', '🟢 (green circle)'], answer: '🔶 (orange diamond)',
    explanation: 'Blue, red, and green circles all have the same ROUND shape. The diamond is different!' },

  { id: 'tp2-nv-11', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'color patterns',
    visual: '🟦', prompt: 'What color comes next?',
    patternItems: ['🟦', '🟩', '🟦', '🟩', '🟦'],
    blankIndex: 5, options: ['🟩', '🟦', '🟨', '🟥'], answer: '🟩',
    explanation: 'Blue, Green, Blue, Green, Blue — next is GREEN! The AB pattern keeps going!' },

  { id: 'tp2-nv-12', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Fill in the missing piece!\n Row 1: 🔵 🔵\n Row 2: 🔴 ?',
    options: ['🔵', '🔴', '🟢', '🟡'], answer: '🔴',
    explanation: 'Each row has matching shapes! Row 1 is all blue, Row 2 is all red — so the missing piece is RED!' },

  { id: 'tp2-nv-13', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '🌱', prompt: 'The pattern is growing! What comes next?',
    patternItems: ['🌱', '🌱🌱', '🌱🌱🌱'],
    blankIndex: 3, options: ['🌱🌱🌱🌱', '🌱🌱🌱', '🌱🌱', '🌱'], answer: '🌱🌱🌱🌱',
    explanation: 'Each step adds one more sprout: 1, 2, 3, FOUR! Growing patterns get bigger each time!' },

  { id: 'tp2-nv-14', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '↕️', prompt: '⬆️ points UP. What does ⬇️ point?',
    options: ['up', 'left', 'right', 'down'], answer: 'down',
    explanation: '⬇️ is the OPPOSITE of ⬆️! Up and down are opposites, just like left and right!' },

  { id: 'tp2-nv-15', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'ABC pattern',
    visual: '🌈', prompt: 'What is missing? This pattern has THREE different parts!',
    patternItems: ['🔴', '🟡', '🔵', '🔴', '🟡'],
    blankIndex: 5, options: ['🔵', '🔴', '🟡', '🟢'], answer: '🔵',
    explanation: 'Red, Yellow, Blue — the ABC pattern repeats! After Red and Yellow comes BLUE!' },

  // KINDERGARTEN — VERBAL ANALOGIES (5 questions)
  { id: 'tp2-va-k-01', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Up is to DOWN as in is to...',
    options: ['inside', 'out', 'above', 'under'], answer: 'out',
    explanation: 'Up and down are opposites, so in and OUT are opposites too!' },

  { id: 'tp2-va-k-02', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Fire is to HOT as ice is to...',
    options: ['wet', 'cold', 'melted', 'white'], answer: 'cold',
    explanation: 'Fire is hot; ice is COLD! They are temperature opposites!' },

  { id: 'tp2-va-k-03', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Bird is to NEST as fish is to...',
    options: ['bowl', 'pond', 'sky', 'grass'], answer: 'pond',
    explanation: 'A bird lives in a nest; a fish lives in a POND! These are homes for animals!' },

  { id: 'tp2-va-k-04', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Ear is to HEAR as eye is to...',
    options: ['smell', 'taste', 'see', 'touch'], answer: 'see',
    explanation: 'You use your ear to hear; you use your eye to SEE! Body parts and what they do!' },

  { id: 'tp2-va-k-05', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Apple is to FRUIT as carrot is to...',
    options: ['vegetable', 'fruit', 'meat', 'grain'], answer: 'vegetable',
    explanation: 'An apple belongs to the fruit group; a carrot belongs to the VEGETABLE group!' },

  // KINDERGARTEN — QUANTITATIVE REASONING (5 questions)
  { id: 'tp2-q-k-01', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: '🍎🍎 = 4. One 🍎 = ?',
    options: ['1', '2', '3', '4'], answer: '2',
    explanation: '2 apples = 4, so one apple = 2! If you split 4 into 2 equal groups, each group has 2!' },

  { id: 'tp2-q-k-02', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What number is missing? 1, 2, ?, 4, 5',
    options: ['1', '2', '3', '6'], answer: '3',
    explanation: 'Counting: 1, 2, 3, 4, 5! The missing number is 3!' },

  { id: 'tp2-q-k-03', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'A scale is balanced. One side has 3 blocks. How many blocks are on the other side?',
    options: ['1', '2', '3', '4'], answer: '3',
    explanation: 'If the scale is balanced, BOTH sides have the same number! Each side has 3 blocks!' },

  { id: 'tp2-q-k-04', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🌟', prompt: '⭐⭐⭐ + ⭐⭐ = how many stars?',
    options: ['4', '5', '6', '7'], answer: '5',
    explanation: '3 stars + 2 stars = 5 stars! Count them all: 1, 2, 3, 4, 5!' },

  { id: 'tp2-q-k-05', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What comes next? 10, 8, 6, 4, ?',
    options: ['1', '2', '3', '5'], answer: '2',
    explanation: 'Counting DOWN by 2s: 10, 8, 6, 4, 2! Subtract 2 each time!' },

  // =====================================================================
  // 1ST GRADE — NON-VERBAL PATTERNS (15 questions)
  // =====================================================================
  { id: 'tp2-nv-1-01', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🔷', prompt: 'What shape comes next?',
    patternItems: ['🔷', '🔶', '🔷', '🔷', '🔶'],
    blankIndex: 5, options: ['🔷', '🔶', '🔸', '🔹'], answer: '🔷',
    explanation: 'Blue Diamond, Orange Diamond, Blue Blue, Orange — then BLUE DIAMOND! Spotting the pattern takes practice!' },

  { id: 'tp2-nv-1-02', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'AABB pattern',
    visual: '🌺', prompt: 'What flower comes next? Notice the pairs!',
    patternItems: ['🌸', '🌸', '🌺', '🌺', '🌸', '🌸'],
    blankIndex: 6, options: ['🌺', '🌸', '🌻', '🌼'], answer: '🌺',
    explanation: 'Pink Pink, Red Red — AABB pattern! After two pink flowers come two RED flowers!' },

  { id: 'tp2-nv-1-03', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'ABC pattern',
    visual: '🎵', prompt: 'What comes next in this 3-part pattern?',
    patternItems: ['🎵', '🎶', '🎸', '🎵', '🎶'],
    blankIndex: 5, options: ['🎸', '🎵', '🎶', '🥁'], answer: '🎸',
    explanation: 'Note, Double-note, Guitar — ABC pattern repeating! After the note and double-note comes GUITAR!' },

  { id: 'tp2-nv-1-04', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Matrix puzzle — what goes in the bottom right corner?\n🔴 🔵\n🟢  ?',
    options: ['🔴', '🔵', '🟢', '🟡'], answer: '🟡',
    explanation: 'Each row uses DIFFERENT colors! Row 1: red/blue. Row 2: green/YELLOW (a new different color)!' },

  { id: 'tp2-nv-1-05', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'size patterns',
    visual: '🌙', prompt: 'The moons are changing size! What comes next?',
    patternItems: ['🌑', '🌒', '🌓', '🌔'],
    blankIndex: 4, options: ['🌕', '🌑', '🌒', '🌓'], answer: '🌕',
    explanation: 'The moon is getting FULLER each step! New moon to full moon — next is 🌕 FULL MOON!' },

  { id: 'tp2-nv-1-06', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🔍', prompt: 'Which one does NOT belong? 🔵 🟣 🔴 🔶',
    options: ['🔶 (diamond shape)', '🔵 (circle)', '🟣 (circle)', '🔴 (circle)'], answer: '🔶 (diamond shape)',
    explanation: 'Blue, purple, and red are all CIRCLES — the orange diamond has a different SHAPE!' },

  { id: 'tp2-nv-1-07', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'rotation patterns',
    visual: '➡️', prompt: 'An arrow rotates 90° clockwise each step: →, ↓, ←, ↑, →, ↓. What comes NEXT?',
    patternItems: ['→', '↓', '←', '↑', '→'],
    blankIndex: 5, options: ['↓', '←', '↑', '→'], answer: '↓',
    explanation: 'Each turn goes: Right, Down, Left, Up — then repeats! After Right comes DOWN!' },

  { id: 'tp2-nv-1-08', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🍁', prompt: 'What leaf comes next?',
    patternItems: ['🍁', '🍂', '🍁', '🍂', '🍁'],
    blankIndex: 5, options: ['🍂', '🍁', '🌿', '🍃'], answer: '🍂',
    explanation: 'Red maple, Brown maple, Red, Brown, Red — then BROWN! Perfect ABAB pattern!' },

  { id: 'tp2-nv-1-09', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🪞', prompt: 'If you see the word "MOM" in a mirror, the reflected word looks like...',
    options: ['MOM (same)', 'WOW', 'MUM', 'DOD'], answer: 'MOM (same)',
    explanation: 'MOM is a palindrome AND looks the same in a mirror because M and O are symmetric letters! Super cool!' },

  { id: 'tp2-nv-1-10', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'color-shape patterns',
    visual: '🔺', prompt: 'What comes next? Big red triangle, small red triangle, big blue triangle, small blue triangle, big red triangle, ?',
    patternItems: ['🔺Big Red', '🔻Small Red', '🔺Big Blue', '🔻Small Blue', '🔺Big Red'],
    blankIndex: 5, options: ['🔻Small Red', '🔺Big Red', '🔻Small Blue', '🔺Big Blue'], answer: '🔻Small Red',
    explanation: 'The pattern cycles: Big Red, Small Red, Big Blue, Small Blue — then repeats! After Big Red comes SMALL RED!' },

  { id: 'tp2-nv-1-11', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Each ROW follows a rule. What is missing?\n🌞 🌞 🌞\n🌙 🌙 ?\n⭐ ⭐ ⭐',
    options: ['🌞', '🌙', '⭐', '🌟'], answer: '🌙',
    explanation: 'Each row has the SAME symbol three times! Row 2 is all moons, so the missing piece is MOON!' },

  { id: 'tp2-nv-1-12', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '🌟', prompt: 'The stars are growing by 2 each time! What comes next?',
    patternItems: ['⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐'],
    blankIndex: 3, options: ['⭐⭐⭐⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐'], answer: '⭐⭐⭐⭐⭐⭐⭐⭐',
    explanation: '2, 4, 6 — add 2 each time! Next is 8 stars! Growing by 2 each step!' },

  { id: 'tp2-nv-1-13', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT belong? 🍎 🍓 🍒 🥦',
    options: ['🍎 (apple)', '🍓 (strawberry)', '🥦 (broccoli)', '🍒 (cherry)'], answer: '🥦 (broccoli)',
    explanation: 'Apples, strawberries, and cherries are all RED FRUITS — broccoli is a GREEN VEGETABLE!' },

  { id: 'tp2-nv-1-14', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🎭', prompt: 'What comes next?',
    patternItems: ['😀', '😐', '😢', '😀', '😐'],
    blankIndex: 5, options: ['😢', '😀', '😐', '😁'], answer: '😢',
    explanation: 'Happy, Neutral, Sad — ABC pattern! After Happy and Neutral comes SAD!' },

  { id: 'tp2-nv-1-15', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'reflection',
    visual: '🪞', prompt: 'A triangle pointing UP (🔺) is reflected across a horizontal mirror. Now it points...',
    options: ['left', 'right', 'up', 'down'], answer: 'down',
    explanation: 'Reflecting UP across a horizontal mirror makes it point DOWN! Like seeing a mountain reflected in a lake!' },

  // 1ST GRADE — VERBAL ANALOGIES (5 questions)
  { id: 'tp2-va-1-01', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Hand is to GLOVE as foot is to...',
    options: ['shoe', 'sock', 'sandal', 'boot'], answer: 'sock',
    explanation: 'A glove covers a hand; a sock covers a foot! They are covering items for body parts!' },

  { id: 'tp2-va-1-02', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Rain is to WET as sun is to...',
    options: ['bright', 'hot', 'dry', 'warm'], answer: 'dry',
    explanation: 'Rain makes things wet; sun makes things DRY! Cause and effect opposites!' },

  { id: 'tp2-va-1-03', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Bark is to TREE as shell is to...',
    options: ['ocean', 'beach', 'turtle', 'fish'], answer: 'turtle',
    explanation: 'Bark is the outer covering of a tree; a shell is the outer covering of a TURTLE!' },

  { id: 'tp2-va-1-04', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Fast is to SLOW as loud is to...',
    options: ['noisy', 'quiet', 'soft', 'hard'], answer: 'quiet',
    explanation: 'Fast and slow are opposites; loud and QUIET are opposites!' },

  { id: 'tp2-va-1-05', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Chef is to KITCHEN as pilot is to...',
    options: ['airport', 'cockpit', 'airplane', 'sky'], answer: 'cockpit',
    explanation: 'A chef works in the kitchen; a pilot works in the COCKPIT of the plane!' },

  // 1ST GRADE — QUANTITATIVE REASONING (5 questions)
  { id: 'tp2-q-1-01', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'If 🌟🌟🌟🌟 = 20, what does 🌟🌟 = ?',
    options: ['5', '8', '10', '15'], answer: '10',
    explanation: '4 stars = 20, so each star = 5. Two stars = 5 + 5 = 10! Divide and multiply!' },

  { id: 'tp2-q-1-02', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What number is missing? 3, 6, ?, 12, 15',
    options: ['7', '8', '9', '10'], answer: '9',
    explanation: 'Skip counting by 3s: 3, 6, 9, 12, 15! Each number is 3 more than the last!' },

  { id: 'tp2-q-1-03', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🧮', prompt: '? + 8 = 15',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '? = 15 - 8 = 7! Think: 8 + 7 = 15. You found the missing number!' },

  { id: 'tp2-q-1-04', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'A scale balances when: Left side = 🍎🍎🍎 Right side = 🍊 + 🍊. If 🍎 = 2, how much does each 🍊 weigh?',
    options: ['2', '3', '4', '6'], answer: '3',
    explanation: '3 apples × 2 = 6 total. Two oranges must also equal 6. So each orange = 6 ÷ 2 = 3!' },

  { id: 'tp2-q-1-05', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'A number tripled is 18. What is the number?',
    options: ['4', '5', '6', '7'], answer: '6',
    explanation: 'Tripled = multiplied by 3. So the number × 3 = 18, meaning the number = 18 ÷ 3 = 6!' },

  // =====================================================================
  // 2ND GRADE — NON-VERBAL PATTERNS (15 questions)
  // =====================================================================
  { id: 'tp2-nv-2-01', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'ABC pattern',
    visual: '🌈', prompt: 'What completes this pattern?',
    patternItems: ['🔴', '🟡', '🔵', '🔴', '🟡', '🔵', '🔴', '🟡'],
    blankIndex: 8, options: ['🔵', '🔴', '🟡', '🟢'], answer: '🔵',
    explanation: 'Red, Yellow, Blue — ABC pattern repeating! Position 9 is the 3rd in the pattern: BLUE!' },

  { id: 'tp2-nv-2-02', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Matrix rule: shapes in each row rotate 90° clockwise.\nRow 1: ➡️ ⬇️ ⬅️\nRow 2: ⬆️ ➡️ ?\nWhat is missing?',
    options: ['⬇️', '⬆️', '⬅️', '➡️'], answer: '⬇️',
    explanation: 'Each row rotates 90° clockwise each step! ➡️ turns to ⬇️, ⬅️ turns to ⬆️. So ➡️ turns to DOWNWARD arrow!' },

  { id: 'tp2-nv-2-03', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '🔢', prompt: 'What number of shapes comes next in the growing pattern? 1, 3, 5, 7, ?',
    patternItems: ['🔵', '🔵🔵🔵', '🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵'],
    blankIndex: 4, options: ['🔵×8', '🔵×9', '🔵×10', '🔵×11'], answer: '🔵×9',
    explanation: 'Adding 2 each time: 1, 3, 5, 7, 9! The pattern grows by 2 (these are odd numbers!)' },

  { id: 'tp2-nv-2-04', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT belong? Pentagon, Hexagon, Circle, Octagon',
    options: ['Pentagon', 'Circle', 'Hexagon', 'Octagon'], answer: 'Circle',
    explanation: 'Pentagon (5 sides), Hexagon (6), Octagon (8) are all POLYGONS with straight sides — Circle has NO straight sides!' },

  { id: 'tp2-nv-2-05', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'color-shape patterns',
    visual: '🟢', prompt: 'Pattern: small red square, large red square, small green square, large green square, small blue square. What comes next?',
    patternItems: ['🟥sm', '🟥LG', '🟩sm', '🟩LG', '🟦sm'],
    blankIndex: 5, options: ['🟦 Large blue square', '🟦 Small blue square', '🟨 Large yellow square', '🟥 Large red square'], answer: '🟦 Large blue square',
    explanation: 'Pattern: Small, Large, Small, Large — after the small blue square comes LARGE BLUE SQUARE!' },

  { id: 'tp2-nv-2-06', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🔄', prompt: 'If you rotate the letter "d" 180°, what letter does it look like?',
    options: ['b', 'p', 'q', 'd'], answer: 'p',
    explanation: 'Rotating "d" by 180° (upside down and backwards) creates a "p"! Rotation changes orientation!' },

  { id: 'tp2-nv-2-07', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'AABB pattern',
    visual: '🌊', prompt: 'What comes next in this wave pattern?',
    patternItems: ['🌊', '🌊', '🏄', '🏄', '🌊', '🌊'],
    blankIndex: 6, options: ['🏄', '🌊', '🐬', '⛵'], answer: '🏄',
    explanation: 'Wave Wave, Surfer Surfer — AABB! After two waves come two SURFERS!' },

  { id: 'tp2-nv-2-08', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Matrix: numbers increase by 1 going RIGHT, and by 3 going DOWN.\n[1 2 3]\n[4 5 6]\n[7 8 ?]',
    options: ['8', '9', '10', '11'], answer: '9',
    explanation: '7 + 1 = 8, then 8 + 1 = 9! Also 6 + 3 = 9! The matrix rule works both ways!' },

  { id: 'tp2-nv-2-09', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'shrinking patterns',
    visual: '⬇️', prompt: 'The pattern is shrinking! What comes next? 🌟🌟🌟🌟🌟🌟, 🌟🌟🌟🌟, 🌟🌟, ?',
    patternItems: ['🌟×6', '🌟×4', '🌟×2'],
    blankIndex: 3, options: ['🌟×0 (zero)', '🌟×1', '🌟×2', '🌟×3'], answer: '🌟×0 (zero)',
    explanation: 'Subtracting 2 each time: 6, 4, 2, 0! The next group has ZERO stars!' },

  { id: 'tp2-nv-2-10', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🔍', prompt: 'Which does NOT belong? ⬛ 🔲 🎲 🟦',
    options: ['🎲 (die)', '⬛ (black square)', '🔲 (outlined square)', '🟦 (blue square)'], answer: '🎲 (die)',
    explanation: 'All three squares are flat 2D shapes — a dice is a 3D CUBE, not a flat square!' },

  { id: 'tp2-nv-2-11', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🎯', prompt: 'What comes next in this target pattern?',
    patternItems: ['🎯', '🎯🎯', '🎯🎯🎯', '🎯🎯🎯🎯'],
    blankIndex: 4, options: ['🎯×4', '🎯×5', '🎯×6', '🎯×7'], answer: '🎯×5',
    explanation: 'Adding 1 more target each time: 1, 2, 3, 4, FIVE! Growing by 1 each step!' },

  { id: 'tp2-nv-2-12', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '✂️', prompt: 'A square piece of paper is folded in half diagonally, then cut along the fold. What shape(s) do you get?',
    options: ['2 rectangles', '2 triangles', '1 rectangle', '2 squares'], answer: '2 triangles',
    explanation: 'Folding a square diagonally and cutting along the fold creates TWO right triangles!' },

  { id: 'tp2-nv-2-13', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🦋', prompt: 'What butterfly comes next? The pattern has SIZE AND COLOR changing!',
    patternItems: ['🦋small-blue', '🦋BIG-blue', '🦋small-red', '🦋BIG-red', '🦋small-yellow'],
    blankIndex: 5, options: ['🦋BIG-yellow', '🦋small-yellow', '🦋BIG-blue', '🦋small-blue'], answer: '🦋BIG-yellow',
    explanation: 'Pattern: small-blue, BIG-blue, small-red, BIG-red, small-yellow — next is BIG YELLOW!' },

  { id: 'tp2-nv-2-14', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Matrix: each column has a different shape, each row has a different color.\n🔴■ 🔴● 🔴▲\n🔵■ 🔵● ?\nWhat goes in the missing spot?',
    options: ['🔵▲', '🔴▲', '🟢▲', '🔵●'], answer: '🔵▲',
    explanation: 'Row 2 is all blue. Column 3 is all triangles. So the missing piece is BLUE TRIANGLE!' },

  { id: 'tp2-nv-2-15', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'reflection',
    visual: '🪞', prompt: 'Shape A is on the LEFT side of a mirror line. The mirror image of A is on the RIGHT. If A is ◀️ (pointing left), the mirror image points...',
    options: ['left', 'right', 'up', 'down'], answer: 'right',
    explanation: 'A mirror flips left and right! ◀️ reflected becomes ▶️ pointing RIGHT!' },

  // 2ND GRADE — VERBAL ANALOGIES (5 questions)
  { id: 'tp2-va-2-01', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Caterpillar is to BUTTERFLY as tadpole is to...',
    options: ['fish', 'frog', 'turtle', 'salamander'], answer: 'frog',
    explanation: 'A caterpillar transforms into a butterfly; a tadpole transforms into a FROG! Both are metamorphoses!' },

  { id: 'tp2-va-2-02', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Page is to BOOK as brick is to...',
    options: ['stone', 'clay', 'building', 'wall'], answer: 'wall',
    explanation: 'A page is part of a book; a brick is part of a WALL! Part-to-whole relationship!' },

  { id: 'tp2-va-2-03', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Cold is to WINTER as hot is to...',
    options: ['spring', 'autumn', 'summer', 'fall'], answer: 'summer',
    explanation: 'Cold describes winter; hot describes SUMMER! Seasons and their temperatures!' },

  { id: 'tp2-va-2-04', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Telescope is to FAR as microscope is to...',
    options: ['big', 'tiny', 'fast', 'slow'], answer: 'tiny',
    explanation: 'A telescope sees FAR away things; a microscope sees TINY things! Tools and what they show!' },

  { id: 'tp2-va-2-05', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Author is to BOOK as sculptor is to...',
    options: ['painting', 'poem', 'statue', 'song'], answer: 'statue',
    explanation: 'An author creates a book; a sculptor creates a STATUE! Artists and their creations!' },

  // 2ND GRADE — QUANTITATIVE REASONING (5 questions)
  { id: 'tp2-q-2-01', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: '🐶🐶🐶 = 🐱🐱🐱🐱🐱🐱. If 🐱 = 2, what does 🐶 = ?',
    options: ['2', '3', '4', '6'], answer: '4',
    explanation: '6 cats × 2 = 12 total. 3 dogs must also = 12, so each dog = 12 ÷ 3 = 4!' },

  { id: 'tp2-q-2-02', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What is the missing number? 4, 8, 16, 32, ?',
    options: ['40', '48', '56', '64'], answer: '64',
    explanation: 'Each number is DOUBLED! 4→8→16→32→64. Multiply by 2 each time!' },

  { id: 'tp2-q-2-03', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🧮', prompt: 'Symbols: ♣ + ♣ = ♥. If ♥ = 14, what is ♣?',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '♣ + ♣ = ♥ means 2♣ = 14, so ♣ = 14 ÷ 2 = 7! Check: 7 + 7 = 14 ✓' },

  { id: 'tp2-q-2-04', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What comes next? 100, 90, 81, 73, 66, ?',
    options: ['58', '59', '60', '61'], answer: '60',
    explanation: 'Subtract 10, then 9, then 8, then 7... next subtract 6: 66 - 6 = 60! Decreasing by one less each time!' },

  { id: 'tp2-q-2-05', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'On a scale: 🍎🍎 balance with 🍊🍊🍊. One 🍊 weighs 4. How much does one 🍎 weigh?',
    options: ['4', '5', '6', '8'], answer: '6',
    explanation: '3 oranges × 4 = 12 total. 2 apples = 12, so each apple = 12 ÷ 2 = 6!' },

  // =====================================================================
  // 3RD GRADE — NON-VERBAL PATTERNS (15 questions)
  // =====================================================================
  { id: 'tp2-nv-3-01', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🔮', prompt: 'What comes NEXT in this tricky pattern?',
    patternItems: ['🔴', '🔵', '🟢', '🔵', '🔴', '🔵', '🟢'],
    blankIndex: 7, options: ['🔵', '🔴', '🟢', '🟡'], answer: '🔵',
    explanation: 'Pattern: Red, Blue, Green, Blue — it always has a BLUE between the others! Next is BLUE!' },

  { id: 'tp2-nv-3-02', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Matrix: row rule is ×2 going right, column rule is ×3 going down.\n[1  2  4]\n[3  6  12]\n[9  18  ?]',
    options: ['24', '30', '36', '48'], answer: '36',
    explanation: '18 × 2 = 36. Also 12 × 3 = 36! Both rules give the same answer — that\'s how matrices work!' },

  { id: 'tp2-nv-3-03', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🌀', prompt: 'The pattern follows two rules at once: the color rotates AND the count grows.\n🔴(1), 🔵(2), 🟢(3), 🔴(4), 🔵(5). What comes 6th?',
    patternItems: ['🔴×1', '🔵×2', '🟢×3', '🔴×4', '🔵×5'],
    blankIndex: 5, options: ['🟢×6', '🔴×6', '🔵×6', '🟢×5'], answer: '🟢×6',
    explanation: 'Colors cycle: Red, Blue, Green. Count increases by 1. Position 6 = Green (3rd color), count 6!' },

  { id: 'tp2-nv-3-04', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT belong? Rhombus, Square, Kite, Circle',
    options: ['Square', 'Rhombus', 'Circle', 'Kite'], answer: 'Circle',
    explanation: 'Rhombus, square, and kite are all QUADRILATERALS (4 sides) — a circle has NO sides!' },

  { id: 'tp2-nv-3-05', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'rotation patterns',
    visual: '🔄', prompt: 'A shape is rotated 45° clockwise each step. How many steps to return to the START?',
    patternItems: ['Step 1: 45°', 'Step 2: 90°', 'Step 3: 135°', 'Step 4: 180°'],
    blankIndex: 4, options: ['5 steps', '6 steps', '7 steps', '8 steps'], answer: '8 steps',
    explanation: '360° ÷ 45° = 8 steps to go full circle! After 8 turns of 45°, you\'re back to the start!' },

  { id: 'tp2-nv-3-06', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'In this matrix, which symbol belongs in position (Row 3, Col 3)?\nRow 1: 🌞 🌛 🌟\nRow 2: 🌛 🌟 🌞\nRow 3: 🌟 🌞 ?',
    options: ['🌞', '🌛', '🌟', '🌙'], answer: '🌛',
    explanation: 'Each row has all three symbols exactly once! Row 3 has 🌟 and 🌞, so the missing one is 🌛!' },

  { id: 'tp2-nv-3-07', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🔢', prompt: 'What comes next in this alternating pattern? ⬛⬜⬛⬛⬜⬛⬛⬛⬜?',
    patternItems: ['⬛', '⬜', '⬛⬛', '⬜', '⬛⬛⬛', '⬜'],
    blankIndex: 6, options: ['⬛×4, then ⬜', '⬛×3', '⬜, then ⬛×4', '⬛×4'], answer: '⬛×4, then ⬜',
    explanation: 'Black squares grow by one each cycle! 1 black, 2 black, 3 black — next is 4 BLACK squares, then a white!' },

  { id: 'tp2-nv-3-08', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '📦', prompt: 'A cube is painted red on the outside, then cut into 27 equal smaller cubes. How many of the small cubes have NO red paint?',
    options: ['0', '1', '8', '6'], answer: '1',
    explanation: 'Only the center cube (hidden inside) has NO paint — it\'s completely surrounded by other cubes! Just 1!' },

  { id: 'tp2-nv-3-09', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '🔢', prompt: 'Triangular numbers: 1, 3, 6, 10, ?',
    patternItems: ['●', '●●●', '●●●●●●', '●●●●●●●●●●'],
    blankIndex: 4, options: ['12', '13', '15', '18'], answer: '15',
    explanation: 'Add 1, then 2, then 3, then 4 — next add 5: 10 + 5 = 15! These are triangular numbers!' },

  { id: 'tp2-nv-3-10', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT belong? Cube, Rectangular prism, Cylinder, Square',
    options: ['Cube', 'Square', 'Cylinder', 'Rectangular prism'], answer: 'Square',
    explanation: 'Cube, rectangular prism, and cylinder are all 3D shapes — a square is a 2D flat shape!' },

  { id: 'tp2-nv-3-11', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Pattern in a matrix: Row numbers increase by 1 across, Column numbers increase by 2 down. Start: top-left = 2.\n[2  3  4]\n[4  5  6]\n[6  7  ?]',
    options: ['7', '8', '9', '10'], answer: '8',
    explanation: 'Going across: 6 + 1 = 7, then 7 + 1 = 8! Or going down: 6 + 2 = 8! Both rules confirm 8!' },

  { id: 'tp2-nv-3-12', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🌀', prompt: 'The 12th term of the pattern 🔴🟡🔵 (repeating) is which color?',
    patternItems: ['🔴(1)', '🟡(2)', '🔵(3)', '🔴(4)', '🟡(5)', '🔵(6)'],
    blankIndex: 6, options: ['🔴', '🟡', '🔵', 'none'], answer: '🔵',
    explanation: '12 ÷ 3 = 4 with remainder 0! Remainder 0 means it\'s the LAST color in the cycle: BLUE!' },

  { id: 'tp2-nv-3-13', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🔄', prompt: 'The letter "b" is rotated 90° counterclockwise. What does it look like?',
    options: ['d', 'p', 'q', 'a'] , answer: 'p',
    explanation: 'Rotating "b" 90° counterclockwise (to the left) makes it look like "p"! Rotation changes direction!' },

  { id: 'tp2-nv-3-14', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '⬢', prompt: 'Fibonacci emoji pattern: each term uses the SUM of the previous two. 🌱🌱🌱🌳🌳🌳🌳🌳. How many 🌳 would the 6th group have if it follows 1, 1, 2, 3, 5, ?',
    patternItems: ['1', '1', '2', '3', '5'],
    blankIndex: 5, options: ['6', '7', '8', '9'], answer: '8',
    explanation: '5 + 3 = 8! Fibonacci! Each number = the two before it added together. You found the pattern!' },

  { id: 'tp2-nv-3-15', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which number does NOT belong with the others: 3, 7, 11, 9?',
    options: ['3', '7', '9', '11'], answer: '9',
    explanation: '3, 7, and 11 are all PRIME numbers (only divisible by 1 and themselves). But 9 = 3 × 3, so it is NOT prime — it\'s composite! 9 is the odd one out!' },

  // 3RD GRADE — VERBAL ANALOGIES (5 questions)
  { id: 'tp2-va-3-01', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Herbivore is to PLANTS as carnivore is to...',
    options: ['insects', 'fish', 'meat', 'grass'], answer: 'meat',
    explanation: 'A herbivore eats plants; a carnivore eats MEAT! These are types of diets!' },

  { id: 'tp2-va-3-02', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Democracy is to VOTE as dictatorship is to...',
    options: ['freedom', 'control', 'law', 'king'], answer: 'control',
    explanation: 'Democracy works through votes and freedom; dictatorship works through CONTROL by one person!' },

  { id: 'tp2-va-3-03', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Accelerate is to SPEED UP as decelerate is to...',
    options: ['go fast', 'turn left', 'slow down', 'stop suddenly'], answer: 'slow down',
    explanation: 'Accelerate means speed up; decelerate means SLOW DOWN! They are antonyms (opposites)!' },

  { id: 'tp2-va-3-04', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Stethoscope is to DOCTOR as gavel is to...',
    options: ['teacher', 'judge', 'carpenter', 'chef'], answer: 'judge',
    explanation: 'A stethoscope is the doctor\'s tool; a gavel is the JUDGE\'s tool! Tools and the people who use them!' },

  { id: 'tp2-va-3-05', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Chronology is to TIME as geography is to...',
    options: ['science', 'history', 'earth/place', 'math'], answer: 'earth/place',
    explanation: 'Chronology is the study of time; geography is the study of EARTH and PLACES! Word roots help!' },

  // 3RD GRADE — QUANTITATIVE REASONING (5 questions)
  { id: 'tp2-q-3-01', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'If 🐘 = 🐱🐱🐱 + 🐶🐶, and 🐱 = 4 and 🐶 = 6, how much does 🐘 weigh?',
    options: ['20', '22', '24', '26'], answer: '24',
    explanation: '3 cats: 3×4=12. 2 dogs: 2×6=12. Elephant = 12 + 12 = 24!' },

  { id: 'tp2-q-3-02', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'Pattern: 2, 3, 5, 8, 12, 17, ? (What is the rule?)',
    options: ['20', '22', '23', '25'], answer: '23',
    explanation: 'Add 1, then 2, then 3, then 4, then 5 — next add 6: 17 + 6 = 23! Increasing differences!' },

  { id: 'tp2-q-3-03', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🧮', prompt: 'Solve: 4n - 3 = 21',
    options: ['4', '5', '6', '7'], answer: '6',
    explanation: '4n = 21 + 3 = 24. Then n = 24 ÷ 4 = 6. Check: 4×6-3 = 24-3 = 21 ✓ Brilliant algebra!' },

  { id: 'tp2-q-3-04', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: '🍓🍓🍓 + 🍋 = 🍎🍎🍎🍎🍎. If 🍓 = 3 and 🍎 = 2, what does 🍋 = ?',
    options: ['1', '2', '3', '4'], answer: '1',
    explanation: '3 strawberries: 3×3=9. 5 apples: 5×2=10. So 9+🍋=10, meaning 🍋=1!' },

  { id: 'tp2-q-3-05', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'If you add all whole numbers from 1 to 10, what is the sum?',
    options: ['45', '50', '55', '60'], answer: '55',
    explanation: '1+2+3+4+5+6+7+8+9+10 = 55! Trick: pair the ends: (1+10)=11, (2+9)=11 × 5 pairs = 55!' },

  // =====================================================================
  // TAG LEVEL — NON-VERBAL PATTERNS (15 questions)
  // =====================================================================
  { id: 'tp2-nv-t-01', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🌀', prompt: 'This pattern uses TWO rules at once. Position 7 of 🔴🟡🔵🔴🟡🔵🔴 is which color?',
    patternItems: ['🔴', '🟡', '🔵', '🔴', '🟡', '🔵'],
    blankIndex: 6, options: ['🔴', '🟡', '🔵', '🟢'], answer: '🔴',
    explanation: '7 ÷ 3 = 2 remainder 1. Remainder 1 = the FIRST color: RED! Position 7 is red!' },

  { id: 'tp2-nv-t-02', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Complete the matrix:\n[🔴■  🔵■  🟢■]\n[🔴●  🔵●  🟢●]\n[🔴▲  🔵▲  ?]\nWhat goes in the missing spot?',
    options: ['🟢▲', '🔴▲', '🔵▲', '🟢●'], answer: '🟢▲',
    explanation: 'Row 3 = all triangles. Column 3 = all green. Missing = GREEN TRIANGLE! Two rules intersect!' },

  { id: 'tp2-nv-t-03', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🔄', prompt: 'A 3D cube sitting flat is rotated 90° toward you (it tips forward). The bottom face now faces...',
    options: ['up', 'toward you (front)', 'away from you (back)', 'down'], answer: 'toward you (front)',
    explanation: 'Tipping a cube forward makes the bottom face come toward you! It becomes the FRONT face!' },

  { id: 'tp2-nv-t-04', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🌟', prompt: 'Squares of integers: 1, 4, 9, 16, 25, 36. The DIFFERENCES between them are: 3, 5, 7, 9, 11. What is the next difference?',
    patternItems: ['3', '5', '7', '9', '11'],
    blankIndex: 5, options: ['12', '13', '14', '15'], answer: '13',
    explanation: 'The differences increase by 2 each time! 11 + 2 = 13. So 36 + 13 = 49 = 7²! You found a pattern within a pattern!' },

  { id: 'tp2-nv-t-05', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT belong? Parallelogram, Rhombus, Rectangle, Trapezoid',
    options: ['Parallelogram', 'Trapezoid', 'Rectangle', 'Rhombus'], answer: 'Trapezoid',
    explanation: 'Parallelogram, rhombus, and rectangle all have TWO pairs of parallel sides. A trapezoid only has ONE pair!' },

  { id: 'tp2-nv-t-06', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Each cell = row number × column number.\n[1×1=1  1×2=2  1×3=3]\n[2×1=2  2×2=4  2×3=6]\n[3×1=?  3×2=6  3×3=9]',
    options: ['1', '2', '3', '6'], answer: '3',
    explanation: '3 × 1 = 3! The rule is row × column. You just read a multiplication table as a matrix!' },

  { id: 'tp2-nv-t-07', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🔢', prompt: 'Pascal\'s Triangle Row 5: 1, 4, 6, 4, 1. What is the SUM of Row 5\'s numbers?',
    patternItems: ['Row 1: 1 (sum=1)', 'Row 2: 1,1 (sum=2)', 'Row 3: 1,2,1 (sum=4)', 'Row 4: 1,3,3,1 (sum=8)'],
    blankIndex: 4, options: ['12', '14', '16', '18'], answer: '16',
    explanation: 'Each row\'s sum doubles! 1, 2, 4, 8, 16! Row 5 sums to 16. (1+4+6+4+1=16)!' },

  { id: 'tp2-nv-t-08', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🗺️', prompt: 'On a coordinate plane, if you reflect point (3, 4) across the y-axis, the new point is...',
    options: ['(-3, 4)', '(3, -4)', '(-3, -4)', '(4, 3)'], answer: '(-3, 4)',
    explanation: 'Reflecting across the y-axis flips the x coordinate: (3, 4) → (-3, 4). Y stays the same!' },

  { id: 'tp2-nv-t-09', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which of these has a line of symmetry? Right triangle, Scalene triangle, Isosceles triangle, or an irregular quadrilateral?',
    options: ['Right triangle', 'Scalene triangle', 'Isosceles triangle', 'Irregular quadrilateral'], answer: 'Isosceles triangle',
    explanation: 'An isosceles triangle has two equal sides and ONE line of symmetry down the middle! The others are irregular.' },

  { id: 'tp2-nv-t-10', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🌀', prompt: 'Powers of 2 pattern: 1, 2, 4, 8, 16, 32. What is the NEXT number?',
    patternItems: ['1', '2', '4', '8', '16', '32'],
    blankIndex: 6, options: ['48', '56', '64', '128'], answer: '64',
    explanation: 'Each number is doubled (×2)! 32 × 2 = 64. These are powers of 2: 2⁰, 2¹, 2², 2³, 2⁴, 2⁵, 2⁶=64!' },

  { id: 'tp2-nv-t-11', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Diagonals in a matrix also have a pattern. What is the sum of the main diagonal?\n[3  1  2]\n[5  4  6]\n[7  8  9]',
    options: ['10', '12', '16', '24'], answer: '16',
    explanation: 'Main diagonal (top-left to bottom-right): 3 + 4 + 9 = 16! Diagonals in matrices often have special patterns!' },

  { id: 'tp2-nv-t-12', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '📐', prompt: 'How many lines of symmetry does a regular hexagon have?',
    options: ['3', '4', '6', '8'], answer: '6',
    explanation: 'A regular hexagon has 6 lines of symmetry — 3 through opposite vertices and 3 through midpoints of opposite sides!' },

  { id: 'tp2-nv-t-13', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🔢', prompt: 'This is a PRIME number pattern: 2, 3, 5, 7, 11, 13, ?',
    patternItems: ['2', '3', '5', '7', '11', '13'],
    blankIndex: 6, options: ['15', '17', '19', '21'], answer: '17',
    explanation: 'These are consecutive PRIME numbers! After 13, the next prime is 17 (15=3×5, 16=2⁴, so 17 is next)!' },

  { id: 'tp2-nv-t-14', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT share the same property as the others: 4, 9, 16, 25, 35?',
    options: ['4', '9', '25', '35'], answer: '35',
    explanation: '4=2², 9=3², 16=4², 25=5² — all PERFECT SQUARES! But 35 = 5×7, not a perfect square!' },

  { id: 'tp2-nv-t-15', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial reasoning',
    visual: '🔄', prompt: 'If a clock\'s hands rotate clockwise, an hour hand goes from 12 to 3 in 15 minutes. Through how many DEGREES does it rotate?',
    options: ['45°', '60°', '90°', '120°'], answer: '90°',
    explanation: 'A full circle (12 to 12) = 360°. Quarter of a clock (12 to 3) = 360° ÷ 4 = 90°!' },

  // TAG LEVEL — VERBAL ANALOGIES (5 questions)
  { id: 'tp2-va-t-01', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Hypothesis is to SCIENTIST as amendment is to...',
    options: ['judge', 'law/constitution', 'senator', 'president'], answer: 'law/constitution',
    explanation: 'A scientist creates a hypothesis to test; a lawmaker creates an amendment to change the CONSTITUTION/LAW!' },

  { id: 'tp2-va-t-02', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Benevolent is to KIND as malevolent is to...',
    options: ['generous', 'evil/wicked', 'brave', 'clever'], answer: 'evil/wicked',
    explanation: 'Benevolent means kind; malevolent means WICKED or evil! The prefix "bene" means good, "male" means bad!' },

  { id: 'tp2-va-t-03', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Photosynthesis is to PLANTS as respiration is to...',
    options: ['animals', 'all living things', 'plants only', 'bacteria'], answer: 'all living things',
    explanation: 'Photosynthesis is how plants make energy; cellular respiration is how ALL LIVING THINGS release energy from food!' },

  { id: 'tp2-va-t-04', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Numerator is to FRACTION as variable is to...',
    options: ['equation', 'number', 'algebra', 'formula'], answer: 'algebra',
    explanation: 'A numerator is part of a fraction; a variable (like x) is part of ALGEBRA! Each is a key component of its math area!' },

  { id: 'tp2-va-t-05', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Circumference is to CIRCLE as perimeter is to...',
    options: ['area', 'volume', 'polygon', 'diameter'], answer: 'polygon',
    explanation: 'Circumference is the "perimeter" of a circle; perimeter is the total boundary of a POLYGON (shape with straight sides)!' },

  // TAG LEVEL — QUANTITATIVE REASONING (5 questions)
  { id: 'tp2-q-t-01', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'If 🦁 + 🐯 = 30, and 🦁 - 🐯 = 6, what does 🦁 equal?',
    options: ['12', '15', '18', '24'], answer: '18',
    explanation: 'System of equations! Add both: 2🦁 = 36, so 🦁 = 18. Then 🐯 = 30-18 = 12. Check: 18-12=6 ✓' },

  { id: 'tp2-q-t-02', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'The sequence 1, 1, 2, 3, 5, 8, 13... What is the RATIO of each number to the previous one approaching?',
    options: ['1.5', '1.618 (golden ratio)', '2', '3.14'], answer: '1.618 (golden ratio)',
    explanation: 'Fibonacci numbers approach the GOLDEN RATIO (~1.618)! It appears in nature, art, and architecture!' },

  { id: 'tp2-q-t-03', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🧮', prompt: '(🌟 × 🌙) + 🌟 = 35. If 🌙 = 4, what is 🌟?',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '🌟 × (4+1) = 35, so 🌟 × 5 = 35, meaning 🌟 = 7! Check: 7×4+7 = 28+7 = 35 ✓' },

  { id: 'tp2-q-t-04', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'The number of diagonals in a polygon with n sides = n(n-3)/2. How many diagonals does a hexagon (6 sides) have?',
    options: ['6', '8', '9', '12'], answer: '9',
    explanation: '6(6-3)/2 = 6×3/2 = 18/2 = 9 diagonals! Using a formula to find a pattern — that\'s higher-level math!' },

  { id: 'tp2-q-t-05', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'Three rules: 🐝🐝 = 🦋 (two bees equal one butterfly). 🦋🦋🦋 = 🐘 (three butterflies equal one elephant). If 🐝 = 4, what does 🐘 equal?',
    options: ['12', '18', '24', '32'], answer: '24',
    explanation: 'Step 1: Each bee = 4, so two bees = 8, meaning each butterfly = 8. Step 2: Three butterflies = 3×8 = 24. So the elephant = 24! Chain reasoning — brilliant!' },
]
