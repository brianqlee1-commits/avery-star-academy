import type { Lesson, Subject, GradeLevel, Language } from '../../types'

export const LESSONS: Lesson[] = [

  // ─── READING ──────────────────────────────────────────────────────────────

  {
    id: 'les-read-k-rhyme',
    subject: 'reading', level: 'K', language: 'english',
    topic: 'rhyming', title: 'Rhyming Words', visual: '🐝',
    tagline: 'Words that sound the same at the end!',
    explanation: 'Rhyming words end with the SAME sound! BEE and TREE both end in the "-ee" sound, so they rhyme. When words rhyme, they sound like music!',
    keyPoints: ['Listen for the ENDING sound', 'Cat, hat, bat, sat — all rhyme!', 'Rhyming helps us read and remember words'],
    examples: [
      { visual: '🐱🎩', prompt: 'Do CAT and HAT rhyme?', answer: 'YES! They both end in -AT', explanation: 'CAT... HAT... both end in the /at/ sound. They rhyme! 🎉' },
      { visual: '🐶🌲', prompt: 'Do DOG and TREE rhyme?', answer: 'NO. Dog ends in -OG, tree ends in -EE', explanation: 'DOG ends in /og/ and TREE ends in /ee/ — different sounds, so they do NOT rhyme.' },
    ],
    practiceSteps: [
      { visual: '🐝', prompt: 'Which word rhymes with BEE?', options: ['tree', 'dog', 'cat', 'sun'], answer: 'tree', hint: 'Listen for the -EE sound at the end!', explanation: 'BEE and TREE both end in -EE! They rhyme! 🌟' },
      { visual: '🐸', prompt: 'Which word rhymes with FROG?', options: ['fish', 'log', 'duck', 'hen'], answer: 'log', hint: 'Say each word out loud — which ends in -OG?', explanation: 'FROG and LOG both end in -OG! Great listening! 🎉' },
      { visual: '🌙', prompt: 'Which word rhymes with MOON?', options: ['star', 'sun', 'spoon', 'cloud'], answer: 'spoon', hint: 'Moon ends in -OON. Which option ends the same way?', explanation: 'MOON and SPOON — both end in -OON! You\'re a rhyme expert! ⭐' },
    ],
    quizTopics: ['rhyming'],
  },

  {
    id: 'les-read-k-phonics',
    subject: 'reading', level: 'K', language: 'english',
    topic: 'phonics', title: 'Letter Sounds', visual: '🔤',
    tagline: 'Every letter has its own special sound!',
    explanation: 'Each letter in the alphabet makes a sound. When you put sounds together, they make words! The letter A says /a/ like in APPLE. The letter B says /b/ like in BALL.',
    keyPoints: ['Letters make sounds', 'Putting sounds together makes words', 'Practice saying each sound out loud!'],
    examples: [
      { visual: '🍎', prompt: 'What sound does A make?', answer: '/a/ — like in APPLE and ANT', explanation: 'A says /a/! Say it with me: A... apple! A... ant!' },
      { visual: '🐱', prompt: 'What sound does C make in CAT?', answer: '/k/ — the hard C sound', explanation: 'C makes the /k/ sound in CAT! C-A-T spells cat!' },
    ],
    practiceSteps: [
      { visual: '🐶', prompt: 'What sound does D make — like in DOG?', options: ['/d/', '/b/', '/g/', '/p/'], answer: '/d/', hint: 'Put your tongue behind your top teeth and say "duh"', explanation: 'D says /d/! DOG starts with D! 🐕' },
      { visual: '🌸', prompt: 'Which letter makes the /f/ sound — like in FISH?', options: ['F', 'V', 'P', 'T'], answer: 'F', hint: 'Touch your top teeth to your bottom lip and blow air!', explanation: 'F makes the /f/ sound! Fish, fun, and flower all start with F! 🐟' },
      { visual: '🌞', prompt: 'What letter starts the word SUN?', options: ['S', 'C', 'Z', 'X'], answer: 'S', hint: 'Make a snake sound — sssss!', explanation: 'S starts SUN! S says /s/ — like a sneaky snake! ☀️' },
    ],
    quizTopics: ['phonics', 'beginning sounds'],
  },

  {
    id: 'les-read-1-main-idea',
    subject: 'reading', level: '1', language: 'english',
    topic: 'main idea', title: 'Finding the Main Idea', visual: '🔍',
    tagline: 'What is the BIG point of the story?',
    explanation: 'The MAIN IDEA is the most important thing a text is about. Think of it like the big umbrella — all the details are under it! Ask yourself: "What is this MOSTLY about?"',
    keyPoints: ['Main idea = the biggest, most important point', 'Details support the main idea', 'Ask: "What is this MOSTLY about?"'],
    examples: [
      { visual: '🐝', prompt: '"Bees make honey. They live in hives. Bees help flowers grow." What is the main idea?', answer: 'Bees are important insects with interesting jobs!', explanation: 'All three sentences are ABOUT bees and what they do — that\'s the main idea! ✅' },
      { visual: '🌧️', prompt: '"It rained all day. Emma wore her boots. The puddles were huge." Main idea?', answer: 'It was a very rainy day!', explanation: 'Every detail is about rain — boots, puddles, all day! The main idea is it was a rainy day!' },
    ],
    practiceSteps: [
      { visual: '🐠', prompt: '"Fish live in water. They breathe through gills. Fish come in many colors." What is the main idea?', options: ['Fish are interesting water animals', 'Fish are blue', 'Water is blue', 'Fish eat a lot'], answer: 'Fish are interesting water animals', hint: 'What are ALL the sentences talking about?', explanation: 'Every sentence is about fish! The main idea is that fish are interesting animals that live in water! 🌊' },
      { visual: '🌻', prompt: '"Sunflowers are tall. They have yellow petals. Sunflowers face the sun." Main idea?', options: ['Sunflowers are amazing plants', 'The sun is hot', 'Flowers are yellow', 'Petals fall off'], answer: 'Sunflowers are amazing plants', hint: 'What is EVERY sentence about?', explanation: 'All sentences describe sunflowers — so the main idea is about sunflowers!' },
      { visual: '🦋', prompt: '"A butterfly starts as an egg. Then it becomes a caterpillar. Next it makes a cocoon. Finally it flies!" Main idea?', options: ['Butterflies have an amazing life cycle', 'Eggs are small', 'Cocoons are silky', 'Caterpillars eat leaves'], answer: 'Butterflies have an amazing life cycle', hint: 'The passage shows us the steps of something — what?', explanation: 'Every sentence shows one step of a butterfly\'s life cycle — that\'s the main idea! 🌟' },
    ],
    quizTopics: ['main idea', 'comprehension'],
  },

  {
    id: 'les-read-2-context-clues',
    subject: 'reading', level: '2', language: 'english',
    topic: 'context clues', title: 'Context Clues', visual: '🕵️',
    tagline: 'Use clues in the sentence to find meaning!',
    explanation: 'A CONTEXT CLUE is a hint hiding in the sentence that tells you what a new word means. You don\'t need a dictionary — just read the words AROUND the mystery word!',
    keyPoints: ['Look at words AROUND the unknown word', 'The sentence gives you clues!', 'Try replacing the word with your guess'],
    examples: [
      { visual: '🌊', prompt: '"The enormous wave crashed over the tiny boat." What does ENORMOUS mean?', answer: 'Very, very big!', explanation: '"Tiny boat" is the clue — if the boat is TINY and the wave crashed over it, the wave must be ENORMOUS (very big)!' },
      { visual: '🦁', prompt: '"The lion devoured the meal in seconds — it was so hungry!" What does DEVOURED mean?', answer: 'Ate quickly and hungrily', explanation: '"So hungry" and "in seconds" are clues! Devoured means ate up very fast and eagerly!' },
    ],
    practiceSteps: [
      { visual: '🌵', prompt: '"The desert is so arid that almost nothing grows there." ARID means...', options: ['very dry', 'very cold', 'very windy', 'very green'], answer: 'very dry', hint: 'What kind of place makes it hard for things to grow?', explanation: 'A desert is famous for being DRY — so arid means very dry! 🏜️' },
      { visual: '🐢', prompt: '"The turtle moved at a sluggish pace, barely getting anywhere." SLUGGISH means...', options: ['very slow', 'very fast', 'very tall', 'very loud'], answer: 'very slow', hint: '"Barely getting anywhere" is your clue!', explanation: 'Barely getting anywhere = moving very slowly! Sluggish means slow and lazy! 🐢' },
      { visual: '🌟', prompt: '"Mia felt elated when she won first place. She jumped for joy!" ELATED means...', options: ['very happy', 'very tired', 'very angry', 'very hungry'], answer: 'very happy', hint: '"Jumped for joy" — that\'s a clue about how she feels!', explanation: 'Jumping for joy = being very happy! Elated means extremely happy! 🎉' },
    ],
    quizTopics: ['context clues', 'vocabulary', 'comprehension'],
  },

  {
    id: 'les-read-3-figurative',
    subject: 'reading', level: '3', language: 'english',
    topic: 'figurative language', title: 'Figurative Language', visual: '🎭',
    tagline: 'Words that paint pictures in your mind!',
    explanation: 'Figurative language uses words in creative, non-literal ways to make writing more interesting. A SIMILE compares two things using "like" or "as." A METAPHOR says one thing IS another thing. PERSONIFICATION gives human qualities to non-human things.',
    keyPoints: ['Simile = uses "like" or "as" to compare', 'Metaphor = says one thing IS another', 'Personification = gives human traits to things'],
    examples: [
      { visual: '⚡', prompt: '"She ran as fast as lightning." What type of figurative language?', answer: 'Simile — uses AS to compare running to lightning', explanation: 'Simile! "As fast AS lightning" — the word AS signals a comparison! She\'s not really lightning, but she\'s LIKE it!' },
      { visual: '🌊', prompt: '"The ocean was an angry giant, crashing against the rocks." What type?', answer: 'Personification — the ocean is given the human emotion of anger', explanation: 'Oceans can\'t really BE angry — that\'s a human feeling! Giving human traits to the ocean = personification!' },
    ],
    practiceSteps: [
      { visual: '🦁', prompt: '"His voice was thunder, shaking the whole room." This is a...', options: ['metaphor', 'simile', 'alliteration', 'rhyme'], answer: 'metaphor', hint: 'Does it use "like" or "as"? No? Then it\'s not a simile...', explanation: 'His voice IS thunder — no "like" or "as" — that\'s a METAPHOR! Direct comparison! 🔊' },
      { visual: '🌹', prompt: '"The flowers danced in the breeze." This is...', options: ['personification', 'simile', 'metaphor', 'alliteration'], answer: 'personification', hint: 'Can flowers really dance? Only humans/animals dance...', explanation: 'Flowers can\'t dance — dancing is a human action! Giving flowers the ability to dance = PERSONIFICATION! 💃' },
      { visual: '🚀', prompt: '"Avery was as quick as a cheetah on the racetrack!" This is a...', options: ['simile', 'metaphor', 'personification', 'alliteration'], answer: 'simile', hint: 'Look for "like" or "as"!', explanation: '"As quick AS a cheetah" — the word AS is there! That makes it a SIMILE! Great spotting! ⭐' },
    ],
    quizTopics: ['figurative language', 'literary devices'],
  },

  {
    id: 'les-read-tag-analogies',
    subject: 'reading', level: 'TAG', language: 'english',
    topic: 'analogies', title: 'Word Analogies', visual: '🔗',
    tagline: 'Find the hidden relationship between words!',
    explanation: 'An ANALOGY shows a relationship between two pairs of words. You find the pattern in the first pair, then use that SAME pattern for the second pair. Types of relationships include: part/whole, cause/effect, function, category, and synonym/antonym.',
    keyPoints: ['Find the relationship in the first pair', 'Apply the SAME relationship to the second pair', 'Common types: part/whole, function, category, synonym'],
    examples: [
      { visual: '📚', prompt: 'Book is to LIBRARY as painting is to ___', answer: 'Museum — both are places that hold/display those things', explanation: 'A book is KEPT in a library. A painting is KEPT in a museum! The relationship is: object → where it\'s housed.' },
      { visual: '🐾', prompt: 'Puppy is to DOG as kitten is to ___', answer: 'Cat — both are baby → adult animal relationships', explanation: 'Puppy = baby dog. Kitten = baby cat! The relationship is: baby animal → adult animal.' },
    ],
    practiceSteps: [
      { visual: '🔗', prompt: 'Glove is to HAND as hat is to ___', options: ['head', 'foot', 'arm', 'shoulder'], answer: 'head', hint: 'What does a glove cover? What body part does a hat cover?', explanation: 'A glove covers your HAND. A hat covers your HEAD! The relationship is: accessory → body part it covers. 🎩' },
      { visual: '🔗', prompt: 'Doctor is to HOSPITAL as teacher is to ___', options: ['school', 'office', 'library', 'store'], answer: 'school', hint: 'Where does a doctor work? Where does a teacher work?', explanation: 'A doctor works in a HOSPITAL. A teacher works in a SCHOOL! Relationship: person → their workplace. 🏫' },
      { visual: '🔗', prompt: 'Hot is to COLD as day is to ___', options: ['night', 'sun', 'warm', 'morning'], answer: 'night', hint: 'Hot and cold are OPPOSITES. What is the opposite of day?', explanation: 'Hot ↔ Cold are opposites. Day ↔ Night are opposites! The relationship is ANTONYMS. 🌙' },
    ],
    quizTopics: ['analogies', 'word relationships'],
  },

  // ─── MATH ─────────────────────────────────────────────────────────────────

  {
    id: 'les-math-k-addition',
    subject: 'math', level: 'K', language: 'english',
    topic: 'addition', title: 'Adding Numbers', visual: '➕',
    tagline: 'Put groups together to find the total!',
    explanation: 'ADDITION means putting two groups together to find how many in all. The + sign means "plus" or "and." You can count on your fingers, draw dots, or count on from the bigger number!',
    keyPoints: ['Addition = putting groups together', 'The answer is called the SUM', 'Start from the bigger number and count up!'],
    examples: [
      { visual: '🍎🍎 + 🍎🍎🍎', prompt: '2 apples + 3 apples = ?', answer: '5 apples', explanation: 'Start at 2, then count up 3 more: 3, 4, 5! So 2 + 3 = 5! 🎉' },
      { visual: '⭐⭐⭐⭐ + ⭐', prompt: '4 stars + 1 star = ?', answer: '5 stars', explanation: 'Start at 4 (the bigger number), count up 1 more: 5! 4 + 1 = 5!' },
    ],
    practiceSteps: [
      { visual: '🐸', prompt: '3 + 2 = ?', options: ['4', '5', '6', '3'], answer: '5', hint: 'Start at 3, then count up 2 more fingers: 4, 5!', explanation: '3 + 2 = 5! Count up: 3... 4... 5! You got it! 🌟' },
      { visual: '🍭', prompt: '5 + 4 = ?', options: ['8', '9', '10', '7'], answer: '9', hint: 'Start at 5 (the bigger number) and count up 4: 6, 7, 8, 9!', explanation: '5 + 4 = 9! Count on from 5: 6, 7, 8, 9! Great job! 🍬' },
      { visual: '🌟', prompt: '6 + 3 = ?', options: ['8', '7', '9', '10'], answer: '9', hint: 'Start at 6 and count up 3 more!', explanation: '6 + 3 = 9! 6... 7, 8, 9! You\'re an addition star! ⭐' },
    ],
    quizTopics: ['addition'],
  },

  {
    id: 'les-math-1-place-value',
    subject: 'math', level: '1', language: 'english',
    topic: 'place value', title: 'Tens and Ones', visual: '🏠',
    tagline: 'Every digit has a special place!',
    explanation: 'In a 2-digit number, each digit lives in a special PLACE. The left digit shows how many TENS. The right digit shows how many ONES. In the number 34, the 3 means 3 tens (= 30) and the 4 means 4 ones (= 4). 30 + 4 = 34!',
    keyPoints: ['Left digit = TENS place', 'Right digit = ONES place', '34 = 3 tens + 4 ones = 30 + 4'],
    examples: [
      { visual: '🔢', prompt: 'In the number 47, which digit is in the TENS place?', answer: '4 is in the tens place (= 40)', explanation: '47: the 4 is on the LEFT = tens place = 40. The 7 is on the right = ones place = 7. 40 + 7 = 47!' },
      { visual: '🔢', prompt: 'What is 5 tens + 6 ones?', answer: '56', explanation: '5 tens = 50, 6 ones = 6. 50 + 6 = 56! The tens digit goes first!' },
    ],
    practiceSteps: [
      { visual: '🏠', prompt: 'In the number 23, which digit is in the TENS place?', options: ['2', '3', '23', '5'], answer: '2', hint: 'The TENS digit is on the LEFT side of the number.', explanation: '23: the 2 is in the TENS place (= 20), the 3 is in the ONES place! 🏠' },
      { visual: '🔢', prompt: 'What number is 6 tens and 8 ones?', options: ['86', '68', '14', '60'], answer: '68', hint: 'Tens come first (on the left), then ones (on the right)!', explanation: '6 tens = 60, 8 ones = 8. Put them together: 68! 🌟' },
      { visual: '🔢', prompt: 'In the number 91, the digit 9 is in the ___ place?', options: ['tens', 'ones', 'hundreds', 'thousands'], answer: 'tens', hint: '91: which side is 9 on — left or right?', explanation: '9 is on the LEFT side of 91 = TENS place! 9 tens = 90! ⭐' },
    ],
    quizTopics: ['place value'],
  },

  {
    id: 'les-math-2-multiplication',
    subject: 'math', level: '2', language: 'english',
    topic: 'multiplication', title: 'Multiplication: Equal Groups', visual: '✖️',
    tagline: 'Repeated adding made fast!',
    explanation: 'MULTIPLICATION is a quick way to add the same number many times. 3 × 4 means "3 groups of 4." Instead of counting 4 + 4 + 4, we just say 3 × 4 = 12! The × sign means "times" or "groups of."',
    keyPoints: ['Multiplication = equal groups added together', '3 × 4 = three groups of four = 12', 'It\'s MUCH faster than adding over and over!'],
    examples: [
      { visual: '🍪🍪🍪', prompt: '3 bags with 5 cookies each. How many cookies total?', answer: '3 × 5 = 15 cookies', explanation: '5 + 5 + 5 = 15. But faster: 3 × 5 = 15! Three groups of five equals fifteen!' },
      { visual: '⭐', prompt: '4 × 3 = ?', answer: '12', explanation: '4 groups of 3: 3, 6, 9, 12! Count by 3s four times! 4 × 3 = 12!' },
    ],
    practiceSteps: [
      { visual: '🌸', prompt: '2 × 6 = ?', options: ['10', '12', '8', '14'], answer: '12', hint: 'Count by 6s, 2 times: 6... 12!', explanation: '2 × 6 = 12! Two groups of six! 6 + 6 = 12! 🌸' },
      { visual: '🚌', prompt: '5 × 3 = ?', options: ['12', '13', '15', '18'], answer: '15', hint: 'Count by 5s, three times: 5, 10, 15!', explanation: '5 × 3 = 15! Three groups of five = 5 + 5 + 5 = 15! 🚌' },
      { visual: '🍕', prompt: 'Each pizza has 4 slices. There are 6 pizzas. How many slices total?', options: ['10', '20', '24', '18'], answer: '24', hint: 'This is 6 × 4. Count by 4s six times!', explanation: '6 × 4 = 24! Six pizzas × four slices = 24 slices! 🍕' },
    ],
    quizTopics: ['multiplication'],
  },

  {
    id: 'les-math-3-fractions',
    subject: 'math', level: '3', language: 'english',
    topic: 'fractions', title: 'Understanding Fractions', visual: '🍕',
    tagline: 'Equal parts of a whole!',
    explanation: 'A FRACTION shows part of a whole. The BOTTOM number (denominator) tells how many equal parts the whole is split into. The TOP number (numerator) tells how many parts you have. 3/4 means 3 out of 4 equal parts!',
    keyPoints: ['Top = numerator (parts you have)', 'Bottom = denominator (total equal parts)', '3/4 means 3 out of 4 equal pieces'],
    examples: [
      { visual: '🍕', prompt: 'A pizza cut into 8 equal slices. You eat 3. What fraction did you eat?', answer: '3/8 — three out of eight slices', explanation: '8 slices total (denominator = 8). You ate 3 (numerator = 3). You ate 3/8 of the pizza!' },
      { visual: '🍫', prompt: 'Which is greater: 1/2 or 1/4?', answer: '1/2 is greater', explanation: 'Imagine one chocolate bar. Cut into 2 pieces (1/2) vs 4 pieces (1/4). Fewer cuts = BIGGER pieces! So 1/2 > 1/4!' },
    ],
    practiceSteps: [
      { visual: '🔵', prompt: '6 circles. 2 are colored in. What fraction is colored?', options: ['2/6', '6/2', '4/6', '1/2'], answer: '2/6', hint: 'Numerator = colored ones. Denominator = total circles.', explanation: '2 colored out of 6 total = 2/6! You could also simplify to 1/3, but 2/6 is correct! 🎉' },
      { visual: '📏', prompt: 'Which fraction is LARGER: 3/4 or 2/4?', options: ['3/4', '2/4', 'they\'re equal', 'can\'t tell'], answer: '3/4', hint: 'Same denominator — just compare the numerators!', explanation: 'Same-size pieces (fourths), so more pieces = bigger fraction! 3/4 > 2/4! ⭐' },
      { visual: '🍫', prompt: 'A chocolate bar has 10 pieces. Maya ate 4. What fraction is LEFT?', options: ['4/10', '6/10', '10/4', '10/6'], answer: '6/10', hint: '10 total - 4 eaten = ? pieces left. That\'s the numerator!', explanation: '10 - 4 = 6 pieces left out of 10 total = 6/10! Great fraction thinking! 🍫' },
    ],
    quizTopics: ['fractions'],
  },

  {
    id: 'les-math-tag-patterns',
    subject: 'math', level: 'TAG', language: 'english',
    topic: 'number patterns', title: 'Number Patterns & Sequences', visual: '🔢',
    tagline: 'Find the rule, predict the next number!',
    explanation: 'A SEQUENCE follows a rule. To find the rule, look at how numbers change between each step. Do they add? Subtract? Multiply? Double? Once you find the rule, you can predict any number in the sequence!',
    keyPoints: ['Find the RULE first (add? subtract? multiply?)', 'Check the rule with 2–3 numbers to make sure', 'Apply the rule to find the next number'],
    examples: [
      { visual: '🔢', prompt: '2, 4, 8, 16, ___ — what\'s the rule?', answer: 'Each number DOUBLES (×2). Next = 32!', explanation: '2×2=4, 4×2=8, 8×2=16, 16×2=32! The rule is multiply by 2 each time! This is a GEOMETRIC sequence!' },
      { visual: '🔢', prompt: '1, 4, 9, 16, ___ — what\'s the rule?', answer: 'Square numbers! 1², 2², 3², 4²... Next = 25 (5²)', explanation: '1=1², 4=2², 9=3², 16=4², 25=5²! These are perfect square numbers!' },
    ],
    practiceSteps: [
      { visual: '🧩', prompt: '3, 6, 9, 12, ___ — what comes next?', options: ['14', '15', '16', '13'], answer: '15', hint: 'Check: 6-3=3, 9-6=3, 12-9=3... so we\'re adding ___ each time?', explanation: 'The rule is +3 each time! 12 + 3 = 15! Counting by 3s! 🎉' },
      { visual: '🧩', prompt: '100, 50, 25, ___ — what comes next?', options: ['10', '12', '12.5', '15'], answer: '12.5', hint: 'Check: 50÷100=0.5, 25÷50=0.5... each number is being ___?', explanation: 'Each number is cut in half (÷2)! 25 ÷ 2 = 12.5! The rule is divide by 2! 🌟' },
      { visual: '🧩', prompt: '2, 3, 5, 8, 13, ___ — what comes next? (Fibonacci!)', options: ['18', '20', '21', '16'], answer: '21', hint: 'Add the TWO previous numbers together each time! 2+3=5, 3+5=8, 5+8=13, 8+13=?', explanation: '8 + 13 = 21! This is the famous FIBONACCI sequence — it appears in nature! Sunflowers, shells, and more! 🌻' },
    ],
    quizTopics: ['number patterns', 'sequences'],
  },

  // ─── TAG PREP ─────────────────────────────────────────────────────────────

  {
    id: 'les-tag-k-patterns',
    subject: 'tag-prep', level: 'K', language: 'english',
    topic: 'non-verbal patterns', title: 'Shape & Color Patterns', visual: '🔷',
    tagline: 'Spot the pattern — what comes next?',
    explanation: 'A PATTERN repeats in a predictable way. To find the pattern, look at what repeats. Is it AB, AB? Or AAB, AAB? Name the pattern using letters — then you can predict what comes next!',
    keyPoints: ['Look for what REPEATS', 'Name it with letters (AB, AAB, ABC)', 'Check your rule — then predict!'],
    examples: [
      { visual: '🔴🔵🔴🔵', prompt: '🔴 🔵 🔴 🔵 ___ — what comes next?', answer: '🔴 — it\'s an AB, AB pattern!', explanation: 'Red, Blue, Red, Blue... it keeps repeating! AB pattern = next is RED (A)!' },
      { visual: '🌟⭐🌟⭐⭐', prompt: '🌟 ⭐ ⭐ 🌟 ⭐ ⭐ ___ — ABB pattern. Next?', answer: '🌟 — starting the next group!', explanation: 'Big star, small star, small star — then repeats! 🌟⭐⭐ 🌟⭐⭐ — next is 🌟 (the A)!' },
    ],
    practiceSteps: [
      { visual: '🔴', prompt: '🔴 🔴 🔵 🔴 🔴 ___ — what comes next?', options: ['🔵', '🔴', '🟢', '🟡'], answer: '🔵', hint: 'What is the repeating group? AAB? Find where in the pattern we are!', explanation: 'AAB pattern: Red Red Blue, Red Red BLUE! ✅' },
      { visual: '🌙', prompt: '🌞 🌙 🌙 🌞 🌙 🌙 🌞 ___ ___ — next TWO?', options: ['🌙 🌙', '🌞 🌞', '🌙 🌞', '🌞 🌙'], answer: '🌙 🌙', hint: 'Find the repeating group first: sun, moon, moon = ABB. After a sun comes...?', explanation: 'ABB pattern: Sun Moon Moon, Sun Moon Moon, Sun → Moon Moon! 🌙🌙' },
      { visual: '🔺', prompt: '🔵 🔺 🟡 🔵 🔺 ___ — ABC pattern. Next?', options: ['🔵', '🔺', '🟡', '🟣'], answer: '🟡', hint: 'ABC = Blue, Triangle, Yellow. The sequence restarts after C!', explanation: 'ABC pattern: Blue Triangle Yellow, Blue Triangle YELLOW! 🟡' },
    ],
    quizTopics: ['non-verbal patterns'],
  },

  {
    id: 'les-tag-2-matrices',
    subject: 'tag-prep', level: '2', language: 'english',
    topic: 'non-verbal matrices', title: 'Grid Puzzles (Matrices)', visual: '🧩',
    tagline: 'Find the rule that connects rows AND columns!',
    explanation: 'A MATRIX is a grid puzzle where every row and every column follows the same rule. Look across rows AND down columns to find the pattern. Then figure out what\'s missing!',
    keyPoints: ['Look across each ROW for the rule', 'Look down each COLUMN for the rule', 'The missing piece follows BOTH rules'],
    examples: [
      { visual: '🟥🟦 / 🟥❓', prompt: 'Grid: [Red Blue] top row, [Red ?] bottom. What\'s in the corner?', answer: 'Blue — each row has Red then Blue!', explanation: 'Look at row 1: Red, Blue. Row 2: Red, ? — it should be Blue! Each row goes Red→Blue!' },
      { visual: '⬆️➡️ / ⬇️❓', prompt: 'Grid: [Up Right] top, [Down ?] bottom. Each row has opposites. What goes in the corner?', answer: 'Left — because Left is the opposite of Right!', explanation: 'Up↔Down are opposites (column 1). Right↔Left are opposites (column 2). So the corner = Left!' },
    ],
    practiceSteps: [
      { visual: '🧩', prompt: 'Grid puzzle: Row 1: [🐶 🐶 🐱]. Row 2: [🐶 🐶 ?]. What goes in the ?', options: ['🐱', '🐶', '🐰', '🐸'], answer: '🐱', hint: 'Look at row 1 — what is in position 3? Apply the same pattern to row 2!', explanation: 'Both rows follow the same pattern: Dog Dog Cat! So the missing piece is Cat! 🐱' },
      { visual: '🔴', prompt: 'Grid: Row 1: [🔴 🔵 🟢]. Row 2: [🔴 🔵 ?]. Row 3: [🔴 🔵 ?]. What goes in the last two spots?', options: ['🟢 each time', '🔵 🟢', '🔴 🔵', '🟡 🟡'], answer: '🟢 each time', hint: 'Look at column 3 — what appears there in row 1? Does it repeat?', explanation: 'Column 3 always has green! 🟢 in every row! Each column has its own consistent color! 🌟' },
      { visual: '🧩', prompt: 'Size matrix: Row 1: [🟤 🟤🟤 🟤🟤🟤]. Row 2: [🔵 🔵🔵 ?]. Each row adds 1. Row 2 column 3 = ?', options: ['🔵🔵🔵', '🔵🔵🔵🔵', '🔵', '🔵🔵🔵🔵🔵'], answer: '🔵🔵🔵', hint: 'How many circles does column 3 always have?', explanation: 'Column 3 always has 3 of the shape! So row 2, column 3 = 3 blue circles! 🔵🔵🔵 ⭐' },
    ],
    quizTopics: ['non-verbal matrices', 'non-verbal patterns'],
  },

  {
    id: 'les-tag-tag-analogies',
    subject: 'tag-prep', level: 'TAG', language: 'english',
    topic: 'verbal analogies', title: 'Verbal Analogies (TAG Level)', visual: '🧠',
    tagline: 'Crack the relationship code!',
    explanation: 'Advanced analogies can have many types of relationships. Key types: PART to WHOLE (petal:flower), FUNCTION (pen:write), DEGREE (warm:hot), CAUSE/EFFECT (study:knowledge), SEQUENCE (egg:chick), and TYPE/CATEGORY (oak:tree). Master these and the CogAT will feel easy!',
    keyPoints: ['Identify the EXACT relationship type', 'Part/Whole • Function • Degree • Cause/Effect • Sequence • Category', 'The relationship must be IDENTICAL in both pairs'],
    examples: [
      { visual: '🔗', prompt: 'Chapter is to BOOK as scene is to ___', answer: 'Play (or movie) — both are PARTS of a larger whole', explanation: 'A chapter is a PART of a book. A scene is a PART of a play! Part-to-whole relationship!' },
      { visual: '🔗', prompt: 'Composer is to SYMPHONY as architect is to ___', answer: 'Building — both CREATORS and what they CREATE', explanation: 'A composer creates a symphony. An architect creates a building! Creator → creation relationship!' },
    ],
    practiceSteps: [
      { visual: '🔗', prompt: 'Petal is to FLOWER as feather is to ___', options: ['bird', 'pillow', 'wing', 'fly'], answer: 'bird', hint: 'A petal is a part of a flower. A feather is a part of a ___?', explanation: 'Petal is part of a flower. Feather is part of a BIRD! Part-to-whole relationship! 🦅' },
      { visual: '🔗', prompt: 'Trickle is to FLOOD as breeze is to ___', options: ['storm', 'wind', 'cloud', 'rain'], answer: 'storm', hint: 'Trickle and flood are the same thing — one is tiny, one is INTENSE. Breeze is a tiny version of...?', explanation: 'Trickle (small) → Flood (intense water). Breeze (small) → Storm (intense wind)! Degree relationship! 🌪️' },
      { visual: '🔗', prompt: 'Egg is to CHICK as seed is to ___', options: ['plant', 'soil', 'water', 'grow'], answer: 'plant', hint: 'An egg becomes a chick — what does a seed become?', explanation: 'Egg BECOMES chick. Seed BECOMES plant! Sequence/transformation relationship! 🌱' },
    ],
    quizTopics: ['verbal analogies', 'analogies', 'word relationships'],
  },

  // ─── VOCABULARY ───────────────────────────────────────────────────────────

  {
    id: 'les-voc-k-opposites',
    subject: 'vocabulary', level: 'K', language: 'english',
    topic: 'antonyms', title: 'Opposites!', visual: '⬆️⬇️',
    tagline: 'Words that mean the OPPOSITE!',
    explanation: 'Some words are opposites — they mean the complete OPPOSITE of each other! BIG and SMALL are opposites. HOT and COLD are opposites. Learning opposites helps you understand the world better!',
    keyPoints: ['Opposites are completely different in meaning', 'Big ↔ Small, Hot ↔ Cold, Fast ↔ Slow', 'Also called ANTONYMS'],
    examples: [
      { visual: '🐘🐭', prompt: 'What is the opposite of BIG?', answer: 'Small (or little, tiny)', explanation: 'An elephant is BIG. A mouse is SMALL! They\'re opposites!' },
      { visual: '☀️❄️', prompt: 'What is the opposite of HOT?', answer: 'Cold', explanation: 'The sun is HOT. Ice is COLD! Hot and cold are opposites!' },
    ],
    practiceSteps: [
      { visual: '🌞🌑', prompt: 'What is the opposite of LIGHT?', options: ['dark', 'bright', 'shiny', 'sunny'], answer: 'dark', hint: 'During the day it is ___. At night it is ___!', explanation: 'LIGHT and DARK are opposites! Day is light, night is dark! 🌙' },
      { visual: '🐢🐇', prompt: 'What is the opposite of FAST?', options: ['slow', 'quick', 'speedy', 'rapid'], answer: 'slow', hint: 'A cheetah is fast. A turtle is ___!', explanation: 'FAST and SLOW are opposites! The turtle is slow, the hare is fast! 🐢' },
      { visual: '📦', prompt: 'What is the opposite of HEAVY?', options: ['light', 'big', 'round', 'hard'], answer: 'light', hint: 'A boulder is heavy. A feather is ___!', explanation: 'HEAVY and LIGHT are opposites! A feather is light, a rock is heavy! 🪶' },
    ],
    quizTopics: ['antonyms', 'opposites'],
  },

  {
    id: 'les-voc-1-synonyms',
    subject: 'vocabulary', level: '1', language: 'english',
    topic: 'synonyms', title: 'Synonyms: Same Meaning!', visual: '🔄',
    tagline: 'Different words, same meaning!',
    explanation: 'SYNONYMS are words that mean the same thing (or very close). HAPPY, JOYFUL, and CHEERFUL all mean feeling good inside! Using synonyms makes your writing more interesting — instead of always saying "nice," you could say "kind," "wonderful," or "generous"!',
    keyPoints: ['Synonyms = same meaning, different word', 'Happy = joyful = cheerful', 'Using synonyms makes writing exciting!'],
    examples: [
      { visual: '😊', prompt: 'Give a synonym for HAPPY', answer: 'Joyful, cheerful, delighted, pleased, gleeful', explanation: 'All these words mean feeling good! They\'re all synonyms for happy!' },
      { visual: '🏃', prompt: 'Give a synonym for RUN', answer: 'Sprint, dash, jog, race, bolt', explanation: 'Sprint, dash, and jog all mean moving fast on foot — synonyms for run!' },
    ],
    practiceSteps: [
      { visual: '😊', prompt: 'Which word is a synonym (same meaning) for GLAD?', options: ['happy', 'sad', 'angry', 'tired'], answer: 'happy', hint: 'Glad means feeling good inside. Which other word means the same?', explanation: 'GLAD and HAPPY are synonyms — both mean feeling good! 🌟' },
      { visual: '🏠', prompt: 'Which is a synonym for ENORMOUS?', options: ['huge', 'tiny', 'round', 'loud'], answer: 'huge', hint: 'Enormous means very big. Which word also means very big?', explanation: 'ENORMOUS and HUGE are synonyms — both mean very, very big! 🐘' },
      { visual: '✨', prompt: 'Which word is a synonym for BEAUTIFUL?', options: ['lovely', 'ugly', 'loud', 'fast'], answer: 'lovely', hint: 'Beautiful means very pretty. Which word means the same?', explanation: 'BEAUTIFUL and LOVELY are synonyms — both describe something very pretty! 🌸' },
    ],
    quizTopics: ['synonyms', 'vocabulary'],
  },

  {
    id: 'les-voc-2-prefixes',
    subject: 'vocabulary', level: '2', language: 'english',
    topic: 'prefixes', title: 'Prefixes: Word Power-Ups!', visual: '🔧',
    tagline: 'A prefix at the start changes the meaning!',
    explanation: 'A PREFIX is a group of letters added to the BEGINNING of a word that changes its meaning. UN- means "not" (unhappy = not happy). RE- means "again" (rewrite = write again). PRE- means "before" (preview = view before). Knowing prefixes helps you unlock thousands of words!',
    keyPoints: ['UN- = not (unhappy, unkind, unsafe)', 'RE- = again (redo, rewrite, replay)', 'PRE- = before (preview, preheat, prepare)'],
    examples: [
      { visual: '🔄', prompt: 'What does REDO mean?', answer: 'Do again — RE- means again!', explanation: 'RE- + DO = REDO = do again! Like when you redo your homework to make it better!' },
      { visual: '❌', prompt: 'What does UNHAPPY mean?', answer: 'Not happy — UN- means not!', explanation: 'UN- + HAPPY = UNHAPPY = not happy! The prefix UN- flips the meaning!' },
    ],
    practiceSteps: [
      { visual: '🔧', prompt: 'What does REREAD mean?', options: ['read again', 'not reading', 'read before', 'read quickly'], answer: 'read again', hint: 'RE- means AGAIN. RE + READ = ?', explanation: 'RE- means again! REREAD = read again! You often reread to understand better! 📚' },
      { visual: '🔧', prompt: 'What does PREVIEW mean?', options: ['view before', 'view again', 'not view', 'view after'], answer: 'view before', hint: 'PRE- means BEFORE. PRE + VIEW = ?', explanation: 'PRE- means before! PREVIEW = see/view before! Like watching a movie preview! 🎬' },
      { visual: '🔧', prompt: 'The word UNKIND means...', options: ['not kind', 'very kind', 'kind again', 'kind before'], answer: 'not kind', hint: 'UN- means NOT. UN + KIND = ?', explanation: 'UN- means not! UNKIND = not kind! Always be kind, never unkind! 💝' },
    ],
    quizTopics: ['prefixes', 'vocabulary'],
  },

  {
    id: 'les-voc-3-roots',
    subject: 'vocabulary', level: '3', language: 'english',
    topic: 'roots', title: 'Root Words: Word Detectives!', visual: '🌳',
    tagline: 'Latin & Greek roots unlock hundreds of words!',
    explanation: 'Many English words come from LATIN and GREEK roots. When you know a root, you can figure out dozens of new words! VIS means "see" (vision, visible, invisible). AUD means "hear" (auditorium, audio, audible). PORT means "carry" (transport, portable, import).',
    keyPoints: ['VIS = see → vision, visible, invisible', 'AUD = hear → audio, auditorium, audible', 'PORT = carry → portable, transport, import'],
    examples: [
      { visual: '👁️', prompt: 'VIS means "see." What does INVISIBLE mean?', answer: 'Cannot be seen — IN (not) + VIS (see) + IBLE (able to)', explanation: 'IN- (not) + VIS (see) + IBLE = not able to be seen = INVISIBLE! Ghosts are invisible!' },
      { visual: '🎵', prompt: 'AUD means "hear." What is an AUDITORIUM?', answer: 'A place where you go to HEAR something (a concert or show)', explanation: 'AUD (hear) + ITORIUM (place) = a place for hearing! Like your school auditorium!' },
    ],
    practiceSteps: [
      { visual: '🌳', prompt: 'PORT means "carry." What does PORTABLE mean?', options: ['easy to carry', 'not working', 'very heavy', 'broken'], answer: 'easy to carry', hint: 'PORT = carry. PORT + ABLE = ?', explanation: 'PORT (carry) + ABLE (can) = can be carried! A portable speaker is easy to carry anywhere! 🎵' },
      { visual: '🌳', prompt: 'DICT means "say/speak." What does DICTATE mean?', options: ['to speak words for someone to write', 'to listen carefully', 'to read a book', 'to draw a picture'], answer: 'to speak words for someone to write', hint: 'DICT = say. If you dictate something, you SAY it...', explanation: 'DICT (say) + ATE = to speak or say! When you dictate, you say words for someone else to write down! 🗣️' },
      { visual: '🌳', prompt: 'SCRIB means "write." What does DESCRIBE mean?', options: ['to write or tell about something in detail', 'to draw a picture', 'to listen carefully', 'to build something'], answer: 'to write or tell about something in detail', hint: 'SCRIB = write. DE + SCRIBE = ?', explanation: 'DE + SCRIB (write) = to write about! When you describe something, you write or tell about it in detail! ✍️' },
    ],
    quizTopics: ['roots', 'prefixes', 'vocabulary'],
  },

  {
    id: 'les-voc-tag-connotation',
    subject: 'vocabulary', level: 'TAG', language: 'english',
    topic: 'connotation', title: 'Connotation: Word Feelings', visual: '💭',
    tagline: 'Words can have the same meaning but different feelings!',
    explanation: 'CONNOTATION is the emotional feeling a word carries beyond its basic definition. THIN and SKINNY both mean "not weighing much" — but THIN sounds neutral while SKINNY can sound negative. ASSERTIVE and BOSSY both mean speaking up strongly — but one sounds positive and one negative!',
    keyPoints: ['Connotation = the emotional tone of a word', 'Positive, negative, or neutral', 'Choose words carefully — they affect how readers feel!'],
    examples: [
      { visual: '💭', prompt: '"Curious" vs. "nosy" — same basic meaning, different feel?', answer: 'Curious = positive (loves learning), Nosy = negative (prying into others\' business)', explanation: 'Both mean wanting to know things. But "curious" sounds wonderful and "nosy" sounds rude!' },
      { visual: '💭', prompt: '"Confident" vs. "arrogant" — what\'s the difference in feeling?', answer: 'Confident = positive self-belief, Arrogant = negative excessive pride', explanation: 'Confident = I know I can do this (good!). Arrogant = I\'m better than everyone (not great). Same basic idea, very different feeling!' },
    ],
    practiceSteps: [
      { visual: '💭', prompt: 'Which word has a MORE POSITIVE connotation: "thrifty" or "cheap"?', options: ['thrifty', 'cheap', 'they\'re the same', 'neither'], answer: 'thrifty', hint: 'Both mean careful with money — but which one sounds like a COMPLIMENT?', explanation: 'THRIFTY = wisely saving money (positive!). CHEAP = refusing to spend money even when needed (negative). Choose wisely! 💰' },
      { visual: '💭', prompt: 'Which word has a MORE NEGATIVE connotation: "determined" or "stubborn"?', options: ['stubborn', 'determined', 'they\'re the same', 'neither'], answer: 'stubborn', hint: 'Both mean not giving up easily — but which one sounds like a problem?', explanation: 'DETERMINED = great! Keeps going toward a goal. STUBBORN = negative, won\'t change even when wrong. Context matters! 💪' },
      { visual: '💭', prompt: 'An author wants to make a character seem BRAVE. Which word is best?', options: ['bold', 'reckless', 'careless', 'wild'], answer: 'bold', hint: 'Brave = doing something hard despite fear. Which word has the most positive connotation?', explanation: 'BOLD has a positive connotation — strong, brave, confident! Reckless and careless have negative feelings. Authors choose words carefully! ✍️' },
    ],
    quizTopics: ['connotation', 'vocabulary', 'word relationships'],
  },

  // ─── SCIENCE ──────────────────────────────────────────────────────────────

  {
    id: 'les-sci-1-matter',
    subject: 'science', level: '1', language: 'english',
    topic: 'matter', title: 'States of Matter', visual: '🧊💧💨',
    tagline: 'Everything is solid, liquid, or gas!',
    explanation: 'MATTER is everything around you — it takes up space and has mass. Matter comes in three states: SOLID (keeps its shape, like ice), LIQUID (flows and takes the shape of its container, like water), and GAS (spreads out to fill space, like steam). The same substance can change states!',
    keyPoints: ['Solid = keeps its own shape (ice, rock, wood)', 'Liquid = flows and fills container (water, juice, honey)', 'Gas = spreads to fill all space (steam, air, oxygen)'],
    examples: [
      { visual: '🧊→💧→💨', prompt: 'What happens to ice cream on a hot day?', answer: 'It MELTS from solid to liquid!', explanation: 'Ice cream is a SOLID. Heat makes it melt into a LIQUID. The state changes, but it\'s still ice cream!' },
      { visual: '💨', prompt: 'Is air a solid, liquid, or gas?', answer: 'Gas — you can\'t see it but it fills all space!', explanation: 'Air is a GAS. You can\'t hold it or pour it, but it\'s everywhere, filling every space!' },
    ],
    practiceSteps: [
      { visual: '🧊', prompt: 'Which is a SOLID?', options: ['a rock', 'milk', 'steam', 'juice'], answer: 'a rock', hint: 'A solid keeps its OWN shape — you can hold it!', explanation: 'A ROCK is a solid! It keeps its shape no matter what. Milk and juice are liquids, steam is a gas! 🪨' },
      { visual: '💧', prompt: 'Which is a LIQUID?', options: ['honey', 'ice', 'wood', 'air'], answer: 'honey', hint: 'Liquids FLOW and take the shape of their container!', explanation: 'HONEY is a liquid! It flows (slowly!) and takes the shape of any jar you pour it in! 🍯' },
      { visual: '💨', prompt: 'When water boils, it becomes...', options: ['steam (gas)', 'ice (solid)', 'honey (liquid)', 'bigger liquid'], answer: 'steam (gas)', hint: 'Boiling uses heat to change water into what state?', explanation: 'Boiling LIQUID water → STEAM (GAS)! Heat gives the water molecules energy to escape as gas! 🫧' },
    ],
    quizTopics: ['matter', 'states of matter'],
  },

  // ─── SOCIAL STUDIES ───────────────────────────────────────────────────────

  {
    id: 'les-ss-2-government',
    subject: 'social-studies', level: '2', language: 'english',
    topic: 'government', title: '3 Branches of Government', visual: '🏛️',
    tagline: 'Three teams that run our country!',
    explanation: 'The US government has THREE branches to share power fairly — no single person is too powerful! The LEGISLATIVE branch (Congress) makes laws. The EXECUTIVE branch (President) carries out laws. The JUDICIAL branch (Supreme Court) judges whether laws are fair.',
    keyPoints: ['Legislative (Congress) = MAKES laws', 'Executive (President) = CARRIES OUT laws', 'Judicial (Supreme Court) = JUDGES laws'],
    examples: [
      { visual: '📜', prompt: 'Which branch makes new laws?', answer: 'Legislative branch — Congress (House + Senate)', explanation: 'Congress = the Senate + the House of Representatives. They write and vote on laws!' },
      { visual: '⚖️', prompt: 'If someone says a law is unfair, which branch decides?', answer: 'Judicial branch — the Supreme Court', explanation: 'The Supreme Court is the highest court. 9 justices decide if laws follow the Constitution!' },
    ],
    practiceSteps: [
      { visual: '🏛️', prompt: 'Who is the HEAD of the Executive Branch?', options: ['the President', 'the Congress', 'the Supreme Court', 'the Governor'], answer: 'the President', hint: 'The Executive branch EXECUTES (carries out) laws. Who leads this branch?', explanation: 'The PRESIDENT leads the Executive Branch! They carry out the laws Congress passes! 🇺🇸' },
      { visual: '📜', prompt: 'The Congress includes the Senate and the...', options: ['House of Representatives', 'White House', 'Supreme Court', 'Cabinet'], answer: 'House of Representatives', hint: 'The Legislative branch has TWO parts — what\'s the other one?', explanation: 'Congress = Senate + House of Representatives! Together they MAKE our laws! 🏛️' },
      { visual: '⚖️', prompt: 'The purpose of THREE branches of government is to...', options: ['share power fairly so no one is too powerful', 'create more jobs', 'make the government bigger', 'give the President more power'], answer: 'share power fairly so no one is too powerful', hint: 'The founders were worried about one person having too much power — why did they create 3 branches?', explanation: 'Three branches = CHECKS AND BALANCES! Each branch can limit the others so no one becomes too powerful! Smart design! ⚖️' },
    ],
    quizTopics: ['government', 'civics'],
  },

]

export function getLessons(opts: {
  subject?: Subject
  level?: GradeLevel
  language?: Language
}): Lesson[] {
  let pool = LESSONS
  if (opts.language) pool = pool.filter(l => l.language === opts.language)
  if (opts.subject) pool = pool.filter(l => l.subject === opts.subject)
  if (opts.level) pool = pool.filter(l => l.level === opts.level)
  return pool.sort(() => Math.random() - 0.5)
}
