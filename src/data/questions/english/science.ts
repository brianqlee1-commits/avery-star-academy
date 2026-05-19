import type { Question } from '../../../types'

export const scienceQuestions: Question[] = [
  // === Kindergarten ===
  { id: 'es-k-01', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'living things',
    visual: '🌱', prompt: 'Which of these is a LIVING thing?', options: ['a flower', 'a rock', 'a cloud', 'a chair'], answer: 'a flower', explanation: 'A flower is alive — it grows, needs water, and makes seeds!' },
  { id: 'es-k-02', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'seasons',
    visual: '❄️', prompt: 'In which season does snow fall most?', options: ['summer', 'fall', 'winter', 'spring'], answer: 'winter', explanation: 'Winter is the coldest season — that\'s when snow falls!' },
  { id: 'es-k-03', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animals',
    visual: '🐛', prompt: 'What does a caterpillar turn into?', options: ['a butterfly', 'a bee', 'a bird', 'a worm'], answer: 'a butterfly', explanation: 'A caterpillar builds a cocoon and becomes a beautiful butterfly!' },
  { id: 'es-k-04', type: 'true-false', level: 'K', subject: 'science', language: 'english', topic: 'plants',
    visual: '☀️', prompt: 'Plants need sunlight to grow.', options: ['True', 'False'], answer: 'True', explanation: 'Plants use sunlight to make their food through photosynthesis!' },
  { id: 'es-k-05', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'weather',
    visual: '🌤️', prompt: 'What do we call water that falls from clouds?', options: ['rain', 'wind', 'snow', 'fog'], answer: 'rain', explanation: 'Rain is water droplets that fall from clouds!' },

  // === 1st Grade ===
  { id: 'es-1-01', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'life cycles',
    visual: '🐣', prompt: 'What is the FIRST stage of a chicken\'s life cycle?', options: ['chick', 'egg', 'adult chicken', 'baby chicken'], answer: 'egg', explanation: 'Life cycle: egg → chick → adult chicken!' },
  { id: 'es-1-02', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'matter',
    visual: '🧊', prompt: 'Water, juice, and milk are all examples of...', options: ['solids', 'liquids', 'gases', 'metals'], answer: 'liquids', explanation: 'Water, juice, and milk all flow and pour — they\'re LIQUIDS!' },
  { id: 'es-1-03', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'plants',
    visual: '🌻', prompt: 'Which part of a plant makes seeds?', options: ['roots', 'stem', 'flower', 'leaves'], answer: 'flower', explanation: 'The flower is where seeds are made!' },
  { id: 'es-1-04', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'senses',
    visual: '👃', prompt: 'Which sense do you use your NOSE for?', options: ['smell', 'sight', 'taste', 'touch'], answer: 'smell', explanation: 'Your nose is for smelling — it detects scents!' },
  { id: 'es-1-05', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'habitats',
    visual: '🐠', prompt: 'A fish lives in a...', options: ['water habitat', 'desert', 'forest', 'mountain'], answer: 'water habitat', explanation: 'Fish need water to breathe and live — it\'s their habitat!' },

  // === 2nd Grade ===
  { id: 'es-2-01', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'states of matter',
    visual: '💨', prompt: 'Steam coming from hot soup is an example of a...', options: ['solid', 'liquid', 'gas', 'metal'], answer: 'gas', explanation: 'When water boils, it becomes steam — a GAS!' },
  { id: 'es-2-02', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'earth',
    visual: '🌍', prompt: 'What layer of Earth do we live on?', options: ['core', 'mantle', 'inner core', 'crust'], answer: 'crust', explanation: 'The CRUST is Earth\'s outermost layer — where we live!' },
  { id: 'es-2-03', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'food chains',
    visual: '🌿🐛🐦', prompt: 'In the food chain: grass → grasshopper → frog → eagle. What does the frog eat?', options: ['grass', 'grasshopper', 'eagle', 'seeds'], answer: 'grasshopper', explanation: 'Arrows show who gets eaten! Frog ← grasshopper means frog eats grasshopper!' },
  { id: 'es-2-04', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'solar system',
    visual: '🪐', prompt: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], answer: '8', explanation: 'There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune!' },
  { id: 'es-2-05', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'scientific method',
    visual: '🔬', prompt: 'Before doing an experiment, a scientist makes a GUESS about what will happen. This guess is called a...', options: ['fact', 'hypothesis', 'result', 'question'], answer: 'hypothesis', explanation: 'A hypothesis is your scientific guess — what you THINK will happen!' },

  // === 3rd Grade ===
  { id: 'es-3-01', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🌲', prompt: 'Animals that eat ONLY plants are called...', options: ['carnivores', 'herbivores', 'omnivores', 'predators'], answer: 'herbivores', explanation: 'Herbivores eat only plants! Cows, rabbits, and elephants are herbivores!' },
  { id: 'es-3-02', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'adaptations',
    visual: '🐻‍❄️', prompt: 'A polar bear\'s white fur helps it...', options: ['blend into the snow', 'stay warm', 'swim faster', 'climb trees'], answer: 'blend into the snow', explanation: 'White fur is camouflage — it helps polar bears blend into their snowy habitat!' },
  { id: 'es-3-03', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'forces',
    visual: '⚡', prompt: 'What force pulls things toward the Earth?', options: ['magnetism', 'gravity', 'friction', 'electricity'], answer: 'gravity', explanation: 'GRAVITY is the force that pulls everything toward Earth — it keeps us on the ground!' },
  { id: 'es-3-04', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'human body',
    visual: '❤️', prompt: 'Which organ pumps blood through your body?', options: ['brain', 'lungs', 'heart', 'stomach'], answer: 'heart', explanation: 'Your HEART pumps blood to every part of your body — it beats 60-100 times per minute!' },

  // === TAG Level ===
  { id: 'es-t-01', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'photosynthesis',
    visual: '🌿', prompt: 'Plants make their own food using sunlight, water, and...', options: ['carbon dioxide', 'oxygen', 'nitrogen', 'soil'], answer: 'carbon dioxide', explanation: 'Photosynthesis: plants take in CO₂ + water + sunlight and make sugar + oxygen!' },
  { id: 'es-t-02', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'physics',
    visual: '🏋️', prompt: 'When you push a book across a table and it slows down and stops, the force that stops it is called...', options: ['gravity', 'friction', 'magnetism', 'electricity'], answer: 'friction', explanation: 'FRICTION is the force that slows moving objects when surfaces rub together!' },
  { id: 'es-t-03', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🔬', prompt: 'The SMALLEST unit of life that can function on its own is called a...', options: ['atom', 'cell', 'molecule', 'tissue'], answer: 'cell', explanation: 'A CELL is the basic building block of all living things!' },
]
