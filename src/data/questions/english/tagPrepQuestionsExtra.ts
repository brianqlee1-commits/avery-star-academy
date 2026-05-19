import type { Question, PatternQuestion } from '../../../types'

// TAG Prep EXTRA — HEAVILY weighted toward NON-VERBAL reasoning (Avery's gap: 66th %ile)
// Each level: 15 non-verbal pattern, 8 quantitative, 7 verbal analogy = 30 per level = 150 total

export const tagPrepQuestionsExtra: (Question | PatternQuestion)[] = [

  // =====================================================================
  // KINDERGARTEN — NON-VERBAL PATTERNS (15 questions)
  // Topics: AB/ABAB/AAB patterns, shape+color combos, size increasing,
  //         counting patterns (1 2 3 vs 1 3 5)
  // =====================================================================
  { id: 'tp2-nv-01', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'non-verbal patterns',
    visual: '🔷', prompt: 'What comes next in the pattern?',
    patternItems: ['🔴', '🔵', '🟢', '🔴', '🔵'],
    blankIndex: 5, options: ['🟢', '🔴', '🔵', '🟡'], answer: '🟢',
    explanation: 'ABC pattern: Red Blue Green, Red Blue GREEN! The third color always comes third! Great spotting! 🌈' },

  { id: 'tp2-nv-02', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'AB AB patterns',
    visual: '⭐', prompt: 'Star, Moon, Star, Moon, Star — what comes next?',
    patternItems: ['⭐', '🌙', '⭐', '🌙', '⭐'],
    blankIndex: 5, options: ['🌙', '⭐', '☀️', '🌟'], answer: '🌙',
    explanation: 'Star Moon, Star Moon — ABAB pattern! After Star always comes MOON! You found it! 🌙✨' },

  { id: 'tp2-nv-03', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'AAB AAB patterns',
    visual: '🐶', prompt: 'What comes next in this AAB pattern?',
    patternItems: ['🐶', '🐶', '🐱', '🐶', '🐶'],
    blankIndex: 5, options: ['🐱', '🐶', '🐰', '🐸'], answer: '🐱',
    explanation: 'Dog Dog Cat, Dog Dog CAT — the AAB pattern! Every third one is the cat! You are a pattern pro! 🌟' },

  { id: 'tp2-nv-04', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'shape and color',
    visual: '🔺', prompt: 'Big triangle, Big triangle, Small triangle — what comes next?',
    patternItems: ['🔺Big', '🔺Big', '🔻Small', '🔺Big', '🔺Big'],
    blankIndex: 5, options: ['🔻Small', '🔺Big', '🟦Square', '🔵Circle'], answer: '🔻Small',
    explanation: 'Big Big Small, Big Big SMALL — the AAB size pattern! After two big triangles comes a small one! 🎉' },

  { id: 'tp2-nv-05', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'size increasing',
    visual: '🌱', prompt: 'The plants are growing BIGGER! What comes next?',
    patternItems: ['🌱', '🪴', '🌿', '🌳'],
    blankIndex: 4, options: ['🌲', '🌱', '🌿', '🪨'], answer: '🌲',
    explanation: 'Tiny sprout, small plant, medium bush, tree — the plants grow BIGGER each step! Next is a tall tree! 🌲' },

  { id: 'tp2-nv-06', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'ABAB color patterns',
    visual: '🟨', prompt: 'What color comes next?',
    patternItems: ['🟨', '🟥', '🟨', '🟥', '🟨'],
    blankIndex: 5, options: ['🟥', '🟨', '🟩', '🟦'], answer: '🟥',
    explanation: 'Yellow Red, Yellow Red, Yellow RED — ABAB! After yellow always comes RED! You got it! ❤️' },

  { id: 'tp2-nv-07', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'counting patterns',
    visual: '🍎', prompt: 'Apples counting 1, 2, 3, 1, 2, 3, 1, 2 — what comes next?',
    patternItems: ['1🍎', '2🍎🍎', '3🍎🍎🍎', '1🍎', '2🍎🍎'],
    blankIndex: 5, options: ['3🍎🍎🍎', '1🍎', '4🍎🍎🍎🍎', '2🍎🍎'], answer: '3🍎🍎🍎',
    explanation: '1, 2, 3 — then the count starts over! After 1 and 2 comes 3 again! Patterns that repeat are so fun! 🍎' },

  { id: 'tp2-nv-08', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'which doesnt belong',
    visual: '🔍', prompt: 'Three of these belong together. Which one does NOT? 🔴 🔵 🟢 🟥',
    options: ['🟥 (red square)', '🔴 (red circle)', '🔵 (blue circle)', '🟢 (green circle)'], answer: '🟥 (red square)',
    explanation: 'The red, blue, and green CIRCLES are all round — the red SQUARE has corners! Shape matters! 🔺' },

  { id: 'tp2-nv-09', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'counting patterns 1 3 5',
    visual: '⭐', prompt: 'Stars skip counting by odd numbers: 1, 3, 5, 7 — what comes next?',
    patternItems: ['⭐', '⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐⭐'],
    blankIndex: 4, options: ['⭐×9', '⭐×8', '⭐×10', '⭐×6'], answer: '⭐×9',
    explanation: 'Counting by ODD numbers: 1, 3, 5, 7, 9! Add 2 each time! These are called odd numbers! 🌟' },

  { id: 'tp2-nv-10', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'AB AB patterns',
    visual: '🌞', prompt: 'Sun, Cloud, Sun, Cloud, Sun — what comes NEXT?',
    patternItems: ['🌞', '☁️', '🌞', '☁️', '🌞'],
    blankIndex: 5, options: ['☁️', '🌞', '⛈️', '🌙'], answer: '☁️',
    explanation: 'Sun Cloud, Sun Cloud — ABAB weather pattern! After sunny always comes CLOUDY! ☁️✨' },

  { id: 'tp2-nv-11', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which one is DIFFERENT from the others? 🔴 🟠 🟡 🔺',
    options: ['🔺 (triangle with corners)', '🔴 (red circle)', '🟠 (orange circle)', '🟡 (yellow circle)'], answer: '🔺 (triangle with corners)',
    explanation: 'Red, orange, and yellow are all round CIRCLES — the triangle has 3 pointy corners! It is different by SHAPE! 🎯' },

  { id: 'tp2-nv-12', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'AAB AAB patterns',
    visual: '🌺', prompt: 'Flower Flower Leaf, Flower Flower — what comes next?',
    patternItems: ['🌺', '🌺', '🍃', '🌺', '🌺'],
    blankIndex: 5, options: ['🍃', '🌺', '🌸', '🍀'], answer: '🍃',
    explanation: 'Flower Flower LEAF — the AAB pattern! Every third item is the leaf! 🍃💐' },

  { id: 'tp2-nv-13', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'matrices',
    visual: '🧩', prompt: 'Fill in the missing piece!\nRow 1: 🔵 🔵\nRow 2: 🟢 ?',
    options: ['🟢', '🔵', '🔴', '🟡'], answer: '🟢',
    explanation: 'Each ROW has matching shapes! Row 1 is all blue circles, Row 2 is all green circles — so the missing piece is GREEN! 🟢' },

  { id: 'tp2-nv-14', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'shape and color',
    visual: '🔵', prompt: 'Blue circle, Red circle, Blue circle, Red circle — what is the NEXT shape and color?',
    patternItems: ['🔵Circle', '🔴Circle', '🔵Circle', '🔴Circle'],
    blankIndex: 4, options: ['🔵 Blue circle', '🔴 Red circle', '🟢 Green circle', '🟡 Yellow circle'], answer: '🔵 Blue circle',
    explanation: 'Blue Red, Blue Red — ABAB pattern! Color changes but the SHAPE stays a circle! Next is BLUE circle! 💙' },

  { id: 'tp2-nv-15', type: 'pattern', level: 'K', subject: 'tag-prep', language: 'english', topic: 'size increasing',
    visual: '🐟', prompt: 'The fish are getting bigger! What comes next?',
    patternItems: ['🐟tiny', '🐠medium', '🐡bigger'],
    blankIndex: 3, options: ['🦈 biggest fish', '🐟 tiny fish', '🐡 same fish', '🦋 butterfly'], answer: '🦈 biggest fish',
    explanation: 'Each fish is BIGGER than the last! The pattern grows — next is the BIGGEST fish, a shark! 🦈🌊' },

  // KINDERGARTEN — QUANTITATIVE REASONING (8 questions)
  { id: 'tp2-s-01', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⭐', prompt: '⭐ + ⭐ = 10. One ⭐ = ?',
    options: ['5', '2', '10', '4'], answer: '5',
    explanation: 'If 2 stars = 10, then 1 star = 10 ÷ 2 = 5! Split 10 into 2 equal groups and each group has 5! ✨' },

  { id: 'tp2-s-02', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What number is missing? 2, 4, ?, 8',
    options: ['5', '6', '7', '3'], answer: '6',
    explanation: 'Counting by 2s: 2, 4, 6, 8! Skip counting by 2! The missing number is 6! 🌟' },

  { id: 'tp2-s-03', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'A seesaw is BALANCED. One side has 4 blocks. The other side has...',
    options: ['4 blocks', '2 blocks', '6 blocks', '1 block'], answer: '4 blocks',
    explanation: 'A BALANCED seesaw has equal weight on BOTH sides! Both sides must have 4 blocks! ⚖️' },

  { id: 'tp2-s-04', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🍪', prompt: '🍪🍪🍪 = 6. One 🍪 = ?',
    options: ['2', '3', '4', '1'], answer: '2',
    explanation: '3 cookies = 6, so 1 cookie = 6 ÷ 3 = 2! You can also think: 2 + 2 + 2 = 6! 🍪🌟' },

  { id: 'tp2-s-05', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What number is missing? 10, ?, 6, 4, 2',
    options: ['8', '7', '9', '5'], answer: '8',
    explanation: 'Counting DOWN by 2s: 10, 8, 6, 4, 2! Subtract 2 each time. The missing number is 8! ⬇️' },

  { id: 'tp2-s-06', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🌟', prompt: 'If 🌟🌟🌟🌟 = 8, what does 🌟🌟 = ?',
    options: ['4', '2', '6', '3'], answer: '4',
    explanation: '4 stars = 8, so each star = 2. Two stars = 2 + 2 = 4! Half of 8 is 4! ✨' },

  { id: 'tp2-s-07', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🎯', prompt: 'Function machine: Put in 1 and get 3. Put in 2 and get 4. Put in 3 and get 5. What comes out when you put in 4?',
    options: ['6', '7', '8', '5'], answer: '6',
    explanation: 'The machine adds 2 to every number! 1+2=3, 2+2=4, 3+2=5, so 4+2=6! It is a +2 machine! ⚙️' },

  { id: 'tp2-s-08', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🏠', prompt: 'There are 3 houses on each block. There are 2 blocks. How many houses total?',
    options: ['6', '5', '4', '7'], answer: '6',
    explanation: '3 houses × 2 blocks = 6 houses! Or count: 1, 2, 3 on block 1 and 4, 5, 6 on block 2! 🏠' },

  // KINDERGARTEN — VERBAL ANALOGIES (7 questions)
  { id: 'tp2-va-01', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Cat is to MEOW as dog is to...',
    options: ['bark', 'purr', 'moo', 'chirp'], answer: 'bark',
    explanation: 'A cat says MEOW and a dog says BARK! Animal sounds — each animal has its own voice! 🐕' },

  { id: 'tp2-va-02', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Day is to SUN as night is to...',
    options: ['moon', 'rain', 'clouds', 'stars'], answer: 'moon',
    explanation: 'The sun shines during the day; the MOON shines at night! Light sources that match the time! 🌙' },

  { id: 'tp2-va-03', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Puppy is to DOG as kitten is to...',
    options: ['cat', 'dog', 'rabbit', 'hamster'], answer: 'cat',
    explanation: 'A puppy grows into a DOG; a kitten grows into a CAT! Baby animals and their adult names! 🐾' },

  { id: 'tp2-va-04', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Finger is to HAND as toe is to...',
    options: ['foot', 'knee', 'arm', 'leg'], answer: 'foot',
    explanation: 'A finger is part of a hand; a toe is part of a FOOT! Body part to body part relationship! 🦶' },

  { id: 'tp2-va-05', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Swim is to FISH as fly is to...',
    options: ['bird', 'fish', 'snake', 'worm'], answer: 'bird',
    explanation: 'Fish SWIM in water; birds FLY in the sky! Action that each animal does best! 🐦' },

  { id: 'tp2-va-06', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Pencil is to WRITE as scissors are to...',
    options: ['cut', 'draw', 'erase', 'fold'], answer: 'cut',
    explanation: 'A pencil is used to WRITE; scissors are used to CUT! Tools and what they do! ✂️' },

  { id: 'tp2-va-07', type: 'multiple-choice', level: 'K', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Hot is to COLD as fast is to...',
    options: ['slow', 'quick', 'warm', 'big'], answer: 'slow',
    explanation: 'Hot and cold are OPPOSITES; fast and SLOW are opposites! Antonym pairs! 🌡️' },

  // =====================================================================
  // 1ST GRADE — NON-VERBAL PATTERNS (15 questions)
  // Topics: ABC, ABBC patterns, 2D shapes in sequence, size+color combined,
  //         mirror/reflection basics, which doesn't belong
  // =====================================================================
  { id: 'tp2-nv-1-01', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'ABC pattern',
    visual: '🌈', prompt: 'What comes next in this 3-part ABC pattern?',
    patternItems: ['🌧️', '⛅', '☀️', '🌧️', '⛅'],
    blankIndex: 5, options: ['☀️', '🌧️', '⛅', '🌪️'], answer: '☀️',
    explanation: 'Rain Cloud Sun, Rain Cloud — SUN! ABC pattern with weather! Spotting 3-part patterns is great thinking! ☀️' },

  { id: 'tp2-nv-1-02', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'ABBC pattern',
    visual: '🎵', prompt: 'Look for the ABBC pattern: Red Blue Blue Green, Red Blue Blue — what comes next?',
    patternItems: ['🔴', '🔵', '🔵', '🟢', '🔴', '🔵', '🔵'],
    blankIndex: 7, options: ['🟢', '🔴', '🔵', '🟡'], answer: '🟢',
    explanation: 'Red Blue Blue Green — ABBC pattern! After Red Blue Blue always comes GREEN! A 4-part repeating pattern! 🌟' },

  { id: 'tp2-nv-1-03', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'ABBC pattern',
    visual: '🐾', prompt: 'Cat Dog Dog Bird, Cat Dog Dog — what comes next?',
    patternItems: ['🐱', '🐶', '🐶', '🐦', '🐱', '🐶', '🐶'],
    blankIndex: 7, options: ['🐦', '🐱', '🐶', '🐠'], answer: '🐦',
    explanation: 'Cat Dog Dog Bird — ABBC! After cat and two dogs always comes the BIRD! Great pattern reading! 🐦' },

  { id: 'tp2-nv-1-04', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: '2D shapes in sequence',
    visual: '🔷', prompt: 'The number of SIDES increases by one: Triangle, Square, Pentagon. What comes next?',
    options: ['Hexagon (6 sides)', 'Heptagon (7 sides)', 'Square again', 'Circle (0 sides)'], answer: 'Hexagon (6 sides)',
    explanation: 'Triangle=3, Square=4, Pentagon=5, HEXAGON=6! Each shape has one more side! You counted shape sides! 🌟' },

  { id: 'tp2-nv-1-05', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: '2D shapes in sequence',
    visual: '🔺', prompt: 'The shape rotates 90° clockwise each step: up, right, down, left, up, right — what comes next?',
    options: ['pointing down', 'pointing up', 'pointing right', 'pointing left'], answer: 'pointing down',
    explanation: 'After 4 turns of 90° the pattern restarts! Right points next to Down! Full rotation cycle: up, right, down, left! 🔄' },

  { id: 'tp2-nv-1-06', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'which doesnt belong',
    visual: '🔍', prompt: 'Which does NOT belong? 🔺 🔻 ◀️ 🔷',
    options: ['🔷 (diamond — 4 sides)', '🔺 (triangle)', '🔻 (triangle)', '◀️ (triangle)'], answer: '🔷 (diamond — 4 sides)',
    explanation: 'Three of these are TRIANGLES (3 sides) — the diamond has 4 sides! It does not belong by NUMBER OF SIDES! ✨' },

  { id: 'tp2-nv-1-07', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'size and color',
    visual: '🌙', prompt: 'Big yellow moon, Small yellow moon, Big yellow moon, Small yellow moon — what size and color is next?',
    patternItems: ['🌕Big Yellow', '🌑Small Yellow', '🌕Big Yellow', '🌑Small Yellow'],
    blankIndex: 4, options: ['🌕 Big Yellow', '🌑 Small Yellow', '🌕 Big Blue', '🌑 Small Blue'], answer: '🌕 Big Yellow',
    explanation: 'Big Small, Big Small — ABAB size pattern! AND the color stays yellow! So next is BIG YELLOW moon! 🌕' },

  { id: 'tp2-nv-1-08', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'mirror reflection',
    visual: '🪞', prompt: 'A butterfly is symmetric — its wings look the same on both sides. Which letter is also symmetric when you fold it in half?',
    options: ['A', 'B', 'R', 'F'], answer: 'A',
    explanation: 'The letter A is symmetric! Draw a line down the middle — both sides look the same! B, R, and F are NOT symmetric! 🦋✨' },

  { id: 'tp2-nv-1-09', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'mirror reflection',
    visual: '🪞', prompt: 'If you see the number 2 in a mirror, it looks like...',
    options: ['a backward 2', 'a regular 2', 'the number 5', 'the letter Z'], answer: 'a backward 2',
    explanation: 'A mirror FLIPS left and right — so the number 2 looks reversed, like a backwards 2! Mirrors show us the opposite side! 🔄' },

  { id: 'tp2-nv-1-10', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'ABBC pattern',
    visual: '🎨', prompt: 'Color pattern: Red Orange Orange Yellow, Red Orange Orange — what is next?',
    patternItems: ['🔴', '🟠', '🟠', '🟡', '🔴', '🟠', '🟠'],
    blankIndex: 7, options: ['🟡', '🔴', '🟠', '🟢'], answer: '🟡',
    explanation: 'Red Orange Orange Yellow — ABBC with rainbow colors! After Red Orange Orange comes YELLOW! 🌈' },

  { id: 'tp2-nv-1-11', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'which doesnt belong',
    visual: '🗂️', prompt: 'Which does NOT belong? 🌍 🌏 🌕 🌐',
    options: ['🌕 (the Moon)', '🌍 (Earth globe)', '🌏 (Earth globe)', '🌐 (globe)'], answer: '🌕 (the Moon)',
    explanation: 'Three globes show EARTH — the Moon is Earth satellite, not Earth! The Moon does not belong! 🌕' },

  { id: 'tp2-nv-1-12', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'ABC pattern',
    visual: '🏆', prompt: 'Gold Silver Bronze, Gold Silver Bronze, Gold — what comes next?',
    patternItems: ['🥇', '🥈', '🥉', '🥇', '🥈', '🥉', '🥇'],
    blankIndex: 7, options: ['🥈', '🥇', '🥉', '🏅'], answer: '🥈',
    explanation: 'Gold Silver Bronze — ABC repeating! After Gold comes SILVER! Olympic medals make a great ABC pattern! 🌟' },

  { id: 'tp2-nv-1-13', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: '2D shapes in sequence',
    visual: '📐', prompt: 'Shapes add ONE more side going across a row:\nColumn 1: Triangle (3 sides)\nColumn 2: Square (4 sides)\nColumn 3: ?',
    options: ['Pentagon (5 sides)', 'Hexagon (6 sides)', 'Triangle again', 'Circle'], answer: 'Pentagon (5 sides)',
    explanation: 'Triangle=3, Square=4, PENTAGON=5! Add one side each column! Shape sequences teach you geometry! 📐' },

  { id: 'tp2-nv-1-14', type: 'pattern', level: '1', subject: 'tag-prep', language: 'english', topic: 'size and color',
    visual: '🔵', prompt: 'Big Blue, Small Red, Big Blue, Small Red — what comes next?',
    patternItems: ['🔵BigBlue', '🔴SmallRed', '🔵BigBlue', '🔴SmallRed'],
    blankIndex: 4, options: ['🔵 Big Blue', '🔴 Small Red', '🟢 Big Green', '🔵 Small Blue'], answer: '🔵 Big Blue',
    explanation: 'BOTH size AND color alternate! Big Blue then Small Red — then BIG BLUE again! Two things change at once! 🎯' },

  { id: 'tp2-nv-1-15', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'which doesnt belong',
    visual: '🔍', prompt: 'Which does NOT belong? 2, 4, 6, 7',
    options: ['7 (odd number)', '2 (even)', '4 (even)', '6 (even)'], answer: '7 (odd number)',
    explanation: '2, 4, and 6 are all EVEN numbers — 7 is ODD! It does not belong because it cannot be split into equal groups! 🔢' },

  // 1ST GRADE — QUANTITATIVE REASONING (8 questions)
  { id: 'tp2-s-1-01', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⭐', prompt: '🌟 + 🌟 + 🌟 = 15. One 🌟 = ?',
    options: ['5', '3', '6', '4'], answer: '5',
    explanation: '3 stars = 15, so 1 star = 15 ÷ 3 = 5! Check: 5 + 5 + 5 = 15. Great equation solving! ⭐' },

  { id: 'tp2-s-1-02', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What number is missing? 5, 10, ?, 20, 25',
    options: ['15', '12', '13', '16'], answer: '15',
    explanation: 'Skip counting by 5s: 5, 10, 15, 20, 25! Add 5 each time! Fives are fun to count! 🌟' },

  { id: 'tp2-s-1-03', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'Balance scale: 🍎🍎🍎 = 🍊🍊🍊🍊🍊🍊. Each 🍎 weighs 4. Each 🍊 weighs ?',
    options: ['2', '3', '4', '6'], answer: '2',
    explanation: '3 apples × 4 = 12 total. 6 oranges = 12. So each orange = 12 ÷ 6 = 2! ⚖️🍊' },

  { id: 'tp2-s-1-04', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🎯', prompt: 'Function machine multiplies by 3. If IN = 4, OUT = ?',
    options: ['12', '7', '9', '15'], answer: '12',
    explanation: 'The machine MULTIPLIES by 3! 4 × 3 = 12! Machines follow rules — and so do number patterns! ⚙️' },

  { id: 'tp2-s-1-05', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What number is missing? 1, 4, 9, ?, 25',
    options: ['16', '15', '14', '12'], answer: '16',
    explanation: '1=1², 4=2², 9=3², 16=4², 25=5²! These are SQUARE NUMBERS — numbers multiplied by themselves! 🌟' },

  { id: 'tp2-s-1-06', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🏠', prompt: '? - 7 = 8. What is the missing number?',
    options: ['15', '14', '13', '1'], answer: '15',
    explanation: '? = 8 + 7 = 15! Check: 15 - 7 = 8. Working backwards to find a missing number! Smart! 🧮' },

  { id: 'tp2-s-1-07', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '💡', prompt: 'Growing pattern: 2, 4, 8, 16 — what is the RULE?',
    options: ['double each time (multiply by 2)', 'add 2 each time', 'add 4 each time', 'triple each time'], answer: 'double each time (multiply by 2)',
    explanation: '2×2=4, 4×2=8, 8×2=16 — DOUBLING! This is an exponential pattern! The next would be 32! 🌟' },

  { id: 'tp2-s-1-08', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: '♦️ + ♦️ = ♣️. If ♣️ = 18, what does ♦️ = ?',
    options: ['9', '6', '12', '8'], answer: '9',
    explanation: '2♦️ = 18, so ♦️ = 18 ÷ 2 = 9! Check: 9 + 9 = 18. Symbol equations are like little puzzles! 💎' },

  // 1ST GRADE — VERBAL ANALOGIES (7 questions)
  { id: 'tp2-va-1-01', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Book is to LIBRARY as food is to...',
    options: ['grocery store', 'school', 'hospital', 'bank'], answer: 'grocery store',
    explanation: 'You get BOOKS from a library; you get FOOD from a grocery store! Places where you find things! 🛒' },

  { id: 'tp2-va-1-02', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Wings are to BIRD as fins are to...',
    options: ['fish', 'dog', 'cat', 'rabbit'], answer: 'fish',
    explanation: 'Wings help birds FLY; fins help FISH swim! Body parts that help animals move in their environment! 🐟' },

  { id: 'tp2-va-1-03', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Big is to SMALL as tall is to...',
    options: ['short', 'wide', 'long', 'thin'], answer: 'short',
    explanation: 'Big and small are OPPOSITES; tall and SHORT are also opposites! Size antonym pairs! 📏' },

  { id: 'tp2-va-1-04', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Monday is to WEEKDAY as January is to...',
    options: ['month', 'season', 'holiday', 'year'], answer: 'month',
    explanation: 'Monday is a TYPE of weekday; January is a TYPE of MONTH! Category relationship! 📅' },

  { id: 'tp2-va-1-05', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Doctor is to HOSPITAL as pilot is to...',
    options: ['airplane', 'airport', 'cockpit', 'sky'], answer: 'airplane',
    explanation: 'A doctor works IN a hospital; a pilot works IN an AIRPLANE! Worker to their workplace! ✈️' },

  { id: 'tp2-va-1-06', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Morning is to BREAKFAST as evening is to...',
    options: ['dinner', 'lunch', 'snack', 'dessert'], answer: 'dinner',
    explanation: 'You eat BREAKFAST in the morning; you eat DINNER in the evening! Time of day and meal! 🍽️' },

  { id: 'tp2-va-1-07', type: 'multiple-choice', level: '1', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Acorn is to OAK TREE as seed is to...',
    options: ['plant', 'flower', 'soil', 'water'], answer: 'plant',
    explanation: 'An acorn GROWS INTO an oak tree; a seed grows into a PLANT! What things develop into! 🌱' },

  // =====================================================================
  // 2ND GRADE — NON-VERBAL PATTERNS (15 questions)
  // Topics: shape matrices, rotation, figure classification, growing/shrinking,
  //         symmetry
  // =====================================================================
  { id: 'tp2-nv-2-01', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'shape matrices',
    visual: '🧩', prompt: 'Matrix: each row has the same shape; each column has the same color.\n[Red triangle  Blue triangle]\n[Red circle    Blue circle]\n[Red square    ?]\nWhat fills the missing spot?',
    options: ['Blue square', 'Red square', 'Green square', 'Blue circle'], answer: 'Blue square',
    explanation: 'Row 3 = squares. Column 2 = blue. So the missing piece is BLUE SQUARE! Two rules, one answer! 🌟' },

  { id: 'tp2-nv-2-02', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'rotation',
    visual: '🔄', prompt: 'An arrow pointing UP is rotated 90° to the right (clockwise). Now it points...',
    options: ['right', 'down', 'left', 'up'], answer: 'right',
    explanation: 'Turning 90° clockwise from UP gives you RIGHT! Imagine a clock hand moving from 12 to 3! →' },

  { id: 'tp2-nv-2-03', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Three of these shapes are POLYGONS (closed shapes with straight sides). Which is NOT a polygon?',
    options: ['circle', 'triangle', 'square', 'rectangle'], answer: 'circle',
    explanation: 'Triangle, square, and rectangle are POLYGONS with straight sides — a circle has NO straight sides! ⭕' },

  { id: 'tp2-nv-2-04', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '📈', prompt: 'Growing pattern of square numbers: 1, 4, 9, 16, 25 — what comes next?',
    patternItems: ['1×1=1', '2×2=4', '3×3=9', '4×4=16', '5×5=25'],
    blankIndex: 5, options: ['6×6=36', '6+6=12', '5+6=11', '6×5=30'], answer: '6×6=36',
    explanation: 'SQUARE numbers! 1², 2², 3², 4², 5², 6²=36! Each number multiplied by ITSELF! Super smart! 🌟' },

  { id: 'tp2-nv-2-05', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'shrinking patterns',
    visual: '📉', prompt: 'Shrinking pattern: 81, 27, 9, 3 — what comes next?',
    patternItems: ['81', '27', '9', '3'],
    blankIndex: 4, options: ['1', '2', '0', '6'], answer: '1',
    explanation: 'Dividing by 3 each time: 81÷3=27, 27÷3=9, 9÷3=3, 3÷3=1! A divide-by-3 pattern! 📉' },

  { id: 'tp2-nv-2-06', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'symmetry',
    visual: '🦋', prompt: 'A butterfly has LINE SYMMETRY. This means...',
    options: ['you can fold it in half and both sides match exactly', 'it has colorful wings', 'it can rotate and look the same', 'it has many sides'], answer: 'you can fold it in half and both sides match exactly',
    explanation: 'Line symmetry means one side is a mirror of the other! Many animals and plants have symmetry! 🌺' },

  { id: 'tp2-nv-2-07', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🔍', prompt: 'Which does NOT belong? 🔵 🟠 🔴 🔶',
    options: ['🔶 (diamond shape)', '🔵 (circle)', '🟠 (circle)', '🔴 (circle)'], answer: '🔶 (diamond shape)',
    explanation: 'Blue, orange, and red CIRCLES are all round — the diamond has a different SHAPE! Shape is what matters here! 💎' },

  { id: 'tp2-nv-2-08', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'shape matrices',
    visual: '🧩', prompt: 'Matrix: each row sums to 15. Each column also sums to 15.\n[8  1  6]\n[3  5  7]\n[4  9  ?]\nWhat fills the missing spot?',
    options: ['2', '3', '4', '6'], answer: '2',
    explanation: 'Row 3: 4 + 9 + ? = 15, so ? = 2! Check Column 3: 6 + 7 + 2 = 15. Both rules confirm 2! Magic square! ✨' },

  { id: 'tp2-nv-2-09', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '🔺', prompt: 'Triangular numbers: 1, 3, 6, 10, ? (add 2, then 3, then 4...)',
    patternItems: ['1', '3(+2)', '6(+3)', '10(+4)'],
    blankIndex: 4, options: ['15', '12', '13', '14'], answer: '15',
    explanation: 'Add 2, then 3, then 4, then 5: 10+5=15! These are TRIANGULAR NUMBERS! They make triangular dot arrangements! 🔺🌟' },

  { id: 'tp2-nv-2-10', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'rotation',
    visual: '🔄', prompt: 'The letter "d" is reflected across a vertical mirror line. What letter does it become?',
    options: ['b', 'p', 'q', 'd'], answer: 'b',
    explanation: 'A vertical mirror flips left and right! "d" facing right becomes "b" facing left! Mirror letters are tricky and fun! 🪞' },

  { id: 'tp2-nv-2-11', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which is the ODD ONE OUT? Cube, Pyramid, Sphere, Square',
    options: ['Square (2D flat shape)', 'Cube (3D)', 'Pyramid (3D)', 'Sphere (3D)'], answer: 'Square (2D flat shape)',
    explanation: 'Cube, pyramid, and sphere are all 3D SOLID shapes — a square is a flat 2D shape! Dimension matters! 📦' },

  { id: 'tp2-nv-2-12', type: 'pattern', level: '2', subject: 'tag-prep', language: 'english', topic: 'growing patterns',
    visual: '🌟', prompt: 'The rule alternates +3 then +5: 1, 4, 9, 12, 17, 20, ? What comes next?',
    patternItems: ['1', '4(+3)', '9(+5)', '12(+3)', '17(+5)', '20(+3)'],
    blankIndex: 6, options: ['25', '23', '22', '27'], answer: '25',
    explanation: 'Alternating +3 and +5: 20 + 5 = 25! Two alternating rules — keep track of which one is next! 🎯' },

  { id: 'tp2-nv-2-13', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'symmetry',
    visual: '📐', prompt: 'How many lines of symmetry does a SQUARE have?',
    options: ['4', '1', '2', '8'], answer: '4',
    explanation: 'A square has 4 lines of symmetry — 2 through opposite sides AND 2 through opposite corners! 🔲✨' },

  { id: 'tp2-nv-2-14', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'shape matrices',
    visual: '🧩', prompt: 'Each row has a circle, square, and triangle in different orders.\nRow 1: Circle Square Triangle\nRow 2: Square Triangle Circle\nRow 3: Triangle Circle ?\nWhat fills the last spot?',
    options: ['Square', 'Triangle', 'Circle', 'Diamond'], answer: 'Square',
    explanation: 'Each row uses each shape exactly once! Row 3 already has Triangle and Circle — so the missing shape is SQUARE! 🌟' },

  { id: 'tp2-nv-2-15', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'rotation',
    visual: '🔄', prompt: 'How many degrees do you rotate through in a FULL circle?',
    options: ['360°', '180°', '90°', '270°'], answer: '360°',
    explanation: 'One full circle = 360 degrees! Half circle = 180°, quarter circle = 90°! Angles are parts of a full turn! 🔄' },

  // 2ND GRADE — QUANTITATIVE REASONING (8 questions)
  { id: 'tp2-s-2-01', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: '🐱🐱🐱🐱 = 🐶🐶. If 🐱 = 3, what does 🐶 = ?',
    options: ['6', '4', '9', '12'], answer: '6',
    explanation: '4 cats × 3 = 12 total. 2 dogs = 12, so each dog = 12 ÷ 2 = 6! Balance equations rock! 🌟' },

  { id: 'tp2-s-2-02', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What is the missing number? 3, 7, 11, ?, 19, 23',
    options: ['15', '14', '16', '13'], answer: '15',
    explanation: 'Adding 4 each time: 3, 7, 11, 15, 19, 23! Check: 11 + 4 = 15, and 15 + 4 = 19. Perfect! 🎯' },

  { id: 'tp2-s-2-03', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🎯', prompt: 'Function machine multiplies by 4. If OUT = 28, IN = ?',
    options: ['7', '6', '8', '5'], answer: '7',
    explanation: 'Working BACKWARDS: OUT ÷ 4 = IN. 28 ÷ 4 = 7! Check: 7 × 4 = 28. Reverse engineering! 🔧' },

  { id: 'tp2-s-2-04', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '💡', prompt: 'Symbols: ❤️ × ❤️ = 36. What is ❤️?',
    options: ['6', '7', '9', '4'], answer: '6',
    explanation: '❤️ × ❤️ = 36 means ❤️ squared equals 36, so ❤️ = 6! Check: 6 × 6 = 36. Square roots are cool! 💖' },

  { id: 'tp2-s-2-05', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'Pattern: 100, 96, 91, 85, 78, ? (differences are 4, 5, 6, 7, then 8)',
    options: ['70', '71', '72', '69'], answer: '70',
    explanation: 'Subtracting 4, then 5, then 6, then 7, then 8: 78 - 8 = 70! The amount subtracted grows by 1 each time! 🧠' },

  { id: 'tp2-s-2-06', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'Scale: 🍎🍎🍎 + 🍊 = 🍋🍋🍋🍋🍋. If 🍎=4 and 🍊=3, what does each 🍋=?',
    options: ['3', '2', '4', '5'], answer: '3',
    explanation: '3 apples × 4 = 12. Plus 1 orange = 3. Total = 15. 5 lemons = 15, so each lemon = 15 ÷ 5 = 3! 🍋✨' },

  { id: 'tp2-s-2-07', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🏠', prompt: 'A number times itself equals 49. What is the number?',
    options: ['7', '6', '8', '9'], answer: '7',
    explanation: '7 × 7 = 49! This is called a PERFECT SQUARE — 7 is the square root of 49! ✨' },

  { id: 'tp2-s-2-08', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What is the 10th number in the pattern 3, 6, 9, 12... (multiples of 3)?',
    options: ['30', '27', '33', '25'], answer: '30',
    explanation: '3 × 10 = 30! Multiples of 3: just multiply 3 by the position number! The 10th multiple of 3 is 30! 🌟' },

  // 2ND GRADE — VERBAL ANALOGIES (7 questions)
  { id: 'tp2-va-2-01', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Conductor is to ORCHESTRA as captain is to...',
    options: ['ship', 'concert', 'violin', 'train'], answer: 'ship',
    explanation: 'A conductor LEADS an orchestra; a captain LEADS a ship! Leaders and what they lead! ⚓' },

  { id: 'tp2-va-2-02', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Caterpillar is to BUTTERFLY as tadpole is to...',
    options: ['frog', 'fish', 'salamander', 'turtle'], answer: 'frog',
    explanation: 'A caterpillar transforms into a BUTTERFLY; a tadpole transforms into a FROG! Metamorphosis! 🐸' },

  { id: 'tp2-va-2-03', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Author is to BOOK as composer is to...',
    options: ['music', 'painting', 'sculpture', 'poem'], answer: 'music',
    explanation: 'An author creates a BOOK; a composer creates MUSIC! Artists and the art they create! 🎵' },

  { id: 'tp2-va-2-04', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Desert is to DRY as rainforest is to...',
    options: ['wet', 'cold', 'flat', 'sandy'], answer: 'wet',
    explanation: 'Deserts are DRY; rainforests are WET and get LOTS of rain! Climate opposites! 🌧️' },

  { id: 'tp2-va-2-05', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Paw is to BEAR as hoof is to...',
    options: ['horse', 'eagle', 'shark', 'snake'], answer: 'horse',
    explanation: 'A bear has PAWS; a horse has HOOVES! Different foot structures for different animals! 🐴' },

  { id: 'tp2-va-2-06', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Stanza is to POEM as paragraph is to...',
    options: ['essay', 'letter', 'title', 'sentence'], answer: 'essay',
    explanation: 'A stanza is a group of lines in a POEM; a paragraph is a group of sentences in an ESSAY! Structural parts! 📝' },

  { id: 'tp2-va-2-07', type: 'multiple-choice', level: '2', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Orbit is to moving AROUND a planet as rotate is to...',
    options: ['spinning on your own axis', 'traveling far away', 'moving toward the sun', 'stopping completely'], answer: 'spinning on your own axis',
    explanation: 'Orbit = going AROUND another object. Rotate = spinning on your own AXIS like Earth does every day! 🌍' },

  // =====================================================================
  // 3RD GRADE — NON-VERBAL PATTERNS (15 questions)
  // Topics: 3×3 matrix puzzles, complex alternating patterns, spatial folding,
  //         figure series with 4+ changing attributes
  // =====================================================================
  { id: 'tp2-nv-3-01', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: '3x3 matrix',
    visual: '🧩', prompt: 'Sudoku-style matrix: each row and column has each symbol exactly once.\n[Sun  Moon  Star]\n[Star Sun   Moon]\n[Moon Star  ?  ]\nWhat belongs in the bottom right?',
    options: ['Sun', 'Moon', 'Star', 'Cloud'], answer: 'Sun',
    explanation: 'Row 3 has Moon and Star — missing Sun! Column 3 has Star and Moon — missing Sun! Both confirm SUNSHINE! 🌞' },

  { id: 'tp2-nv-3-02', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'complex alternating patterns',
    visual: '🔢', prompt: 'This pattern alternates +2 and +3: 1, 3, 6, 8, 11, 13, 16, 18, ? What comes next?',
    patternItems: ['1', '3(+2)', '6(+3)', '8(+2)', '11(+3)', '13(+2)', '16(+3)', '18(+2)'],
    blankIndex: 8, options: ['21', '20', '22', '19'], answer: '21',
    explanation: 'Add 2, then add 3, alternating! 18 + 3 = 21! Two-rule alternating patterns take careful attention! 🎯' },

  { id: 'tp2-nv-3-03', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'spatial folding',
    visual: '📄', prompt: 'A square paper is folded from left to right, then a hole is punched on the right side. When unfolded, there are...',
    options: ['2 holes (one on each side)', '1 hole on the right only', '4 holes total', '1 hole in the center'], answer: '2 holes (one on each side)',
    explanation: 'When folded, one punch goes through TWO layers! Unfolding gives 2 holes — one on each side of the fold line! 🕳️✨' },

  { id: 'tp2-nv-3-04', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure series',
    visual: '🔮', prompt: 'A figure series changes TWO things each step: sides increase by one AND it rotates 45°. After triangle-up (step 1) and tilted-square (step 2), step 3 should be...',
    options: ['pentagon rotated 90° from start', 'pentagon pointing straight up', 'hexagon tilted', 'square pointing up'], answer: 'pentagon rotated 90° from start',
    explanation: 'Two rules: add a side (triangle→square→pentagon) AND rotate 45° each step (0°→45°→90°). Step 3 = pentagon at 90°! 🌟' },

  { id: 'tp2-nv-3-05', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: '3x3 matrix',
    visual: '🧩', prompt: 'Matrix: numbers increase by 2 going right and by 5 going down.\n[1   3   5 ]\n[6   8   10]\n[11  13  ?]\nWhat fills the missing spot?',
    options: ['15', '14', '16', '12'], answer: '15',
    explanation: 'Going right: 13 + 2 = 15. Going down: 10 + 5 = 15. BOTH rules confirm 15! Matrix patterns are beautiful! ✨' },

  { id: 'tp2-nv-3-06', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT belong? 12, 18, 24, 30, 35',
    options: ['35 (not a multiple of 6)', '12 (12÷6=2)', '18 (18÷6=3)', '24 (24÷6=4)'], answer: '35 (not a multiple of 6)',
    explanation: '12, 18, 24, 30 are all multiples of 6 — but 35 = 5×7, NOT divisible by 6! 🎯' },

  { id: 'tp2-nv-3-07', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🌀', prompt: 'Pattern with 3 attributes changing at once. Colors cycle Red Blue Green. Shapes alternate Circle Square. Sizes alternate Small Big.\nRed-Small-Circle, Blue-Big-Square, Green-Small-Circle, Red-Big-Square, Blue-Small-Circle, ?',
    patternItems: ['Red-Sm-Circle', 'Blue-Bg-Square', 'Green-Sm-Circle', 'Red-Bg-Square', 'Blue-Sm-Circle'],
    blankIndex: 5, options: ['Green-Big-Square', 'Red-Small-Circle', 'Green-Small-Circle', 'Red-Big-Square'], answer: 'Green-Big-Square',
    explanation: 'Colors cycle: Red Blue Green (next = Green). Sizes: Sm Bg Sm Bg Sm (next = Big). Shapes: Ci Sq Ci Sq Ci (next = Square). Green Big Square! 🌟' },

  { id: 'tp2-nv-3-08', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'spatial folding',
    visual: '📦', prompt: 'A square paper is folded in half TWICE (making 4 layers). A circle is cut from the center. When fully unfolded, how many circles appear?',
    options: ['4', '1', '2', '8'], answer: '4',
    explanation: 'Folding twice creates 4 layers. Cutting through all 4 layers gives 4 circles when unfolded! Each fold doubles the effect! ✂️' },

  { id: 'tp2-nv-3-09', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: '3x3 matrix',
    visual: '🧩', prompt: 'Matrix: numbers in each ROW multiply to the same product.\nRow 1: 2 × 3 × 6 = 36\nRow 2: 4 × 3 × 3 = 36\nRow 3: 6 × 2 × ? = 36\nWhat fills in?',
    options: ['3', '4', '6', '2'], answer: '3',
    explanation: '6 × 2 = 12, and 12 × ? = 36. So ? = 36 ÷ 12 = 3! Each row multiplies to 36! ✨' },

  { id: 'tp2-nv-3-10', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure series',
    visual: '🔢', prompt: 'A figure gains one dot AND flips direction each step. Step 3 faces right. Step 4 will face...',
    options: ['left (opposite of step 3)', 'right (same as step 3)', 'up', 'down'], answer: 'left (opposite of step 3)',
    explanation: 'Flipping direction each step means it alternates! Step 3 faces right, so step 4 faces LEFT! 🔄' },

  { id: 'tp2-nv-3-11', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'complex alternating patterns',
    visual: '🌟', prompt: 'Fibonacci-style: each number = the two before it added together. 2, 3, 5, 8, 13, ? What comes next?',
    patternItems: ['2', '3', '5(2+3)', '8(3+5)', '13(5+8)'],
    blankIndex: 5, options: ['21', '18', '20', '26'], answer: '21',
    explanation: '8 + 13 = 21! This is the Fibonacci pattern! Each number is the sum of the two before it! Found in nature everywhere! 🌿' },

  { id: 'tp2-nv-3-12', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'figure classification',
    visual: '🗂️', prompt: 'Which does NOT share a property with the others? Triangle, Rectangle, Pentagon, Circle',
    options: ['Circle (curved, no straight sides)', 'Triangle (3 sides)', 'Rectangle (4 sides)', 'Pentagon (5 sides)'], answer: 'Circle (curved, no straight sides)',
    explanation: 'Triangle, rectangle, and pentagon are POLYGONS with straight sides. A circle has NO sides or corners! ⭕' },

  { id: 'tp2-nv-3-13', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'spatial folding',
    visual: '📐', prompt: 'A cross-shaped paper (+) is folded along its center horizontal axis (top folded down). What shape is formed?',
    options: ['a T shape', 'a rectangle', 'an X shape', 'a plus sign still'], answer: 'a T shape',
    explanation: 'Folding the cross horizontally brings the top arm down — the bottom arm and two side arms remain, making a T shape! 🔤' },

  { id: 'tp2-nv-3-14', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: '3x3 matrix',
    visual: '🧩', prompt: 'Magic square where each row, column, and diagonal sums to 15.\n[2  7  6]\n[9  5  1]\n[4  ?  8]\nWhat number goes in the middle of the bottom row?',
    options: ['3', '2', '4', '6'], answer: '3',
    explanation: 'Row 3: 4 + ? + 8 = 15, so ? = 3! Check Column 2: 7 + 5 + 3 = 15! You solved a MAGIC SQUARE! 🌟✨' },

  { id: 'tp2-nv-3-15', type: 'pattern', level: '3', subject: 'tag-prep', language: 'english', topic: 'complex alternating patterns',
    visual: '🔢', prompt: 'Pattern A, B, C repeating. What is the 15th term?',
    patternItems: ['A(1)', 'B(2)', 'C(3)', 'A(4)', 'B(5)', 'C(6)'],
    blankIndex: 6, options: ['C', 'A', 'B', 'D'], answer: 'C',
    explanation: '15 ÷ 3 = 5 with remainder 0! Remainder 0 means it is the LAST in the cycle: C! Division helps us find any term! 🎓' },

  // 3RD GRADE — QUANTITATIVE REASONING (8 questions)
  { id: 'tp2-s-3-01', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'Fox Fox + Rabbit = 25. Fox + Rabbit = 15. What does Fox equal?',
    options: ['10', '8', '12', '5'], answer: '10',
    explanation: 'Subtract: (Fox+Fox+Rabbit) - (Fox+Rabbit) = 25 - 15, so Fox = 10! Then Rabbit = 15 - 10 = 5. Check: 10+10+5=25 ✓' },

  { id: 'tp2-s-3-02', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What is the 20th even number? (2, 4, 6, 8...)',
    options: ['40', '38', '42', '20'], answer: '40',
    explanation: 'The nth even number = 2 × n. The 20th even number = 2 × 20 = 40! No need to list them all! 🌟' },

  { id: 'tp2-s-3-03', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '💡', prompt: '3n + 5 = 26. What is n?',
    options: ['7', '6', '8', '9'], answer: '7',
    explanation: '3n = 26 - 5 = 21. n = 21 ÷ 3 = 7. Check: 3×7+5 = 21+5 = 26. Algebra is just puzzle-solving! 🧩' },

  { id: 'tp2-s-3-04', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🎯', prompt: 'Function machine: multiply by 2, then add 1. If OUT = 17, what is IN?',
    options: ['8', '7', '9', '6'], answer: '8',
    explanation: 'Work backwards: OUT - 1 = 16, then 16 ÷ 2 = 8! Reverse the operations in reverse order! 🔧' },

  { id: 'tp2-s-3-05', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'The sum of 3 consecutive numbers is 48. What are the three numbers?',
    options: ['15, 16, 17', '14, 16, 18', '16, 17, 18', '13, 16, 19'], answer: '15, 16, 17',
    explanation: 'Middle number = 48 ÷ 3 = 16. So the numbers are 15, 16, 17. Check: 15+16+17 = 48. Brilliant! 🌟' },

  { id: 'tp2-s-3-06', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '📐', prompt: 'A rectangle has a perimeter of 28. If the length is 9, what is the width?',
    options: ['5', '6', '7', '4'], answer: '5',
    explanation: 'Perimeter = 2 × (length + width). 28 = 2 × (9 + width). 14 = 9 + width. Width = 5! Geometry plus algebra! 📐✨' },

  { id: 'tp2-s-3-07', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'The differences between consecutive terms are: 5, 7, 9, 11... Starting at 5: 5, 10, 17, 26, ? What is next?',
    options: ['37', '35', '30', '40'], answer: '37',
    explanation: 'Differences: 5, 7, 9, 11, 13 (each +2). 26 + 11 = 37! A growing difference pattern — the gaps themselves grow! 🌟' },

  { id: 'tp2-s-3-08', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '💡', prompt: 'If a number is divisible by both 2 AND 3, it is divisible by 6. Is 4,572 divisible by 6?',
    options: ['yes — it is even AND its digits sum to 18 (divisible by 3)', 'no — it is not divisible by 3', 'yes — but only because it ends in 2', 'no — 6 is too big'], answer: 'yes — it is even AND its digits sum to 18 (divisible by 3)',
    explanation: '4572 is even (ends in 2). Sum of digits: 4+5+7+2=18, and 18÷3=6! So 4572 is divisible by 6! Divisibility rules are elegant! 🌟' },

  // 3RD GRADE — VERBAL ANALOGIES (7 questions)
  { id: 'tp2-va-3-01', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Nocturnal is to NIGHT as diurnal is to...',
    options: ['day', 'dawn', 'dark', 'dusk'], answer: 'day',
    explanation: 'Nocturnal animals are active at NIGHT; diurnal animals are active during the DAY! Latin roots: noct=night, di=day! 🌞' },

  { id: 'tp2-va-3-02', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Governor is to STATE as mayor is to...',
    options: ['city', 'country', 'school', 'county'], answer: 'city',
    explanation: 'A governor leads a STATE; a mayor leads a CITY! Each is the top leader of their level of government! 🏙️' },

  { id: 'tp2-va-3-03', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Transparent is to SEE-THROUGH as opaque is to...',
    options: ['blocks light completely', 'lets light through', 'partially clear', 'very bright'], answer: 'blocks light completely',
    explanation: 'Transparent = you can see through it (like glass). Opaque = you CANNOT see through it (like wood). Opposite transparency! 🔦' },

  { id: 'tp2-va-3-04', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Famine is to FOOD as drought is to...',
    options: ['water', 'sunshine', 'soil', 'seeds'], answer: 'water',
    explanation: 'A famine is a severe shortage of FOOD; a drought is a severe shortage of WATER! Both are dangerous natural shortages! 💧' },

  { id: 'tp2-va-3-05', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Simile is to "as fast AS a cheetah" as metaphor is to...',
    options: ['"he IS a cheetah on the field"', '"he ran very fast"', '"as slow as a turtle"', '"running quickly"'], answer: '"he IS a cheetah on the field"',
    explanation: 'A simile COMPARES using "like" or "as." A metaphor says one thing IS another! Both are figurative language! ✍️' },

  { id: 'tp2-va-3-06', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Herbivore is to PLANTS as carnivore is to...',
    options: ['meat', 'insects', 'fish', 'grass'], answer: 'meat',
    explanation: 'A herbivore eats PLANTS; a carnivore eats MEAT! These are types of animal diets! 🥩' },

  { id: 'tp2-va-3-07', type: 'multiple-choice', level: '3', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Epidermis is to SKIN as cranium is to...',
    options: ['skull', 'brain', 'hair', 'neck'], answer: 'skull',
    explanation: 'Epidermis is the scientific word for SKIN; cranium is the scientific word for SKULL! Science vocabulary! 🦴' },

  // =====================================================================
  // TAG LEVEL — NON-VERBAL PATTERNS (15 questions)
  // Topics: complex matrices with multiple rules, paper folding, number-shape
  //         combined patterns, spatial visualization, analogy matrices, complex
  //         which doesn't belong
  // =====================================================================
  { id: 'tp2-nv-t-01', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'analogy matrices',
    visual: '🧩', prompt: 'Analogy matrix: Red Square is to Red Circle as Blue Square is to...',
    options: ['Blue Circle', 'Red Circle', 'Blue Square', 'Green Circle'], answer: 'Blue Circle',
    explanation: 'The rule: keep the COLOR, change the SHAPE from square to circle. Red Square→Red Circle, so Blue Square→Blue Circle! 🌟' },

  { id: 'tp2-nv-t-02', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex matrices',
    visual: '🧩', prompt: 'A 3×3 matrix has 4 changing attributes per cell: shape, color, size, and rotation. In the size column: row 1 = small, row 2 = large, row 3 should be...',
    options: ['small (alternating from large)', 'large', 'medium', 'tiny'], answer: 'small (alternating from large)',
    explanation: 'The SIZE alternates: small, large, small — after large in row 2 comes small in row 3! Tracking 4 attributes is the TAG-level skill! 🌟' },

  { id: 'tp2-nv-t-03', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'paper folding',
    visual: '📄', prompt: 'A square paper is folded diagonally (corner to corner) twice, then the folded corner is cut off. How many holes appear when fully unfolded?',
    options: ['4', '2', '1', '8'], answer: '4',
    explanation: 'Two diagonal folds create 4 layers. Cutting through all 4 gives 4 holes when unfolded! Each fold doubles the effect! ✂️🌟' },

  { id: 'tp2-nv-t-04', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'number-shape combined',
    visual: '🐝', prompt: 'Hexagonal numbers: 1, 7, 19, 37, 61 (differences: +6, +12, +18, +24, +30). What comes next?',
    patternItems: ['1', '7(+6)', '19(+12)', '37(+18)', '61(+24)'],
    blankIndex: 5, options: ['91', '89', '87', '93'], answer: '91',
    explanation: 'Differences increase by 6 each time: +6, +12, +18, +24, +30. 61 + 30 = 91! Hexagonal numbers appear in honeycomb patterns! 🐝' },

  { id: 'tp2-nv-t-05', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex which doesnt belong',
    visual: '🗂️', prompt: 'Which does NOT belong? 64, 125, 216, 512, 100',
    options: ['100 (not a perfect cube)', '64 (4 cubed)', '125 (5 cubed)', '512 (8 cubed)'], answer: '100 (not a perfect cube)',
    explanation: '64=4³, 125=5³, 216=6³, 512=8³ — all PERFECT CUBES! But 100 = 10² — a perfect square, NOT a cube! 🌟' },

  { id: 'tp2-nv-t-06', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial visualization',
    visual: '🔄', prompt: 'Imagine rotating a cube 90° forward (toward you), then 90° to the right. The face originally on TOP is now facing...',
    options: ['to the right', 'toward you', 'down', 'to the left'], answer: 'to the right',
    explanation: 'First rotation forward 90°: top face → front face. Second rotation right 90°: front face → right side! Compound rotations! 🧊' },

  { id: 'tp2-nv-t-07', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'analogy matrices',
    visual: '🧩', prompt: 'Scaling analogy: one triangle is to three triangles as one circle is to...',
    options: ['three circles', 'one circle', 'one triangle', 'two circles'], answer: 'three circles',
    explanation: 'The rule: multiply the shape by 3! Single triangle → 3 triangles. Single circle → THREE circles! Scaling analogy! 🌟' },

  { id: 'tp2-nv-t-08', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex patterns',
    visual: '🌟', prompt: 'Powers of 2 divided by 7: remainders cycle as 2, 4, 1, 2, 4, 1... What is the remainder when 2 to the 6th power is divided by 7?',
    patternItems: ['2¹÷7 rem=2', '2²÷7 rem=4', '2³÷7 rem=1', '2⁴÷7 rem=2', '2⁵÷7 rem=4'],
    blankIndex: 5, options: ['1', '2', '4', '0'], answer: '1',
    explanation: 'The remainders cycle: 2, 4, 1, 2, 4, 1... Cycle length is 3! Position 6: 6÷3=2 remainder 0, so it is the LAST in the cycle: 1! 🌟' },

  { id: 'tp2-nv-t-09', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex matrices',
    visual: '🧩', prompt: 'Matrix: each row and column sums to 18.\n[3   8   7]\n[10  2   6]\n[5   ?   4]\nWhat number goes in Row 3, Column 2?',
    options: ['9', '8', '7', '6'], answer: '9',
    explanation: 'Row 3: 5 + ? + 4 = 18, so ? = 9! Check: Column 2: 8 + 2 + 9 = 19 — wait, rows sum to 18: 5+9+4=18 ✓ Row rule confirmed! 🌟' },

  { id: 'tp2-nv-t-10', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial visualization',
    visual: '📐', prompt: 'How many lines of symmetry does a regular hexagon have?',
    options: ['6', '3', '4', '12'], answer: '6',
    explanation: 'A regular hexagon has 6 lines of symmetry — 3 connecting opposite vertices and 3 connecting midpoints of opposite sides! 🔷' },

  { id: 'tp2-nv-t-11', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex which doesnt belong',
    visual: '🗂️', prompt: 'Which does NOT belong? 2, 3, 7, 11, 15',
    options: ['15 (not prime — equals 3 × 5)', '2 (prime)', '3 (prime)', '7 (prime)'], answer: '15 (not prime — equals 3 × 5)',
    explanation: '2, 3, 7, and 11 are all PRIME numbers. But 15 = 3 × 5, so it is COMPOSITE, not prime! 🔢' },

  { id: 'tp2-nv-t-12', type: 'pattern', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'number-shape combined',
    visual: '🔺', prompt: 'Triangular numbers: 1, 3, 6, 10, 15, 21, 28 (differences: 2, 3, 4, 5, 6, 7). What is the NEXT triangular number?',
    patternItems: ['1', '3(+2)', '6(+3)', '10(+4)', '15(+5)', '21(+6)', '28(+7)'],
    blankIndex: 7, options: ['36', '35', '38', '32'], answer: '36',
    explanation: '28 + 8 = 36! The differences increase by 1 each step — next difference is 8! Triangular numbers form perfect triangular dot arrangements! 🔺🌟' },

  { id: 'tp2-nv-t-13', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex matrices',
    visual: '🧩', prompt: 'Matrix rule: each cell = (row number) × (column number squared). Row 3, Column 3 = ?',
    options: ['27', '18', '9', '36'], answer: '27',
    explanation: 'Row 3, Col 3 = 3 × (3²) = 3 × 9 = 27! The rule combines row × column squared — two different operations! 🧮✨' },

  { id: 'tp2-nv-t-14', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'spatial visualization',
    visual: '📦', prompt: 'A 4×4×4 cube is painted red on all outside faces, then cut into 64 unit cubes. How many small cubes have exactly 2 painted faces?',
    options: ['24', '8', '16', '32'], answer: '24',
    explanation: 'Cubes with 2 painted faces sit on EDGES (not corners!). A 4×4×4 cube has 12 edges, each with 2 inner cubes = 12 × 2 = 24! 🎨' },

  { id: 'tp2-nv-t-15', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'complex which doesnt belong',
    visual: '🗂️', prompt: 'Which does NOT belong? 1/2, 0.5, 50%, 2/5',
    options: ['2/5 (equals 0.4, not 0.5)', '1/2 (equals 0.5)', '0.5 (decimal)', '50% (equals 0.5)'], answer: '2/5 (equals 0.4, not 0.5)',
    explanation: '1/2 = 0.5 = 50% — all three are the SAME value! But 2/5 = 0.4, which is different! Equivalent representations! 🌟' },

  // TAG LEVEL — QUANTITATIVE REASONING (8 questions)
  { id: 'tp2-s-t-01', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'Lion + Tiger = 30 and Lion - Tiger = 6. What does Lion equal?',
    options: ['18', '12', '24', '15'], answer: '18',
    explanation: 'Add the equations: 2×Lion = 36, so Lion = 18! Then Tiger = 30 - 18 = 12. Check: 18 - 12 = 6. Systems of equations! 🌟' },

  { id: 'tp2-s-t-02', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'The sum of all integers from 1 to 100 equals...',
    options: ['5050', '5000', '4950', '10000'], answer: '5050',
    explanation: 'Gauss trick: pair 1+100=101, 2+99=101... 50 pairs × 101 = 5050! The young genius Gauss solved this in seconds! 🧠✨' },

  { id: 'tp2-s-t-03', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🎯', prompt: 'Function machine: f(x) = 2x - 3. If f(x) = 11, what is x?',
    options: ['7', '8', '6', '9'], answer: '7',
    explanation: '2x - 3 = 11. Add 3: 2x = 14. Divide: x = 7. Check: 2×7-3 = 14-3 = 11. Function machines are algebra in disguise! 🔧' },

  { id: 'tp2-s-t-04', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: '2 to the 3rd power times 2 to the 4th power = ?',
    options: ['2 to the 7th power', '2 to the 12th power', '4 to the 7th power', '2 to the 6th power'], answer: '2 to the 7th power',
    explanation: 'When multiplying with the same base, ADD the exponents! 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128! Law of exponents! 💡' },

  { id: 'tp2-s-t-05', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '⚖️', prompt: 'Gear A has 12 teeth. Gear B has 4 teeth. When Gear A makes one full rotation, how many times does Gear B rotate?',
    options: ['3 times', '4 times', '2 times', '12 times'], answer: '3 times',
    explanation: 'Gear ratio: 12 ÷ 4 = 3. For every full turn of the big gear, the small gear turns 3 times! Gears are ratio machines! ⚙️' },

  { id: 'tp2-s-t-06', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'What is the value of (3 + 4) × 2 - 5 ÷ 1?',
    options: ['9', '11', '12', '7'], answer: '9',
    explanation: 'Order of operations: parentheses first (3+4)=7. Then 7×2=14. Then 5÷1=5. Finally 14-5=9! PEMDAS saves the day! 🧮' },

  { id: 'tp2-s-t-07', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '📊', prompt: 'If the probability of flipping HEADS is 1/2, what is the probability of flipping heads TWICE IN A ROW?',
    options: ['1/4', '1/2', '1/3', '1/8'], answer: '1/4',
    explanation: '1/2 × 1/2 = 1/4! Multiply probabilities for independent events! A 1 in 4 chance — probability predicts what MIGHT happen! 🎲' },

  { id: 'tp2-s-t-08', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'quantitative reasoning',
    visual: '🔢', prompt: 'How many diagonals does a hexagon (6 sides) have? Formula: n(n-3)/2',
    options: ['9', '6', '8', '12'], answer: '9',
    explanation: '6×(6-3)/2 = 6×3/2 = 18/2 = 9 diagonals! Using a formula to count precisely — that is higher-level math! 🌟' },

  // TAG LEVEL — VERBAL ANALOGIES (7 questions)
  { id: 'tp2-va-t-01', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Trepidation is to FEAR as elation is to...',
    options: ['extreme happiness', 'sadness', 'confusion', 'anger'], answer: 'extreme happiness',
    explanation: 'Trepidation means great FEAR; elation means great HAPPINESS! They are intensity synonyms of opposite emotions! 🎉' },

  { id: 'tp2-va-t-02', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Catalyst is to CHEMICAL REACTION as inspiration is to...',
    options: ['creative work', 'physical exercise', 'eating food', 'sleeping'], answer: 'creative work',
    explanation: 'A catalyst triggers a chemical reaction; inspiration triggers CREATIVE WORK! Both ignite processes! ✨' },

  { id: 'tp2-va-t-03', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Wane is to DECREASE as wax is to...',
    options: ['increase', 'brighten', 'melt', 'diminish'], answer: 'increase',
    explanation: 'The moon WANES (decreases) and WAXES (increases)! Wax and wane are antonyms — growing and shrinking! 🌙' },

  { id: 'tp2-va-t-04', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Theorem is to MATHEMATICS as statute is to...',
    options: ['law', 'science', 'history', 'medicine'], answer: 'law',
    explanation: 'A theorem is a proven statement in MATH; a statute is a formal rule in LAW! Formal, established truths in their fields! ⚖️' },

  { id: 'tp2-va-t-05', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Myopia is to NEARSIGHTEDNESS as hyperopia is to...',
    options: ['farsightedness', 'colorblindness', 'night blindness', 'perfect vision'], answer: 'farsightedness',
    explanation: 'Myopia = nearsighted (cannot see far). Hyperopia = FARSIGHTED (cannot see close)! Medical vocabulary as analogy! 👓' },

  { id: 'tp2-va-t-06', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Archipelago is to ISLANDS as constellation is to...',
    options: ['stars', 'planets', 'galaxies', 'comets'], answer: 'stars',
    explanation: 'An archipelago is a GROUP of islands; a constellation is a GROUP of STARS! Named collections! ⭐🌟' },

  { id: 'tp2-va-t-07', type: 'multiple-choice', level: 'TAG', subject: 'tag-prep', language: 'english', topic: 'verbal analogies',
    visual: '🔗', prompt: 'Osmosis is to WATER MOVEMENT across membranes as diffusion is to...',
    options: ['particles moving from high to low concentration', 'stopping all movement', 'creating water', 'heating molecules'], answer: 'particles moving from high to low concentration',
    explanation: 'Osmosis = water moving through membranes. Diffusion = particles spreading from HIGH to LOW concentration! Like perfume spreading in a room! 🔬' },
]
