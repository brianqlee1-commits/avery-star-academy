import type { Question } from '../../../types'

export const emotionsExtraQuestions: Question[] = [

  // ── CURIOSITY & ASKING QUESTIONS ──────────────────────────────────────────

  { id: 'emo-k-01', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '🔭', prompt: 'When you think "I wonder WHY the sky is blue," you are being...', options: ['curious!', 'naughty', 'off-topic', 'too slow'], answer: 'curious!',
    explanation: 'Feeling curious means your brain wants to learn more — that\'s AMAZING! "I wonder why" is one of the most powerful things a person can think! 🌟' },

  { id: 'emo-k-02', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '❓', prompt: 'A curious question usually starts with words like...', options: ['"Why?" "How?" or "I wonder..."', '"Stop!" "Quiet!" or "Sit down!"', '"Whatever" or "I don\'t care"', '"I already know this"'], answer: '"Why?" "How?" or "I wonder..."',
    explanation: 'WHY, HOW, WHAT IF, and I WONDER are the magic words of curiosity! Every great discovery started with one of these words! 💡' },

  { id: 'emo-k-03', type: 'true-false', level: 'K', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '✨', prompt: 'True or False: There is no such thing as a silly question.', options: ['True — every question is worth asking!', 'False — some questions are silly'], answer: 'True — every question is worth asking!',
    explanation: 'TRUE! Every single question is worth asking. Even if you think it might sound silly, asking it helps you learn — and it might help other kids who were wondering the same thing! 🌟' },

  { id: 'emo-k-04', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '✋', prompt: 'When you don\'t understand your teacher\'s directions, you should...', options: ['raise your hand and ask', 'stay confused and do nothing', 'copy what others do', 'wait until recess'], answer: 'raise your hand and ask',
    explanation: 'ALWAYS raise your hand when you\'re confused! Teachers are there to help you understand. Asking is the smartest and bravest thing you can do! 🦁' },

  { id: 'emo-k-05', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '👩‍🏫', prompt: 'How do teachers FEEL when students ask questions?', options: ['Happy! It shows students are thinking!', 'Annoyed — questions are a bother', 'Angry — it wastes time', 'Bored — they don\'t care'], answer: 'Happy! It shows students are thinking!',
    explanation: 'Teachers LOVE questions! Every question tells a teacher that a student is paying attention and thinking hard. Your questions make teachers happy! 😊' },

  { id: 'emo-k-06', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '🆕', prompt: 'You are in a classroom with a teacher you have NEVER met before. You have a question. What should you do?', options: ['Raise your hand — new teachers want to help too!', 'Never ask — you don\'t know her yet', 'Wait until you know her better', 'Just stay confused all day'], answer: 'Raise your hand — new teachers want to help too!',
    explanation: 'Every teacher — new or familiar — is there to help YOU! Raising your hand is always welcome, always brave, and always the right call! ✋💛' },

  { id: 'emo-k-07', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '💛', prompt: 'The feeling you get when you notice something interesting and want to know more is called...', options: ['curiosity', 'anger', 'boredom', 'sadness'], answer: 'curiosity',
    explanation: 'CURIOSITY is that exciting "I want to know more!" feeling. It\'s one of the best feelings your brain can have! 🔭✨' },

  { id: 'emo-k-08', type: 'multiple-choice', level: 'K', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '😊', prompt: 'It is NORMAL to feel nervous before asking a question in front of the class. What should you do with that nervous feeling?', options: ['Take a breath and ask anyway — that\'s being BRAVE!', 'Never speak — stay quiet forever', 'Leave the room', 'Pretend you are asleep'], answer: 'Take a breath and ask anyway — that\'s being BRAVE!',
    explanation: 'Feeling nervous is completely normal and okay! Brave people feel nervous AND do it anyway. Take a deep breath, raise your hand — you\'ve totally got this! 🦁' },

  // ── 1st GRADE ─────────────────────────────────────────────────────────────

  { id: 'emo-1-01', type: 'multiple-choice', level: '1', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '🔬', prompt: 'Scientists ask lots of questions because...', options: ['asking questions helps them discover new things', 'they forgot the answers', 'questions are required by the rules', 'they like to talk a lot'], answer: 'asking questions helps them discover new things',
    explanation: 'Every scientific discovery started with a question! Asking "why" and "how" is EXACTLY how scientists work. You\'re already thinking like a scientist! 🌟' },

  { id: 'emo-1-02', type: 'multiple-choice', level: '1', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '🏫', prompt: 'Your teacher asks "Does anyone have questions?" You are wondering something. A confident student would...', options: ['raise their hand and ask!', 'stay quiet and wonder forever', 'wait for someone else to ask first', 'write a note instead'], answer: 'raise their hand and ask!',
    explanation: 'Your teacher ASKED if there were questions because they WANT to answer them! Raising your hand is confident, smart, and exactly what good learners do! 💪' },

  { id: 'emo-1-03', type: 'multiple-choice', level: '1', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '🗣️', prompt: 'The BEST way to ask a teacher a polite question is...', options: ['Raise your hand, wait, then say "Excuse me, I have a question"', 'Shout across the room', 'Tap them repeatedly', 'Send a friend to ask for you'], answer: 'Raise your hand, wait, then say "Excuse me, I have a question"',
    explanation: '"Excuse me, I have a question" is polite, respectful, and works with ANY teacher — new or familiar. These magic words always open the door to learning! ✋💫' },

  { id: 'emo-1-04', type: 'multiple-choice', level: '1', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '🌀', prompt: 'When you feel confused about something in class, the BEST thing to feel is...', options: ['Brave enough to ask for help!', 'Embarrassed and silent', 'Like giving up', 'Angry at the teacher'], answer: 'Brave enough to ask for help!',
    explanation: 'Feeling confused just means something is NEW — and asking for help is the bridge from confused to understanding! Every expert once felt confused about exactly what you\'re learning! 🌉' },

  { id: 'emo-1-05', type: 'multiple-choice', level: '1', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '💫', prompt: '"I wonder..." are three words that start...', options: ['every great discovery and invention', 'arguments and problems', 'boring conversations', 'nothing useful'], answer: 'every great discovery and invention',
    explanation: '"I wonder..." launched rockets into space, discovered medicine, and created inventions we use every day. Your "I wonder" moments are powerful! 🚀' },

  { id: 'emo-1-06', type: 'true-false', level: '1', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '👩‍🏫', prompt: 'True or False: Asking a teacher you don\'t know well is too scary, so it\'s better to stay confused.', options: ['False — asking is always worth it!', 'True — wait until you know the teacher'], answer: 'False — asking is always worth it!',
    explanation: 'FALSE! Every teacher — even one you just met — wants to help you succeed. One brave question gets you unstuck faster than staying confused all day! 🦁✨' },

  // ── 2nd GRADE ─────────────────────────────────────────────────────────────

  { id: 'emo-2-01', type: 'multiple-choice', level: '2', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '🧠', prompt: 'Albert Einstein said: "I have no special talents. I am only __________ curious."', options: ['passionately', 'a little', 'sometimes', 'never'], answer: 'passionately',
    explanation: 'Einstein — one of the greatest minds in history — said his superpower was being PASSIONATELY CURIOUS. Asking questions wasn\'t a weakness for him — it was his greatest strength! 💡' },

  { id: 'emo-2-02', type: 'multiple-choice', level: '2', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '🙋', prompt: 'You notice something interesting during a lesson and have a question. You feel shy. What does CONFIDENCE mean in this moment?', options: ['Asking anyway, even feeling shy!', 'Staying quiet because others might judge', 'Writing it down and never telling anyone', 'Forgetting the question to fit in'], answer: 'Asking anyway, even feeling shy!',
    explanation: 'Confidence isn\'t the absence of shyness — it\'s deciding your question is worth more than your shyness! Your question matters. Speak up! 🌟' },

  { id: 'emo-2-03', type: 'multiple-choice', level: '2', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '💭', prompt: 'When you ask a question and your classmates nod because they were wondering too, that means...', options: ['You were brave enough to say what everyone was thinking!', 'You talked too much', 'You wasted the class\'s time', 'You should have stayed quiet'], answer: 'You were brave enough to say what everyone was thinking!',
    explanation: 'Often when you speak up, others are relieved! Your question probably helped every single student in that room. THAT is what leadership and courage look like! 👑' },

  { id: 'emo-2-04', type: 'multiple-choice', level: '2', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '🌈', prompt: 'Naming what you feel helps you manage emotions. Which words describe the feeling of wanting to discover more?', options: ['Curious and excited!', 'Furious and upset', 'Sleepy and bored', 'Jealous and mean'], answer: 'Curious and excited!',
    explanation: 'CURIOSITY and EXCITEMENT are amazing emotions that work together — they push you to explore, ask, and discover! Name them so you can use them! 💛' },

  // ── 3rd GRADE ─────────────────────────────────────────────────────────────

  { id: 'emo-3-01', type: 'multiple-choice', level: '3', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '🚀', prompt: 'The word INQUISITIVE means...', options: ['curious and eager to ask questions and learn', 'afraid to speak up', 'rule-following and quiet', 'only learning what you\'re told'], answer: 'curious and eager to ask questions and learn',
    explanation: 'INQUISITIVE — curious, questioning, always wanting to learn more — is one of the most valuable traits a person can have! It\'s a huge strength!' },

  { id: 'emo-3-02', type: 'multiple-choice', level: '3', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '🎓', prompt: 'Research shows that students who ask questions in class tend to...', options: ['understand more and remember longer', 'annoy their teachers', 'fall behind other students', 'forget what they learned faster'], answer: 'understand more and remember longer',
    explanation: 'Science proves it! When you ask a question and get an answer, your brain forms a STRONGER memory than just hearing information. Asking = smarter learning! 🧠💡' },

  { id: 'emo-3-03', type: 'multiple-choice', level: '3', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '💪', prompt: 'Feeling nervous before speaking up in class is a feeling called...', options: ['social anxiety — totally normal and manageable!', 'stupidity — it means you\'re not smart', 'weakness — brave people never feel this', 'a sign to stay quiet forever'], answer: 'social anxiety — totally normal and manageable!',
    explanation: 'Social anxiety — nerves about speaking to others — is one of the most COMMON feelings in the world. Even adults feel it! Knowing it\'s normal helps you push through it! 🌊' },

  // ── TAG ───────────────────────────────────────────────────────────────────

  { id: 'emo-t-01', type: 'multiple-choice', level: 'TAG', subject: 'motivation', language: 'english', topic: 'curiosity',
    visual: '🌟', prompt: 'Gifted programs look for students who ask curious questions. Why is this trait so important?', options: ['Curiosity drives all learning, discovery, and innovation', 'Curious students ask too many questions', 'Curiosity is only useful in science class', 'Asking questions shows you don\'t know enough'], answer: 'Curiosity drives all learning, discovery, and innovation',
    explanation: 'Curiosity is THE engine of all human progress. Every vaccine, every invention, every work of art started with a curious question. It is one of the most powerful traits a person can develop! 🔭✨' },

  { id: 'emo-t-02', type: 'multiple-choice', level: 'TAG', subject: 'motivation', language: 'english', topic: 'asking questions',
    visual: '🏆', prompt: 'A student who asks thoughtful, deep questions in class is demonstrating...', options: ['Critical thinking and intellectual engagement', 'Attention-seeking behavior', 'That she doesn\'t understand the lesson', 'A desire to waste class time'], answer: 'Critical thinking and intellectual engagement',
    explanation: 'Deep, thoughtful questions are a hallmark of critical thinking. Teachers and researchers recognize question-asking as a sign of high-level thinking. Your questions are EVIDENCE of your intelligence! 💡👑' },

  { id: 'emo-t-03', type: 'multiple-choice', level: 'TAG', subject: 'motivation', language: 'english', topic: 'emotions',
    visual: '🧡', prompt: 'Emotional intelligence means being able to...', options: ['recognize, understand, and manage your own feelings and others\'', 'feel nothing and stay calm always', 'hide your emotions from everyone', 'only feel happy all the time'], answer: 'recognize, understand, and manage your own feelings and others\'',
    explanation: 'Emotional intelligence (EQ) is just as important as academic intelligence — sometimes more! Understanding your emotions helps you communicate better, build relationships, and stay resilient! 💛' },

]
