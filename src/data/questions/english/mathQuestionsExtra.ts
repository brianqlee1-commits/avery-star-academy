import type { Question } from '../../../types'

export const mathQuestionsExtra: Question[] = [

  // =====================================================================
  // KINDERGARTEN — 25 questions
  // Topics: counting to 20, number bonds, addition to 10, subtraction from 10,
  //         shapes, ordering numbers, more/less/equal, grouping by 10s intro
  // =====================================================================
  { id: 'em2-k-01', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'counting',
    visual: '🍌', prompt: 'Count the bananas: 🍌🍌🍌🍌🍌🍌🍌 — How many are there?',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: 'Count each banana: 1, 2, 3, 4, 5, 6, 7 — Great job counting to 7!' },

  { id: 'em2-k-02', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'addition',
    visual: '🐸', prompt: '3 frogs are on a log. 4 more frogs jump on. How many frogs are on the log now?',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '3 + 4 = 7! Count on from 3: 4, 5, 6, 7 — seven frogs!' },

  { id: 'em2-k-03', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🎈', prompt: 'You have 8 balloons. 3 float away. How many are left?',
    options: ['4', '5', '6', '11'], answer: '5',
    explanation: '8 - 3 = 5! Count back from 8: 7, 6, 5 — five balloons!' },

  { id: 'em2-k-04', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'shapes',
    visual: '⬛', prompt: 'How many SIDES does a rectangle have?',
    options: ['3', '4', '5', '6'], answer: '4',
    explanation: 'A rectangle has 4 sides — two long sides and two short sides!' },

  { id: 'em2-k-05', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'ordering numbers',
    visual: '🔢', prompt: 'Which number comes BETWEEN 5 and 7?',
    options: ['4', '6', '8', '9'], answer: '6',
    explanation: '5, 6, 7 — the number 6 lives right between 5 and 7!' },

  { id: 'em2-k-06', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'more/less/equal',
    visual: '🍓', prompt: 'Lily has 4 strawberries 🍓🍓🍓🍓. Mia has 6 strawberries 🍓🍓🍓🍓🍓🍓. Who has MORE?',
    options: ['Lily', 'Mia', 'they have the same', 'we can\'t tell'], answer: 'Mia',
    explanation: '6 is MORE than 4, so Mia has more strawberries! Great comparing!' },

  { id: 'em2-k-07', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'number bonds',
    visual: '🌟', prompt: 'What number goes with 3 to make 7? 3 + ? = 7',
    options: ['3', '4', '5', '6'], answer: '4',
    explanation: '3 + 4 = 7! You can count on from 3: 4, 5, 6, 7 — four more!' },

  { id: 'em2-k-08', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'shapes',
    visual: '🔺', prompt: 'Which shape has 3 corners AND 3 sides?',
    options: ['square', 'circle', 'triangle', 'rectangle'], answer: 'triangle',
    explanation: 'A triangle has 3 sides AND 3 corners — tri means three!' },

  { id: 'em2-k-09', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'counting',
    visual: '⭐', prompt: 'Count the stars: ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ — Is that 10?',
    options: ['Yes, that is 10!', 'No, that is 8', 'No, that is 9', 'No, that is 11'], answer: 'Yes, that is 10!',
    explanation: 'Count them carefully: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — yes, TEN stars!' },

  { id: 'em2-k-10', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'addition',
    visual: '🐥', prompt: '4 + 4 = ?',
    options: ['6', '7', '8', '9'], answer: '8',
    explanation: '4 + 4 = 8! It\'s a double — when you add a number to itself, that\'s called a double!' },

  { id: 'em2-k-11', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🍪', prompt: '10 - 3 = ?',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '10 - 3 = 7! Count back from 10: 9, 8, 7 — seven is left!' },

  { id: 'em2-k-12', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'ordering numbers',
    visual: '🔢', prompt: 'Put these numbers in ORDER from smallest to biggest: 3, 7, 1, 5. Which comes first?',
    options: ['3', '7', '1', '5'], answer: '1',
    explanation: '1 is the smallest! The order is: 1, 3, 5, 7. 1 comes first!' },

  { id: 'em2-k-13', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'grouping by 10s',
    visual: '🖐️', prompt: 'If you have 10 fingers on two hands, how many fingers on ONE hand?',
    options: ['4', '5', '6', '10'], answer: '5',
    explanation: '10 total ÷ 2 hands = 5 fingers on each hand! 5 + 5 = 10!' },

  { id: 'em2-k-14', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'shapes',
    visual: '🎱', prompt: 'Which shape has NO sides and NO corners?',
    options: ['square', 'triangle', 'circle', 'rectangle'], answer: 'circle',
    explanation: 'A circle is perfectly round with NO sides and NO corners. Isn\'t that special?' },

  { id: 'em2-k-15', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'number bonds',
    visual: '🦋', prompt: 'What is 5 + 5?',
    options: ['8', '9', '10', '11'], answer: '10',
    explanation: '5 + 5 = 10! That\'s the most important double — five and five make ten!' },

  { id: 'em2-k-16', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'more/less/equal',
    visual: '🐟', prompt: 'There are 6 fish 🐟 in one tank and 6 fish 🐟 in another tank. They have...',
    options: ['the same amount', 'more in the first tank', 'more in the second tank', 'fewer altogether'], answer: 'the same amount',
    explanation: '6 = 6! When two groups have the same number, they are EQUAL. Great noticing!' },

  { id: 'em2-k-17', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🌸', prompt: '7 - 7 = ?',
    options: ['0', '1', '7', '14'], answer: '0',
    explanation: '7 - 7 = 0! When you take away all of something, you have ZERO left!' },

  { id: 'em2-k-18', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'counting',
    visual: '🌈', prompt: 'Count backwards: 10, 9, 8, 7, ?',
    options: ['5', '6', '8', '4'], answer: '6',
    explanation: 'Counting backwards: 10, 9, 8, 7, 6! Good backwards counting!' },

  { id: 'em2-k-19', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'addition',
    visual: '🚂', prompt: '6 + 2 = ?',
    options: ['7', '8', '9', '6'], answer: '8',
    explanation: '6 + 2 = 8! Count on from 6: 7, 8 — eight!' },

  { id: 'em2-k-20', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'shapes',
    visual: '📦', prompt: 'A box has the shape of a...',
    options: ['sphere', 'cylinder', 'cube', 'cone'], answer: 'cube',
    explanation: 'A box is shaped like a CUBE! A cube has 6 square faces — like a dice!' },

  { id: 'em2-k-21', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'ordering numbers',
    visual: '🔢', prompt: 'Which number is the BIGGEST: 12, 4, 17, 9?',
    options: ['12', '4', '17', '9'], answer: '17',
    explanation: '17 is the biggest! It has a 1 in the tens place, which means more than ten!' },

  { id: 'em2-k-22', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'number bonds',
    visual: '💎', prompt: '2 + ? = 9',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '2 + 7 = 9! Count up from 2: 3, 4, 5, 6, 7, 8, 9 — seven more!' },

  { id: 'em2-k-23', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'grouping by 10s',
    visual: '🧺', prompt: 'If you put 10 eggs in one basket, how many baskets do you need for 20 eggs?',
    options: ['1', '2', '3', '4'], answer: '2',
    explanation: '20 eggs ÷ 10 per basket = 2 baskets! 10 + 10 = 20!' },

  { id: 'em2-k-24', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🐦', prompt: '9 - 4 = ?',
    options: ['3', '4', '5', '6'], answer: '5',
    explanation: '9 - 4 = 5! Think: 4 + 5 = 9, so the missing piece is 5!' },

  { id: 'em2-k-25', type: 'multiple-choice', level: 'K', subject: 'math', language: 'english', topic: 'addition',
    visual: '🎀', prompt: '0 + 8 = ?',
    options: ['0', '7', '8', '9'], answer: '8',
    explanation: '0 + 8 = 8! Adding zero to any number gives you the same number back!' },

  // =====================================================================
  // 1ST GRADE — 25 questions
  // Topics: addition to 20, subtraction from 20, doubles, tens/ones place value,
  //         1-step word problems, time (hour/half-hour), measurement, skip counting
  // =====================================================================
  { id: 'em2-1-01', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'addition',
    visual: '🌺', prompt: '9 + 6 = ?',
    options: ['13', '14', '15', '16'], answer: '15',
    explanation: '9 + 6 = 15! Try: 9 + 1 = 10, then 10 + 5 = 15. Make a ten!' },

  { id: 'em2-1-02', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🍒', prompt: '17 - 8 = ?',
    options: ['7', '8', '9', '10'], answer: '9',
    explanation: '17 - 8 = 9! Think: 8 + ? = 17. Count on from 8: 9, 10, 11, 12, 13, 14, 15, 16, 17 — 9 more!' },

  { id: 'em2-1-03', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'doubles',
    visual: '🦆', prompt: '7 + 7 = ?',
    options: ['12', '13', '14', '15'], answer: '14',
    explanation: '7 + 7 = 14! Doubles are FAST to learn — 7 doubled is 14!' },

  { id: 'em2-1-04', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'place value',
    visual: '🏗️', prompt: 'In the number 64, how many TENS are there?',
    options: ['4', '6', '64', '10'], answer: '6',
    explanation: '64 = 6 tens + 4 ones. There are SIX tens in 64!' },

  { id: 'em2-1-05', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'word problems',
    visual: '🍭', prompt: 'Avery had 13 stickers. She got 5 more for her birthday. How many stickers does she have now?',
    options: ['17', '18', '19', '20'], answer: '18',
    explanation: '13 + 5 = 18 stickers! What a great birthday gift!' },

  { id: 'em2-1-06', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'time',
    visual: '🕕', prompt: 'The clock shows the BIG hand on 6 and the little hand on 2. What time is it?',
    options: ['2:00', '2:30', '6:10', '6:30'], answer: '2:30',
    explanation: 'Big hand on 6 = half past, little hand on 2 = the 2 o\'clock hour. So it\'s 2:30!' },

  { id: 'em2-1-07', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'skip counting',
    visual: '🐸', prompt: 'Skip count by 5s: 5, 10, 15, 20, ?',
    options: ['22', '23', '24', '25'], answer: '25',
    explanation: 'Skip counting by 5s: 5, 10, 15, 20, 25! Five more each time!' },

  { id: 'em2-1-08', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'measurement',
    visual: '📐', prompt: 'You measure a pencil with paper clips. It is 6 paper clips long. Your book is 12 paper clips long. The book is how many times LONGER than the pencil?',
    options: ['2', '3', '4', '6'], answer: '2',
    explanation: '12 ÷ 6 = 2. The book is TWICE as long as the pencil!' },

  { id: 'em2-1-09', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'addition',
    visual: '🌙', prompt: '11 + 8 = ?',
    options: ['17', '18', '19', '20'], answer: '19',
    explanation: '11 + 8 = 19! Count on from 11: 12, 13, 14, 15, 16, 17, 18, 19 — you got it!' },

  { id: 'em2-1-10', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🎠', prompt: '20 - 7 = ?',
    options: ['11', '12', '13', '14'], answer: '13',
    explanation: '20 - 7 = 13! Think: 7 + 13 = 20. You can check by adding back!' },

  { id: 'em2-1-11', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'doubles',
    visual: '🐝', prompt: '6 + 6 = ?',
    options: ['10', '11', '12', '13'], answer: '12',
    explanation: '6 + 6 = 12! Six doubled is twelve — doubles are your secret shortcut!' },

  { id: 'em2-1-12', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'place value',
    visual: '🔢', prompt: 'What is the ONES digit in the number 78?',
    options: ['7', '8', '70', '78'], answer: '8',
    explanation: 'In 78: 7 is the tens digit, and 8 is the ONES digit on the right!' },

  { id: 'em2-1-13', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'word problems',
    visual: '🐣', prompt: '15 birds are in a tree. 6 fly away. How many birds are left?',
    options: ['7', '8', '9', '10'], answer: '9',
    explanation: '15 - 6 = 9 birds! Think of it as counting back 6 from 15!' },

  { id: 'em2-1-14', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'time',
    visual: '⏰', prompt: 'If it is 4:00 now, what time will it be in 30 minutes?',
    options: ['4:15', '4:30', '4:45', '5:00'], answer: '4:30',
    explanation: '4:00 + 30 minutes = 4:30! Half an hour later!' },

  { id: 'em2-1-15', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'skip counting',
    visual: '🚀', prompt: 'Skip count by 10s: 10, 20, 30, 40, ?',
    options: ['45', '48', '50', '60'], answer: '50',
    explanation: 'Skip counting by 10s: 10, 20, 30, 40, 50! Ten more each jump!' },

  { id: 'em2-1-16', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'measurement',
    visual: '🦒', prompt: 'Which is the BEST unit to measure your shoe — inches or miles?',
    options: ['miles', 'inches', 'pounds', 'gallons'], answer: 'inches',
    explanation: 'Inches are perfect for small things like shoes! Miles are for very long distances!' },

  { id: 'em2-1-17', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'addition',
    visual: '🌊', prompt: '13 + 4 = ?',
    options: ['15', '16', '17', '18'], answer: '17',
    explanation: '13 + 4 = 17! Count on from 13: 14, 15, 16, 17 — four steps!' },

  { id: 'em2-1-18', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'subtraction',
    visual: '🎪', prompt: '16 - 9 = ?',
    options: ['5', '6', '7', '8'], answer: '7',
    explanation: '16 - 9 = 7! Think: 9 + 7 = 16. Use addition to check subtraction!' },

  { id: 'em2-1-19', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'doubles',
    visual: '🐞', prompt: '8 + 8 = ?',
    options: ['14', '15', '16', '17'], answer: '16',
    explanation: '8 + 8 = 16! Eight doubled is sixteen! Double facts are like a superpower!' },

  { id: 'em2-1-20', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'place value',
    visual: '🏆', prompt: 'What number has 5 tens and 3 ones?',
    options: ['35', '53', '53', '530'], answer: '53',
    explanation: '5 tens = 50, and 3 ones = 3. So 50 + 3 = 53! You built a number!' },

  { id: 'em2-1-21', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'word problems',
    visual: '🛒', prompt: 'A toy costs 12 cents. You pay with 20 cents. What is your change?',
    options: ['6 cents', '7 cents', '8 cents', '9 cents'], answer: '8 cents',
    explanation: '20 - 12 = 8 cents change! You did great math shopping!' },

  { id: 'em2-1-22', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'skip counting',
    visual: '🌿', prompt: 'Skip count by 2s: 2, 4, 6, 8, 10, ?',
    options: ['11', '12', '13', '14'], answer: '12',
    explanation: 'Skip counting by 2s: 2, 4, 6, 8, 10, 12! Add 2 each time!' },

  { id: 'em2-1-23', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'time',
    visual: '🕞', prompt: 'What time is shown when the little hand is between 3 and 4, and the big hand is on 6?',
    options: ['3:00', '3:30', '4:00', '4:30'], answer: '3:30',
    explanation: 'Big hand on 6 = 30 minutes, little hand between 3 and 4 = after the 3. So it\'s 3:30!' },

  { id: 'em2-1-24', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'addition',
    visual: '🦋', prompt: '5 + 8 = ?',
    options: ['11', '12', '13', '14'], answer: '13',
    explanation: '5 + 8 = 13! Try making a ten: 8 + 2 = 10, then 10 + 3 = 13!' },

  { id: 'em2-1-25', type: 'multiple-choice', level: '1', subject: 'math', language: 'english', topic: 'word problems',
    visual: '🌻', prompt: 'There are 18 sunflowers in a vase. 9 are yellow and the rest are orange. How many are orange?',
    options: ['7', '8', '9', '10'], answer: '9',
    explanation: '18 - 9 = 9 orange sunflowers! And 9 + 9 = 18 is a double fact!' },

  // =====================================================================
  // 2ND GRADE — 25 questions
  // Topics: 3-digit add/sub, multiplication intro, division intro, fractions,
  //         measurement, graphs, money, time to 5 minutes
  // =====================================================================
  { id: 'em2-2-01', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: '3-digit addition',
    visual: '🧮', prompt: '134 + 251 = ?',
    options: ['375', '385', '385', '485'], answer: '385',
    explanation: '4+1=5, 3+5=8, 1+2=3. Put it together: 385! Great column addition!' },

  { id: 'em2-2-02', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: '3-digit subtraction',
    visual: '🎯', prompt: '500 - 200 = ?',
    options: ['200', '300', '400', '700'], answer: '300',
    explanation: '500 - 200 = 300! Think: 5 hundreds minus 2 hundreds = 3 hundreds!' },

  { id: 'em2-2-03', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '🍬', prompt: '3 bags of candy have 4 pieces each. How many pieces of candy total?',
    options: ['7', '10', '12', '14'], answer: '12',
    explanation: '3 × 4 = 12! Three equal groups of 4 = twelve pieces!' },

  { id: 'em2-2-04', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'division',
    visual: '🍕', prompt: 'Share 12 slices of pizza equally among 3 friends. How many slices each?',
    options: ['2', '3', '4', '6'], answer: '4',
    explanation: '12 ÷ 3 = 4 slices each! Dividing is sharing equally!' },

  { id: 'em2-2-05', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'fractions',
    visual: '🎂', prompt: 'A cake is cut into 3 equal pieces. If you eat 1 piece, what fraction of the cake did you eat?',
    options: ['1/2', '1/3', '1/4', '2/3'], answer: '1/3',
    explanation: '1 out of 3 equal pieces = 1/3! One-third of the cake!' },

  { id: 'em2-2-06', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'fractions',
    visual: '🍫', prompt: 'A chocolate bar is split into 4 equal parts. Sofia has 3 parts. What fraction does she have?',
    options: ['1/4', '2/4', '3/4', '4/3'], answer: '3/4',
    explanation: '3 out of 4 parts = 3/4! Sofia has three-quarters of the chocolate bar!' },

  { id: 'em2-2-07', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'money',
    visual: '💰', prompt: 'You have 1 quarter (25¢), 1 dime (10¢), and 1 nickel (5¢). How much money total?',
    options: ['35¢', '40¢', '45¢', '50¢'], answer: '40¢',
    explanation: '25 + 10 + 5 = 40 cents! You\'re great at counting money!' },

  { id: 'em2-2-08', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'time',
    visual: '⏰', prompt: 'The clock shows 7:45. What time will it be in 15 minutes?',
    options: ['7:55', '8:00', '8:05', '8:15'], answer: '8:00',
    explanation: '7:45 + 15 minutes = 8:00! Fifteen more minutes and we reach the top of the hour!' },

  { id: 'em2-2-09', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'measurement',
    visual: '📏', prompt: 'A book is 30 cm long. A pencil is 18 cm long. How much LONGER is the book?',
    options: ['10 cm', '11 cm', '12 cm', '13 cm'], answer: '12 cm',
    explanation: '30 - 18 = 12 cm! The book is 12 centimeters longer than the pencil!' },

  { id: 'em2-2-10', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'graphs',
    visual: '📊', prompt: 'In a picture graph: 🌞🌞🌞🌞 = sunny days, 🌧️🌧️ = rainy days. How many MORE sunny days were there?',
    options: ['1', '2', '3', '4'], answer: '2',
    explanation: '4 sunny - 2 rainy = 2 more sunny days! You can read picture graphs like a pro!' },

  { id: 'em2-2-11', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: '3-digit addition',
    visual: '🌟', prompt: '267 + 128 = ?',
    options: ['385', '395', '395', '485'], answer: '395',
    explanation: '7+8=15 (write 5, carry 1). 6+2+1=9. 2+1=3. Answer: 395!' },

  { id: 'em2-2-12', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: '3-digit subtraction',
    visual: '🔢', prompt: '348 - 125 = ?',
    options: ['213', '223', '233', '243'], answer: '223',
    explanation: '8-5=3, 4-2=2, 3-1=2. Answer: 223! Column by column!' },

  { id: 'em2-2-13', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '🍩', prompt: '5 boxes of donuts have 4 donuts each. How many donuts total?',
    options: ['16', '18', '20', '24'], answer: '20',
    explanation: '5 × 4 = 20 donuts! Count by 4s five times: 4, 8, 12, 16, 20!' },

  { id: 'em2-2-14', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'division',
    visual: '🐠', prompt: '15 fish are placed equally into 5 bowls. How many fish in each bowl?',
    options: ['2', '3', '4', '5'], answer: '3',
    explanation: '15 ÷ 5 = 3 fish in each bowl! Each bowl gets the same amount!' },

  { id: 'em2-2-15', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'fractions',
    visual: '🥧', prompt: 'A pie is cut into 2 equal parts. You eat half. What fraction is left?',
    options: ['0', '1/4', '1/2', '1/3'], answer: '1/2',
    explanation: 'You ate 1/2, so 1/2 is left! One half plus one half equals the whole pie!' },

  { id: 'em2-2-16', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'money',
    visual: '🛍️', prompt: 'You have $1.00. You buy a pencil for 65¢. How much change do you get?',
    options: ['25¢', '30¢', '35¢', '45¢'], answer: '35¢',
    explanation: '100 - 65 = 35 cents change! Count up: 65, 75, 85, 95, 100 — that\'s 35¢!' },

  { id: 'em2-2-17', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'time',
    visual: '🕐', prompt: 'School starts at 8:00 AM. Lunch is at 12:00 PM. How many hours until lunch?',
    options: ['3', '4', '5', '6'], answer: '4',
    explanation: '8:00 to 12:00 = 4 hours! Count: 9, 10, 11, 12 — four hours later!' },

  { id: 'em2-2-18', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'measurement',
    visual: '🦷', prompt: 'About how long is a toothbrush? Choose the BEST estimate.',
    options: ['2 inches', '7 inches', '2 feet', '7 feet'], answer: '7 inches',
    explanation: 'A toothbrush is about 7 inches long! That\'s a great estimate!' },

  { id: 'em2-2-19', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'graphs',
    visual: '📊', prompt: 'A bar graph shows: Cats=8, Dogs=12, Fish=5. How many pets are there total?',
    options: ['20', '23', '25', '30'], answer: '25',
    explanation: '8 + 12 + 5 = 25 pets total! Adding up all the bars!' },

  { id: 'em2-2-20', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '🌸', prompt: 'An array has 3 rows and 6 columns. How many total?',
    options: ['9', '15', '18', '24'], answer: '18',
    explanation: '3 × 6 = 18! Three rows, six in each row — count them all!' },

  { id: 'em2-2-21', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'division',
    visual: '🎪', prompt: '20 clowns are divided into groups of 4. How many groups are there?',
    options: ['4', '5', '6', '8'], answer: '5',
    explanation: '20 ÷ 4 = 5 groups! Think: how many fours fit in 20? Five!' },

  { id: 'em2-2-22', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: '3-digit addition',
    visual: '🏅', prompt: '450 + 350 = ?',
    options: ['700', '750', '800', '850'], answer: '800',
    explanation: '450 + 350 = 800! 4+3=7 hundreds, 5+5=10 tens = 1 more hundred. 700+100=800!' },

  { id: 'em2-2-23', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'money',
    visual: '💵', prompt: 'You earn $1.50 on Monday and $2.50 on Tuesday. How much did you earn in all?',
    options: ['$3.00', '$3.50', '$4.00', '$4.50'], answer: '$4.00',
    explanation: '$1.50 + $2.50 = $4.00! The 50¢ + 50¢ = $1.00, plus $1 + $2 = $3, total $4!' },

  { id: 'em2-2-24', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'fractions',
    visual: '🍉', prompt: 'Which fraction is GREATER: 1/2 or 1/4?',
    options: ['1/4', '1/2', 'they are equal', 'can\'t tell'], answer: '1/2',
    explanation: '1/2 is BIGGER than 1/4! Imagine cutting a watermelon into 2 pieces vs. 4 pieces — 2 pieces are bigger!' },

  { id: 'em2-2-25', type: 'multiple-choice', level: '2', subject: 'math', language: 'english', topic: 'time',
    visual: '🕔', prompt: 'The clock shows 4:20. What time will it be in 25 minutes?',
    options: ['4:40', '4:45', '4:50', '5:00'], answer: '4:45',
    explanation: '4:20 + 25 minutes = 4:45! Twenty more gets to 4:40, then five more is 4:45!' },

  // =====================================================================
  // 3RD GRADE — 25 questions
  // Topics: multiplication facts 0-12, long division, fractions on number line,
  //         mixed numbers, area/perimeter, multi-step word problems,
  //         rounding, elapsed time
  // =====================================================================
  { id: 'em2-3-01', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '⭐', prompt: '9 × 6 = ?',
    options: ['48', '54', '63', '56'], answer: '54',
    explanation: '9 × 6 = 54! Trick: 10 × 6 = 60, then subtract one 6: 60 - 6 = 54!' },

  { id: 'em2-3-02', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '🌟', prompt: '12 × 4 = ?',
    options: ['44', '46', '48', '52'], answer: '48',
    explanation: '12 × 4 = 48! Think: 10 × 4 = 40, and 2 × 4 = 8. Then 40 + 8 = 48!' },

  { id: 'em2-3-03', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'division',
    visual: '➗', prompt: '56 ÷ 7 = ?',
    options: ['6', '7', '8', '9'], answer: '8',
    explanation: '56 ÷ 7 = 8! Think: 7 × 8 = 56. Multiplication helps you divide!' },

  { id: 'em2-3-04', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'division',
    visual: '🍎', prompt: '72 ÷ 8 = ?',
    options: ['7', '8', '9', '10'], answer: '9',
    explanation: '72 ÷ 8 = 9! Think: 8 × 9 = 72. You know your times tables!' },

  { id: 'em2-3-05', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'fractions on number line',
    visual: '📏', prompt: 'On a number line from 0 to 1, where is 1/2?',
    options: ['at the beginning', 'exactly in the middle', 'at the end', 'near the end'], answer: 'exactly in the middle',
    explanation: '1/2 is RIGHT in the middle of 0 and 1! Halfway between zero and one!' },

  { id: 'em2-3-06', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'fractions',
    visual: '🔢', prompt: 'Which fraction is closest to 1 whole? 1/4, 3/4, 1/2, or 2/4?',
    options: ['1/4', '1/2', '2/4', '3/4'], answer: '3/4',
    explanation: '3/4 is the closest to 1 whole! It only needs 1 more quarter to be complete!' },

  { id: 'em2-3-07', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'mixed numbers',
    visual: '🥧', prompt: 'Avery ate 1 full pie and half of another. How much did she eat total?',
    options: ['1/2', '1', '1 and 1/2', '2'], answer: '1 and 1/2',
    explanation: '1 whole pie + 1/2 pie = 1½ pies! That\'s called a mixed number!' },

  { id: 'em2-3-08', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'area',
    visual: '📐', prompt: 'A square garden has sides of 6 meters. What is the AREA?',
    options: ['12 m²', '24 m²', '30 m²', '36 m²'], answer: '36 m²',
    explanation: 'Area = side × side = 6 × 6 = 36 square meters! Squares have equal sides!' },

  { id: 'em2-3-09', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'perimeter',
    visual: '🔲', prompt: 'A rectangle is 8 cm long and 3 cm wide. What is its PERIMETER?',
    options: ['11 cm', '22 cm', '24 cm', '25 cm'], answer: '22 cm',
    explanation: 'Perimeter = all sides added: 8 + 8 + 3 + 3 = 22 cm! Travel around the whole shape!' },

  { id: 'em2-3-10', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'rounding',
    visual: '🎯', prompt: 'Round 47 to the nearest 10.',
    options: ['40', '45', '50', '60'], answer: '50',
    explanation: '47 rounds UP to 50! The digit in the ones place (7) is 5 or more, so round up!' },

  { id: 'em2-3-11', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'rounding',
    visual: '🔢', prompt: 'Round 342 to the nearest 100.',
    options: ['300', '340', '350', '400'], answer: '300',
    explanation: '342 rounds DOWN to 300! The tens digit (4) is less than 5, so round down!' },

  { id: 'em2-3-12', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'elapsed time',
    visual: '⏱️', prompt: 'A movie starts at 2:15 PM and ends at 4:45 PM. How long is the movie?',
    options: ['1 hour 30 min', '2 hours', '2 hours 30 min', '3 hours'], answer: '2 hours 30 min',
    explanation: '2:15 to 4:15 = 2 hours. 4:15 to 4:45 = 30 more minutes. Total: 2 hours 30 minutes!' },

  { id: 'em2-3-13', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multi-step word problems',
    visual: '🛒', prompt: 'Avery buys 4 packs of cards for $3 each and a notebook for $5. How much does she spend total?',
    options: ['$14', '$16', '$17', '$20'], answer: '$17',
    explanation: '4 × $3 = $12 for cards, plus $5 for notebook = $17 total. Two steps!' },

  { id: 'em2-3-14', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '🎲', prompt: '11 × 7 = ?',
    options: ['70', '77', '78', '88'], answer: '77',
    explanation: '11 × 7 = 77! Trick for 11s: the answer repeats the digit you multiply by: 7, 7!' },

  { id: 'em2-3-15', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'division',
    visual: '🍬', prompt: '45 candies shared equally among 9 kids. How many does each kid get?',
    options: ['4', '5', '6', '7'], answer: '5',
    explanation: '45 ÷ 9 = 5 candies each! Think: 9 × 5 = 45!' },

  { id: 'em2-3-16', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'fractions on number line',
    visual: '📏', prompt: 'On a number line, which fraction is between 1/4 and 3/4?',
    options: ['1/8', '1/4', '2/4', '7/8'], answer: '2/4',
    explanation: '2/4 (which equals 1/2) is exactly halfway between 1/4 and 3/4!' },

  { id: 'em2-3-17', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'mixed numbers',
    visual: '🍕', prompt: 'There are 2 full pizzas and 1/3 of another pizza. Write this as a mixed number.',
    options: ['2/3', '3 and 1/2', '2 and 1/3', '1 and 2/3'], answer: '2 and 1/3',
    explanation: '2 full pizzas + 1/3 more = 2 and 1/3! That\'s a mixed number — whole + fraction!' },

  { id: 'em2-3-18', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'area',
    visual: '🏡', prompt: 'A bedroom floor is 5 meters long and 4 meters wide. What is the area?',
    options: ['9 m²', '18 m²', '20 m²', '25 m²'], answer: '20 m²',
    explanation: 'Area = length × width = 5 × 4 = 20 square meters! You could fit 20 one-meter tiles!' },

  { id: 'em2-3-19', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'perimeter',
    visual: '🔲', prompt: 'A square with side length 9 cm. What is the perimeter?',
    options: ['18 cm', '27 cm', '36 cm', '45 cm'], answer: '36 cm',
    explanation: 'Perimeter of square = 4 × side = 4 × 9 = 36 cm! All 4 sides are equal!' },

  { id: 'em2-3-20', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multi-step word problems',
    visual: '🌈', prompt: 'A class has 24 students. They sit in rows of 6. If 2 students are absent, how many rows are full?',
    options: ['3', '4', '5', '6'], answer: '3',
    explanation: '24 - 2 = 22 students present. 22 ÷ 6 = 3 full rows with 4 left over. 3 full rows!' },

  { id: 'em2-3-21', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'rounding',
    visual: '🎯', prompt: 'Round 865 to the nearest 10.',
    options: ['860', '870', '800', '900'], answer: '870',
    explanation: '865 rounds UP to 870! The ones digit (5) means we round up the tens!' },

  { id: 'em2-3-22', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'elapsed time',
    visual: '⏱️', prompt: 'Practice starts at 3:30 PM and runs for 1 hour 45 minutes. When does it end?',
    options: ['4:45 PM', '5:00 PM', '5:15 PM', '5:30 PM'], answer: '5:15 PM',
    explanation: '3:30 + 1 hour = 4:30. Then + 45 min = 5:15 PM! Practice ends at 5:15!' },

  { id: 'em2-3-23', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multiplication',
    visual: '🌟', prompt: '8 × 0 = ?',
    options: ['0', '8', '80', '88'], answer: '0',
    explanation: 'Any number multiplied by ZERO equals zero! 8 groups of nothing = nothing!' },

  { id: 'em2-3-24', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'division',
    visual: '➗', prompt: '63 ÷ 9 = ?',
    options: ['6', '7', '8', '9'], answer: '7',
    explanation: '63 ÷ 9 = 7! Think: 9 × 7 = 63. You\'re a multiplication-division superstar!' },

  { id: 'em2-3-25', type: 'multiple-choice', level: '3', subject: 'math', language: 'english', topic: 'multi-step word problems',
    visual: '🎒', prompt: 'Avery has 3 boxes with 12 crayons each. She gives away 15 crayons. How many does she have left?',
    options: ['19', '21', '21', '27'], answer: '21',
    explanation: '3 × 12 = 36 crayons total. 36 - 15 = 21 crayons left! Two steps — you nailed it!' },

  // =====================================================================
  // TAG LEVEL — 25 questions
  // Topics: prime numbers, PEMDAS, negative numbers, coordinate plane,
  //         ratios, percentages, algebraic thinking, complex word problems
  // =====================================================================
  { id: 'em2-t-01', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'prime numbers',
    visual: '🔢', prompt: 'Which of these numbers is a PRIME number?',
    options: ['9', '15', '17', '21'], answer: '17',
    explanation: '17 is prime! It can only be divided evenly by 1 and 17. The others have more factors!' },

  { id: 'em2-t-02', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'prime numbers',
    visual: '🌟', prompt: 'How many prime numbers are between 1 and 10?',
    options: ['2', '3', '4', '5'], answer: '4',
    explanation: 'The primes between 1 and 10 are: 2, 3, 5, 7 — four prime numbers!' },

  { id: 'em2-t-03', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'order of operations',
    visual: '🧮', prompt: '2 + 3 × 4 = ?',
    options: ['14', '20', '24', '10'], answer: '14',
    explanation: 'PEMDAS! Multiply first: 3 × 4 = 12, then add 2: 12 + 2 = 14. Multiplication before addition!' },

  { id: 'em2-t-04', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'order of operations',
    visual: '🔢', prompt: '(5 + 3) × 2 - 4 = ?',
    options: ['10', '12', '14', '18'], answer: '12',
    explanation: 'Parentheses first: (5+3)=8. Then multiply: 8×2=16. Then subtract: 16-4=12. PEMDAS!' },

  { id: 'em2-t-05', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'negative numbers',
    visual: '🌡️', prompt: 'The temperature is 3°C. It drops 8 degrees. What is the new temperature?',
    options: ['5°C', '-5°C', '-3°C', '11°C'], answer: '-5°C',
    explanation: '3 - 8 = -5°C! When we go below zero, we use negative numbers. Brrrr!' },

  { id: 'em2-t-06', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'negative numbers',
    visual: '🔢', prompt: 'Which number is SMALLEST: -3, 0, -7, 2?',
    options: ['-3', '0', '-7', '2'], answer: '-7',
    explanation: '-7 is the smallest! On a number line, negative numbers get smaller as they get bigger in size!' },

  { id: 'em2-t-07', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'coordinate plane',
    visual: '📍', prompt: 'On a coordinate grid, the point (3, 5) is located __ units right and __ units up from the origin (0, 0).',
    options: ['5 right, 3 up', '3 right, 5 up', '3 right, 3 up', '5 right, 5 up'], answer: '3 right, 5 up',
    explanation: '(3, 5) means 3 across (x), then 5 up (y). Always go right first, then up!' },

  { id: 'em2-t-08', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'coordinate plane',
    visual: '🗺️', prompt: 'A point is at (0, 4) on a coordinate plane. What point is directly 3 units to the RIGHT of it?',
    options: ['(3, 0)', '(3, 4)', '(0, 7)', '(4, 3)'], answer: '(3, 4)',
    explanation: 'Moving RIGHT changes only x! (0, 4) + 3 right = (3, 4). The y stays the same!' },

  { id: 'em2-t-09', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'ratios',
    visual: '⚖️', prompt: 'For every 2 red marbles there are 3 blue marbles. If you have 6 red marbles, how many blue marbles do you have?',
    options: ['6', '8', '9', '12'], answer: '9',
    explanation: 'Ratio 2:3 — double it to get 4:6, triple it to get 6:9. Nine blue marbles!' },

  { id: 'em2-t-10', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'ratios',
    visual: '🎨', prompt: 'A recipe uses 1 cup of sugar for every 3 cups of flour. For 9 cups of flour, how many cups of sugar?',
    options: ['2', '3', '4', '6'], answer: '3',
    explanation: 'Ratio 1:3 — for 9 cups flour (3×3), you need 3×1 = 3 cups sugar!' },

  { id: 'em2-t-11', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'percentage basics',
    visual: '💯', prompt: '50% of 80 = ?',
    options: ['20', '40', '50', '60'], answer: '40',
    explanation: '50% means half! Half of 80 = 40. Percent means "out of 100" — 50 out of 100 is half!' },

  { id: 'em2-t-12', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'percentage basics',
    visual: '🛍️', prompt: 'A $20 toy is on sale for 25% off. How much do you save?',
    options: ['$2', '$4', '$5', '$6'], answer: '$5',
    explanation: '25% of $20 = 1/4 of $20 = $5 savings! 25% is one quarter of the total!' },

  { id: 'em2-t-13', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'algebraic thinking',
    visual: '🔡', prompt: 'Solve for n: n × 6 = 42',
    options: ['6', '7', '8', '9'], answer: '7',
    explanation: 'n × 6 = 42, so n = 42 ÷ 6 = 7! Check: 7 × 6 = 42 ✓ You solved an equation!' },

  { id: 'em2-t-14', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'algebraic thinking',
    visual: '⚖️', prompt: 'If 3n + 4 = 19, what is n?',
    options: ['3', '4', '5', '6'], answer: '5',
    explanation: '3n = 19 - 4 = 15. Then n = 15 ÷ 3 = 5. Check: 3×5+4 = 15+4 = 19 ✓ Amazing algebra!' },

  { id: 'em2-t-15', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'complex word problems',
    visual: '🧩', prompt: 'Avery reads 15 pages per day. Her book has 180 pages. She has already read 60 pages. How many more days until she finishes?',
    options: ['6', '7', '8', '9'], answer: '8',
    explanation: '180 - 60 = 120 pages left. 120 ÷ 15 = 8 more days! Multi-step thinking!' },

  { id: 'em2-t-16', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'prime numbers',
    visual: '🔑', prompt: 'What is the ONLY even prime number?',
    options: ['0', '1', '2', '4'], answer: '2',
    explanation: '2 is the ONLY even prime number! Every other even number can be divided by 2, but 2 itself is only divisible by 1 and 2!' },

  { id: 'em2-t-17', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'order of operations',
    visual: '🧮', prompt: '10 - 2² + 3 = ?',
    options: ['9', '11', '33', '105'], answer: '9',
    explanation: 'Exponents first: 2² = 4. Then left to right: 10 - 4 = 6, then 6 + 3 = 9. PEMDAS!' },

  { id: 'em2-t-18', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'negative numbers',
    visual: '🔢', prompt: '-4 + 9 = ?',
    options: ['-5', '5', '13', '-13'], answer: '5',
    explanation: 'Start at -4, then jump 9 spaces forward on the number line: -4, -3, -2, -1, 0, 1, 2, 3, 4, 5. The answer is 5!' },

  { id: 'em2-t-19', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'coordinate plane',
    visual: '📍', prompt: 'Which axis goes LEFT and RIGHT on a coordinate plane?',
    options: ['y-axis', 'x-axis', 'z-axis', 'both axes'], answer: 'x-axis',
    explanation: 'The x-axis is HORIZONTAL — it goes left and right! The y-axis goes up and down!' },

  { id: 'em2-t-20', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'ratios',
    visual: '⚖️', prompt: 'In a class of 30 students, 12 are boys. What is the ratio of girls to total students?',
    options: ['12:30', '18:30', '12:18', '30:12'], answer: '18:30',
    explanation: '30 - 12 = 18 girls. Girls to total = 18:30. This can simplify to 3:5!' },

  { id: 'em2-t-21', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'percentage basics',
    visual: '💯', prompt: '10% of 150 = ?',
    options: ['10', '15', '50', '100'], answer: '15',
    explanation: '10% is easy — just divide by 10! 150 ÷ 10 = 15. Ten percent of 150 is 15!' },

  { id: 'em2-t-22', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'algebraic thinking',
    visual: '🔡', prompt: 'The formula for area is A = l × w. If A = 48 and l = 8, what is w?',
    options: ['4', '5', '6', '7'], answer: '6',
    explanation: '48 = 8 × w, so w = 48 ÷ 8 = 6! You solved a real algebra formula!' },

  { id: 'em2-t-23', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'complex word problems',
    visual: '💰', prompt: 'A store charges $3.50 per lb of cheese. Avery buys 2.5 lbs. She also buys milk for $2.75. What is her total?',
    options: ['$10.75', '$11.25', '$11.50', '$12.00'], answer: '$11.50',
    explanation: '2.5 × $3.50 = $8.75 for cheese. $8.75 + $2.75 = $11.50 total! Great decimal math!' },

  { id: 'em2-t-24', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'prime numbers',
    visual: '🔢', prompt: 'Is 51 a prime number?',
    options: ['Yes, it has only 2 factors', 'No, it is divisible by 3', 'No, it is divisible by 7', 'Yes, it is odd'], answer: 'No, it is divisible by 3',
    explanation: '51 = 3 × 17! So it is NOT prime. Divisibility trick: 5+1=6, and 6 is divisible by 3!' },

  { id: 'em2-t-25', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'english', topic: 'complex word problems',
    visual: '🧩', prompt: 'A pattern: 2, 6, 18, 54, ?. What rule is used, and what is the next number?',
    options: ['×2, next is 108', '×3, next is 162', '+4, next is 58', '×3, next is 108'], answer: '×3, next is 162',
    explanation: 'Each number is multiplied by 3! 54 × 3 = 162! Finding rules in patterns is brilliant mathematical thinking!' },
]
