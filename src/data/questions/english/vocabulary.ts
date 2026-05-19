import type { Question } from '../../../types'

export const vocabularyQuestions: Question[] = [

  // ============================================================
  // === KINDERGARTEN (25 questions) — voc-k-01 to voc-k-25 ===
  // ============================================================

  { id: 'voc-k-01', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-sight-meaning',
    visual: '🐘', prompt: 'The elephant is BIG. What does BIG mean?', options: ['very large', 'very tiny', 'very fast', 'very loud'], answer: 'very large',
    explanation: 'BIG means very large! An elephant is one of the biggest animals on Earth!' },

  { id: 'voc-k-02', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-sight-meaning',
    visual: '🐜', prompt: 'The ant is LITTLE. What does LITTLE mean?', options: ['very small', 'very big', 'very loud', 'very strong'], answer: 'very small',
    explanation: 'LITTLE means very small! Ants are little, but they are super strong!' },

  { id: 'voc-k-03', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-sight-meaning',
    visual: '🐆', prompt: 'The cheetah is FAST. What is the OPPOSITE of fast?', options: ['slow', 'big', 'quiet', 'cold'], answer: 'slow',
    explanation: 'FAST and SLOW are opposites! A cheetah is the fastest land animal. A turtle is very slow!' },

  { id: 'voc-k-04', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-sight-meaning',
    visual: '🔥', prompt: 'The stove is HOT. What is the OPPOSITE of hot?', options: ['cold', 'wet', 'heavy', 'tall'], answer: 'cold',
    explanation: 'HOT and COLD are opposites! A stove is hot. Ice is cold!' },

  { id: 'voc-k-05', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-colors',
    visual: '🌹', prompt: 'This rose is a deep, dark red color. That color has a special name — CRIMSON. What is crimson?', options: ['a shade of red', 'a shade of blue', 'a shade of green', 'a shade of yellow'], answer: 'a shade of red',
    explanation: 'CRIMSON is a beautiful, deep red color! Roses are often crimson. It\'s a fancy way to say "red"!' },

  { id: 'voc-k-06', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-colors',
    visual: '🌊', prompt: 'The ocean water looks like a special color called AZURE. Azure is a shade of...', options: ['blue', 'green', 'purple', 'white'], answer: 'blue',
    explanation: 'AZURE is a bright, sky-blue color! The ocean and the sky are often azure. Such a pretty word!' },

  { id: 'voc-k-07', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '😊', prompt: 'Avery got a gold star! She feels HAPPY. Which face shows HAPPY?', options: ['😊 smiling', '😢 crying', '😠 frowning', '😴 sleeping'], answer: '😊 smiling',
    explanation: 'HAPPY means you feel good inside and want to smile! Getting a gold star is a great reason to be happy!' },

  { id: 'voc-k-08', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '😢', prompt: 'Sam dropped his ice cream. He feels SAD. What does SAD mean?', options: ['unhappy, like you want to cry', 'very excited and joyful', 'very angry and upset', 'silly and funny'], answer: 'unhappy, like you want to cry',
    explanation: 'SAD means you feel unhappy inside. It\'s okay to feel sad sometimes. Things usually get better!' },

  { id: 'voc-k-09', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '🎉', prompt: 'It\'s Avery\'s birthday! She is jumping up and down. She feels EXCITED. What does EXCITED mean?', options: ['very happy and full of energy about something coming', 'very tired and sleepy', 'very sad and quiet', 'bored with nothing to do'], answer: 'very happy and full of energy about something coming',
    explanation: 'EXCITED means you feel super happy and energetic about something! Birthdays, vacations, and surprises make people excited!' },

  { id: 'voc-k-10', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '😨', prompt: 'A loud thunder sound woke Lily up. Her heart was pounding. She felt SCARED. What does SCARED mean?', options: ['afraid, like something might hurt you', 'happy and excited', 'bored and tired', 'proud and confident'], answer: 'afraid, like something might hurt you',
    explanation: 'SCARED means you feel afraid! Thunder can be scary. It helps to take deep breaths and remember you are safe!' },

  { id: 'voc-k-11', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '🥳', prompt: 'Mia helped carry the groceries all by herself! She felt PROUD. What does PROUD mean?', options: ['feeling great about something good you did', 'feeling tired after hard work', 'feeling scared of something', 'feeling angry at someone'], answer: 'feeling great about something good you did',
    explanation: 'PROUD means you feel really good about yourself for doing something well! You should feel proud when you work hard!' },

  { id: 'voc-k-12', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-animals',
    visual: '🦁', prompt: 'A lion hunts and eats other animals for food. The lion is called a PREDATOR. What is a predator?', options: ['an animal that hunts other animals for food', 'an animal that only eats plants', 'an animal that lives in water', 'an animal that sleeps all winter'], answer: 'an animal that hunts other animals for food',
    explanation: 'A PREDATOR is an animal that catches and eats other animals! Lions, wolves, and sharks are predators!' },

  { id: 'voc-k-13', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-animals',
    visual: '🐰', prompt: 'A rabbit is caught and eaten by a fox. The rabbit is called the PREY. What is prey?', options: ['an animal that gets hunted by another animal', 'an animal that does the hunting', 'an animal that lives in trees', 'an animal that can fly'], answer: 'an animal that gets hunted by another animal',
    explanation: 'PREY is the animal that gets hunted! Rabbits, mice, and deer are prey for bigger animals. It\'s nature\'s food chain!' },

  { id: 'voc-k-14', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-animals',
    visual: '🌿', prompt: 'A frog lives near a pond with water, plants, and bugs to eat. This special place where an animal lives is called its HABITAT. What is a habitat?', options: ['the natural home where an animal lives', 'the food an animal eats', 'the color of an animal\'s skin', 'the sound an animal makes'], answer: 'the natural home where an animal lives',
    explanation: 'A HABITAT is the natural home of an animal! A frog\'s habitat is a pond. A polar bear\'s habitat is the Arctic. Every animal has its own special habitat!' },

  { id: 'voc-k-15', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-actions',
    visual: '🏃', prompt: 'Ella moves her legs as FAST as she can to get to the finish line first. What is another word for running very fast? She is going to SPRINT!', options: ['sprint (run super fast)', 'tiptoe (move very quietly)', 'stomp (walk very heavily)', 'skip (hop with a step)'], answer: 'sprint (run super fast)',
    explanation: 'SPRINT means to run as fast as you can! Athletes sprint at the end of a race. Cheetahs sprint to catch their prey!' },

  { id: 'voc-k-16', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-actions',
    visual: '🤫', prompt: 'Tom is in the library. He uses a very soft, quiet voice. He is speaking in a WHISPER. What is a whisper?', options: ['a very quiet, soft voice', 'a very loud voice', 'a singing voice', 'a silly funny voice'], answer: 'a very quiet, soft voice',
    explanation: 'A WHISPER is a very quiet, breathy voice! You whisper so you don\'t bother others. The opposite of a whisper is a SHOUT!' },

  { id: 'voc-k-17', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-opposites',
    visual: '🪶🪨', prompt: 'A feather is LIGHT. A rock is HEAVY. Which one is light?', options: ['feather', 'rock', 'elephant', 'truck'], answer: 'feather',
    explanation: 'LIGHT means it doesn\'t weigh much! HEAVY means it weighs a lot! A feather is light, a rock is heavy — they are opposites!' },

  { id: 'voc-k-18', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-opposites',
    visual: '🦒🐛', prompt: 'A giraffe is TALL. A caterpillar is SHORT. If something is TALL, it is...', options: ['high up, with a lot of height', 'very tiny and small', 'very fast and quick', 'very soft and fluffy'], answer: 'high up, with a lot of height',
    explanation: 'TALL means you stretch way up high! A giraffe is tall — its neck reaches the treetops! SHORT means you don\'t go up very high!' },

  { id: 'voc-k-19', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-opposites',
    visual: '🌵🧸', prompt: 'A cactus feels ROUGH and prickly. A teddy bear feels SMOOTH and soft. What does ROUGH mean?', options: ['bumpy and uneven, not smooth', 'very soft and silky', 'very wet and slippery', 'very cold and icy'], answer: 'bumpy and uneven, not smooth',
    explanation: 'ROUGH means bumpy and not smooth to touch! A cactus is rough. Sandpaper is rough. A teddy bear is the opposite — SMOOTH and soft!' },

  { id: 'voc-k-20', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '😮', prompt: 'Avery opened a gift and found a puppy inside! She gasped and her eyes went wide. She felt SURPRISED! What does surprised mean?', options: ['you didn\'t expect something and it amazes you', 'you knew something was coming', 'you feel tired and bored', 'you are angry about something'], answer: 'you didn\'t expect something and it amazes you',
    explanation: 'SURPRISED means something unexpected happens and it amazes you! A sudden gift, a jumping frog, or a magic trick can all be surprising!' },

  { id: 'voc-k-21', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-emotions',
    visual: '😠', prompt: 'Jake took Lily\'s toy without asking. Lily felt ANGRY. What does ANGRY mean?', options: ['upset and mad when something is unfair', 'very happy and cheerful', 'scared of something', 'sleepy and tired'], answer: 'upset and mad when something is unfair',
    explanation: 'ANGRY means you feel upset or mad, often when something feels unfair! It\'s okay to feel angry — it\'s important to use kind words even when we\'re mad!' },

  { id: 'voc-k-22', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-sight-meaning',
    visual: '❄️☀️', prompt: 'Ice is COLD. The sun is HOT. Which word tells us about temperature that feels like ice?', options: ['cold', 'hot', 'fast', 'loud'], answer: 'cold',
    explanation: 'COLD means very low temperature — like ice or snow! HOT means very high temperature — like the sun or a fire!' },

  { id: 'voc-k-23', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-colors',
    visual: '🍇', prompt: 'Grapes can be a deep purple color called VIOLET. Violet is a shade of...', options: ['purple', 'red', 'blue', 'green'], answer: 'purple',
    explanation: 'VIOLET is a beautiful deep purple color! Grapes and some flowers are violet. Violet is also one of the colors of the rainbow!' },

  { id: 'voc-k-24', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-actions',
    visual: '👣', prompt: 'Maya is trying not to wake the baby. She moves on her tiptoes, stepping very quietly. This is called TIPTOEING. What does tiptoeing mean?', options: ['walking very quietly on your toes', 'running as fast as you can', 'jumping over something', 'dragging your feet slowly'], answer: 'walking very quietly on your toes',
    explanation: 'TIPTOEING means walking super quietly on the tips of your toes! You tiptoe when you don\'t want to make noise — like when someone is sleeping!' },

  { id: 'voc-k-25', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'english', topic: 'vocabulary-opposites',
    visual: '🌞🌑', prompt: 'Daytime is BRIGHT. Nighttime is DARK. If a room has lots of light, it is...', options: ['bright', 'dark', 'cold', 'quiet'], answer: 'bright',
    explanation: 'BRIGHT means full of light! The sun makes everything bright. DARK means no light. These are opposites!' },


  // ==========================================================
  // === 1ST GRADE (25 questions) — voc-1-01 to voc-1-25 ===
  // ==========================================================

  { id: 'voc-1-01', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-synonyms',
    visual: '😄', prompt: 'HAPPY, JOYFUL, and CHEERFUL all mean almost the same thing. Words that mean the same thing are called SYNONYMS. Which word is a synonym for HAPPY?', options: ['cheerful', 'angry', 'scared', 'bored'], answer: 'cheerful',
    explanation: 'SYNONYMS are words with almost the same meaning! Happy, joyful, cheerful — they all mean feeling good! The more synonyms you know, the better your writing!' },

  { id: 'voc-1-02', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-synonyms',
    visual: '🏎️', prompt: 'FAST, QUICK, and RAPID are all synonyms. Which one means "moving with great speed"?', options: ['all three mean that!', 'only fast means that', 'only quick means that', 'none of them mean that'], answer: 'all three mean that!',
    explanation: 'FAST, QUICK, and RAPID are all synonyms — they ALL mean moving with great speed! Isn\'t it cool that English has so many words for the same thing?' },

  { id: 'voc-1-03', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-synonyms',
    visual: '🌍', prompt: 'BIG, LARGE, and ENORMOUS are synonyms, but ENORMOUS is the biggest of all! If something is ENORMOUS, it is...', options: ['extremely, hugely big', 'just a little big', 'medium-sized', 'very tiny'], answer: 'extremely, hugely big',
    explanation: 'ENORMOUS means more than just big — it means HUGELY, MASSIVELY big! A blue whale is enormous. The Grand Canyon is enormous!' },

  { id: 'voc-1-04', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-antonyms',
    visual: '🏰⚔️', prompt: 'BRAVE means you face scary things without giving up. The ANTONYM (opposite) of brave is COWARDLY. What does cowardly mean?', options: ['running away from challenges because of fear', 'facing scary things with courage', 'being kind to everyone', 'being very smart and clever'], answer: 'running away from challenges because of fear',
    explanation: 'ANTONYMS are opposites! BRAVE and COWARDLY are antonyms. Being brave doesn\'t mean you\'re not scared — it means you try even when you ARE scared!' },

  { id: 'voc-1-05', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-antonyms',
    visual: '🤲💎', prompt: 'GENEROUS means you like to share and give to others. What is the antonym (opposite) of generous?', options: ['selfish (keeping everything for yourself)', 'kind (being nice to people)', 'brave (facing fears)', 'cheerful (being happy)'], answer: 'selfish (keeping everything for yourself)',
    explanation: 'GENEROUS and SELFISH are antonyms! Generous people love to share. Selfish people want to keep things for themselves. Being generous makes others feel loved!' },

  { id: 'voc-1-06', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-antonyms',
    visual: '🏛️🆕', prompt: 'ANCIENT means very, very old — like thousands of years old! What is the antonym (opposite) of ancient?', options: ['modern (new and current)', 'enormous (very big)', 'gentle (soft and kind)', 'rapid (very fast)'], answer: 'modern (new and current)',
    explanation: 'ANCIENT and MODERN are antonyms! Ancient things are thousands of years old, like Egyptian pyramids. Modern things are new, like smartphones!' },

  { id: 'voc-1-07', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-compound',
    visual: '🦋', prompt: 'BUTTERFLY is a compound word. Compound words are made of two smaller words put together. What two words make up BUTTERFLY?', options: ['butter + fly', 'butt + erfly', 'but + terfly', 'b + utterfly'], answer: 'butter + fly',
    explanation: 'BUTTERFLY = BUTTER + FLY! Even though butter and fly seem unrelated, together they name the beautiful insect! That\'s what makes compound words so fun!' },

  { id: 'voc-1-08', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-compound',
    visual: '🌻', prompt: 'SUNFLOWER is a compound word. What two words make SUNFLOWER?', options: ['sun + flower', 'sunf + lower', 'sun + flow + er', 'sunny + flower'], answer: 'sun + flower',
    explanation: 'SUNFLOWER = SUN + FLOWER! Sunflowers are named that because they turn to face the sun all day. They literally follow the sun!' },

  { id: 'voc-1-09', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-compound',
    visual: '🌧️🧥', prompt: 'RAINCOAT is a compound word — a coat you wear in the RAIN! What two words make RAINCOAT?', options: ['rain + coat', 'rai + ncoat', 'rainco + at', 'r + aincoat'], answer: 'rain + coat',
    explanation: 'RAINCOAT = RAIN + COAT! Compound words often describe exactly what they are — a coat for rain! Can you think of other compound words?' },

  { id: 'voc-1-10', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-multiple-meaning',
    visual: '🌳🐕', prompt: 'The word BARK has two very different meanings! Which two things can BARK mean?', options: ['the outside of a tree, AND the sound a dog makes', 'a type of boat AND a type of hat', 'a river AND a kind of fish', 'a color AND a food'], answer: 'the outside of a tree, AND the sound a dog makes',
    explanation: 'BARK is a multiple-meaning word! Tree bark is the rough outside layer. Dog bark is the "woof" sound they make. Same spelling, completely different meanings!' },

  { id: 'voc-1-11', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-multiple-meaning',
    visual: '🦇⚾', prompt: '"She swung the BAT and hit the ball." In this sentence, what does BAT mean?', options: ['a piece of sports equipment for hitting', 'a flying nocturnal animal', 'a type of hat', 'a kind of jump'], answer: 'a piece of sports equipment for hitting',
    explanation: 'Context clues help! "Swung" and "hit the ball" tell us this BAT is a baseball bat — not the flying animal! Same word, different meanings!' },

  { id: 'voc-1-12', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-multiple-meaning',
    visual: '💡🪶', prompt: 'LIGHT can mean two different things. Which TWO meanings does LIGHT have?', options: ['brightness you can see by, AND not weighing much', 'a color AND a food', 'a sound AND a texture', 'a size AND a temperature'], answer: 'brightness you can see by, AND not weighing much',
    explanation: 'LIGHT has multiple meanings! "Turn on the light" = brightness. "This bag is light" = not heavy. Words can be sneaky and mean different things!' },

  { id: 'voc-1-13', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-adjectives',
    visual: '🍰', prompt: 'The chocolate cake was so DELICIOUS that everyone wanted more! DELICIOUS means...', options: ['tasting extremely yummy and wonderful', 'looking very pretty', 'smelling very bad', 'feeling very soft'], answer: 'tasting extremely yummy and wonderful',
    explanation: 'DELICIOUS means it tastes amazingly yummy! You can also say something smells delicious. It\'s a great word when "yummy" just isn\'t fancy enough!' },

  { id: 'voc-1-14', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-adjectives',
    visual: '🔮', prompt: 'The magician performed MAGNIFICENT tricks that left everyone amazed! MAGNIFICENT means...', options: ['impressively wonderful and amazing', 'very small and tiny', 'quite boring and plain', 'slightly broken'], answer: 'impressively wonderful and amazing',
    explanation: 'MAGNIFICENT means spectacularly wonderful! The Grand Canyon is magnificent. A shooting star is magnificent. Use it when something is truly breathtaking!' },

  { id: 'voc-1-15', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-adjectives',
    visual: '🦜', prompt: 'The PECULIAR bird had pink polka dots and sang backwards! PECULIAR means...', options: ['strange, unusual, and a little odd', 'beautiful and graceful', 'fast and energetic', 'quiet and shy'], answer: 'strange, unusual, and a little odd',
    explanation: 'PECULIAR means strange and unusual in an interesting way! You might have peculiar dreams, see a peculiar cloud, or meet a peculiar character in a book!' },

  { id: 'voc-1-16', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-adjectives',
    visual: '🐑', prompt: 'The GENTLE lamb let the children pet it softly. GENTLE means...', options: ['soft, calm, and careful — not rough', 'very loud and energetic', 'huge and powerful', 'fast and restless'], answer: 'soft, calm, and careful — not rough',
    explanation: 'GENTLE means soft, kind, and careful! You\'re gentle when you pet an animal carefully. Doctors need to be gentle. The opposite is rough!' },

  { id: 'voc-1-17', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-time-words',
    visual: '📋', prompt: 'We got dressed, THEN we ate breakfast. The word THEN tells us...', options: ['what happened next, after something else', 'what happened first', 'what happened at the end', 'what happened at the same time'], answer: 'what happened next, after something else',
    explanation: 'THEN is a time word that tells you what came NEXT! Story order: First we got dressed, THEN we ate — makes it clear what came first and what came after!' },

  { id: 'voc-1-18', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-time-words',
    visual: '🏁', prompt: 'FINALLY, after all the hard work, the puzzle was done! What does FINALLY mean?', options: ['at the very end, after a long time', 'at the very beginning', 'in the middle of something', 'right away, quickly'], answer: 'at the very end, after a long time',
    explanation: 'FINALLY means at the very end, after waiting or working hard! "First...Next...Then...FINALLY" are the perfect sequence words for telling a story!' },

  { id: 'voc-1-19', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-time-words',
    visual: '🌅', prompt: 'BEFORE breakfast, Mia brushed her teeth. When did Mia brush her teeth?', options: ['earlier, before eating breakfast', 'after she finished eating', 'at the same time as eating', 'in the middle of eating'], answer: 'earlier, before eating breakfast',
    explanation: 'BEFORE means something happened earlier, at an earlier time! "Before breakfast" = earlier than breakfast. AFTER means later. They\'re opposites!' },

  { id: 'voc-1-20', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-synonyms',
    visual: '😔', prompt: 'SAD, UNHAPPY, and GLOOMY are all synonyms. GLOOMY is the strongest feeling. A GLOOMY day feels...', options: ['dark, sad, and without much hope or brightness', 'bright and cheerful', 'exciting and energetic', 'calm and peaceful'], answer: 'dark, sad, and without much hope or brightness',
    explanation: 'GLOOMY means deeply sad and dark, like a cloudy, gray day that feels heavy. A gloomy person has lost their spark. It\'s more intense than just "sad"!' },

  { id: 'voc-1-21', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-compound',
    visual: '⭐🐟', prompt: 'STARFISH is a compound word. What two words make it?', options: ['star + fish', 'sta + rfish', 'starf + ish', 'star + f + ish'], answer: 'star + fish',
    explanation: 'STARFISH = STAR + FISH! Starfish live in the ocean and are shaped like stars. They\'re actually not fish at all — they\'re called sea stars by scientists!' },

  { id: 'voc-1-22', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-time-words',
    visual: '1️⃣', prompt: 'FIRST, we wash our hands. Then we eat. What does FIRST mean?', options: ['happening before everything else, at the beginning', 'happening at the end', 'happening in the middle', 'happening at any time'], answer: 'happening before everything else, at the beginning',
    explanation: 'FIRST means it happens before everything else — it\'s the beginning! The order is: FIRST → NEXT → THEN → FINALLY. Knowing this order helps you tell great stories!' },

  { id: 'voc-1-23', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-adjectives',
    visual: '🦊', prompt: 'The fox was CUNNING — it tricked all the other animals! CUNNING means...', options: ['clever and sneaky, good at tricking others', 'very big and powerful', 'shy and quiet', 'slow and sleepy'], answer: 'clever and sneaky, good at tricking others',
    explanation: 'CUNNING means cleverly sneaky! Foxes are famous for being cunning in fables and stories. A cunning character always has a clever plan up their sleeve!' },

  { id: 'voc-1-24', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-antonyms',
    visual: '🌟😴', prompt: 'ENERGETIC means full of energy and movement. What is the antonym of energetic?', options: ['sluggish (slow and without energy)', 'brave (facing fears)', 'enormous (very big)', 'rapid (very fast)'], answer: 'sluggish (slow and without energy)',
    explanation: 'ENERGETIC and SLUGGISH are antonyms! When you\'re energetic, you\'re full of zip and bounce. When you\'re sluggish, you move slowly like you have no fuel!' },

  { id: 'voc-1-25', type: 'multiple-choice', level: '1', subject: 'reading', language: 'english', topic: 'vocabulary-time-words',
    visual: '➡️', prompt: 'NEXT, we put on our shoes. What does NEXT mean?', options: ['coming right after what just happened', 'what happened first', 'what happened at the very end', 'something that happens sometimes'], answer: 'coming right after what just happened',
    explanation: 'NEXT means it comes right after! First we put on socks, NEXT we put on shoes. NEXT helps you know what order things happen in a story or set of directions!' },


  // ==========================================================
  // === 2ND GRADE (25 questions) — voc-2-01 to voc-2-25 ===
  // ==========================================================

  { id: 'voc-2-01', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-prefixes',
    visual: '🔄', prompt: 'The prefix UN- means NOT. If HAPPY means feeling good, what does UNHAPPY mean?', options: ['not happy, feeling sad', 'very happy', 'sort of happy', 'happy again'], answer: 'not happy, feeling sad',
    explanation: 'UN- means NOT! UNhappy = NOT happy. UNtied = NOT tied. UNfair = NOT fair. When you see UN- at the start, think "not"!' },

  { id: 'voc-2-02', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-prefixes',
    visual: '🔁', prompt: 'The prefix RE- means AGAIN. If you WRITE something, what does REWRITE mean?', options: ['to write it again', 'to not write it', 'to write it before', 'to write it wrong'], answer: 'to write it again',
    explanation: 'RE- means AGAIN! REwrite = write AGAIN. REdo = do AGAIN. REplay = play AGAIN. RE- is one of the most useful prefixes to know!' },

  { id: 'voc-2-03', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-prefixes',
    visual: '⏰', prompt: 'The prefix PRE- means BEFORE. If a VIEW is what you see, what is a PREVIEW?', options: ['a look at something before it comes out', 'a look at something that already happened', 'a look at something small', 'a look at something wrong'], answer: 'a look at something before it comes out',
    explanation: 'PRE- means BEFORE! PREview = look BEFORE it\'s released. PREschool = school BEFORE kindergarten. PREpare = get ready BEFORE something happens!' },

  { id: 'voc-2-04', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-prefixes',
    visual: '❌', prompt: 'The prefix MIS- means WRONG or BAD. If you SPELL a word wrong, you MISSPELL it. What does MISUNDERSTAND mean?', options: ['to understand something the wrong way', 'to understand something perfectly', 'to not want to understand', 'to understand again'], answer: 'to understand something the wrong way',
    explanation: 'MIS- means WRONG or BAD! MISunderstand = understand the WRONG way. MISbehave = behave BADLY. MISlead = lead the WRONG direction!' },

  { id: 'voc-2-05', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-suffixes',
    visual: '☀️', prompt: 'The suffix -FUL means FULL OF. What does CHEERFUL mean?', options: ['full of cheer and happiness', 'without any happiness', 'happening again and again', 'before the happiness'], answer: 'full of cheer and happiness',
    explanation: '-FUL means full of! Cheerful = full of cheer. Colorful = full of color. Wonderful = full of wonder. Powerful = full of power. Adding -ful gives a boost of meaning!' },

  { id: 'voc-2-06', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-suffixes',
    visual: '🔦', prompt: 'The suffix -LESS means WITHOUT. What does HELPLESS mean?', options: ['without any help, unable to do anything', 'full of help', 'helping again', 'helping a little'], answer: 'without any help, unable to do anything',
    explanation: '-LESS means without! Helpless = without help. Fearless = without fear (brave!). Endless = without an end. Hopeless = without hope. -less removes the thing!' },

  { id: 'voc-2-07', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-suffixes',
    visual: '🏋️', prompt: 'We use -ER and -EST to compare. STRONG, STRONGER, STRONGEST. If three people are being compared, who wins the comparison with -EST?', options: ['the one with the most strength of all', 'the one with a little more strength', 'the one with regular strength', 'none of them'], answer: 'the one with the most strength of all',
    explanation: '-ER compares TWO things: "she is stronger than him." -EST compares THREE or more: "she is the STRONGEST of all!" EST = the absolute most!' },

  { id: 'voc-2-08', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-suffixes',
    visual: '🎭', prompt: 'The suffix -TION turns a verb into a noun. If you CREATE something, the result is called a CREATION. What does the -TION ending do?', options: ['turns an action word into a thing/noun', 'makes a word mean its opposite', 'makes a word mean "again"', 'makes a word mean "full of"'], answer: 'turns an action word into a thing/noun',
    explanation: '-TION turns action words into things! CREATE → CREATION. CELEBRATE → CELEBRATION. EDUCATE → EDUCATION. It\'s like magic — the action becomes a noun!' },

  { id: 'voc-2-09', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-context-clues',
    visual: '🔍', prompt: '"The ravenous wolf gobbled up every bit of food in seconds — it had not eaten in three days." What does RAVENOUS mean?', options: ['extremely hungry', 'very dangerous', 'very tired', 'very sneaky'], answer: 'extremely hungry',
    explanation: 'Context clue! "Gobbled up every bit" and "hadn\'t eaten in three days" tell us RAVENOUS means extremely hungry. Use the clues around a word to figure it out!' },

  { id: 'voc-2-10', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-context-clues',
    visual: '📖', prompt: '"The ancient manuscript was so fragile that the librarian wore gloves so it wouldn\'t crumble." What does FRAGILE mean?', options: ['easily broken and very delicate', 'very old and dusty', 'very large and heavy', 'colorful and beautiful'], answer: 'easily broken and very delicate',
    explanation: 'Context clue! Wearing gloves to prevent crumbling tells us FRAGILE means easily broken! You can figure out new words by looking at the clues around them!' },

  { id: 'voc-2-11', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-connotation',
    visual: '🧍', prompt: 'THIN and SKINNY mean about the same thing, but SKINNY can feel rude while THIN is neutral. This difference in feeling is called CONNOTATION. Which word has a more positive or neutral connotation?', options: ['thin', 'skinny', 'both are exactly the same', 'neither matters'], answer: 'thin',
    explanation: 'CONNOTATION is the feeling or emotion a word carries! Thin and skinny both mean "not much body weight," but thin sounds kinder. Word choice matters!' },

  { id: 'voc-2-12', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-connotation',
    visual: '💪', prompt: 'ASSERTIVE means you speak up for yourself firmly and clearly. BOSSY means you try to control everyone. Both involve telling others what to do, but which has a more POSITIVE connotation?', options: ['assertive', 'bossy', 'both are negative', 'both are positive'], answer: 'assertive',
    explanation: 'ASSERTIVE is positive — it means confident and clear! BOSSY is negative — it means controlling and pushes people around. Same basic idea, very different feelings!' },

  { id: 'voc-2-13', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '🔬', prompt: 'Your teacher asks you to ANALYZE the story. What does ANALYZE mean?', options: ['to look closely and carefully to understand how something works', 'to quickly read through something once', 'to write a summary of something', 'to copy something exactly'], answer: 'to look closely and carefully to understand how something works',
    explanation: 'ANALYZE means to study something closely and break it into parts to understand it! Scientists analyze experiments. Readers analyze stories. It\'s like being a detective!' },

  { id: 'voc-2-14', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '⚖️', prompt: 'The teacher asks you to COMPARE the two characters. What does COMPARE mean?', options: ['to look at how two things are similar', 'to look at how two things are different', 'to write about just one thing', 'to put things in order'], answer: 'to look at how two things are similar',
    explanation: 'COMPARE = look for similarities (how things are the SAME)! CONTRAST = look for differences. Together, "compare and contrast" means looking at both how things are alike AND different!' },

  { id: 'voc-2-15', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '📝', prompt: 'Your teacher says to put the events in SEQUENCE. What does SEQUENCE mean?', options: ['the order in which things happen', 'the most important event', 'the number of events', 'the reason something happened'], answer: 'the order in which things happen',
    explanation: 'SEQUENCE means the ORDER things happen! First, next, then, finally — these are sequence words! Putting events in sequence helps you understand stories and science experiments!' },

  { id: 'voc-2-16', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-figurative',
    visual: '🌧️🐈', prompt: '"It\'s raining cats and dogs!" Does this really mean animals are falling from the sky?', options: ['No — it means it\'s raining very heavily', 'Yes — cats and dogs are actually falling', 'It means it\'s a little cloudy', 'It means animals like to play in rain'], answer: 'No — it means it\'s raining very heavily',
    explanation: '"Raining cats and dogs" is a FIGURATIVE EXPRESSION — it doesn\'t mean what it literally says! It means it\'s raining VERY hard. Figurative language paints a picture!' },

  { id: 'voc-2-17', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-figurative',
    visual: '🦵📚', prompt: '"Break a leg!" someone shouts before Avery\'s play performance. What do they really mean?', options: ['Good luck! Do great!', 'Be careful not to fall', 'Kick the set pieces', 'Run away quickly'], answer: 'Good luck! Do great!',
    explanation: '"Break a leg" is a theater expression meaning GOOD LUCK! Actors say it because saying "good luck" is actually thought to bring bad luck on stage. Funny, right?' },

  { id: 'voc-2-18', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-figurative',
    visual: '📖✏️', prompt: '"I need to hit the books tonight before my big test." What does HIT THE BOOKS mean?', options: ['to study hard', 'to throw books around', 'to buy new books', 'to read just one page'], answer: 'to study hard',
    explanation: '"Hit the books" means to study seriously and hard! It\'s a figurative expression. No actual hitting involved — just lots of reading and learning!' },

  { id: 'voc-2-19', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-figurative',
    visual: '🎂', prompt: '"The math test was a PIECE OF CAKE for Avery!" What does piece of cake mean here?', options: ['it was very easy', 'it involved eating dessert', 'it was very hard', 'it was delicious'], answer: 'it was very easy',
    explanation: '"Piece of cake" means something is very easy and simple! Just like how easy it is to eat a piece of cake. Figurative expressions make language more colorful and fun!' },

  { id: 'voc-2-20', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-prefixes',
    visual: '❓', prompt: 'MIS- means wrong. If you PLACE something, you put it somewhere. What does MISPLACE mean?', options: ['to put something in the wrong place and lose it', 'to put something in the right place', 'to put something back again', 'to not place something at all'], answer: 'to put something in the wrong place and lose it',
    explanation: 'MISPLACE = put in the WRONG place so you can\'t find it! "I misplaced my keys" = I put them somewhere I can\'t remember. Have you ever misplaced something?' },

  { id: 'voc-2-21', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '📣', prompt: 'The teacher asks you to EXPLAIN your answer. What does EXPLAIN mean?', options: ['to make something clear by giving details and reasons', 'to guess what might happen', 'to list things in order', 'to copy what someone else said'], answer: 'to make something clear by giving details and reasons',
    explanation: 'EXPLAIN means to make something clear using details and reasons! When you explain, you help others understand your thinking. "Because..." and "so..." are great explanation words!' },

  { id: 'voc-2-22', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-suffixes',
    visual: '📚', prompt: 'EDUCATE means to teach. What does EDUCATION mean? (-TION turns it into a noun)', options: ['the process or result of being taught and learning', 'to teach again', 'teaching without success', 'teaching before school'], answer: 'the process or result of being taught and learning',
    explanation: 'EDUCATION is what you get when you\'re educated! School provides education. Reading gives you education. The -TION ending turns the action (educate) into the result (education)!' },

  { id: 'voc-2-23', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-context-clues',
    visual: '🦢', prompt: '"The graceful swan glided across the water without making a single ripple." What does GRACEFUL mean?', options: ['moving smoothly and elegantly', 'moving very quickly', 'moving very loudly', 'moving in a clumsy way'], answer: 'moving smoothly and elegantly',
    explanation: 'Context clue! "Glided without a single ripple" tells us GRACEFUL means moving smoothly and beautifully! Context clues are your secret weapon for new words!' },

  { id: 'voc-2-24', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '📊', prompt: 'The teacher says to DESCRIBE the character. What does DESCRIBE mean?', options: ['to use details to paint a picture in words', 'to list only the good things', 'to compare two things', 'to put things in order'], answer: 'to use details to paint a picture in words',
    explanation: 'DESCRIBE means to use words to paint a vivid picture! You describe using adjectives and specific details. "She had curly red hair and a bright, toothy grin" is great description!' },

  { id: 'voc-2-25', type: 'multiple-choice', level: '2', subject: 'reading', language: 'english', topic: 'vocabulary-connotation',
    visual: '🏠❤️', prompt: 'HOME and HOUSE both mean a place where you live. But HOME feels warmer and cozier. Which word has a more emotional, loving connotation?', options: ['home', 'house', 'both are exactly the same feeling', 'neither has any feeling'], answer: 'home',
    explanation: 'HOME carries warmth, love, and belonging! HOUSE is just a building. "Home is where the heart is" — that\'s connotation! Word choice shapes how readers FEEL!' },


  // ==========================================================
  // === 3RD GRADE (25 questions) — voc-3-01 to voc-3-25 ===
  // ==========================================================

  { id: 'voc-3-01', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-prefixes',
    visual: '🌐', prompt: 'The prefix INTER- means BETWEEN or AMONG. An INTERNATIONAL soccer game is played...', options: ['between players from different countries', 'inside one country', 'before the season starts', 'underwater'], answer: 'between players from different countries',
    explanation: 'INTER- means between or among! INTERnational = between nations. INTERact = act between each other. INTERnet = network between many computers. INTER- connects things!' },

  { id: 'voc-3-02', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-prefixes',
    visual: '🚇', prompt: 'The prefix SUB- means UNDER or BELOW. A SUBMARINE travels...', options: ['under the water', 'above the clouds', 'between two cities', 'across the land'], answer: 'under the water',
    explanation: 'SUB- means under! SUBmarine = travels UNDER water. SUBway = train that goes UNDER the city. SUBtract = take away from UNDER a number! SUB- always goes below!' },

  { id: 'voc-3-03', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-prefixes',
    visual: '🦸', prompt: 'The prefix SUPER- means ABOVE or MORE THAN USUAL. A SUPERHERO has abilities that are...', options: ['far above normal human abilities', 'just like normal human abilities', 'below normal abilities', 'between normal and better'], answer: 'far above normal human abilities',
    explanation: 'SUPER- means above or exceeding! SUPERhero = above human. SUPERmarket = above a regular market (much bigger!). SUPERior = above others in quality. SUPER- goes up!' },

  { id: 'voc-3-04', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-prefixes',
    visual: '🔬', prompt: 'The prefix MICRO- means VERY SMALL. A MICROSCOPE helps you see things that are...', options: ['too tiny to see with just your eyes', 'very far away in the sky', 'moving very fast', 'hidden underground'], answer: 'too tiny to see with just your eyes',
    explanation: 'MICRO- means very tiny! MICROscope = tool to see MICRO (tiny) things. MICROphone = makes MICRO (tiny) sounds bigger. MICROwave... makes MICRO waves of energy! MICRO = small!' },

  { id: 'voc-3-05', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '👁️', prompt: 'The Latin root VIS means SEE. What does VISIBLE mean?', options: ['able to be seen', 'able to be heard', 'able to be smelled', 'able to be touched'], answer: 'able to be seen',
    explanation: 'VIS = see! VISible = able to be SEEN. VISion = your sight/seeing. VISit = go to SEE someone. VISual = related to SEEING. Knowing VIS helps you unlock so many words!' },

  { id: 'voc-3-06', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '🎵', prompt: 'The Latin root AUD means HEAR. An AUDITORIUM is a place where people go to...', options: ['hear performances and concerts', 'see paintings and art', 'study and read books', 'exercise and play sports'], answer: 'hear performances and concerts',
    explanation: 'AUD = hear! AUDitorium = place to HEAR performances. AUDio = sound you HEAR. AUDience = people who HEAR/watch a show. Your AUDitory system is your hearing system!' },

  { id: 'voc-3-07', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '✈️', prompt: 'The Latin root PORT means CARRY. TRANSPORT means to...', options: ['carry things from one place to another', 'build new buildings', 'look at things far away', 'communicate with others'], answer: 'carry things from one place to another',
    explanation: 'PORT = carry! TRANSport = carry ACROSS distances. PORTable = able to be CARRIED (like a laptop). imPORT = CARRY goods in. exPORT = CARRY goods out. PORT carries so much meaning!' },

  { id: 'voc-3-08', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '📜', prompt: 'The Latin root SCRIB or SCRIPT means WRITE. A MANUSCRIPT is...', options: ['something written by hand', 'something drawn with pencils', 'something built with bricks', 'something spoken aloud'], answer: 'something written by hand',
    explanation: 'SCRIB/SCRIPT = write! manuSCRIPT = WRITTEN by hand (manu = hand). deSCRIBe = WRITE out details. preSCRIPtion = something WRITTEN by a doctor. SCRIPT = the WRITTEN words of a play!' },

  { id: 'voc-3-09', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '💚', prompt: 'The Latin root BENE means GOOD or WELL. BENEFICIAL means...', options: ['helpful and good for you', 'harmful and dangerous', 'confusing and unclear', 'boring and dull'], answer: 'helpful and good for you',
    explanation: 'BENE = good! BENEficial = good FOR you. BENEfit = something GOOD you gain. BENEvolent = having GOOD will toward others (kind and generous). BENE brings goodness!' },

  { id: 'voc-3-10', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-precision',
    visual: '🚗🚌🚛', prompt: 'Car, truck, and bus are all VEHICLES. What is a VEHICLE?', options: ['any machine used to transport people or things', 'any machine that flies in the sky', 'only cars and trucks', 'any object that moves'], answer: 'any machine used to transport people or things',
    explanation: 'VEHICLE is the category word! Cars, trucks, buses, trains, and boats are all vehicles. Using precise category words shows you understand how things are organized!' },

  { id: 'voc-3-11', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-precision',
    visual: '🌡️', prompt: 'COOL, CHILLY, COLD, and FREEZING all describe low temperatures. Which word describes the COLDEST temperature?', options: ['freezing', 'chilly', 'cool', 'cold'], answer: 'freezing',
    explanation: 'Words can be arranged from least to most intense! Cool → Chilly → Cold → FREEZING! Word gradations help you choose exactly the right word. It was FREEZING outside today means it was the coldest!' },

  { id: 'voc-3-12', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-idioms',
    visual: '🌟', prompt: '"That new student is a RISING STAR in gymnastics." This is an idiom. What does RISING STAR mean?', options: ['someone becoming very talented and successful', 'a star that is moving upward in the sky', 'someone who is tall', 'someone who wakes up early'], answer: 'someone becoming very talented and successful',
    explanation: 'A RISING STAR is someone who is quickly becoming very talented and popular! It\'s an idiom — the literal words (star, rising) don\'t match the real meaning!' },

  { id: 'voc-3-13', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-idioms',
    visual: '🌊', prompt: '"The new student felt like a FISH OUT OF WATER at her first day of school." What does fish out of water mean?', options: ['feeling uncomfortable and out of place', 'loving the water and swimming', 'being very hungry', 'swimming really well'], answer: 'feeling uncomfortable and out of place',
    explanation: 'A fish out of water can\'t survive — so the idiom means feeling completely out of place and uncomfortable! A new school, a new city — these can make you feel like a fish out of water!' },

  { id: 'voc-3-14', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '🔬', prompt: 'A scientist forms a HYPOTHESIS before doing an experiment. What is a hypothesis?', options: ['an educated guess about what will happen, based on what you know', 'the final proven answer to a question', 'a list of materials needed', 'a drawing of the experiment'], answer: 'an educated guess about what will happen, based on what you know',
    explanation: 'A HYPOTHESIS is an educated prediction! It\'s not just a random guess — it\'s based on what you already know. Scientists test hypotheses to see if they\'re right!' },

  { id: 'voc-3-15', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '📊', prompt: 'After looking at all the data, the scientist was able to CONCLUDE that plants need sunlight. What does CONCLUDE mean?', options: ['to decide something based on evidence and reasoning', 'to start an experiment', 'to collect information', 'to make a prediction'], answer: 'to decide something based on evidence and reasoning',
    explanation: 'CONCLUDE means to reach a decision based on evidence! You look at all the facts, think carefully, and then conclude — reach your final answer. Scientists, detectives, and great readers all conclude!' },

  { id: 'voc-3-16', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '📣', prompt: 'The lawyer tried to PERSUADE the jury that the defendant was innocent. What does PERSUADE mean?', options: ['to convince someone to believe or do something through arguments', 'to force someone to do something', 'to confuse someone on purpose', 'to ask a question politely'], answer: 'to convince someone to believe or do something through arguments',
    explanation: 'PERSUADE means to convince with words and reasoning! Advertisers persuade you to buy things. Authors persuade you of their opinions. It\'s different from forcing — you use reasons and evidence!' },

  { id: 'voc-3-17', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-connotation',
    visual: '🏡', prompt: 'HOME has a warmer feeling than HOUSE. FAMOUS and NOTORIOUS both mean widely known, but notorious means known for BAD reasons. If someone is notorious, they are...', options: ['widely known for doing something bad or wrong', 'widely known for being amazing and wonderful', 'only known by a few people', 'not known by anyone'], answer: 'widely known for doing something bad or wrong',
    explanation: 'NOTORIOUS has a NEGATIVE connotation! A famous hero is admired. A notorious villain is feared and disliked. Same idea (widely known), completely different feeling — that\'s connotation!' },

  { id: 'voc-3-18', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-connotation',
    visual: '💭', prompt: 'CONFIDENT means you believe in yourself. ARROGANT means you think you\'re better than everyone else. Which has a more negative connotation?', options: ['arrogant', 'confident', 'both are positive', 'both are negative'], answer: 'arrogant',
    explanation: 'ARROGANT is negative — arrogant people look down on others! CONFIDENT is positive — confident people believe in themselves without putting others down. Be confident, not arrogant!' },

  { id: 'voc-3-19', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-prefixes',
    visual: '🚂', prompt: 'The prefix TRANS- means ACROSS or THROUGH. If you TRANSLATE a book from Spanish to English, you are carrying its meaning...', options: ['across from one language to another', 'underground in a tunnel', 'above the clouds', 'before anyone else reads it'], answer: 'across from one language to another',
    explanation: 'TRANS- means across! TRANSlate = carry ACROSS languages. TRANSport = carry ACROSS distances. TRANSparent = light passes THROUGH it. TRANSform = change ACROSS into something new!' },

  { id: 'voc-3-20', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '🗣️', prompt: 'The Latin root DICT means SAY or SPEAK. What does DICTATE mean?', options: ['to say something aloud for someone else to write down', 'to listen carefully to others', 'to write in secret', 'to draw a picture'], answer: 'to say something aloud for someone else to write down',
    explanation: 'DICT = say! DICTate = SAY aloud for someone to write. DICtionary = book of SAYings/word meanings. preDICT = SAY BEFORE what will happen. contraDICT = SAY the opposite!' },

  { id: 'voc-3-21', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '🔎', prompt: 'The teacher asks you to EVALUATE whether the author\'s argument is strong. What does EVALUATE mean?', options: ['to judge the quality or value of something carefully', 'to quickly describe something', 'to compare two things', 'to list the events in order'], answer: 'to judge the quality or value of something carefully',
    explanation: 'EVALUATE means to judge how good, strong, or valuable something is! You evaluate evidence, arguments, and work. It requires careful thinking — not just reading, but judging!' },

  { id: 'voc-3-22', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-precision',
    visual: '😤', prompt: 'ANNOYED, IRRITATED, FRUSTRATED, and FURIOUS all describe being upset. Which is the MOST intense feeling?', options: ['furious', 'annoyed', 'irritated', 'frustrated'], answer: 'furious',
    explanation: 'Word gradation: Annoyed → Irritated → Frustrated → FURIOUS! Furious is extremely angry! Knowing these gradations helps you pick exactly the right word for exactly the right feeling!' },

  { id: 'voc-3-23', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-idioms',
    visual: '💡', prompt: '"When Sofia finally understood the math problem, the lightbulb went off in her head." What does lightbulb going off mean?', options: ['she suddenly understood something', 'the electricity went out', 'she felt angry', 'she fell asleep'], answer: 'she suddenly understood something',
    explanation: 'When a "lightbulb goes off" it means you suddenly understand something — like a light turning on in a dark room! Cartoons even draw a lightbulb above characters\' heads when they get an idea!' },

  { id: 'voc-3-24', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-academic',
    visual: '🧩', prompt: 'The detective needed more EVIDENCE before she could solve the case. What is EVIDENCE?', options: ['facts and information that help prove something is true', 'a guess with no support', 'the final answer to a question', 'a type of detective tool'], answer: 'facts and information that help prove something is true',
    explanation: 'EVIDENCE is the proof! Scientists use evidence. Lawyers use evidence. Great readers look for evidence in the text. Without evidence, you just have opinions!' },

  { id: 'voc-3-25', type: 'multiple-choice', level: '3', subject: 'reading', language: 'english', topic: 'vocabulary-greek-latin-roots',
    visual: '🏅', prompt: 'The Latin root BENE means GOOD. A BENEFACTOR is someone who gives help to others. What does a benefactor do?', options: ['gives money or help to support a good cause', 'takes things away from others', 'argues against good ideas', 'avoids helping anyone'], answer: 'gives money or help to support a good cause',
    explanation: 'A BENEFACTOR does GOOD things — they help, donate, and support! Libraries, schools, and charities often have benefactors. BENEfactor = someone who MAKES good happen!' },


  // ========================================================
  // === TAG LEVEL (25 questions) — voc-t-01 to voc-t-25 ===
  // ========================================================

  { id: 'voc-t-01', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '🦁', prompt: 'TENACIOUS means you never give up, no matter what. A tenacious person is...', options: ['determined and persistent, holding on no matter what', 'easily discouraged when things get hard', 'very quick at finishing tasks', 'very quiet and shy'], answer: 'determined and persistent, holding on no matter what',
    explanation: 'TENACIOUS comes from the Latin "tenax" meaning holding fast! A tenacious athlete keeps training even when it\'s hard. A tenacious student keeps trying even when a problem is tricky. Are you tenacious?' },

  { id: 'voc-t-02', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '💪', prompt: 'A RESILIENT person bounces back after hard times, like a rubber ball that bounces back when dropped. RESILIENT means...', options: ['able to recover quickly from difficulties', 'very strong and powerful physically', 'very fast and athletic', 'very smart and knowledgeable'], answer: 'able to recover quickly from difficulties',
    explanation: 'RESILIENT = bounce back! From Latin "resilire" meaning to spring back. When hard things happen, resilient people don\'t stay down — they rise up! Resilience is one of the most important life skills!' },

  { id: 'voc-t-03', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '❤️', prompt: 'EMPATHY means you can understand and share the feelings of another person. If your friend is sad and you feel sad FOR them and try to understand their pain, you are showing...', options: ['empathy', 'sympathy only', 'apathy (not caring)', 'jealousy'], answer: 'empathy',
    explanation: 'EMPATHY is putting yourself in someone else\'s shoes! From Greek "empatheia" meaning passion/feeling within. Empathy is deeper than sympathy — you actually FEEL what they feel. It\'s the heart of kindness!' },

  { id: 'voc-t-04', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '⭐', prompt: 'INTEGRITY means always doing the right thing, even when no one is watching and even when it\'s hard. A person with integrity...', options: ['is honest and does what is right even without being watched', 'does the right thing only when others can see them', 'is very smart about science and math', 'is very fast and athletic'], answer: 'is honest and does what is right even without being watched',
    explanation: 'INTEGRITY from Latin "integer" meaning whole or untouched! A person of integrity is the same person whether anyone is watching or not. It\'s about being whole and honest inside and out.' },

  { id: 'voc-t-05', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '🎤', prompt: 'An ELOQUENT speaker uses beautiful, well-chosen words to express ideas in a moving and powerful way. ELOQUENT means...', options: ['fluent and persuasive, expressing ideas beautifully', 'speaking very quickly without pausing', 'speaking in a foreign language', 'speaking very loudly'], answer: 'fluent and persuasive, expressing ideas beautifully',
    explanation: 'ELOQUENT from Latin "eloqui" meaning to speak out! An eloquent speaker chooses perfect words that touch your heart and mind. Martin Luther King Jr. was eloquent. Great writers are eloquent on the page!' },

  { id: 'voc-t-06', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '⛰️', prompt: 'An ARDUOUS task requires a lot of hard effort and struggle. Climbing a mountain is arduous. Which best describes something arduous?', options: ['very difficult and requiring great effort to get through', 'very easy and simple to complete', 'very short and quick to finish', 'very fun and entertaining'], answer: 'very difficult and requiring great effort to get through',
    explanation: 'ARDUOUS from Latin "arduus" meaning steep! Just like a steep mountain, arduous tasks demand serious effort. But finishing something arduous feels incredibly rewarding!' },

  { id: 'voc-t-07', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '🔬', prompt: 'A METICULOUS scientist checks every tiny detail carefully and perfectly. METICULOUS means...', options: ['extremely careful and precise, paying attention to every detail', 'working very fast without checking', 'being loud and enthusiastic', 'sharing ideas with a team'], answer: 'extremely careful and precise, paying attention to every detail',
    explanation: 'METICULOUS from Latin "meticulosus" meaning fearful/timid about small things! A meticulous person doesn\'t miss a thing. Scientists, editors, and surgeons must be meticulous — every tiny detail matters!' },

  { id: 'voc-t-08', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '🏅', prompt: 'PERSEVERANCE means continuing to work hard despite difficulty or delays. What is the difference between perseverance and just trying?', options: ['perseverance means keep trying even when it is really hard and takes a long time', 'perseverance means giving up when something is too hard', 'perseverance means trying only once', 'perseverance means asking others for help'], answer: 'perseverance means keep trying even when it is really hard and takes a long time',
    explanation: 'PERSEVERANCE from Latin "perseverare" meaning to persist! Thomas Edison tried over 1,000 times before inventing the lightbulb. That\'s perseverance! It\'s not just trying — it\'s refusing to quit!' },

  { id: 'voc-t-09', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '💡', prompt: 'INNOVATION means creating something new or finding a better way to do something. An INNOVATIVE solution to a problem is...', options: ['a fresh, creative idea that hasn\'t been tried before', 'the same old way that has always been done', 'copying what others have already done', 'refusing to change anything'], answer: 'a fresh, creative idea that hasn\'t been tried before',
    explanation: 'INNOVATION from Latin "innovare" meaning to renew! The lightbulb, the airplane, the internet — all innovations! Innovators see problems and invent creative solutions. The world needs innovative thinkers like you!' },

  { id: 'voc-t-10', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '🤝', prompt: 'To COLLABORATE means to work together with others toward a shared goal. When a group collaborates, they...', options: ['combine their skills and ideas to achieve something together', 'compete against each other to win', 'work completely alone on separate tasks', 'disagree about everything they do'], answer: 'combine their skills and ideas to achieve something together',
    explanation: 'COLLABORATE from Latin "collaborare" — col (together) + laborare (to work)! When you collaborate, the group becomes smarter than any single person. Scientists, musicians, and athletes collaborate to create great things!' },

  { id: 'voc-t-11', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-sat-words',
    visual: '💝', prompt: 'A BENEVOLENT king shared his wealth with the poor people of his kingdom. BENEVOLENT means...', options: ['kind, generous, and wishing good things for others', 'cruel and selfish', 'powerful but unfair', 'wise but distant'], answer: 'kind, generous, and wishing good things for others',
    explanation: 'BENEVOLENT = bene (good) + volent (wishing)! A benevolent person wishes GOOD things for others and acts on those wishes. Opposite: MALEVOLENT = wishing HARM (mal = bad)!' },

  { id: 'voc-t-12', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-sat-words',
    visual: '🗣️', prompt: 'Uncle Marco is LOQUACIOUS — he talks so much that dinner conversations last for hours! LOQUACIOUS means...', options: ['talking extremely much and very fond of conversation', 'speaking very softly and quietly', 'refusing to talk to anyone', 'speaking in a foreign language'], answer: 'talking extremely much and very fond of conversation',
    explanation: 'LOQUACIOUS from Latin "loqui" meaning to speak! A loquacious person never runs out of things to say. LOQUacious → loqui → to SPEAK. Related words: eloquent, soliloquy (speaking alone)!' },

  { id: 'voc-t-13', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-sat-words',
    visual: '🤫', prompt: 'The spy made a SURREPTITIOUS phone call, hiding in the closet so no one would see her. SURREPTITIOUS means...', options: ['done secretly and sneakily, trying not to be noticed', 'done loudly and publicly for all to see', 'done very quickly and urgently', 'done carelessly and without thinking'], answer: 'done secretly and sneakily, trying not to be noticed',
    explanation: 'SURREPTITIOUS from Latin "surripere" meaning to seize secretly! Surreptitious actions are sneaky and hidden. Spies are surreptitious. Synonyms: covert, stealthy, furtive. Antonym: open, public!' },

  { id: 'voc-t-14', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-sat-words',
    visual: '🌸', prompt: 'A rainbow after a storm is EPHEMERAL — it lasts only a few beautiful minutes before fading away. EPHEMERAL means...', options: ['lasting only a very short time; quickly passing', 'lasting forever and never changing', 'very bright and colorful', 'invisible and impossible to see'], answer: 'lasting only a very short time; quickly passing',
    explanation: 'EPHEMERAL from Greek "ephemeros" — epi (on) + hemera (day)! Something ephemeral lasts only one day or less. Mayflies, rainbows, and soap bubbles are ephemeral. Some of the most beautiful things in life are ephemeral!' },

  { id: 'voc-t-15', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-sat-words',
    visual: '🤷', prompt: 'The clue in the mystery was AMBIGUOUS — it could mean two different things and no one could agree! AMBIGUOUS means...', options: ['unclear, having more than one possible meaning', 'perfectly clear and easy to understand', 'very long and complicated to read', 'false and totally wrong'], answer: 'unclear, having more than one possible meaning',
    explanation: 'AMBIGUOUS from Latin "ambiguus" — ambi (both ways) + agere (to drive)! An ambiguous sentence can be understood in multiple ways. Good mystery writers use ambiguous clues! Opposite: unambiguous (perfectly clear)!' },

  { id: 'voc-t-16', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-etymology',
    visual: '🌍', prompt: 'The word GEOGRAPHY comes from Greek geo (Earth) + graphy (writing/study). GEOGRAPHY is the study of...', options: ['Earth\'s lands, features, climates, and people', 'stars and outer space', 'living things and animals', 'ancient history and old stories'], answer: 'Earth\'s lands, features, climates, and people',
    explanation: 'GEO = Earth + GRAPHY = writing/study = study of Earth! Other GEO words: GEOlogy (study of Earth\'s rocks), GEOthermal (Earth\'s heat). Other GRAPHY words: bioGRAPHY (writing about a life), photoGRAPHY (writing with light)!' },

  { id: 'voc-t-17', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-etymology',
    visual: '🔬', prompt: 'BIOLOGY comes from Greek bios (life) + logos (study/reason). BIOLOGY is...', options: ['the study of living things', 'the study of rocks and earth', 'the study of stars and planets', 'the study of numbers and patterns'], answer: 'the study of living things',
    explanation: 'BIO = life + LOGY = study of! BIOlogy = study of life. BIOgraphy = writing about someone\'s LIFE. BIOdiversity = variety of LIFE. Other LOGY words: geology, psychology (study of the mind), astrology!' },

  { id: 'voc-t-18', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-etymology',
    visual: '🔭', prompt: 'TELESCOPE comes from Greek tele (far) + skopein (to look). A telescope lets you...', options: ['look at things that are very far away', 'look at things that are very tiny and small', 'look at things that are underground', 'hear sounds from far away'], answer: 'look at things that are very far away',
    explanation: 'TELE = far + SCOPE = look at! TELEscope = look at things FAR away. TELEphone = sound from FAR away (phone = sound). TELEvision = see FAR away things. TELE- always means distance!' },

  { id: 'voc-t-19', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-analogy',
    visual: '🧠', prompt: 'Complete the analogy: HAPPY is to SAD as LIGHT is to ___', options: ['dark', 'bright', 'sunny', 'lamp'], answer: 'dark',
    explanation: 'HAPPY : SAD = antonyms (opposites)! So LIGHT : ___ must also be antonyms! The opposite of light is DARK! Analogies test how well you understand word relationships!' },

  { id: 'voc-t-20', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-analogy',
    visual: '🧩', prompt: 'Complete the analogy: AUTHOR is to BOOK as COMPOSER is to ___', options: ['symphony (music)', 'painting', 'sculpture', 'photograph'], answer: 'symphony (music)',
    explanation: 'An AUTHOR creates a BOOK. A COMPOSER creates a SYMPHONY (musical composition)! The relationship is creator:creation. Bach, Beethoven, and Mozart were famous composers!' },

  { id: 'voc-t-21', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-analogy',
    visual: '🔗', prompt: 'Complete the analogy: PETAL is to FLOWER as CHAPTER is to ___', options: ['book', 'library', 'author', 'sentence'], answer: 'book',
    explanation: 'A PETAL is a part of a FLOWER. A CHAPTER is a part of a BOOK! The relationship is part:whole. These analogies test how you see relationships between ideas!' },

  { id: 'voc-t-22', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-nuanced-meaning',
    visual: '🌿', prompt: 'FRUGAL means careful with money and avoiding waste. MISERLY means refusing to spend money even when necessary. Both relate to spending little money, but which has a MORE NEGATIVE meaning?', options: ['miserly', 'frugal', 'both are equally negative', 'both are equally positive'], answer: 'miserly',
    explanation: 'FRUGAL is wise and thoughtful with money — it\'s a positive trait! MISERLY is stingy and refuses to spend even when needed — negative! Think of Scrooge from A Christmas Carol — he was miserly, not just frugal!' },

  { id: 'voc-t-23', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-advanced-words',
    visual: '🌱', prompt: 'Something NASCENT is just beginning to exist or develop, like a brand new idea or a seedling just sprouting. NASCENT means...', options: ['just beginning to exist or develop; newly formed', 'fully grown and completely developed', 'very old and ancient', 'damaged and decaying'], answer: 'just beginning to exist or develop; newly formed',
    explanation: 'NASCENT from Latin "nasci" meaning to be born! A nascent democracy is one just beginning. A nascent talent is one just starting to emerge. It\'s a beautiful word for new beginnings!' },

  { id: 'voc-t-24', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-analogy',
    visual: '🎭', prompt: 'Complete the analogy: TIMID is to BOLD as GENEROUS is to ___', options: ['stingy', 'kind', 'brave', 'cheerful'], answer: 'stingy',
    explanation: 'TIMID and BOLD are antonyms (opposites)! So GENEROUS and ___ must be antonyms! The opposite of generous (giving freely) is STINGY (refusing to give or share)! Great thinking!' },

  { id: 'voc-t-25', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'english', topic: 'vocabulary-nuanced-meaning',
    visual: '🌊', prompt: 'ASSERTIVE, AGGRESSIVE, and PASSIVE are three ways of expressing yourself. ASSERTIVE means standing up for yourself respectfully. AGGRESSIVE means pushing too hard and disrespecting others. PASSIVE means not speaking up at all. Which approach is usually HEALTHIEST?', options: ['assertive', 'aggressive', 'passive', 'all three are equally good'], answer: 'assertive',
    explanation: 'ASSERTIVE is the golden middle! Too passive = you don\'t speak up and get overlooked. Too aggressive = you hurt relationships. ASSERTIVE = you share your needs clearly and respectfully. Knowing these nuanced differences is incredibly powerful!' },
]
