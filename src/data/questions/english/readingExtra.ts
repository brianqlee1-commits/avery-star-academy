import type { Question } from '../../../types'

export const readingQuestionsExtra: Question[] = [

  // ============================================================
  // KINDERGARTEN (25 questions)
  // ============================================================

  { id: 'er2-k-01', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'phonics',
    visual: '🐝', prompt: 'What sound does the letter "B" make?', options: ['/b/', '/p/', '/d/', '/m/'], answer: '/b/', explanation: 'B makes the /b/ sound — like in BEE and BALL!' },

  { id: 'er2-k-02', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'phonics',
    visual: '🐍', prompt: 'What sound does the letter "S" make in SUN?', options: ['/s/', '/z/', '/sh/', '/ch/'], answer: '/s/', explanation: 'S makes the /s/ sound — like a snake saying ssssss!' },

  { id: 'er2-k-03', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'rhyming',
    visual: '🐱', prompt: 'Which word rhymes with CAT?', options: ['bat', 'dog', 'fun', 'sun'], answer: 'bat', explanation: 'Cat and bat both end in the -at sound — they rhyme!' },

  { id: 'er2-k-04', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'rhyming',
    visual: '🍦', prompt: 'Which word rhymes with FUN?', options: ['run', 'cat', 'big', 'hop'], answer: 'run', explanation: 'Fun and run both end in the -un sound. Great rhyming!' },

  { id: 'er2-k-05', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '👋', prompt: 'Which word says ME?', options: ['me', 'my', 'we', 'he'], answer: 'me', explanation: 'M-E spells ME — as in "That\'s for me!"' },

  { id: 'er2-k-06', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🌈', prompt: 'Which word says WE?', options: ['me', 'he', 'we', 'be'], answer: 'we', explanation: 'W-E spells WE — like "We are friends!"' },

  { id: 'er2-k-07', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🎈', prompt: 'Which word says HERE?', options: ['there', 'here', 'where', 'were'], answer: 'here', explanation: 'H-E-R-E spells HERE — "Come here!"' },

  { id: 'er2-k-08', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🐶', prompt: 'Which word says SAID?', options: ['said', 'sand', 'seed', 'side'], answer: 'said', explanation: 'S-A-I-D spells SAID — "She said hello!"' },

  { id: 'er2-k-09', type: 'true-false', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '⭐', prompt: 'The word HAVE starts with the letter H.', options: ['True', 'False'], answer: 'True', explanation: 'H-A-V-E starts with H. You got it!' },

  { id: 'er2-k-10', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'beginning sounds',
    visual: '🦁', prompt: 'What letter does LION start with?', options: ['M', 'L', 'N', 'R'], answer: 'L', explanation: 'LION starts with L — listen for that /l/ sound!' },

  { id: 'er2-k-11', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'beginning sounds',
    visual: '🐘', prompt: 'What letter does ELEPHANT start with?', options: ['A', 'F', 'E', 'U'], answer: 'E', explanation: 'ELEPHANT starts with E — and E makes the /e/ sound here!' },

  { id: 'er2-k-12', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'ending sounds',
    visual: '🥁', prompt: 'What sound does the word BUG end with?', options: ['/g/', '/b/', '/u/', '/s/'], answer: '/g/', explanation: 'BUG ends with the /g/ sound — like a bug going buzz!' },

  { id: 'er2-k-13', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'ending sounds',
    visual: '🌙', prompt: 'What sound does the word MOON end with?', options: ['/n/', '/m/', '/oo/', '/t/'], answer: '/n/', explanation: 'MOON ends with the /n/ sound. Good listening!' },

  { id: 'er2-k-14', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'phonics',
    visual: '🎵', prompt: 'Which word has the short /i/ sound — like in PIG?', options: ['sit', 'cat', 'moon', 'blue'], answer: 'sit', explanation: 'SIT has the short /i/ sound — just like PIG and BIG!' },

  { id: 'er2-k-15', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'phonics',
    visual: '☀️', prompt: 'Which word has the short /a/ sound — like in MAP?', options: ['cap', 'see', 'hop', 'cute'], answer: 'cap', explanation: 'CAP has the short /a/ sound — just like MAP and CAT!' },

  { id: 'er2-k-16', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'rhyming',
    visual: '🐸', prompt: 'Which word belongs in the -OG rhyming family?', options: ['log', 'lip', 'jet', 'cup'], answer: 'log', explanation: 'Frog, log, and dog all belong to the -og rhyming family!' },

  { id: 'er2-k-17', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'print concepts',
    visual: '📖', prompt: 'The name of a book is called its...', options: ['title', 'picture', 'page', 'word'], answer: 'title', explanation: 'The title is the name of the book — it\'s on the cover!' },

  { id: 'er2-k-18', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'print concepts',
    visual: '✏️', prompt: 'The person who WRITES a book is called the...', options: ['author', 'illustrator', 'reader', 'character'], answer: 'author', explanation: 'The author writes the words in the book. The illustrator draws the pictures!' },

  { id: 'er2-k-19', type: 'true-false', level: 'K', subject: 'reading', language: 'english', topic: 'print concepts',
    visual: '📚', prompt: 'We read English books from left to right.', options: ['True', 'False'], answer: 'True', explanation: 'That\'s right! In English we always read from left to right, top to bottom!' },

  { id: 'er2-k-20', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🌟', prompt: 'Which word says DO?', options: ['do', 'go', 'no', 'to'], answer: 'do', explanation: 'D-O spells DO — "What do you want to do today?"' },

  { id: 'er2-k-21', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🦊', prompt: 'Which word says WAS?', options: ['has', 'was', 'saw', 'his'], answer: 'was', explanation: 'W-A-S spells WAS — "The fox was fast!"' },

  { id: 'er2-k-22', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'phonics',
    visual: '🐧', prompt: 'What vowel sound do you hear in the middle of PET?', options: ['short /e/', 'short /a/', 'short /i/', 'short /o/'], answer: 'short /e/', explanation: 'PET has the short /e/ sound in the middle — like in BED and RED!' },

  { id: 'er2-k-23', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'phonics',
    visual: '🐸', prompt: 'Which word has the short /o/ sound?', options: ['hop', 'hat', 'hit', 'hug'], answer: 'hop', explanation: 'HOP has the short /o/ sound — like in FROG and STOP!' },

  { id: 'er2-k-24', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'comprehension',
    visual: '🌧️', prompt: '"The dog ran inside when it started to rain." Why did the dog run inside?', options: ['It started to rain', 'It was hungry', 'It was dark', 'It heard a noise'], answer: 'It started to rain', explanation: 'The story tells us the dog ran inside because of the rain. Great reading!' },

  { id: 'er2-k-25', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🐢', prompt: 'Which word says HE?', options: ['she', 'he', 'we', 'me'], answer: 'he', explanation: 'H-E spells HE — "He likes turtles!"' },

  // ============================================================
  // 1ST GRADE (25 questions)
  // ============================================================

  { id: 'er2-1-01', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '🛝', prompt: 'Which word starts with the BL blend?', options: ['blue', 'clue', 'flew', 'glue'], answer: 'blue', explanation: 'BL is a blend where you hear both the /b/ and /l/ sounds — like BLUE and BLOW!' },

  { id: 'er2-1-02', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '🐊', prompt: 'Which word starts with the CL blend?', options: ['clap', 'flap', 'slap', 'snap'], answer: 'clap', explanation: 'CL blend: you say /k/ and /l/ together — CLAP, CLOWN, CLOUD!' },

  { id: 'er2-1-03', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '🍓', prompt: 'Which word starts with the FR blend?', options: ['frog', 'fog', 'log', 'bog'], answer: 'frog', explanation: 'FR blend: /f/ + /r/ together — FROG, FRUIT, FRIEND!' },

  { id: 'er2-1-04', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '🌿', prompt: 'Which word starts with the GR blend?', options: ['green', 'keen', 'seen', 'teen'], answer: 'green', explanation: 'GR blend: /g/ + /r/ together — GREEN, GROW, GRAPE!' },

  { id: 'er2-1-05', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '⭐', prompt: 'Which word starts with the ST blend?', options: ['star', 'car', 'bar', 'far'], answer: 'star', explanation: 'ST blend: /s/ + /t/ together — STAR, STOP, STORE!' },

  { id: 'er2-1-06', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'digraphs',
    visual: '🐑', prompt: 'The letters SH together make ONE sound. What sound do they make?', options: ['/sh/ as in ship', '/s/ + /h/ separately', '/ch/ as in chip', '/th/ as in the'], answer: '/sh/ as in ship', explanation: 'SH is a digraph — two letters that make ONE new sound, like SHIP and SHELL!' },

  { id: 'er2-1-07', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'digraphs',
    visual: '🐣', prompt: 'Which word has the CH digraph?', options: ['chip', 'ship', 'whip', 'drip'], answer: 'chip', explanation: 'CH makes the /ch/ sound — like in CHIP, CHAIN, and CHEESE!' },

  { id: 'er2-1-08', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'digraphs',
    visual: '🦷', prompt: 'Which word has the TH digraph?', options: ['think', 'drink', 'sink', 'blink'], answer: 'think', explanation: 'TH makes a special sound — stick your tongue between your teeth and say THINK!' },

  { id: 'er2-1-09', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'digraphs',
    visual: '🐳', prompt: 'Which word starts with the WH digraph?', options: ['whale', 'tale', 'pale', 'male'], answer: 'whale', explanation: 'WH makes a /w/ sound (or sometimes /hw/) — WHALE, WHERE, WHEN!' },

  { id: 'er2-1-10', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'long vowels',
    visual: '🎀', prompt: 'In the word BIKE, the magic E makes the I say its...', options: ['long name /I/', 'short sound /i/', 'silent sound', '/ee/ sound'], answer: 'long name /I/', explanation: 'Magic E rule: the silent E makes the vowel say its long name. BIKE = /b/-/I/-/k/!' },

  { id: 'er2-1-11', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'long vowels',
    visual: '🌹', prompt: 'Which word has a LONG vowel sound?', options: ['hope', 'hop', 'hot', 'hog'], answer: 'hope', explanation: 'HOPE has a long /O/ sound! The magic E makes the O say its name!' },

  { id: 'er2-1-12', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'CVC patterns',
    visual: '🐷', prompt: 'Which word follows the Consonant-Vowel-Consonant (CVC) pattern?', options: ['pig', 'play', 'plane', 'price'], answer: 'pig', explanation: 'PIG = P (consonant) + I (vowel) + G (consonant). That\'s the CVC pattern!' },

  { id: 'er2-1-13', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'comprehension',
    visual: '🌱', prompt: '"Ben planted seeds in the garden. He watered them every day. Soon tiny green sprouts appeared." What did Ben do to help the seeds grow?', options: ['Watered them every day', 'Put them in the sun', 'Added dirt', 'Sang to them'], answer: 'Watered them every day', explanation: 'The passage says Ben watered them every day — that helped the seeds sprout!' },

  { id: 'er2-1-14', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'comprehension',
    visual: '🐠', prompt: '"Nemo swam through the coral reef. The water was warm and blue. Many colorful fish lived there." Where does this story take place?', options: ['A coral reef in the ocean', 'A pond in the park', 'A fish tank', 'A swimming pool'], answer: 'A coral reef in the ocean', explanation: 'The passage says "coral reef" and "warm blue water" — that\'s in the ocean!' },

  { id: 'er2-1-15', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'nouns and verbs',
    visual: '🏃', prompt: 'Which word in this sentence is a VERB (action word)? "The rabbit JUMPED over the fence."', options: ['jumped', 'rabbit', 'fence', 'the'], answer: 'jumped', explanation: 'JUMPED is the verb — it tells us what the rabbit DID!' },

  { id: 'er2-1-16', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'nouns and verbs',
    visual: '🐉', prompt: 'Which word is a NOUN (person, place, or thing)? "The dragon breathed fire."', options: ['dragon', 'breathed', 'the', 'fire was also correct but...'], answer: 'dragon', explanation: 'DRAGON is a noun — it\'s a thing! (Fire is also a noun, but dragon is the main subject.)' },

  { id: 'er2-1-17', type: 'true-false', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '🚂', prompt: 'The word TRIP starts with the TR blend.', options: ['True', 'False'], answer: 'True', explanation: 'TRIP starts with T and R together — that\'s the TR blend! TRIP, TREE, TRUCK!' },

  { id: 'er2-1-18', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'sight words',
    visual: '🦋', prompt: 'Which word means "a large number"?', options: ['many', 'some', 'few', 'one'], answer: 'many', explanation: 'MANY means a large number of something. "I have many butterflies!"' },

  { id: 'er2-1-19', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'comprehension',
    visual: '☔', prompt: '"Lily looked out the window. Puddles were everywhere. She grabbed her boots." What can you INFER about the weather?', options: ['It had been raining', 'It was snowing', 'It was hot and sunny', 'It was windy'], answer: 'It had been raining', explanation: 'Puddles + boots = it rained! You used clues to figure that out — great inferring!' },

  { id: 'er2-1-20', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary',
    visual: '🌊', prompt: 'What does the word TINY mean?', options: ['very small', 'very big', 'very fast', 'very loud'], answer: 'very small', explanation: 'TINY means very, very small — like a tiny ant or a tiny seed!' },

  { id: 'er2-1-21', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'story elements',
    visual: '📖', prompt: 'In a story, the PROBLEM is what causes trouble. What is the SOLUTION?', options: ['how the problem is fixed', 'who is in the story', 'where the story happens', 'when the story begins'], answer: 'how the problem is fixed', explanation: 'Every story has a problem and a solution — the solution is how the problem gets fixed!' },

  { id: 'er2-1-22', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'long vowels',
    visual: '🐐', prompt: 'Which word has the long /E/ sound?', options: ['seed', 'said', 'sand', 'send'], answer: 'seed', explanation: 'SEED has the long /E/ sound — ee says /ee/ like in TREE, FEET, and SEED!' },

  { id: 'er2-1-23', type: 'true-false', level: '1', subject: 'reading', language: 'english', topic: 'digraphs',
    visual: '🐚', prompt: 'In the word SHELL, the letters SH make two separate sounds.', options: ['True', 'False'], answer: 'False', explanation: 'SH is a digraph — two letters that make ONE sound together! /sh/ — like in SHELL!' },

  { id: 'er2-1-24', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'nouns and verbs',
    visual: '🎨', prompt: 'Which sentence uses a verb (action word) correctly?', options: ['The artist painted a picture', 'The artist a picture', 'Painted the artist', 'Picture the artist'], answer: 'The artist painted a picture', explanation: 'PAINTED is the verb — it tells us what the artist did!' },

  { id: 'er2-1-25', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'blends',
    visual: '✈️', prompt: 'Which word starts with the FL blend?', options: ['fly', 'cry', 'dry', 'try'], answer: 'fly', explanation: 'FL blend: /f/ + /l/ together — FLY, FLOWER, FLOAT!' },

  // ============================================================
  // 2ND GRADE (25 questions)
  // ============================================================

  { id: 'er2-2-01', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compound words',
    visual: '🦋', prompt: 'What two words make up the compound word BUTTERFLY?', options: ['butter + fly', 'but + terfly', 'butt + erfly', 'butter + ful'], answer: 'butter + fly', explanation: 'BUTTERFLY = BUTTER + FLY — two words joined to make one new word!' },

  { id: 'er2-2-02', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compound words',
    visual: '🌻', prompt: 'What two words make up SUNFLOWER?', options: ['sun + flower', 'sun + flow + er', 'sung + lower', 'sunf + lower'], answer: 'sun + flower', explanation: 'SUNFLOWER = SUN + FLOWER — a flower that faces the sun!' },

  { id: 'er2-2-03', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compound words',
    visual: '🌈', prompt: 'Which of these is a compound word?', options: ['rainbow', 'running', 'purple', 'happy'], answer: 'rainbow', explanation: 'RAINBOW = RAIN + BOW — two words combined into one!' },

  { id: 'er2-2-04', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'multiple meaning words',
    visual: '🦇', prompt: 'Which sentence uses BAT as a THING (noun)?', options: ['She hit the ball with a bat', 'The bat flew away quickly', 'both are correct', 'neither is correct'], answer: 'She hit the ball with a bat', explanation: 'BAT can mean a flying animal OR the thing you use to hit a baseball — it has two meanings!' },

  { id: 'er2-2-05', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'multiple meaning words',
    visual: '💡', prompt: 'The word LIGHT can mean something that shines OR something that is not heavy. Which meaning is used here: "She carried a light backpack"?', options: ['not heavy', 'something that shines', 'a color', 'a sound'], answer: 'not heavy', explanation: 'In "light backpack," LIGHT means not heavy — context clues tell us which meaning!' },

  { id: 'er2-2-06', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'author\'s purpose',
    visual: '📰', prompt: 'An author writes: "Recycle your cans and bottles to help the Earth!" The author\'s purpose is to...', options: ['persuade', 'entertain', 'inform', 'describe'], answer: 'persuade', explanation: 'The author wants you to DO something — that\'s persuade! They\'re convincing you to recycle!' },

  { id: 'er2-2-07', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'author\'s purpose',
    visual: '😄', prompt: 'An author writes a funny story about a clumsy dragon. The author\'s purpose is to...', options: ['entertain', 'inform', 'persuade', 'warn'], answer: 'entertain', explanation: 'A funny story is written to ENTERTAIN — to make the reader laugh and enjoy it!' },

  { id: 'er2-2-08', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'author\'s purpose',
    visual: '🔬', prompt: 'An author writes: "Butterflies have four wings and six legs." The author\'s purpose is to...', options: ['inform', 'persuade', 'entertain', 'scare'], answer: 'inform', explanation: 'Teaching facts is informing — the author wants you to LEARN something!' },

  { id: 'er2-2-09', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compare and contrast',
    visual: '🐱🐶', prompt: 'Cats and dogs are both pets. One difference is that cats usually...', options: ['are more independent than dogs', 'need more water than dogs', 'are bigger than dogs', 'live longer than dogs'], answer: 'are more independent than dogs', explanation: 'When comparing, we look at similarities AND differences. Cats are typically more independent!' },

  { id: 'er2-2-10', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compare and contrast',
    visual: '📚', prompt: 'A fiction book tells made-up stories. A nonfiction book tells...', options: ['real facts and information', 'fairy tales', 'rhyming poems', 'funny jokes'], answer: 'real facts and information', explanation: 'Fiction = made up; Nonfiction = real! That\'s the key difference!' },

  { id: 'er2-2-11', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'text features',
    visual: '📰', prompt: 'In a nonfiction article, the bold titles that name each section are called...', options: ['headings', 'captions', 'glossary', 'index'], answer: 'headings', explanation: 'HEADINGS are bold titles that tell you what each section is about!' },

  { id: 'er2-2-12', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'text features',
    visual: '🖼️', prompt: 'The words printed under a photo to explain what the photo shows are called...', options: ['captions', 'headings', 'titles', 'footnotes'], answer: 'captions', explanation: 'CAPTIONS are the words under photos that explain what you\'re looking at!' },

  { id: 'er2-2-13', type: 'true-false', level: '2', subject: 'reading', language: 'english', topic: 'text features',
    visual: '📖', prompt: 'A table of contents tells you what pages different chapters or sections begin on.', options: ['True', 'False'], answer: 'True', explanation: 'A table of contents is like a map of the book — it lists chapters and their page numbers!' },

  { id: 'er2-2-14', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'root words',
    visual: '🌳', prompt: 'The ROOT word in THANKFUL is...', options: ['thank', 'ful', 'than', 'hank'], answer: 'thank', explanation: 'THANK is the root word. The suffix -FUL means "full of" — so thankful means full of thanks!' },

  { id: 'er2-2-15', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'root words',
    visual: '🌱', prompt: 'The suffix -LESS means "without." So HOPELESS means...', options: ['without hope', 'full of hope', 'having hope', 'needing hope'], answer: 'without hope', explanation: 'HOPELESS = HOPE + LESS — without hope. Knowing roots and suffixes helps unlock word meanings!' },

  { id: 'er2-2-16', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compound words',
    visual: '🍎', prompt: 'Which of these is NOT a compound word?', options: ['apple', 'raindrop', 'snowball', 'starfish'], answer: 'apple', explanation: 'APPLE is just one word! RAINDROP, SNOWBALL, and STARFISH are all two words joined together!' },

  { id: 'er2-2-17', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary',
    visual: '😠', prompt: 'Which word is a SYNONYM (same meaning) for ANGRY?', options: ['furious', 'happy', 'sad', 'scared'], answer: 'furious', explanation: 'Synonyms are words with similar meanings. ANGRY and FURIOUS both mean very upset!' },

  { id: 'er2-2-18', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compare and contrast',
    visual: '🌊🏔️', prompt: 'A desert and a rainforest are BOTH...', options: ['ecosystems on Earth', 'very rainy', 'very dry', 'in the same continent'], answer: 'ecosystems on Earth', explanation: 'Even though they\'re opposites in rainfall, both a desert and a rainforest are ecosystems on Earth!' },

  { id: 'er2-2-19', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'text features',
    visual: '🗺️', prompt: 'A dictionary at the back of a book that defines hard words is called a...', options: ['glossary', 'index', 'caption', 'heading'], answer: 'glossary', explanation: 'A GLOSSARY is a mini-dictionary in a book that explains tricky words!' },

  { id: 'er2-2-20', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'root words',
    visual: '🔍', prompt: 'The prefix UN- means "not." So UNHAPPY means...', options: ['not happy', 'very happy', 'mostly happy', 'truly happy'], answer: 'not happy', explanation: 'UN- flips the meaning! UNHAPPY = not happy. UNKIND = not kind. UNSAFE = not safe!' },

  { id: 'er2-2-21', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'multiple meaning words',
    visual: '🌊', prompt: 'The word WAVE can mean a water wave OR to wave your hand. Which meaning fits: "She waved goodbye"?', options: ['move your hand', 'a water wave', 'a feeling', 'a color'], answer: 'move your hand', explanation: 'Context helps! "Waved goodbye" means she moved her hand to say goodbye!' },

  { id: 'er2-2-22', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'author\'s purpose',
    visual: '📣', prompt: 'An author writes: "Vote for cleaner playgrounds in our school!" This is an example of writing to...', options: ['persuade', 'inform', 'entertain', 'retell'], answer: 'persuade', explanation: 'When an author wants you to agree with their opinion, they\'re trying to persuade you!' },

  { id: 'er2-2-23', type: 'true-false', level: '2', subject: 'reading', language: 'english', topic: 'compound words',
    visual: '🎂', prompt: 'BIRTHDAY is a compound word made from BIRTH + DAY.', options: ['True', 'False'], answer: 'True', explanation: 'BIRTHDAY = BIRTH + DAY — happy compound word birthday!' },

  { id: 'er2-2-24', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary',
    visual: '🌟', prompt: 'An ANTONYM is a word that means the...', options: ['opposite', 'same thing', 'sounds like', 'rhymes with'], answer: 'opposite', explanation: 'ANTONYMS are opposites! Hot/cold, fast/slow, happy/sad are all antonym pairs!' },

  { id: 'er2-2-25', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'compare and contrast',
    visual: '🌞🌛', prompt: 'The sun and the moon are BOTH...', options: ['visible in the sky', 'stars', 'made of rock', 'the same size'], answer: 'visible in the sky', explanation: 'Both the sun and moon appear in our sky — but they\'re very different in many ways!' },

  // ============================================================
  // 3RD GRADE (25 questions)
  // ============================================================

  { id: 'er2-3-01', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'simile',
    visual: '⚡', prompt: '"She ran as fast as lightning." This comparison using "as...as" is called a...', options: ['simile', 'metaphor', 'alliteration', 'rhyme'], answer: 'simile', explanation: 'A simile compares two things using "like" or "as." As fast as lightning is a simile!' },

  { id: 'er2-3-02', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'simile',
    visual: '🐌', prompt: '"The tired boy moved like a snail after recess." This is an example of a...', options: ['simile', 'metaphor', 'personification', 'alliteration'], answer: 'simile', explanation: 'Using "like" to compare the boy to a snail makes this a SIMILE!' },

  { id: 'er2-3-03', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'alliteration',
    visual: '🐍', prompt: '"Sally sells seashells by the seashore." This is an example of...', options: ['alliteration', 'rhyme', 'simile', 'metaphor'], answer: 'alliteration', explanation: 'ALLITERATION is when words in a row start with the same sound. Sally, sells, seashells — all /s/!' },

  { id: 'er2-3-04', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'alliteration',
    visual: '🐼', prompt: 'Which sentence uses alliteration?', options: ['Peter picked a peck of pickled peppers', 'The dog ran fast', 'She loves ice cream', 'The sun shines bright'], answer: 'Peter picked a peck of pickled peppers', explanation: 'Peter, picked, peck, peppers — all start with /p/! That\'s alliteration!' },

  { id: 'er2-3-05', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'theme vs main idea',
    visual: '🦁', prompt: 'The THEME of a story is the...', options: ['big life lesson the story teaches', 'main character\'s name', 'what happens in the story', 'where the story takes place'], answer: 'big life lesson the story teaches', explanation: 'Theme is the BIG MESSAGE or life lesson — like "be kind" or "never give up"!' },

  { id: 'er2-3-06', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'theme vs main idea',
    visual: '🐢', prompt: 'In a story about a turtle who wins a race by never giving up, the THEME is probably...', options: ['Persistence pays off', 'Turtles are faster than rabbits', 'Animals can race', 'The race was long'], answer: 'Persistence pays off', explanation: 'The big lesson the story teaches us is that if you keep going, you can succeed!' },

  { id: 'er2-3-07', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'text evidence',
    visual: '🔍', prompt: 'When you use TEXT EVIDENCE to answer a question, you...', options: ['quote words from the passage', 'make up your own answer', 'guess what might happen', 'think about your own experience'], answer: 'quote words from the passage', explanation: 'Text evidence means finding PROOF in the passage — the words are right there for you to use!' },

  { id: 'er2-3-08', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary in context',
    visual: '🌋', prompt: '"The volcano erupted with tremendous force, shaking the ground for miles." TREMENDOUS means...', options: ['extremely great/large', 'very quiet', 'very tiny', 'very slow'], answer: 'extremely great/large', explanation: 'Context clue! Shaking the ground for MILES tells us tremendous means extremely great!' },

  { id: 'er2-3-09', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary in context',
    visual: '🧪', prompt: '"The scientist was meticulous, checking every measurement twice." METICULOUS means...', options: ['very careful and detailed', 'very careless', 'very fast', 'very tired'], answer: 'very careful and detailed', explanation: 'Checking every measurement TWICE tells us meticulous means very careful and thorough!' },

  { id: 'er2-3-10', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'nonfiction features',
    visual: '📊', prompt: 'In a nonfiction text, a diagram with labels is used to...', options: ['show how something works or looks', 'tell a story', 'list vocabulary words', 'give the author\'s opinion'], answer: 'show how something works or looks', explanation: 'Labeled diagrams in nonfiction help readers SEE and understand how things look or work!' },

  { id: 'er2-3-11', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'nonfiction features',
    visual: '📚', prompt: 'An INDEX at the back of a book helps you...', options: ['find where specific topics are discussed', 'learn the meanings of words', 'see pictures of the topic', 'read a summary'], answer: 'find where specific topics are discussed', explanation: 'An index lists topics alphabetically with page numbers so you can find information quickly!' },

  { id: 'er2-3-12', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'simile',
    visual: '🌸', prompt: 'Which sentence contains a simile?', options: ['Her smile was like sunshine', 'The cat sat on the mat', 'He ate his lunch', 'The bird sang beautifully'], answer: 'Her smile was like sunshine', explanation: '"Like sunshine" compares her smile to the sun using LIKE — that makes it a simile!' },

  { id: 'er2-3-13', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'theme vs main idea',
    visual: '🎭', prompt: 'The MAIN IDEA of a nonfiction passage is...', options: ['the most important point the author makes', 'the lesson you learn', 'the author\'s favorite topic', 'the most interesting sentence'], answer: 'the most important point the author makes', explanation: 'Main idea = the most important point. Theme = life lesson. Nonfiction has main ideas!' },

  { id: 'er2-3-14', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'text evidence',
    visual: '📝', prompt: 'A student writes: "I know the character was brave because the story says she \'walked into the dark cave without hesitating.\'" This student used...', options: ['text evidence', 'a guess', 'their own opinion', 'prior knowledge only'], answer: 'text evidence', explanation: 'Using exact words from the story ("walked into the dark cave without hesitating") is text evidence!' },

  { id: 'er2-3-15', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary in context',
    visual: '🏆', prompt: '"Despite her exhaustion, she persevered through the final miles of the race." PERSEVERED means...', options: ['kept going even though it was hard', 'stopped and rested', 'gave up', 'ran faster'], answer: 'kept going even though it was hard', explanation: '"Despite her exhaustion" but she kept racing — persevered means to continue through difficulty!' },

  { id: 'er2-3-16', type: 'true-false', level: '3', subject: 'reading', language: 'english', topic: 'alliteration',
    visual: '🎵', prompt: '"Big brown bears bounce beautifully" is an example of alliteration.', options: ['True', 'False'], answer: 'True', explanation: 'Big, brown, bears, bounce, beautifully — they all start with /b/! That\'s alliteration!' },

  { id: 'er2-3-17', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'point of view',
    visual: '📖', prompt: 'If a story uses "he, she, they" and the narrator is NOT a character, it is told from what point of view?', options: ['third person', 'first person', 'second person', 'fourth person'], answer: 'third person', explanation: 'Third person uses "he/she/they" — the narrator is outside the story watching!' },

  { id: 'er2-3-18', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'inference',
    visual: '🌠', prompt: '"Clara\'s stomach growled. She checked the clock — 12:30. She reached for her lunch bag." What can you infer?', options: ['Clara is hungry and it is lunchtime', 'Clara is sleepy', 'Clara is doing homework', 'Clara is bored'], answer: 'Clara is hungry and it is lunchtime', explanation: 'Growling stomach + 12:30 + lunch bag = Clara is hungry at lunchtime! Great inferring!' },

  { id: 'er2-3-19', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'nonfiction features',
    visual: '📈', prompt: 'In a nonfiction book, a GRAPH is used to...', options: ['show information visually with numbers', 'tell a story with pictures', 'list words and their meanings', 'name the chapters'], answer: 'show information visually with numbers', explanation: 'Graphs show data and numbers visually — they help you compare information at a glance!' },

  { id: 'er2-3-20', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'figurative language',
    visual: '🌊', prompt: '"The ocean roared with anger." This gives the ocean human feelings — it is called...', options: ['personification', 'simile', 'alliteration', 'hyperbole'], answer: 'personification', explanation: 'Giving human feelings (anger) to something non-human (the ocean) is personification!' },

  { id: 'er2-3-21', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary in context',
    visual: '🎪', prompt: '"The magician\'s tricks were so spectacular that the audience gasped." SPECTACULAR means...', options: ['amazing and impressive', 'boring and slow', 'loud and scary', 'tiny and unimportant'], answer: 'amazing and impressive', explanation: 'The audience GASPED — that tells us the tricks were amazing! Spectacular = impressively great!' },

  { id: 'er2-3-22', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'text evidence',
    visual: '📌', prompt: 'When writing about a text, the phrase "According to the text..." signals that you are...', options: ['using text evidence', 'sharing your own opinion', 'making an inference', 'summarizing without proof'], answer: 'using text evidence', explanation: '"According to the text" is a great phrase that shows you\'re backing up your answer with proof!' },

  { id: 'er2-3-23', type: 'true-false', level: '3', subject: 'reading', language: 'english', topic: 'simile',
    visual: '🌟', prompt: '"Her voice was music to my ears" is a simile because it uses the word "like" or "as."', options: ['True', 'False'], answer: 'False', explanation: 'That\'s a METAPHOR — it compares voice to music WITHOUT using "like" or "as." Similes need like or as!' },

  { id: 'er2-3-24', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'nonfiction features',
    visual: '🗺️', prompt: 'A map included in a nonfiction text helps the reader...', options: ['understand the location of events', 'learn new vocabulary', 'identify the author\'s purpose', 'find the table of contents'], answer: 'understand the location of events', explanation: 'Maps in nonfiction texts show WHERE events happened — they help you picture the location!' },

  { id: 'er2-3-25', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'theme vs main idea',
    visual: '🦅', prompt: 'A story shows a girl who keeps practicing piano even after many mistakes and finally plays a beautiful song. The theme is...', options: ['Hard work and practice lead to success', 'Piano is difficult to learn', 'Songs are beautiful', 'The girl is talented'], answer: 'Hard work and practice lead to success', explanation: 'The BIG LESSON the story teaches is that perseverance and practice pay off!' },

  // ============================================================
  // TAG LEVEL (25 questions)
  // ============================================================

  { id: 'er2-t-01', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'analogies',
    visual: '🎼', prompt: 'Composer is to symphony as author is to...', options: ['novel', 'painting', 'sculpture', 'song'], answer: 'novel', explanation: 'A composer creates a symphony; an author creates a novel — both create their art form!' },

  { id: 'er2-t-02', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'analogies',
    visual: '🧩', prompt: 'Conductor is to orchestra as coach is to...', options: ['team', 'stadium', 'trophy', 'referee'], answer: 'team', explanation: 'A conductor leads an orchestra; a coach leads a team. Both are leaders of groups!' },

  { id: 'er2-t-03', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'analogies',
    visual: '🎨', prompt: 'Brush is to painter as pen is to...', options: ['writer', 'teacher', 'doctor', 'chef'], answer: 'writer', explanation: 'A painter uses a brush; a writer uses a pen — both are tools for creating!' },

  { id: 'er2-t-04', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'etymology',
    visual: '🏛️', prompt: 'The word "AQUARIUM" comes from the Latin word "aqua" meaning water. What does AQUARIUM most likely hold?', options: ['water and fish', 'books', 'food', 'rocks'], answer: 'water and fish', explanation: 'Knowing that "aqua" means water helps! AQUARIUM comes from Latin and holds water creatures!' },

  { id: 'er2-t-05', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'etymology',
    visual: '🌟', prompt: 'The prefix "ASTRO-" comes from Greek and means "star." Which word means "one who studies stars"?', options: ['astronomer', 'astronaut', 'asteroid', 'astronomy'], answer: 'astronomer', explanation: 'ASTRO (star) + NOMER (one who studies/names) = ASTRONOMER — a person who studies stars!' },

  { id: 'er2-t-06', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '💎', prompt: 'What does ARDUOUS mean?', options: ['requiring great effort; very difficult', 'very easy and simple', 'very colorful', 'very loud'], answer: 'requiring great effort; very difficult', explanation: 'ARDUOUS describes something that takes great effort — like an arduous mountain climb!' },

  { id: 'er2-t-07', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '🌟', prompt: 'What does LUMINOUS mean?', options: ['giving off or reflecting bright light', 'very heavy', 'completely silent', 'extremely cold'], answer: 'giving off or reflecting bright light', explanation: 'LUMINOUS means glowing or shining brightly — a luminous moon lights up the night sky!' },

  { id: 'er2-t-08', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '🦁', prompt: 'What does TENACIOUS mean?', options: ['holding firmly; not giving up', 'moving very fast', 'speaking very quietly', 'feeling very sad'], answer: 'holding firmly; not giving up', explanation: 'TENACIOUS means you hold on and keep going no matter what — just like you are when you learn!' },

  { id: 'er2-t-09', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '🌿', prompt: 'What does RESILIENT mean?', options: ['able to recover quickly from difficulties', 'easily broken or damaged', 'very slow to change', 'unable to feel emotions'], answer: 'able to recover quickly from difficulties', explanation: 'RESILIENT people bounce back from hard things — like a rubber ball that bounces right back up!' },

  { id: 'er2-t-10', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '💪', prompt: 'What does PERSEVERE mean?', options: ['to keep going despite obstacles', 'to give up when things are hard', 'to move very quickly', 'to remain silent'], answer: 'to keep going despite obstacles', explanation: 'PERSEVERE means to keep trying even when it\'s really hard — and that\'s exactly what great learners do!' },

  { id: 'er2-t-11', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '💙', prompt: 'What does EMPATHY mean?', options: ['understanding and sharing another person\'s feelings', 'feeling very happy about something', 'being afraid of others', 'knowing many facts'], answer: 'understanding and sharing another person\'s feelings', explanation: 'EMPATHY is when you can truly understand how someone else feels — it\'s an important superpower!' },

  { id: 'er2-t-12', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'complex inference',
    visual: '🔭', prompt: '"Dr. Santos spent thirty years investigating the same question, ignoring criticism from colleagues who called her work pointless. When she published her findings, she won the Nobel Prize." What quality does Dr. Santos demonstrate?', options: ['Resilience and tenacity', 'Arrogance and pride', 'Fear and doubt', 'Laziness'], answer: 'Resilience and tenacity', explanation: 'Thirty years + ignoring criticism + finally succeeding shows incredible resilience and tenacity!' },

  { id: 'er2-t-13', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'literary analysis',
    visual: '📜', prompt: 'When an author ends a story with the exact same image or line that began it, this technique is called...', options: ['circular structure', 'flashback', 'foreshadowing', 'irony'], answer: 'circular structure', explanation: 'Circular structure (or "bookending") brings the story full circle — same beginning and end creates a satisfying sense of completeness!' },

  { id: 'er2-t-14', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'literary analysis',
    visual: '🎭', prompt: 'When a character says one thing but MEANS the opposite, this is called...', options: ['verbal irony', 'alliteration', 'foreshadowing', 'simile'], answer: 'verbal irony', explanation: 'Verbal irony is saying the opposite of what you mean — like saying "Oh great!" when something goes wrong!' },

  { id: 'er2-t-15', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'analogies',
    visual: '🧩', prompt: 'Chef is to kitchen as surgeon is to...', options: ['operating room', 'classroom', 'laboratory', 'library'], answer: 'operating room', explanation: 'A chef works in a kitchen; a surgeon works in an operating room — both are their specialized workspaces!' },

  { id: 'er2-t-16', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'etymology',
    visual: '📚', prompt: 'The Latin root "SCRIB/SCRIPT" means "to write." Which word comes from this root?', options: ['manuscript', 'manage', 'manual', 'marble'], answer: 'manuscript', explanation: 'MANU (hand) + SCRIPT (write) = MANUSCRIPT — originally a document written by hand!' },

  { id: 'er2-t-17', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'complex inference',
    visual: '🌑', prompt: '"The town square was empty by noon. Shop owners shuttered their windows. Dogs hid beneath porches. Old Mrs. Chen watched the horizon with narrowed eyes." What can you infer is about to happen?', options: ['A storm is coming', 'A parade is starting', 'School is letting out', 'A festival is beginning'], answer: 'A storm is coming', explanation: 'All the signs — empty streets, shuttered shops, animals hiding, watching the horizon — point to a coming storm!' },

  { id: 'er2-t-18', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'literary analysis',
    visual: '⏰', prompt: 'When an author gives hints or clues about what will happen later in a story, this is called...', options: ['foreshadowing', 'flashback', 'personification', 'alliteration'], answer: 'foreshadowing', explanation: 'FORESHADOWING plants clues early in the story about events that come later — like a mystery trail!' },

  { id: 'er2-t-19', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'analogies',
    visual: '🧩', prompt: 'Words are to sentences as sentences are to...', options: ['paragraphs', 'letters', 'sounds', 'punctuation'], answer: 'paragraphs', explanation: 'Words build sentences; sentences build paragraphs — each level builds the next!' },

  { id: 'er2-t-20', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'etymology',
    visual: '🌊', prompt: 'The Greek root "HYDRO" means water. Which word means "fear of water"?', options: ['hydrophobia', 'hydrology', 'hydroplane', 'hydrogen'], answer: 'hydrophobia', explanation: 'HYDRO (water) + PHOBIA (fear) = HYDROPHOBIA — a fear of water!' },

  { id: 'er2-t-21', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'complex inference',
    visual: '🎻', prompt: '"When Maya entered the concert hall for the first time, her hands trembled as she tuned her violin. She had practiced a thousand hours for this moment." What does "a thousand hours" suggest?', options: ['Maya is extremely dedicated to music', 'Maya is not prepared', 'The concert is very short', 'Maya does not like violin'], answer: 'Maya is extremely dedicated to music', explanation: '"A thousand hours" is likely an exaggeration (hyperbole) that emphasizes her incredible dedication!' },

  { id: 'er2-t-22', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'literary analysis',
    visual: '🔮', prompt: 'In a story, the CLIMAX is...', options: ['the most exciting turning point', 'the very beginning', 'the happy ending', 'the setting description'], answer: 'the most exciting turning point', explanation: 'The CLIMAX is the highest point of tension — the moment everything comes together!' },

  { id: 'er2-t-23', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'advanced vocabulary',
    visual: '🏔️', prompt: 'Which word BEST describes someone who keeps going even when it is extremely difficult?', options: ['tenacious', 'timid', 'frantic', 'indifferent'], answer: 'tenacious', explanation: 'TENACIOUS means holding on tightly and refusing to give up — a true superpower word!' },

  { id: 'er2-t-24', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'analogies',
    visual: '🎹', prompt: 'Stethoscope is to doctor as telescope is to...', options: ['astronomer', 'chef', 'firefighter', 'teacher'], answer: 'astronomer', explanation: 'A stethoscope is a doctor\'s tool; a telescope is an astronomer\'s tool — instruments of the trade!' },

  { id: 'er2-t-25', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'complex inference',
    visual: '📖', prompt: 'A character in a story is described as "always the first to offer help, the last to ask for it." This character can best be described as...', options: ['selfless and giving', 'selfish and greedy', 'lazy and unhelpful', 'proud and boastful'], answer: 'selfless and giving', explanation: 'Always helping others and never asking for help yourself shows a selfless, generous character!' },

]
