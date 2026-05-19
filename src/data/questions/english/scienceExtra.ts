import type { Question } from '../../../types'

export const scienceQuestionsExtra: Question[] = [

  // ============================================================
  // KINDERGARTEN (25 questions)
  // ============================================================

  { id: 'es2-k-01', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal homes',
    visual: '🐻', prompt: 'A bear sleeps in a cozy underground home called a...', options: ['den', 'nest', 'burrow', 'hive'], answer: 'den', explanation: 'Bears sleep in a DEN during winter — it\'s like their cozy bedroom!' },

  { id: 'es2-k-02', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal homes',
    visual: '🐦', prompt: 'Birds build their homes from sticks and grass. What is a bird\'s home called?', options: ['nest', 'den', 'burrow', 'hive'], answer: 'nest', explanation: 'Birds build NESTS to lay their eggs and raise their baby chicks!' },

  { id: 'es2-k-03', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal homes',
    visual: '🐇', prompt: 'Rabbits and groundhogs dig underground tunnels to live in. These underground homes are called...', options: ['burrows', 'nests', 'dens', 'webs'], answer: 'burrows', explanation: 'BURROWS are tunnels dug underground — rabbits, groundhogs, and moles love burrows!' },

  { id: 'es2-k-04', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal homes',
    visual: '🐝', prompt: 'Bees live together in a home called a...', options: ['hive', 'nest', 'den', 'pond'], answer: 'hive', explanation: 'HIVES are the homes bees build from wax — they store honey there too!' },

  { id: 'es2-k-05', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal babies',
    visual: '🐻', prompt: 'A baby bear is called a...', options: ['cub', 'calf', 'foal', 'chick'], answer: 'cub', explanation: 'Baby bears are called CUBS — bear cubs stay with their moms for about two years!' },

  { id: 'es2-k-06', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal babies',
    visual: '🐴', prompt: 'A baby horse is called a...', options: ['foal', 'cub', 'lamb', 'calf'], answer: 'foal', explanation: 'Baby horses are called FOALS — they can stand up and walk within hours of being born!' },

  { id: 'es2-k-07', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal babies',
    visual: '🐑', prompt: 'A baby sheep is called a...', options: ['lamb', 'cub', 'foal', 'calf'], answer: 'lamb', explanation: 'Baby sheep are called LAMBS — "Mary Had a Little Lamb" is about one!' },

  { id: 'es2-k-08', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal babies',
    visual: '🐄', prompt: 'A baby cow is called a...', options: ['calf', 'lamb', 'foal', 'cub'], answer: 'calf', explanation: 'Baby cows are called CALVES — they drink milk from their mothers!' },

  { id: 'es2-k-09', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal babies',
    visual: '🐥', prompt: 'A baby bird that just hatched from an egg is called a...', options: ['chick', 'cub', 'foal', 'lamb'], answer: 'chick', explanation: 'Baby birds are called CHICKS — they hatch from eggs and are cared for by their parents!' },

  { id: 'es2-k-10', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'plants',
    visual: '🌱', prompt: 'Plants need FOUR things to grow. Which of these do plants need?', options: ['water, sunlight, soil, and air', 'water, toys, soil, and music', 'milk, sunlight, dirt, and love', 'food, water, shelter, and clothing'], answer: 'water, sunlight, soil, and air', explanation: 'Plants need WATER, SUNLIGHT, SOIL, and AIR (carbon dioxide) to grow and make food!' },

  { id: 'es2-k-11', type: 'true-false', level: 'K', subject: 'science', language: 'english', topic: 'plants',
    visual: '💧', prompt: 'Plants need water to grow.', options: ['True', 'False'], answer: 'True', explanation: 'Plants drink water through their roots — without water, they would wilt and die!' },

  { id: 'es2-k-12', type: 'true-false', level: 'K', subject: 'science', language: 'english', topic: 'plants',
    visual: '🪨', prompt: 'Plants can grow without soil.', options: ['True', 'False'], answer: 'True', explanation: 'Actually TRUE! Some plants like water lilies grow in water, and some plants grow in special liquid nutrients — but most plants need soil!' },

  { id: 'es2-k-13', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: '5 senses',
    visual: '👀', prompt: 'You use your EYES to experience the sense of...', options: ['sight', 'smell', 'taste', 'touch'], answer: 'sight', explanation: 'Your eyes give you the sense of SIGHT — you use them to see colors, shapes, and the world!' },

  { id: 'es2-k-14', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: '5 senses',
    visual: '👅', prompt: 'When you taste your favorite food, which body part helps you taste it?', options: ['tongue', 'eyes', 'ears', 'nose'], answer: 'tongue', explanation: 'Your TONGUE has special bumps called taste buds that help you taste sweet, salty, sour, and bitter!' },

  { id: 'es2-k-15', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: '5 senses',
    visual: '👂', prompt: 'Which body part do you use to hear sounds?', options: ['ears', 'eyes', 'nose', 'hands'], answer: 'ears', explanation: 'Your EARS catch sound waves and send them to your brain so you can hear music, voices, and more!' },

  { id: 'es2-k-16', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: '5 senses',
    visual: '🖐️', prompt: 'When you pet a soft kitten, which sense tells you it is soft?', options: ['touch', 'sight', 'smell', 'taste'], answer: 'touch', explanation: 'Your skin gives you the sense of TOUCH — you can feel soft, hard, smooth, rough, hot, and cold!' },

  { id: 'es2-k-17', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'push and pull',
    visual: '🚪', prompt: 'When you PUSH a door open, which direction does the door move?', options: ['away from you', 'toward you', 'up', 'sideways'], answer: 'away from you', explanation: 'A PUSH moves something AWAY from you — and a PULL brings something toward you!' },

  { id: 'es2-k-18', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'push and pull',
    visual: '🚗', prompt: 'When you PULL a toy car toward you, the car moves...', options: ['toward you', 'away from you', 'up', 'in circles'], answer: 'toward you', explanation: 'A PULL brings something closer to you — great physics thinking!' },

  { id: 'es2-k-19', type: 'true-false', level: 'K', subject: 'science', language: 'english', topic: 'push and pull',
    visual: '⚽', prompt: 'Kicking a ball is an example of a PUSH force.', options: ['True', 'False'], answer: 'True', explanation: 'When you kick a ball, your foot PUSHES the ball away — kick = push!' },

  { id: 'es2-k-20', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animal homes',
    visual: '🐿️', prompt: 'A squirrel builds its home high up in a tree. This home is called a...', options: ['drey (nest)', 'den', 'burrow', 'hive'], answer: 'drey (nest)', explanation: 'Squirrels build nests called DREYS in tree branches from leaves and twigs!' },

  { id: 'es2-k-21', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'living things',
    visual: '🌵', prompt: 'Which of these is NOT a living thing?', options: ['a stone', 'a tree', 'a dog', 'a mushroom'], answer: 'a stone', explanation: 'A STONE does not grow, breathe, eat, or reproduce — so it\'s not living. Plants, animals, and fungi are living!' },

  { id: 'es2-k-22', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'weather',
    visual: '🌈', prompt: 'After rain and sunshine together, you might see a beautiful...', options: ['rainbow', 'tornado', 'blizzard', 'hurricane'], answer: 'rainbow', explanation: 'Rainbows appear when sunlight shines through water droplets in the air after rain!' },

  { id: 'es2-k-23', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'seasons',
    visual: '🍂', prompt: 'In which season do leaves change color and fall from trees?', options: ['fall (autumn)', 'summer', 'winter', 'spring'], answer: 'fall (autumn)', explanation: 'In FALL (also called autumn), leaves turn red, orange, and yellow before falling to the ground!' },

  { id: 'es2-k-24', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: 'animals',
    visual: '🦋', prompt: 'What does a caterpillar make before it becomes a butterfly?', options: ['a cocoon (chrysalis)', 'a nest', 'a burrow', 'a web'], answer: 'a cocoon (chrysalis)', explanation: 'A caterpillar wraps itself in a COCOON (or chrysalis) and transforms into a beautiful butterfly!' },

  { id: 'es2-k-25', type: 'multiple-choice', level: 'K', subject: 'science', language: 'english', topic: '5 senses',
    visual: '🌸', prompt: 'You smell a flower using your...', options: ['nose', 'eyes', 'ears', 'hands'], answer: 'nose', explanation: 'Your NOSE detects smells! Flowers have special chemicals that your nose picks up as a lovely scent!' },

  // ============================================================
  // 1ST GRADE (25 questions)
  // ============================================================

  { id: 'es2-1-01', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'rocks and minerals',
    visual: '🪨', prompt: 'Rocks are made of smaller pieces called...', options: ['minerals', 'atoms', 'drops', 'seeds'], answer: 'minerals', explanation: 'Rocks are made of MINERALS — minerals are the natural building blocks of rocks!' },

  { id: 'es2-1-02', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'rocks and minerals',
    visual: '💎', prompt: 'Diamonds, quartz, and gold are all examples of...', options: ['minerals', 'rocks', 'fossils', 'gases'], answer: 'minerals', explanation: 'MINERALS are naturally occurring solid substances — diamonds, gold, and quartz are all minerals!' },

  { id: 'es2-1-03', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'rocks and minerals',
    visual: '🏔️', prompt: 'Which type of rock is formed when melted rock (magma) cools and hardens?', options: ['igneous rock', 'sedimentary rock', 'metamorphic rock', 'fossil rock'], answer: 'igneous rock', explanation: 'IGNEOUS rocks form when magma (melted rock) cools and hardens — like lava cooling after a volcano!' },

  { id: 'es2-1-04', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'weather instruments',
    visual: '🌡️', prompt: 'A THERMOMETER measures...', options: ['temperature', 'rainfall', 'wind speed', 'cloud thickness'], answer: 'temperature', explanation: 'A THERMOMETER tells you how hot or cold it is — it measures temperature in degrees!' },

  { id: 'es2-1-05', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'weather instruments',
    visual: '🌧️', prompt: 'A RAIN GAUGE is a tool used to measure...', options: ['how much rain has fallen', 'how hot it is', 'how fast the wind blows', 'how many clouds there are'], answer: 'how much rain has fallen', explanation: 'A RAIN GAUGE collects rainwater and tells meteorologists how much rain has fallen!' },

  { id: 'es2-1-06', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'weather instruments',
    visual: '💨', prompt: 'A WIND VANE tells you...', options: ['which direction the wind is blowing', 'how fast the wind blows', 'how much rain is falling', 'the temperature'], answer: 'which direction the wind is blowing', explanation: 'A WIND VANE (weather vane) points in the direction the wind is coming FROM!' },

  { id: 'es2-1-07', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'water cycle',
    visual: '☀️', prompt: 'When the sun heats water in a puddle and it slowly disappears into the air, this is called...', options: ['evaporation', 'condensation', 'precipitation', 'collection'], answer: 'evaporation', explanation: 'EVAPORATION is when liquid water turns into water vapor (gas) and rises into the air!' },

  { id: 'es2-1-08', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'water cycle',
    visual: '☁️', prompt: 'When water vapor in the air cools and turns back into tiny water droplets forming clouds, this is called...', options: ['condensation', 'evaporation', 'precipitation', 'absorption'], answer: 'condensation', explanation: 'CONDENSATION is when water vapor cools and turns back into liquid droplets — that\'s how clouds form!' },

  { id: 'es2-1-09', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'water cycle',
    visual: '🌧️', prompt: 'When water falls from clouds as rain, snow, or hail, it is called...', options: ['precipitation', 'evaporation', 'condensation', 'reflection'], answer: 'precipitation', explanation: 'PRECIPITATION is any water that falls from clouds — rain, snow, sleet, or hail are all precipitation!' },

  { id: 'es2-1-10', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'living and nonliving',
    visual: '🌳', prompt: 'Which of these is a LIVING thing?', options: ['a tree', 'a bicycle', 'a cloud', 'a rock'], answer: 'a tree', explanation: 'A tree is LIVING — it grows, needs water and sunlight, makes seeds, and responds to its environment!' },

  { id: 'es2-1-11', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'living and nonliving',
    visual: '🚲', prompt: 'A bicycle is NONLIVING because it...', options: ['does not grow or reproduce', 'cannot move', 'is too small to see', 'is made of plastic'], answer: 'does not grow or reproduce', explanation: 'Nonliving things don\'t grow, breathe, eat, or have babies — a bicycle doesn\'t do any of these!' },

  { id: 'es2-1-12', type: 'true-false', level: '1', subject: 'science', language: 'english', topic: 'living and nonliving',
    visual: '🔥', prompt: 'Fire is a living thing because it moves and grows.', options: ['True', 'False'], answer: 'False', explanation: 'Fire SEEMS alive because it moves, but it\'s NOT living — it doesn\'t have cells, reproduce, or respond to its environment like living things do!' },

  { id: 'es2-1-13', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'dinosaurs',
    visual: '🦕', prompt: 'What do we call the preserved remains or traces of animals that lived long ago?', options: ['fossils', 'minerals', 'crystals', 'rocks'], answer: 'fossils', explanation: 'FOSSILS are the preserved remains or traces (like footprints) of living things from long ago!' },

  { id: 'es2-1-14', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'dinosaurs',
    visual: '🦖', prompt: 'Dinosaurs went extinct (died out) about how many million years ago?', options: ['66 million years ago', '1 million years ago', '1,000 years ago', '10 million years ago'], answer: '66 million years ago', explanation: 'Dinosaurs went extinct about 66 MILLION years ago — scientists think an asteroid hitting Earth caused it!' },

  { id: 'es2-1-15', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'dinosaurs',
    visual: '🦕', prompt: 'T-Rex (Tyrannosaurus Rex) was a...', options: ['meat-eating dinosaur', 'plant-eating dinosaur', 'flying dinosaur', 'ocean dinosaur'], answer: 'meat-eating dinosaur', explanation: 'T-Rex was a CARNIVORE — a meat-eater with giant teeth! Its name means "Tyrant Lizard King"!' },

  { id: 'es2-1-16', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'plants',
    visual: '🌻', prompt: 'The ROOTS of a plant help by...', options: ['soaking up water and holding the plant in the ground', 'making food using sunlight', 'producing seeds', 'attracting bees'], answer: 'soaking up water and holding the plant in the ground', explanation: 'ROOTS have two big jobs: anchoring the plant in soil AND absorbing water and nutrients!' },

  { id: 'es2-1-17', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'plants',
    visual: '🍃', prompt: 'The LEAVES of a plant are important because they...', options: ['make food using sunlight', 'absorb water from soil', 'carry water from roots to leaves', 'make seeds'], answer: 'make food using sunlight', explanation: 'LEAVES are the plant\'s food factories! They use sunlight, water, and air to make food — photosynthesis!' },

  { id: 'es2-1-18', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'weather instruments',
    visual: '🌪️', prompt: 'An ANEMOMETER measures...', options: ['wind speed', 'temperature', 'rainfall', 'cloud height'], answer: 'wind speed', explanation: 'An ANEMOMETER has spinning cups — the faster they spin, the stronger the wind!' },

  { id: 'es2-1-19', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'matter',
    visual: '🧊', prompt: 'Ice is water in what STATE of matter?', options: ['solid', 'liquid', 'gas', 'plasma'], answer: 'solid', explanation: 'ICE is water in its SOLID form — it has a fixed shape. When it melts, it becomes liquid water!' },

  { id: 'es2-1-20', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'matter',
    visual: '💨', prompt: 'Steam from hot water is water in what state of matter?', options: ['gas', 'solid', 'liquid', 'crystal'], answer: 'gas', explanation: 'Steam is water in its GAS form (called water vapor) — heat turns liquid water into gas!' },

  { id: 'es2-1-21', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'rocks and minerals',
    visual: '🔍', prompt: 'Scientists who study rocks are called...', options: ['geologists', 'biologists', 'meteorologists', 'astronomers'], answer: 'geologists', explanation: 'GEOLOGISTS study rocks, minerals, and Earth\'s structure — "geo" means Earth!' },

  { id: 'es2-1-22', type: 'true-false', level: '1', subject: 'science', language: 'english', topic: 'water cycle',
    visual: '🌊', prompt: 'The water on Earth today is the same water that dinosaurs drank millions of years ago.', options: ['True', 'False'], answer: 'True', explanation: 'AMAZING but true! Water cycles through evaporation, condensation, and precipitation — it\'s recycled forever!' },

  { id: 'es2-1-23', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'animals',
    visual: '🐦', prompt: 'Birds are different from other animals because birds have...', options: ['feathers and wings', 'fur and claws', 'scales and fins', 'smooth skin'], answer: 'feathers and wings', explanation: 'BIRDS are the only animals with FEATHERS! Most birds also have wings, though not all can fly!' },

  { id: 'es2-1-24', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'life cycles',
    visual: '🦋', prompt: 'What are the stages of a butterfly\'s life cycle IN ORDER?', options: ['egg → caterpillar → chrysalis → butterfly', 'egg → butterfly → caterpillar → chrysalis', 'caterpillar → egg → butterfly → chrysalis', 'butterfly → egg → chrysalis → caterpillar'], answer: 'egg → caterpillar → chrysalis → butterfly', explanation: 'Butterfly life cycle: EGG → CATERPILLAR (larva) → CHRYSALIS (pupa) → BUTTERFLY (adult)!' },

  { id: 'es2-1-25', type: 'multiple-choice', level: '1', subject: 'science', language: 'english', topic: 'senses',
    visual: '🔊', prompt: 'Your EARS help you hear sounds. What causes sounds?', options: ['vibrations (things moving back and forth quickly)', 'light bouncing off objects', 'smells in the air', 'chemicals on your tongue'], answer: 'vibrations (things moving back and forth quickly)', explanation: 'Sound is made by VIBRATIONS — when something vibrates, it moves the air around it, making sound waves!' },

  // ============================================================
  // 2ND GRADE (25 questions)
  // ============================================================

  { id: 'es2-2-01', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'magnets',
    visual: '🧲', prompt: 'When two magnets push AWAY from each other, we say they...', options: ['repel', 'attract', 'stick', 'connect'], answer: 'repel', explanation: 'REPEL means push away! Like poles (N-N or S-S) repel each other. Opposite poles attract!' },

  { id: 'es2-2-02', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'magnets',
    visual: '🔩', prompt: 'Which material is attracted to a magnet?', options: ['iron (steel)', 'plastic', 'wood', 'glass'], answer: 'iron (steel)', explanation: 'Magnets attract IRON and steel (which contains iron) — but not plastic, wood, or glass!' },

  { id: 'es2-2-03', type: 'true-false', level: '2', subject: 'science', language: 'english', topic: 'magnets',
    visual: '🧲', prompt: 'Every magnet has two poles: a North pole and a South pole.', options: ['True', 'False'], answer: 'True', explanation: 'Every magnet always has both a NORTH pole and a SOUTH pole — you can never separate them!' },

  { id: 'es2-2-04', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'simple machines',
    visual: '⚖️', prompt: 'A SEE-SAW on a playground is an example of which simple machine?', options: ['lever', 'pulley', 'wheel and axle', 'wedge'], answer: 'lever', explanation: 'A LEVER is a stiff bar that rests on a pivot point (fulcrum). A seesaw is a lever!' },

  { id: 'es2-2-05', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'simple machines',
    visual: '🏴‍☠️', prompt: 'A PULLEY uses a rope over a wheel to...', options: ['make lifting things easier', 'cut things in half', 'hold things together', 'spin things in circles'], answer: 'make lifting things easier', explanation: 'A PULLEY changes the direction of force — it makes lifting heavy things much easier!' },

  { id: 'es2-2-06', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'simple machines',
    visual: '🚲', prompt: 'A WHEEL AND AXLE (like a bicycle wheel) makes it easier to...', options: ['move things by rolling', 'lift things up', 'cut things apart', 'hold things together'], answer: 'move things by rolling', explanation: 'WHEEL AND AXLE lets things roll — it reduces friction and makes moving objects much easier!' },

  { id: 'es2-2-07', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'planets',
    visual: '☀️', prompt: 'Which planet is CLOSEST to the Sun?', options: ['Mercury', 'Venus', 'Earth', 'Mars'], answer: 'Mercury', explanation: 'MERCURY is the closest planet to the Sun — it\'s also the smallest planet in our solar system!' },

  { id: 'es2-2-08', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'planets',
    visual: '🪐', prompt: 'Which planet is known for its beautiful rings?', options: ['Saturn', 'Jupiter', 'Uranus', 'Mars'], answer: 'Saturn', explanation: 'SATURN has stunning rings made of ice and rock — they\'re so big you could fit 9 Earths across them!' },

  { id: 'es2-2-09', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'planets',
    visual: '🌍', prompt: 'What is the ORDER of planets from the Sun? (First four)', options: ['Mercury, Venus, Earth, Mars', 'Mercury, Earth, Venus, Mars', 'Venus, Mercury, Earth, Mars', 'Mars, Earth, Venus, Mercury'], answer: 'Mercury, Venus, Earth, Mars', explanation: 'My Very Educated Mother — Mercury, Venus, Earth, Mars! Earth is the 3rd planet from the Sun!' },

  { id: 'es2-2-10', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'animal classification',
    visual: '🐋', prompt: 'Whales breathe air, give birth to live young, and feed their babies milk. Whales are...', options: ['mammals', 'fish', 'reptiles', 'amphibians'], answer: 'mammals', explanation: 'Whales are MAMMALS — even though they live in the ocean! Mammals breathe air, have warm blood, and nurse their young!' },

  { id: 'es2-2-11', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'animal classification',
    visual: '🐊', prompt: 'Alligators and snakes have scaly skin and are cold-blooded. They are...', options: ['reptiles', 'amphibians', 'fish', 'mammals'], answer: 'reptiles', explanation: 'REPTILES have dry, scaly skin and are cold-blooded. Snakes, lizards, turtles, and crocodiles are all reptiles!' },

  { id: 'es2-2-12', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'animal classification',
    visual: '🐸', prompt: 'Frogs live both in water AND on land, and have moist skin. They are called...', options: ['amphibians', 'reptiles', 'fish', 'mammals'], answer: 'amphibians', explanation: 'AMPHIBIANS live both on land and in water — frogs, toads, and salamanders are amphibians!' },

  { id: 'es2-2-13', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'animal classification',
    visual: '🐟', prompt: 'Fish breathe through gills and live entirely in water. Which animal is actually a fish?', options: ['salmon', 'dolphin', 'sea turtle', 'penguin'], answer: 'salmon', explanation: 'SALMON is a true fish — it has gills and fins! Dolphins are mammals, turtles are reptiles, penguins are birds!' },

  { id: 'es2-2-14', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'clouds',
    visual: '⛅', prompt: 'Fluffy, white clouds that look like cotton balls are called...', options: ['cumulus clouds', 'stratus clouds', 'cirrus clouds', 'nimbus clouds'], answer: 'cumulus clouds', explanation: 'CUMULUS clouds are the puffy, cotton-ball clouds! They often appear on sunny days.' },

  { id: 'es2-2-15', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'clouds',
    visual: '🌫️', prompt: 'Flat, gray clouds that cover the whole sky and often bring rain are called...', options: ['stratus clouds', 'cumulus clouds', 'cirrus clouds', 'alto clouds'], answer: 'stratus clouds', explanation: 'STRATUS clouds form a gray blanket over the sky — they often bring drizzle or light rain!' },

  { id: 'es2-2-16', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'clouds',
    visual: '🌤️', prompt: 'Thin, wispy clouds high in the sky that look like white streaks are called...', options: ['cirrus clouds', 'cumulus clouds', 'stratus clouds', 'storm clouds'], answer: 'cirrus clouds', explanation: 'CIRRUS clouds are high, wispy, and thin — they\'re made of ice crystals way up in the sky!' },

  { id: 'es2-2-17', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'planets',
    visual: '🔴', prompt: 'Which planet is called the Red Planet?', options: ['Mars', 'Jupiter', 'Mercury', 'Saturn'], answer: 'Mars', explanation: 'MARS is called the Red Planet because its surface is covered in reddish iron oxide (rust)!' },

  { id: 'es2-2-18', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'magnets',
    visual: '🧭', prompt: 'A compass uses a magnetic needle to point to...', options: ['north', 'east', 'south', 'west'], answer: 'north', explanation: 'A compass needle is magnetic and always points to Earth\'s magnetic North Pole — how cool is that!' },

  { id: 'es2-2-19', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'simple machines',
    visual: '🪚', prompt: 'A RAMP (inclined plane) makes it easier to...', options: ['move things to a higher place', 'cut objects', 'lift things straight up instantly', 'spin objects'], answer: 'move things to a higher place', explanation: 'An inclined plane (ramp) lets you use LESS force to move something up — it just takes more distance!' },

  { id: 'es2-2-20', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'animal classification',
    visual: '🦅', prompt: 'Birds have feathers, lay eggs, and are warm-blooded. Which of these is a bird?', options: ['eagle', 'bat', 'bee', 'flying fish'], answer: 'eagle', explanation: 'EAGLES are birds — feathered, winged, egg-laying, warm-blooded! Bats are mammals, not birds!' },

  { id: 'es2-2-21', type: 'true-false', level: '2', subject: 'science', language: 'english', topic: 'planets',
    visual: '🌍', prompt: 'Earth is the largest planet in our solar system.', options: ['True', 'False'], answer: 'False', explanation: 'Jupiter is the LARGEST planet! Earth is actually medium-sized — Jupiter could fit about 1,300 Earths inside it!' },

  { id: 'es2-2-22', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'matter',
    visual: '💧', prompt: 'What happens to water when you put it in a freezer?', options: ['It turns into ice (solid)', 'It turns into steam (gas)', 'It disappears', 'It becomes heavier'], answer: 'It turns into ice (solid)', explanation: 'Cold FREEZES water and turns it from a liquid into a solid — ICE! This is called freezing!' },

  { id: 'es2-2-23', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'clouds',
    visual: '⛈️', prompt: 'Dark, tall storm clouds that bring thunder and lightning are called...', options: ['cumulonimbus clouds', 'cirrus clouds', 'stratus clouds', 'cumulus clouds'], answer: 'cumulonimbus clouds', explanation: 'CUMULONIMBUS are giant storm clouds that tower high into the sky — they bring thunderstorms!' },

  { id: 'es2-2-24', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'magnets',
    visual: '🧲', prompt: 'Opposite poles of magnets (North and South) will...', options: ['attract each other', 'repel each other', 'do nothing', 'destroy each other'], answer: 'attract each other', explanation: 'Opposites attract in magnetism! North pole + South pole = pull toward each other!' },

  { id: 'es2-2-25', type: 'multiple-choice', level: '2', subject: 'science', language: 'english', topic: 'simple machines',
    visual: '✂️', prompt: 'Scissors, knives, and doorstops are all examples of which simple machine?', options: ['wedge', 'lever', 'pulley', 'wheel and axle'], answer: 'wedge', explanation: 'A WEDGE is a simple machine with a pointed edge used to split or cut — scissors, knives, and ax heads are wedges!' },

  // ============================================================
  // 3RD GRADE (25 questions)
  // ============================================================

  { id: 'es2-3-01', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'photosynthesis',
    visual: '🌿', prompt: 'During photosynthesis, plants use sunlight to turn water and carbon dioxide into...', options: ['sugar and oxygen', 'salt and nitrogen', 'water and carbon dioxide', 'soil and minerals'], answer: 'sugar and oxygen', explanation: 'Photosynthesis equation: CO₂ + H₂O + sunlight → sugar (food) + O₂ (the oxygen we breathe)!' },

  { id: 'es2-3-02', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'photosynthesis',
    visual: '🍃', prompt: 'The green color in plant leaves comes from a chemical called...', options: ['chlorophyll', 'melanin', 'hemoglobin', 'glucose'], answer: 'chlorophyll', explanation: 'CHLOROPHYLL is the green pigment in leaves that captures sunlight for photosynthesis!' },

  { id: 'es2-3-03', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'photosynthesis',
    visual: '☀️', prompt: 'Which part of a plant is the MAIN place where photosynthesis happens?', options: ['leaves', 'roots', 'stem', 'flowers'], answer: 'leaves', explanation: 'LEAVES are photosynthesis factories! They are flat and wide to capture as much sunlight as possible!' },

  { id: 'es2-3-04', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'energy types',
    visual: '💡', prompt: 'When you turn on a light bulb, electrical energy is converted into...', options: ['light energy and heat energy', 'sound energy and chemical energy', 'mechanical energy only', 'nuclear energy'], answer: 'light energy and heat energy', explanation: 'Light bulbs convert electrical energy into LIGHT and also a little HEAT — you can feel the warmth!' },

  { id: 'es2-3-05', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'energy types',
    visual: '🔊', prompt: 'Sound energy is created by...', options: ['vibrations', 'heat', 'light', 'gravity'], answer: 'vibrations', explanation: 'Sound is VIBRATION energy — when objects vibrate, they create sound waves that travel to your ears!' },

  { id: 'es2-3-06', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'energy types',
    visual: '⚡', prompt: 'The energy stored in a battery is a form of...', options: ['chemical energy', 'mechanical energy', 'nuclear energy', 'sound energy'], answer: 'chemical energy', explanation: 'Batteries store CHEMICAL energy — when connected, chemical reactions release electrical energy!' },

  { id: 'es2-3-07', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🌴', prompt: 'Rainforests are known for getting LARGE amounts of rainfall and having...', options: ['great biodiversity (many different species)', 'very few animals', 'mostly dry conditions', 'freezing temperatures'], answer: 'great biodiversity (many different species)', explanation: 'Rainforests are the most biodiverse places on Earth — home to more than half of all plant and animal species!' },

  { id: 'es2-3-08', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🌵', prompt: 'Desert ecosystems receive very little rain. Animals and plants that live there have special...', options: ['adaptations to conserve water', 'webbed feet for swimming', 'thick fur for cold weather', 'gills for breathing water'], answer: 'adaptations to conserve water', explanation: 'Desert creatures are amazing! They have special adaptations to survive with very little water!' },

  { id: 'es2-3-09', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🧊', prompt: 'The TUNDRA ecosystem is characterized by...', options: ['permanently frozen ground and very cold temperatures', 'tropical heat and heavy rainfall', 'tall trees and moderate temperatures', 'sandy shores and ocean waves'], answer: 'permanently frozen ground and very cold temperatures', explanation: 'The TUNDRA has permafrost (permanently frozen ground), very cold temps, and few trees — it\'s found near the Arctic!' },

  { id: 'es2-3-10', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'plant reproduction',
    visual: '🌸', prompt: 'Flowers help plants reproduce by attracting insects to carry their...', options: ['pollen', 'chlorophyll', 'roots', 'water'], answer: 'pollen', explanation: 'POLLEN is carried by bees, butterflies, and wind from flower to flower — this is called pollination and leads to seeds!' },

  { id: 'es2-3-11', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'plant reproduction',
    visual: '🌻', prompt: 'After a flower is pollinated, it develops into a...', options: ['fruit containing seeds', 'new leaf', 'root system', 'new stem'], answer: 'fruit containing seeds', explanation: 'After pollination, flowers develop into FRUITS that contain seeds! A tomato, apple, and bean pod are all fruits!' },

  { id: 'es2-3-12', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'plant reproduction',
    visual: '🌬️', prompt: 'Dandelion seeds float on the breeze to spread. This is called seed...', options: ['dispersal by wind', 'dispersal by water', 'dispersal by animals', 'dispersal by gravity'], answer: 'dispersal by wind', explanation: 'Dandelions are amazing! Their seeds float on the wind and travel far away to grow new plants!' },

  { id: 'es2-3-13', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'Newton\'s laws',
    visual: '🏈', prompt: 'Newton\'s First Law says an object at rest stays at rest until a FORCE acts on it. This is called...', options: ['inertia', 'gravity', 'friction', 'momentum'], answer: 'inertia', explanation: 'INERTIA is the tendency of objects to stay put (or keep moving) unless a force changes that. A resting ball won\'t move by itself!' },

  { id: 'es2-3-14', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'Newton\'s laws',
    visual: '🚀', prompt: 'Newton\'s Third Law says: For every action, there is an equal and opposite...', options: ['reaction', 'attraction', 'friction', 'rotation'], answer: 'reaction', explanation: 'Action-REACTION! When a rocket pushes gas downward, the gas pushes the rocket upward — that\'s how rockets fly!' },

  { id: 'es2-3-15', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'energy types',
    visual: '☀️', prompt: 'The sun\'s energy that warms the Earth is primarily...', options: ['radiant (light) energy', 'chemical energy', 'mechanical energy', 'nuclear energy from inside Earth'], answer: 'radiant (light) energy', explanation: 'The Sun sends RADIANT energy (light and heat) across space to warm our planet — it\'s our most important energy source!' },

  { id: 'es2-3-16', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🐺', prompt: 'In a food web, an animal that hunts and eats other animals is called a...', options: ['predator', 'prey', 'producer', 'decomposer'], answer: 'predator', explanation: 'A PREDATOR hunts and eats other animals (prey). A wolf is a predator; a rabbit is its prey!' },

  { id: 'es2-3-17', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'photosynthesis',
    visual: '🌱', prompt: 'Plants are called PRODUCERS because they...', options: ['make their own food using sunlight', 'eat other organisms', 'break down dead material', 'hunt other animals'], answer: 'make their own food using sunlight', explanation: 'Plants PRODUCE their own food through photosynthesis — that\'s why they\'re called producers! They\'re the base of all food chains.' },

  { id: 'es2-3-18', type: 'true-false', level: '3', subject: 'science', language: 'english', topic: 'Newton\'s laws',
    visual: '🏀', prompt: 'When you push a basketball harder, it goes farther. This shows that greater force causes greater acceleration.', options: ['True', 'False'], answer: 'True', explanation: 'This is Newton\'s Second Law! Greater force = greater acceleration. Push harder → ball goes faster and farther!' },

  { id: 'es2-3-19', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'plant reproduction',
    visual: '🍓', prompt: 'Strawberries, apples, and oranges all have seeds inside. These are all...', options: ['fruits', 'vegetables', 'roots', 'stems'], answer: 'fruits', explanation: 'FRUITS are the seed-containing parts of flowering plants — strawberries, apples, and oranges are all fruits!' },

  { id: 'es2-3-20', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🌊', prompt: 'The OCEAN ecosystem covers most of Earth\'s surface. Organisms that float near the surface and form the base of the ocean food chain are called...', options: ['phytoplankton', 'coral', 'jellyfish', 'seaweed'], answer: 'phytoplankton', explanation: 'PHYTOPLANKTON are microscopic plant-like organisms that photosynthesize and feed almost all ocean life!' },

  { id: 'es2-3-21', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'energy types',
    visual: '🌊', prompt: 'The movement of ocean waves carries what type of energy?', options: ['mechanical (kinetic) energy', 'chemical energy', 'nuclear energy', 'electrical energy'], answer: 'mechanical (kinetic) energy', explanation: 'Moving things carry MECHANICAL or KINETIC energy — waves, wind, and moving cars all have kinetic energy!' },

  { id: 'es2-3-22', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'Newton\'s laws',
    visual: '⚽', prompt: 'When a soccer ball rolls across grass and slows down, the force stopping it is...', options: ['friction', 'gravity', 'magnetism', 'inertia'], answer: 'friction', explanation: 'FRICTION is the force between two surfaces rubbing together — grass and ball create friction that slows the ball!' },

  { id: 'es2-3-23', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'ecosystems',
    visual: '🍄', prompt: 'DECOMPOSERS like mushrooms and bacteria help ecosystems by...', options: ['breaking down dead organisms and recycling nutrients', 'hunting and eating other animals', 'making food from sunlight', 'pollinating flowers'], answer: 'breaking down dead organisms and recycling nutrients', explanation: 'DECOMPOSERS are nature\'s recyclers! They break down dead things and return nutrients to the soil!' },

  { id: 'es2-3-24', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'energy types',
    visual: '🔥', prompt: 'When you rub your hands together quickly, they get warm. You converted mechanical energy into...', options: ['heat energy', 'sound energy', 'light energy', 'chemical energy'], answer: 'heat energy', explanation: 'Rubbing creates FRICTION, which converts mechanical energy into HEAT energy. Feel the warmth!' },

  { id: 'es2-3-25', type: 'multiple-choice', level: '3', subject: 'science', language: 'english', topic: 'plant reproduction',
    visual: '🐝', prompt: 'When bees move pollen from one flower to another while gathering nectar, this process is called...', options: ['pollination', 'germination', 'transpiration', 'photosynthesis'], answer: 'pollination', explanation: 'POLLINATION is when pollen is transferred between flowers — bees do this accidentally while collecting nectar. Thank you, bees!' },

  // ============================================================
  // TAG LEVEL (25 questions)
  // ============================================================

  { id: 'es2-t-01', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🔬', prompt: 'Which organelle is called the "powerhouse of the cell" because it produces energy?', options: ['mitochondria', 'nucleus', 'cell membrane', 'vacuole'], answer: 'mitochondria', explanation: 'MITOCHONDRIA convert food (sugar) into energy the cell can use — they\'re the cell\'s power plants!' },

  { id: 'es2-t-02', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🧬', prompt: 'The NUCLEUS of a cell is called the "control center" because it contains...', options: ['DNA with genetic instructions', 'the cell\'s energy supply', 'water and nutrients', 'the cell\'s outer boundary'], answer: 'DNA with genetic instructions', explanation: 'The NUCLEUS holds the cell\'s DNA — the complete instruction manual for how the organism functions!' },

  { id: 'es2-t-03', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🏰', prompt: 'Plant cells have a CELL WALL while animal cells do not. The cell wall provides...', options: ['structure and protection', 'energy production', 'DNA storage', 'waste removal'], answer: 'structure and protection', explanation: 'The CELL WALL is like a sturdy fortress wall — it gives plant cells their rigid shape and protection!' },

  { id: 'es2-t-04', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🌿', prompt: 'Plant cells contain chloroplasts (which contain chlorophyll). What is the main job of chloroplasts?', options: ['Capture sunlight for photosynthesis', 'Digest food for the cell', 'Store water', 'Produce proteins'], answer: 'Capture sunlight for photosynthesis', explanation: 'CHLOROPLASTS are like solar panels — they capture sunlight and use it to make sugar through photosynthesis!' },

  { id: 'es2-t-05', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'DNA basics',
    visual: '🧬', prompt: 'DNA contains instructions for building and running living things. DNA stands for...', options: ['Deoxyribonucleic Acid', 'Deoxyribose Nucleic Amount', 'Digital Nuclear Acid', 'Dynamic Nucleic Arrangement'], answer: 'Deoxyribonucleic Acid', explanation: 'DNA = Deoxyribonucleic Acid — quite a mouthful! It\'s the molecule that carries all the genetic information of every living thing!' },

  { id: 'es2-t-06', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'DNA basics',
    visual: '🔀', prompt: 'DNA is shaped like a twisted ladder. This shape is called a...', options: ['double helix', 'triple helix', 'single strand', 'circular loop'], answer: 'double helix', explanation: 'DNA\'s famous DOUBLE HELIX looks like a twisted rope ladder — discovered by Watson, Crick, and Franklin in 1953!' },

  { id: 'es2-t-07', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'DNA basics',
    visual: '🧬', prompt: 'The units of DNA that carry instructions for specific traits (like eye color) are called...', options: ['genes', 'cells', 'atoms', 'proteins'], answer: 'genes', explanation: 'GENES are sections of DNA that code for specific traits — you have about 20,000-25,000 genes!' },

  { id: 'es2-t-08', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'chemical vs physical change',
    visual: '🧪', prompt: 'When you tear a piece of paper, this is a PHYSICAL change because...', options: ['the paper is still paper, just in smaller pieces', 'it becomes a completely new substance', 'new atoms are created', 'energy is released as light'], answer: 'the paper is still paper, just in smaller pieces', explanation: 'PHYSICAL changes don\'t change what the substance IS — torn paper is still paper! No new substance forms.' },

  { id: 'es2-t-09', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'chemical vs physical change',
    visual: '🔥', prompt: 'When wood BURNS and becomes ash and smoke, this is a CHEMICAL change because...', options: ['new substances (ash, carbon dioxide) are formed', 'the wood just looks different', 'the wood gets smaller', 'it can be reversed easily'], answer: 'new substances (ash, carbon dioxide) are formed', explanation: 'CHEMICAL changes make NEW substances! Burning wood creates ash, smoke, and gases — you can\'t un-burn wood!' },

  { id: 'es2-t-10', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'chemical vs physical change',
    visual: '🍳', prompt: 'Cooking an egg is a CHEMICAL change. How do you know?', options: ['The egg cannot be "un-cooked" — a new substance forms', 'The egg just gets warmer', 'The egg stays the same substance', 'The change is easily reversed'], answer: 'The egg cannot be "un-cooked" — a new substance forms', explanation: 'When you cook an egg, the proteins change permanently into a new substance — you can\'t un-cook it! Chemical change!' },

  { id: 'es2-t-11', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'atomic structure',
    visual: '⚛️', prompt: 'Everything in the universe is made of tiny particles called...', options: ['atoms', 'cells', 'molecules', 'electrons'], answer: 'atoms', explanation: 'ATOMS are the fundamental building blocks of all matter — they\'re incredibly tiny, but make up everything!' },

  { id: 'es2-t-12', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'atomic structure',
    visual: '⚛️', prompt: 'An atom has a central nucleus made of protons and neutrons. What particles orbit around the nucleus?', options: ['electrons', 'photons', 'quarks', 'bosons'], answer: 'electrons', explanation: 'ELECTRONS are tiny negatively charged particles that orbit the nucleus like tiny planets around a sun!' },

  { id: 'es2-t-13', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'atomic structure',
    visual: '⚡', prompt: 'Protons have a POSITIVE charge. Electrons have a NEGATIVE charge. What charge do neutrons have?', options: ['no charge (neutral)', 'positive charge', 'negative charge', 'both positive and negative'], answer: 'no charge (neutral)', explanation: 'NEUTRONS are neutral — no electric charge! Proton = +, Electron = -, Neutron = 0 (neutral)!' },

  { id: 'es2-t-14', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'scientific variables',
    visual: '🔬', prompt: 'In an experiment, the variable you CHANGE ON PURPOSE is called the...', options: ['independent variable', 'dependent variable', 'control variable', 'constant'], answer: 'independent variable', explanation: 'The INDEPENDENT variable is what YOU change in an experiment — it\'s the "cause" in cause and effect!' },

  { id: 'es2-t-15', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'scientific variables',
    visual: '📊', prompt: 'In an experiment, the variable you MEASURE (the result) is called the...', options: ['dependent variable', 'independent variable', 'control group', 'hypothesis'], answer: 'dependent variable', explanation: 'The DEPENDENT variable depends on what you changed — it\'s the "effect" you measure!' },

  { id: 'es2-t-16', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'scientific variables',
    visual: '⚖️', prompt: 'A CONTROL GROUP in an experiment is important because it...', options: ['provides a baseline to compare results to', 'changes the most variables', 'gets the best treatment', 'always shows the best results'], answer: 'provides a baseline to compare results to', explanation: 'The CONTROL GROUP is kept unchanged — it\'s your comparison point to see what difference your variable made!' },

  { id: 'es2-t-17', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🦠', prompt: 'The CELL MEMBRANE surrounds all cells. Its job is to...', options: ['control what enters and exits the cell', 'produce energy for the cell', 'store the cell\'s DNA', 'make proteins for the cell'], answer: 'control what enters and exits the cell', explanation: 'The CELL MEMBRANE is like a selective doorway — it lets needed materials in and waste products out!' },

  { id: 'es2-t-18', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'chemical vs physical change',
    visual: '💧', prompt: 'Water boiling and turning to steam is a PHYSICAL change because...', options: ['it\'s still water — just in gas form', 'new substances are created', 'it cannot be reversed', 'atoms are destroyed'], answer: 'it\'s still water — just in gas form', explanation: 'Boiling is a physical change! Steam is still water (H₂O) — just in gas form. Cool it down and it\'s water again!' },

  { id: 'es2-t-19', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'atomic structure',
    visual: '🔬', prompt: 'Elements on the Periodic Table are organized by their...', options: ['number of protons (atomic number)', 'number of electrons', 'size of the atom', 'color of the element'], answer: 'number of protons (atomic number)', explanation: 'Each element has a unique number of PROTONS (its atomic number) — hydrogen has 1, carbon has 6, gold has 79!' },

  { id: 'es2-t-20', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'scientific variables',
    visual: '🌱', prompt: 'A scientist tests if sunlight affects plant growth. Plants in the sun and plants in the dark both get the same water and soil. What are the CONSTANTS (things kept the same)?', options: ['amount of water and type of soil', 'amount of sunlight', 'how tall the plants grow', 'the number of leaves'], answer: 'amount of water and type of soil', explanation: 'CONSTANTS are everything kept the same so only ONE variable changes. Water and soil are constants here!' },

  { id: 'es2-t-21', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'DNA basics',
    visual: '🧬', prompt: 'Where is DNA found in eukaryotic cells (cells with a nucleus)?', options: ['in the nucleus', 'in the mitochondria only', 'throughout the cell freely', 'in the cell membrane'], answer: 'in the nucleus', explanation: 'DNA is packaged and stored in the NUCLEUS — the cell\'s control center and library of genetic information!' },

  { id: 'es2-t-22', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '💧', prompt: 'The VACUOLE in a plant cell is a large storage space that mainly stores...', options: ['water and nutrients', 'DNA', 'energy', 'proteins'], answer: 'water and nutrients', explanation: 'Plant cell vacuoles are like giant storage tanks — they store water and help the plant stay firm (turgor pressure)!' },

  { id: 'es2-t-23', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'scientific variables',
    visual: '📋', prompt: 'Why do scientists repeat experiments multiple times?', options: ['To make sure the results are reliable and not due to chance', 'To fill more pages in their notebook', 'Because the first result is always wrong', 'To find different answers each time'], answer: 'To make sure the results are reliable and not due to chance', explanation: 'REPEATING experiments confirms that results are reliable — one result might be luck, but consistent results are science!' },

  { id: 'es2-t-24', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'chemical vs physical change',
    visual: '🧲', prompt: 'Mixing iron filings and sand is a physical change because you can separate them with a magnet. Rust forming on iron is a chemical change. What makes these different?', options: ['Rust creates a new substance (iron oxide); mixing doesn\'t', 'Mixing is permanent; rusting is not', 'Only chemicals can rust', 'Magnets cause chemical changes'], answer: 'Rust creates a new substance (iron oxide); mixing doesn\'t', explanation: 'KEY difference: Physical changes are reversible and don\'t make new substances. Rust (iron oxide) is a NEW substance!' },

  { id: 'es2-t-25', type: 'multiple-choice', level: 'TAG', subject: 'science', language: 'english', topic: 'cells',
    visual: '🔬', prompt: 'Bacteria are PROKARYOTIC cells, which means they...', options: ['do not have a membrane-bound nucleus', 'have many organelles', 'are all harmful to humans', 'are the largest type of cell'], answer: 'do not have a membrane-bound nucleus', explanation: 'Prokaryotic cells (like bacteria) lack a true nucleus — their DNA floats freely in the cell. Eukaryotic cells (like yours!) have a nucleus!' },

]
