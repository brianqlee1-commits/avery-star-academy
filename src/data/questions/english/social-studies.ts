import type { Question } from '../../../types'

export const socialStudiesQuestions: Question[] = [
  // === Kindergarten ===
  { id: 'ess-k-01', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'community helpers',
    visual: '👩‍🚒', prompt: 'Who puts out fires and helps people in emergencies?', options: ['firefighter', 'teacher', 'farmer', 'chef'], answer: 'firefighter', explanation: 'Firefighters are heroes who fight fires and save lives!' },
  { id: 'ess-k-02', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'community helpers',
    visual: '👨‍⚕️', prompt: 'Who helps you when you are sick?', options: ['doctor', 'police officer', 'teacher', 'librarian'], answer: 'doctor', explanation: 'Doctors help keep us healthy and treat us when we are sick!' },
  { id: 'ess-k-03', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'maps',
    visual: '🗺️', prompt: 'What do we call a drawing that shows where places are?', options: ['map', 'painting', 'photo', 'letter'], answer: 'map', explanation: 'A map shows us where things are — like towns, rivers, and roads!' },
  { id: 'ess-k-04', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'rules',
    visual: '📋', prompt: 'Why do we have rules at school?', options: ['to keep everyone safe and happy', 'to make things harder', 'because teachers like rules', 'to keep us inside'], answer: 'to keep everyone safe and happy', explanation: 'Rules help everyone be safe, fair, and happy!' },
  { id: 'ess-k-05', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'family',
    visual: '👨‍👩‍👧', prompt: 'What is a FAMILY?', options: ['people who love and care for each other', 'people who live on the same street', 'people who go to the same school', 'people who work together'], answer: 'people who love and care for each other', explanation: 'Families are the people who love and take care of each other!' },

  // === 1st Grade ===
  { id: 'ess-1-01', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'geography',
    visual: '🌎', prompt: 'What are the 7 large land areas on Earth called?', options: ['continents', 'countries', 'oceans', 'states'], answer: 'continents', explanation: 'The 7 continents are: North America, South America, Europe, Africa, Asia, Australia, Antarctica!' },
  { id: 'ess-1-02', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'history',
    visual: '🇺🇸', prompt: 'What country do we live in?', options: ['United States of America', 'Canada', 'Mexico', 'Brazil'], answer: 'United States of America', explanation: 'We live in the United States of America — the USA!' },
  { id: 'ess-1-03', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'symbols',
    visual: '🗽', prompt: 'Which symbol stands for freedom in the USA?', options: ['Statue of Liberty', 'Big Ben', 'Eiffel Tower', 'Taj Mahal'], answer: 'Statue of Liberty', explanation: 'The Statue of Liberty is a famous symbol of freedom in America!' },
  { id: 'ess-1-04', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'maps',
    visual: '🧭', prompt: 'What are the four main compass directions?', options: ['North, South, East, West', 'Up, Down, Left, Right', 'Big, Small, Long, Short', 'Morning, Noon, Night, Dawn'], answer: 'North, South, East, West', explanation: 'N, S, E, W — Never Eat Soggy Waffles helps you remember compass directions!' },
  { id: 'ess-1-05', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'needs and wants',
    visual: '🍞', prompt: 'Food, water, and shelter are basic NEEDS because...', options: ['we need them to survive', 'we enjoy having them', 'they cost money', 'they are fun'], answer: 'we need them to survive', explanation: 'Basic needs are things we MUST have to stay alive and healthy!' },

  // === 2nd Grade ===
  { id: 'ess-2-01', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'government',
    visual: '🏛️', prompt: 'Who is the leader of the United States called?', options: ['President', 'King', 'Prime Minister', 'Governor'], answer: 'President', explanation: 'The President is the leader of the United States — they lead our country!' },
  { id: 'ess-2-02', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'history',
    visual: '🦅', prompt: 'America declared independence from which country in 1776?', options: ['England (Great Britain)', 'France', 'Spain', 'Canada'], answer: 'England (Great Britain)', explanation: 'America broke free from British rule in 1776 — that\'s what we celebrate on July 4th!' },
  { id: 'ess-2-03', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'economics',
    visual: '💰', prompt: 'When you TRADE with someone, you...', options: ['give something to get something', 'give something for free', 'steal something', 'buy something'], answer: 'give something to get something', explanation: 'Trade is when both people give something to get something they want!' },
  { id: 'ess-2-04', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'geography',
    visual: '🏔️', prompt: 'What state is Avery\'s home state of Georgia known as?', options: ['The Peach State', 'The Sunshine State', 'The Empire State', 'The Golden State'], answer: 'The Peach State', explanation: 'Georgia is called the Peach State — we\'re famous for our delicious peaches!' },

  // === 3rd Grade ===
  { id: 'ess-3-01', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'civics',
    visual: '🗳️', prompt: 'In a DEMOCRACY, how do citizens choose their leaders?', options: ['by voting', 'by fighting', 'the richest person wins', 'leaders are chosen at birth'], answer: 'by voting', explanation: 'In a democracy, ALL citizens can vote to choose their leaders!' },
  { id: 'ess-3-02', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'history',
    visual: '🏛️', prompt: 'Who was the FIRST President of the United States?', options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'Benjamin Franklin'], answer: 'George Washington', explanation: 'George Washington was our first President — 1789 to 1797!' },
  { id: 'ess-3-03', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'economics',
    visual: '🏪', prompt: 'When there are many sellers of the same product, this is called...', options: ['competition', 'cooperation', 'trade', 'scarcity'], answer: 'competition', explanation: 'Competition means many sellers try to earn your business by offering the best deal!' },

  // === TAG Level ===
  { id: 'ess-t-01', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'civics',
    visual: '📜', prompt: 'The document that lists the basic rights of ALL American citizens is called the...', options: ['Bill of Rights', 'Declaration of Independence', 'Constitution', 'Emancipation Proclamation'], answer: 'Bill of Rights', explanation: 'The Bill of Rights is the first 10 amendments — it protects our freedoms!' },
  { id: 'ess-t-02', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'geography',
    visual: '🌐', prompt: 'How many continents are there on Earth?', options: ['5', '6', '7', '8'], answer: '7', explanation: '7 continents: Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, South America!' },
  { id: 'ess-t-03', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'critical thinking',
    visual: '🤝', prompt: 'Why is it important to respect people from different cultures?', options: ['We can learn from each other', 'They might get angry', 'It is the law', 'Teachers require it'], answer: 'We can learn from each other', explanation: 'Different cultures bring different ideas, foods, music, and wisdom — diversity makes us stronger!' },
]
