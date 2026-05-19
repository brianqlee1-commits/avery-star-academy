import type { Question } from '../../../types'

export const socialStudiesQuestionsExtra: Question[] = [

  // =====================================================================
  // KINDERGARTEN — 25 questions
  // Topics: seasons/holidays, community rules, landmarks, transportation,
  //         voting, national symbols
  // =====================================================================
  { id: 'ess2-k-01', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'seasons',
    visual: '🍁', prompt: 'Which season has falling leaves and Thanksgiving?',
    options: ['fall (autumn)', 'summer', 'winter', 'spring'], answer: 'fall (autumn)',
    explanation: 'Fall is the season of colorful leaves, pumpkins, and Thanksgiving — we give thanks together! 🦃' },

  { id: 'ess2-k-02', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🦃', prompt: 'On Thanksgiving, families come together to eat a big meal. What do we celebrate?',
    options: ['being thankful for what we have', 'the end of school', 'winning a game', 'a birthday'], answer: 'being thankful for what we have',
    explanation: 'Thanksgiving is all about gratitude — saying THANK YOU for family, food, and friends! 🧡' },

  { id: 'ess2-k-03', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '✊', prompt: 'MLK Day honors Dr. Martin Luther King Jr. What did he dream about?',
    options: ['everyone being treated equally and fairly', 'going to the moon', 'building a big school', 'winning a race'], answer: 'everyone being treated equally and fairly',
    explanation: 'Dr. King dreamed that ALL people would be treated with love and fairness. His dream changed America! 🌟' },

  { id: 'ess2-k-04', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🎖️', prompt: 'Veterans Day in November honors people who did what for our country?',
    options: ['served in the military', 'built roads', 'taught school', 'farmed food'], answer: 'served in the military',
    explanation: 'Veterans are brave men and women who served in the military to protect our country. We say THANK YOU! 🇺🇸' },

  { id: 'ess2-k-05', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🌍', prompt: 'Earth Day is in April. What is the main goal of Earth Day?',
    options: ['take care of our planet', 'plant flowers for fun', 'eat healthy food', 'go to school'], answer: 'take care of our planet',
    explanation: 'Earth Day reminds us to recycle, pick up trash, and love our beautiful planet! 🌿💚' },

  { id: 'ess2-k-06', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'community rules',
    visual: '🚦', prompt: 'Why do we have traffic lights?',
    options: ['to keep drivers and walkers safe', 'to make streets pretty', 'to slow everyone down', 'because cars need rest'], answer: 'to keep drivers and walkers safe',
    explanation: 'Traffic lights are community rules on the road — they help everyone get where they\'re going safely! 🟢' },

  { id: 'ess2-k-07', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'community rules',
    visual: '📋', prompt: 'Laws are community rules. Who makes laws for our country?',
    options: ['the government', 'kids at school', 'store owners', 'teachers'], answer: 'the government',
    explanation: 'The government makes laws to help keep everyone safe and treat people fairly! 🏛️' },

  { id: 'ess2-k-08', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'landmarks',
    visual: '🗽', prompt: 'The Statue of Liberty is in New York City. What does she stand for?',
    options: ['freedom', 'strength', 'the ocean', 'buildings'], answer: 'freedom',
    explanation: 'Lady Liberty holds a torch to light the way to FREEDOM! She is a symbol of hope for all! ✨' },

  { id: 'ess2-k-09', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'landmarks',
    visual: '🏛️', prompt: 'The White House is in Washington D.C. Who lives and works there?',
    options: ['the President of the United States', 'firefighters', 'all the senators', 'the Supreme Court judges'], answer: 'the President of the United States',
    explanation: 'The White House is the home AND office of the President — one of the most famous buildings in the world! 🇺🇸' },

  { id: 'ess2-k-10', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'landmarks',
    visual: '🏛️', prompt: 'The Lincoln Memorial in Washington D.C. honors which President?',
    options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'Martin Luther King Jr.'], answer: 'Abraham Lincoln',
    explanation: 'Abraham Lincoln led America during the Civil War and helped end slavery. His big stone statue reminds us of his courage! ⭐' },

  { id: 'ess2-k-11', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'landmarks',
    visual: '🌉', prompt: 'The Golden Gate Bridge is in which state?',
    options: ['California', 'New York', 'Texas', 'Florida'], answer: 'California',
    explanation: 'The Golden Gate Bridge is a beautiful red-orange bridge in San Francisco, California! 🌊' },

  { id: 'ess2-k-12', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'transportation',
    visual: '🚗', prompt: 'Cars, trains, and buses travel on LAND. What do we call these types of transportation?',
    options: ['land transportation', 'air transportation', 'water transportation', 'underground transportation'], answer: 'land transportation',
    explanation: 'Anything that travels on roads, tracks, or paths on the ground is land transportation! 🛤️' },

  { id: 'ess2-k-13', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'transportation',
    visual: '✈️', prompt: 'Airplanes and helicopters travel through the SKY. What kind of transportation is that?',
    options: ['air transportation', 'land transportation', 'sea transportation', 'underground transportation'], answer: 'air transportation',
    explanation: 'Air transportation flies above the clouds! Airplanes can travel thousands of miles in just hours! 🌤️' },

  { id: 'ess2-k-14', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'transportation',
    visual: '⛵', prompt: 'Boats and ships travel on water. What kind of transportation is this?',
    options: ['sea (water) transportation', 'air transportation', 'land transportation', 'underground transportation'], answer: 'sea (water) transportation',
    explanation: 'Sea transportation moves people and goods across oceans, rivers, and lakes! ⚓' },

  { id: 'ess2-k-15', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'voting',
    visual: '🗳️', prompt: 'When we VOTE, we are doing what?',
    options: ['making a fair choice by raising our hand or marking a ballot', 'arguing about who is right', 'letting the teacher decide', 'flipping a coin'], answer: 'making a fair choice by raising our hand or marking a ballot',
    explanation: 'Voting is how we make fair decisions together — everyone gets an equal say! Your voice matters! 🌟' },

  { id: 'ess2-k-16', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'voting',
    visual: '🏫', prompt: 'In your classroom, if you vote for a class pet, why is voting better than one person deciding?',
    options: ['everyone gets a fair say', 'the loudest person wins', 'it is faster', 'it is more fun'], answer: 'everyone gets a fair say',
    explanation: 'Voting means EVERYONE\'S opinion counts equally — that\'s what fairness is all about! 🤝' },

  { id: 'ess2-k-17', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🦅', prompt: 'What is the national bird of the United States?',
    options: ['bald eagle', 'bluebird', 'cardinal', 'owl'], answer: 'bald eagle',
    explanation: 'The BALD EAGLE represents strength, freedom, and courage — it\'s our national symbol! 🇺🇸' },

  { id: 'ess2-k-18', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🇺🇸', prompt: 'The American flag has red, white, and blue. How many stripes does it have?',
    options: ['13', '10', '50', '7'], answer: '13',
    explanation: 'The 13 stripes stand for the original 13 colonies that became the United States! The 50 stars are for our 50 states! 🌟' },

  { id: 'ess2-k-19', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🤚', prompt: 'When we say the Pledge of Allegiance, we put our hand on our heart. What are we doing?',
    options: ['promising to be loyal to our country', 'doing exercise', 'saying a prayer', 'playing a game'], answer: 'promising to be loyal to our country',
    explanation: 'The Pledge of Allegiance is a promise to be true to the United States and its values of freedom and justice! 💙' },

  { id: 'ess2-k-20', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'seasons',
    visual: '❄️', prompt: 'Which season has the coldest weather and snow?',
    options: ['winter', 'summer', 'spring', 'fall'], answer: 'winter',
    explanation: 'Winter is the coldest season — we bundle up in coats and scarves! ☃️ Some places get lots of beautiful snow!' },

  { id: 'ess2-k-21', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'seasons',
    visual: '🌸', prompt: 'Which season do flowers start blooming and birds return from migration?',
    options: ['spring', 'winter', 'fall', 'summer'], answer: 'spring',
    explanation: 'Spring is when nature WAKES UP — flowers bloom, birds sing, and rain helps everything grow! 🌈' },

  { id: 'ess2-k-22', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'seasons',
    visual: '☀️', prompt: 'Which season is the hottest and has the longest days?',
    options: ['summer', 'winter', 'fall', 'spring'], answer: 'summer',
    explanation: 'Summer is hot and sunny with long days — perfect for swimming, playing outside, and ice cream! 🍦' },

  { id: 'ess2-k-23', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'community rules',
    visual: '🚸', prompt: 'Why do we have rules like "stop at crosswalks" and "wear seatbelts"?',
    options: ['to keep everyone safe', 'to slow people down', 'because it is fun', 'to make things harder'], answer: 'to keep everyone safe',
    explanation: 'Safety rules protect US and others! Rules in a community help everyone live together happily! 💛' },

  { id: 'ess2-k-24', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🎵', prompt: 'What do we call the special song we sing to honor our country?',
    options: ['national anthem', 'lullaby', 'birthday song', 'school song'], answer: 'national anthem',
    explanation: 'Our national anthem is "The Star-Spangled Banner" — we stand up to show respect when we sing it! 🌟' },

  { id: 'ess2-k-25', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'transportation',
    visual: '🚂', prompt: 'A train that travels underground in a big city is called a...',
    options: ['subway', 'helicopter', 'ferry', 'tram'], answer: 'subway',
    explanation: 'Subways are trains that travel underground! Many big cities like New York have huge subway systems! 🌆' },

  // =====================================================================
  // 1ST GRADE — 25 questions
  // Topics: 3 branches of government, goods/services, producers/consumers,
  //         maps, 5 famous Americans, how communities work together
  // =====================================================================
  { id: 'ess2-1-01', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '🏛️', prompt: 'The U.S. government has THREE branches. Which branch MAKES the laws?',
    options: ['Congress (Legislative Branch)', 'the President (Executive Branch)', 'the Courts (Judicial Branch)', 'the Army'], answer: 'Congress (Legislative Branch)',
    explanation: 'The LEGISLATIVE branch is Congress — the Senate and House of Representatives. They write and vote on laws! 📜' },

  { id: 'ess2-1-02', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '🤝', prompt: 'Which branch of government ENFORCES (carries out) the laws?',
    options: ['Executive Branch (the President)', 'Legislative Branch (Congress)', 'Judicial Branch (Courts)', 'Local Branch (mayors)'], answer: 'Executive Branch (the President)',
    explanation: 'The EXECUTIVE branch — led by the President — makes sure laws are followed! The President runs the country! 🇺🇸' },

  { id: 'ess2-1-03', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '⚖️', prompt: 'Which branch of government INTERPRETS (explains) the laws?',
    options: ['Judicial Branch (the Courts)', 'Executive Branch (the President)', 'Legislative Branch (Congress)', 'The Police'], answer: 'Judicial Branch (the Courts)',
    explanation: 'The JUDICIAL branch — courts and judges — decides what laws mean and if they are fair! ⚖️' },

  { id: 'ess2-1-04', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods vs services',
    visual: '🍎', prompt: 'A GOOD is something you can hold and buy. Which of these is a GOOD?',
    options: ['a book', 'a haircut', 'a doctor\'s visit', 'teaching a class'], answer: 'a book',
    explanation: 'A GOOD is a physical thing you can touch and own — like a book, a toy, or an apple! 📚' },

  { id: 'ess2-1-05', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods vs services',
    visual: '✂️', prompt: 'A SERVICE is work someone does for you. Which of these is a SERVICE?',
    options: ['a haircut', 'a sandwich', 'a pair of shoes', 'a toy car'], answer: 'a haircut',
    explanation: 'A SERVICE is something someone does FOR you — like cutting hair, fixing cars, or teaching! You can\'t hold a haircut! 💇' },

  { id: 'ess2-1-06', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods vs services',
    visual: '🏪', prompt: 'A baker who sells bread is providing a GOOD. A teacher who teaches reading is providing a...',
    options: ['service', 'good', 'trade', 'resource'], answer: 'service',
    explanation: 'Teaching is a SERVICE — the teacher does work for others! Bread is a good you can hold and eat. 🍞' },

  { id: 'ess2-1-07', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'producers vs consumers',
    visual: '🏭', prompt: 'A PRODUCER is someone who MAKES goods or provides services. Which is a producer?',
    options: ['a farmer who grows apples', 'a kid who eats apples', 'a dog who finds apples', 'a bird who drops apple seeds'], answer: 'a farmer who grows apples',
    explanation: 'A PRODUCER creates or grows something for others! Farmers, factories, and artists are all producers! 🌾' },

  { id: 'ess2-1-08', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'producers vs consumers',
    visual: '🛒', prompt: 'A CONSUMER is someone who BUYS and USES goods or services. Which is a consumer?',
    options: ['a family buying groceries at the store', 'a factory making shoes', 'a farmer growing wheat', 'a baker baking bread'], answer: 'a family buying groceries at the store',
    explanation: 'A CONSUMER uses what producers make! We are ALL consumers when we buy food, toys, or clothes! 🛍️' },

  { id: 'ess2-1-09', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'maps',
    visual: '🧭', prompt: 'A COMPASS ROSE on a map shows you which direction is...',
    options: ['North, South, East, and West', 'how far to travel', 'what the land looks like', 'where cities are'], answer: 'North, South, East, and West',
    explanation: 'A compass rose is a star-shaped symbol on a map that shows the four main directions! N, S, E, W! 🌟' },

  { id: 'ess2-1-10', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'maps',
    visual: '🗺️', prompt: 'A MAP LEGEND (also called a KEY) tells you...',
    options: ['what the symbols and colors on the map mean', 'the name of the map maker', 'how old the map is', 'how big the country is'], answer: 'what the symbols and colors on the map mean',
    explanation: 'The map legend is like a secret code decoder — it explains what each color and symbol on the map means! 🔑' },

  { id: 'ess2-1-11', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'maps',
    visual: '📏', prompt: 'A MAP SCALE helps you figure out...',
    options: ['real distances between places', 'the names of cities', 'what colors mean', 'who lives there'], answer: 'real distances between places',
    explanation: 'A map scale might say "1 inch = 100 miles" — it helps you know how far apart real places are! 📐' },

  { id: 'ess2-1-12', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '✊', prompt: 'Dr. Martin Luther King Jr. is famous for leading the movement for...',
    options: ['civil rights and equal treatment for Black Americans', 'space exploration', 'inventing the telephone', 'building railroads'], answer: 'civil rights and equal treatment for Black Americans',
    explanation: 'Dr. King\'s powerful words and peaceful marches helped change unfair laws! He is a TRUE American hero! 🌟' },

  { id: 'ess2-1-13', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🏛️', prompt: 'George Washington was the first U.S. President. He is often called the "Father of our Country" because...',
    options: ['he helped start and lead the new United States', 'he built the White House by himself', 'he wrote the whole Constitution alone', 'he was the richest person'], answer: 'he helped start and lead the new United States',
    explanation: 'George Washington led the army to win independence and became our very first President — he helped FOUND our nation! 🇺🇸' },

  { id: 'ess2-1-14', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🎩', prompt: 'Abraham Lincoln is famous for signing the Emancipation Proclamation in 1863. What did it do?',
    options: ['freed enslaved people in Confederate states', 'started the Civil War', 'built the railroads', 'created the Bill of Rights'], answer: 'freed enslaved people in Confederate states',
    explanation: 'Lincoln\'s brave act moved America toward freedom for ALL people! He believed ALL people deserved to be free! ⭐' },

  { id: 'ess2-1-15', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🚂', prompt: 'Harriet Tubman was an amazing freedom fighter. She helped enslaved people escape to freedom using the...',
    options: ['Underground Railroad', 'actual trains', 'tunnels underground', 'boats across the ocean'], answer: 'Underground Railroad',
    explanation: 'The Underground Railroad was a SECRET NETWORK of safe houses and paths to freedom — Harriet guided over 70 people to safety! 🌟' },

  { id: 'ess2-1-16', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🚌', prompt: 'Rosa Parks is famous for refusing to give up her seat on a bus in 1955. Her bravery helped spark the...',
    options: ['Civil Rights Movement', 'American Revolution', 'space race', 'women\'s right to vote'], answer: 'Civil Rights Movement',
    explanation: 'Rosa\'s quiet, brave act of sitting down changed history! She stood up for equality by staying seated! ✊' },

  { id: 'ess2-1-17', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'how communities work together',
    visual: '🤝', prompt: 'When people in a community work TOGETHER to help each other, this is called...',
    options: ['cooperation', 'competition', 'trading', 'arguing'], answer: 'cooperation',
    explanation: 'Cooperation means working TOGETHER toward a shared goal! Communities grow stronger when people help each other! 💪' },

  { id: 'ess2-1-18', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'how communities work together',
    visual: '🏘️', prompt: 'A community is a group of people who live in the same area and...',
    options: ['share resources and help each other', 'always agree on everything', 'never need anything', 'only speak one language'], answer: 'share resources and help each other',
    explanation: 'Communities share parks, schools, libraries, and roads — and help each other in times of need! 🌟' },

  { id: 'ess2-1-19', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods vs services',
    visual: '💡', prompt: 'Which of these is a BOTH — a person who produces AND provides a service?',
    options: ['a chef who cooks food and serves meals', 'a river', 'a tree', 'a car'], answer: 'a chef who cooks food and serves meals',
    explanation: 'A chef produces food (a good) and serves it (a service)! Many workers produce goods AND provide services! 🍽️' },

  { id: 'ess2-1-20', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '⚖️', prompt: 'The three branches of government each have DIFFERENT jobs. This prevents too much power in one place — this is called...',
    options: ['checks and balances', 'the Constitution', 'the Bill of Rights', 'the census'], answer: 'checks and balances',
    explanation: 'Checks and balances make sure NO ONE branch gets too powerful — they all keep an eye on each other! Smart! 🧠' },

  { id: 'ess2-1-21', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'maps',
    visual: '🌐', prompt: 'A GLOBE is a model of Earth shaped like a...',
    options: ['sphere (ball)', 'flat square', 'cylinder', 'cone'], answer: 'sphere (ball)',
    explanation: 'Earth is shaped like a ball (a sphere) — a globe shows us the real shape of our planet! 🌍' },

  { id: 'ess2-1-22', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🌟', prompt: 'These five famous Americans all had something in common. What was it?',
    options: ['they each bravely worked to make America better for everyone', 'they all lived in Washington D.C.', 'they were all presidents', 'they were all the same age'], answer: 'they each bravely worked to make America better for everyone',
    explanation: 'MLK, Washington, Lincoln, Tubman, and Parks each showed incredible courage to make America a fairer, freer place! 🦅' },

  { id: 'ess2-1-23', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'producers vs consumers',
    visual: '🔄', prompt: 'Can the SAME person be both a producer and a consumer?',
    options: ['yes! A teacher produces education and consumes food', 'no, you can only be one', 'only adults can be both', 'only store owners can be both'], answer: 'yes! A teacher produces education and consumes food',
    explanation: 'We are ALL consumers — we buy and use things. Many of us are also producers — we make or do things for others! 🌟' },

  { id: 'ess2-1-24', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'how communities work together',
    visual: '🏫', prompt: 'Taxes that people pay help communities pay for...',
    options: ['schools, roads, and fire stations', 'people\'s personal shopping', 'video games', 'vacations'], answer: 'schools, roads, and fire stations',
    explanation: 'When community members pay taxes, that money pays for things EVERYONE uses — like schools, parks, and firefighters! 🌟' },

  { id: 'ess2-1-25', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods vs services',
    visual: '🎯', prompt: 'A library lets you borrow books for FREE. The library provides...',
    options: ['a public service', 'goods for sale', 'private trade', 'a business deal'], answer: 'a public service',
    explanation: 'Libraries are public services — paid for by taxes so everyone can use them for FREE! Knowledge belongs to everyone! 📚' },

  // =====================================================================
  // 2ND GRADE — 25 questions
  // Topics: American Revolution, US regions, immigration, markets,
  //         rights and responsibilities
  // =====================================================================
  { id: 'ess2-2-01', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '🍵', prompt: 'Colonists were angry that Britain taxed them without letting them vote. Their saying was...',
    options: ['"No taxation without representation!"', '"Give us more tea!"', '"We want a king!"', '"No more sailing!"'], answer: '"No taxation without representation!"',
    explanation: 'This powerful slogan meant: if you make rules for us, we need a VOICE in making those rules! That\'s fair! 🗣️' },

  { id: 'ess2-2-02', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '🍵', prompt: 'In 1773, colonists dressed as Native Americans and threw British tea into Boston Harbor. This is called...',
    options: ['the Boston Tea Party', 'the Boston Marathon', 'the First Continental Congress', 'the Tea Act'], answer: 'the Boston Tea Party',
    explanation: 'The Boston Tea Party was a bold protest! Colonists dumped 342 chests of British tea into the harbor to protest unfair taxes! 🌊' },

  { id: 'ess2-2-03', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '📜', prompt: 'The Declaration of Independence was signed in...',
    options: ['1776', '1492', '1863', '1800'], answer: '1776',
    explanation: '1776 is one of the most important years in American history! On July 4th, 1776, the colonies declared freedom from Britain! 🎇' },

  { id: 'ess2-2-04', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '✍️', prompt: 'Who wrote most of the Declaration of Independence?',
    options: ['Thomas Jefferson', 'George Washington', 'Benjamin Franklin', 'John Adams'], answer: 'Thomas Jefferson',
    explanation: 'Thomas Jefferson wrote the beautiful words "all men are created equal" — the Declaration is one of the greatest documents ever! ✨' },

  { id: 'ess2-2-05', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '❄️', prompt: 'The NORTHEAST region of the US is known for...',
    options: ['cold winters and the country\'s oldest cities', 'hot weather year-round', 'flat farmland', 'the Rocky Mountains'], answer: 'cold winters and the country\'s oldest cities',
    explanation: 'The Northeast has cold snowy winters and was home to some of the first American colonies — cities like Boston and New York! 🌆' },

  { id: 'ess2-2-06', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '☀️', prompt: 'The SOUTH region of the US is known for...',
    options: ['warm weather, peaches, and sweet tea', 'mountains and skiing', 'cold winters and fishing', 'flat desert'], answer: 'warm weather, peaches, and sweet tea',
    explanation: 'The South is warm and sunny with beautiful landscapes — Georgia, Alabama, and Florida are in the South! 🍑' },

  { id: 'ess2-2-07', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🌾', prompt: 'The MIDWEST region of the US is often called the "breadbasket" because...',
    options: ['it has flat farmland that grows lots of food', 'it makes the most bread factories', 'it has the biggest cities', 'it rains there every day'], answer: 'it has flat farmland that grows lots of food',
    explanation: 'The flat Midwest is perfect for farming! States like Iowa, Kansas, and Illinois grow enormous amounts of corn and wheat! 🌽' },

  { id: 'ess2-2-08', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🏔️', prompt: 'The WEST region of the US includes...',
    options: ['the Rocky Mountains and the Pacific Ocean', 'the Atlantic Ocean and flat plains', 'only deserts', 'only forests'], answer: 'the Rocky Mountains and the Pacific Ocean',
    explanation: 'The West is stunning — with tall mountains like the Rockies, deserts, and the beautiful Pacific coastline! 🌊' },

  { id: 'ess2-2-09', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration',
    visual: '🌍', prompt: 'An IMMIGRANT is someone who...',
    options: ['moves from another country to live in a new country', 'travels on vacation', 'moves to a different state', 'is born in the US'], answer: 'moves from another country to live in a new country',
    explanation: 'Immigrants come to America searching for opportunity, safety, and freedom — they help make America strong! 💪' },

  { id: 'ess2-2-10', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration',
    visual: '🗽', prompt: 'In the early 1900s, millions of immigrants came to America and first arrived at...',
    options: ['Ellis Island in New York Harbor', 'the Golden Gate Bridge in California', 'the White House in D.C.', 'Niagara Falls'], answer: 'Ellis Island in New York Harbor',
    explanation: 'Ellis Island was the "Gateway to America" — 12 million immigrants passed through it between 1892 and 1954! 🌟' },

  { id: 'ess2-2-11', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration',
    visual: '🌎', prompt: 'People immigrate to America for many reasons. Which is NOT a typical reason?',
    options: ['they want colder weather', 'freedom from unfair governments', 'better job opportunities', 'safety from war'], answer: 'they want colder weather',
    explanation: 'People immigrate for freedom, safety, jobs, and a better life — America has always welcomed dreamers! 🌈' },

  { id: 'ess2-2-12', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'how markets work',
    visual: '📈', prompt: 'When MANY people want something but there isn\'t enough of it, the PRICE usually...',
    options: ['goes up (demand is high, supply is low)', 'goes down', 'stays exactly the same', 'disappears'], answer: 'goes up (demand is high, supply is low)',
    explanation: 'When demand (want) is HIGH and supply (amount) is LOW, things cost MORE! This is basic supply and demand! 💡' },

  { id: 'ess2-2-13', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'how markets work',
    visual: '📉', prompt: 'When there is MORE of something than people want to buy, the PRICE usually...',
    options: ['goes down (supply is high, demand is low)', 'goes up', 'stays the same', 'doubles'], answer: 'goes down (supply is high, demand is low)',
    explanation: 'If a store has too many of something nobody wants, they lower the price to sell it! Supply and demand works! 🛒' },

  { id: 'ess2-2-14', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'how markets work',
    visual: '💰', prompt: 'SUPPLY means the amount of a good or service that sellers have. DEMAND means...',
    options: ['how much buyers want something', 'how much something costs', 'how many stores there are', 'how fast you can buy it'], answer: 'how much buyers want something',
    explanation: 'Supply = how much is available. Demand = how much people WANT it. These two forces set prices! 🎯' },

  { id: 'ess2-2-15', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'rights and responsibilities',
    visual: '⚖️', prompt: 'Americans have RIGHTS — things the government protects. Which is a right?',
    options: ['freedom of speech (saying what you think)', 'free meals every day', 'a pet for everyone', 'free toys'], answer: 'freedom of speech (saying what you think)',
    explanation: 'Freedom of speech is a right — the government cannot stop you from sharing your ideas peacefully! 🗣️' },

  { id: 'ess2-2-16', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'rights and responsibilities',
    visual: '🤝', prompt: 'With rights come RESPONSIBILITIES. A responsibility of citizens is...',
    options: ['obeying laws and respecting others\' rights', 'doing whatever they want', 'getting free stuff', 'only thinking about themselves'], answer: 'obeying laws and respecting others\' rights',
    explanation: 'Rights AND responsibilities go together! To enjoy your rights, you must also respect everyone else\'s rights! 🌟' },

  { id: 'ess2-2-17', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'rights and responsibilities',
    visual: '🗳️', prompt: 'Voting in elections is both a RIGHT and a RESPONSIBILITY because...',
    options: ['it lets citizens choose their leaders and shape their community', 'it is required by law', 'it is only for fun', 'only old people should do it'], answer: 'it lets citizens choose their leaders and shape their community',
    explanation: 'When you vote, you help CHOOSE the future! It\'s one of the most powerful things a citizen can do! 💪' },

  { id: 'ess2-2-18', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '🎯', prompt: 'The American Revolution was a WAR between the American colonies and which country?',
    options: ['Great Britain (England)', 'France', 'Spain', 'Germany'], answer: 'Great Britain (England)',
    explanation: 'The colonists fought for independence FROM Great Britain — and they WON! America was born in 1776! 🦅' },

  { id: 'ess2-2-19', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🗺️', prompt: 'Georgia is located in which US region?',
    options: ['the South', 'the Northeast', 'the Midwest', 'the West'], answer: 'the South',
    explanation: 'Georgia is a Southern state — warm climate, beautiful peach trees, and a rich history! 🍑' },

  { id: 'ess2-2-20', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'how markets work',
    visual: '🏪', prompt: 'A FREE MARKET means that people and businesses can decide...',
    options: ['what to make, sell, and buy mostly on their own', 'only the government decides what is sold', 'prices are always the same', 'only kings can run stores'], answer: 'what to make, sell, and buy mostly on their own',
    explanation: 'In a free market, buyers and sellers make choices freely — competition drives prices and quality! 🌟' },

  { id: 'ess2-2-21', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'rights and responsibilities',
    visual: '🌿', prompt: 'A responsibility of citizens toward the ENVIRONMENT is...',
    options: ['recycling and not littering', 'using as much water as possible', 'only caring about your own yard', 'burning trash'], answer: 'recycling and not littering',
    explanation: 'We have a responsibility to take care of our Earth for future generations! Every small action counts! 🌍💚' },

  { id: 'ess2-2-22', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '🌟', prompt: 'The Declaration of Independence said all people are created equal and have the right to...',
    options: ['life, liberty, and the pursuit of happiness', 'free land, free gold, and free food', 'power, glory, and riches', 'fame, fun, and fortune'], answer: 'life, liberty, and the pursuit of happiness',
    explanation: 'These three rights — life, liberty, and the pursuit of happiness — are the heart of American ideals! ✨' },

  { id: 'ess2-2-23', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration',
    visual: '🌈', prompt: 'America is sometimes called a "melting pot" or "salad bowl" because...',
    options: ['many cultures mix together to make America rich and diverse', 'we eat a lot of soup and salad', 'everyone becomes exactly the same', 'only one culture is allowed'], answer: 'many cultures mix together to make America rich and diverse',
    explanation: 'America\'s diversity is its STRENGTH! People from every country bring traditions, languages, and ideas that make us amazing! 🌍' },

  { id: 'ess2-2-24', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🌊', prompt: 'Which US region includes states like Washington, Oregon, and California along the Pacific Ocean?',
    options: ['the West', 'the South', 'the Midwest', 'the Northeast'], answer: 'the West',
    explanation: 'The West Coast faces the Pacific Ocean — with rainforests in the north and sunny beaches in California! 🌴' },

  { id: 'ess2-2-25', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'rights and responsibilities',
    visual: '🏛️', prompt: 'The CONSTITUTION is America\'s most important document. Its job is to...',
    options: ['set up the rules for how the government works and protect citizens\' rights', 'list all the states', 'tell people what to eat', 'describe all wars America fought'], answer: 'set up the rules for how the government works and protect citizens\' rights',
    explanation: 'The Constitution is like America\'s rulebook — it limits government power and protects YOUR freedoms! 📜✨' },

  // =====================================================================
  // 3RD GRADE — 25 questions
  // Topics: Constitution, Bill of Rights, Civil War, Reconstruction,
  //         famous inventors, US territories and time zones
  // =====================================================================
  { id: 'ess2-3-01', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution',
    visual: '📜', prompt: 'The US Constitution was written in 1787. What is its main purpose?',
    options: ['to create the framework for the US government and protect citizens\' rights', 'to declare independence from Britain', 'to end slavery', 'to create the 50 states'], answer: 'to create the framework for the US government and protect citizens\' rights',
    explanation: 'The Constitution is America\'s supreme law — it sets up three branches of government and protects our fundamental rights! 🌟' },

  { id: 'ess2-3-02', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution',
    visual: '🏛️', prompt: 'The phrase "We the People" begins the Constitution. It means the government gets its power from...',
    options: ['the citizens (the people)', 'the President', 'the Supreme Court', 'wealthy landowners'], answer: 'the citizens (the people)',
    explanation: '"We the People" means that in America, the PEOPLE are the source of all government power — democracy in action! ✊' },

  { id: 'ess2-3-03', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Bill of Rights',
    visual: '📋', prompt: 'The First Amendment protects freedom of speech, religion, press, and...',
    options: ['the right to peacefully assemble (gather)', 'the right to drive', 'the right to free food', 'the right to a pet'], answer: 'the right to peacefully assemble (gather)',
    explanation: 'The First Amendment is incredibly powerful — it protects your right to speak, pray, write, and gather peacefully! 🗣️' },

  { id: 'ess2-3-04', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Bill of Rights',
    visual: '⚖️', prompt: 'The Fifth Amendment protects citizens from being...',
    options: ['forced to testify against themselves in court', 'paying taxes', 'voting more than once', 'owning property'], answer: 'forced to testify against themselves in court',
    explanation: 'The 5th Amendment means you can\'t be forced to say something that would get you in trouble — you have rights even in court! ⚖️' },

  { id: 'ess2-3-05', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Bill of Rights',
    visual: '🏠', prompt: 'The Third Amendment says soldiers CANNOT be housed in a citizen\'s home without permission. Why was this important in 1791?',
    options: ['British soldiers had forced colonists to house them, which felt like an invasion of privacy', 'people wanted more soldiers around', 'homes were too small for soldiers', 'soldiers liked hotels better'], answer: 'British soldiers had forced colonists to house them, which felt like an invasion of privacy',
    explanation: 'Americans remembered how awful it felt to be forced to feed and house British soldiers — the 3rd Amendment protects your home! 🏡' },

  { id: 'ess2-3-06', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War',
    visual: '⚔️', prompt: 'The Civil War (1861-1865) was fought between the Union (North) and the Confederacy (South). The main cause was...',
    options: ['slavery — the South wanted to keep it, the North wanted to end it', 'who would own the Mississippi River', 'which side could build more railroads', 'a disagreement about farming'], answer: 'slavery — the South wanted to keep it, the North wanted to end it',
    explanation: 'The Civil War was America\'s most painful struggle — it was fought over the evil of slavery and the future of our nation! 🕊️' },

  { id: 'ess2-3-07', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War',
    visual: '🎩', prompt: 'President Abraham Lincoln issued the Emancipation Proclamation on January 1, 1863. What did it declare?',
    options: ['enslaved people in Confederate states were free', 'the war was over', 'everyone could vote', 'a new state joined the Union'], answer: 'enslaved people in Confederate states were free',
    explanation: 'The Emancipation Proclamation was a giant step toward freedom — it changed the meaning of the Civil War forever! 🌟' },

  { id: 'ess2-3-08', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War',
    visual: '🕊️', prompt: 'The Civil War ended in 1865 with the UNION winning. What happened to the Confederate states?',
    options: ['they rejoined the United States and went through Reconstruction', 'they became a separate country', 'they were punished forever', 'they were destroyed'], answer: 'they rejoined the United States and went through Reconstruction',
    explanation: 'After the war, the nation had to REBUILD — both destroyed buildings AND broken relationships. This was called Reconstruction! 🏗️' },

  { id: 'ess2-3-09', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Reconstruction',
    visual: '🔨', prompt: 'RECONSTRUCTION (1865-1877) was the period after the Civil War when America tried to...',
    options: ['rebuild the South and integrate formerly enslaved people as citizens', 'start a new war', 'elect a new president by force', 'move everyone to the West'], answer: 'rebuild the South and integrate formerly enslaved people as citizens',
    explanation: 'Reconstruction was full of hope and struggle — formerly enslaved people became citizens, and the South began to heal! 🌱' },

  { id: 'ess2-3-10', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Reconstruction',
    visual: '📋', prompt: 'The 13th Amendment, passed in 1865, did what?',
    options: ['abolished (ended) slavery throughout the United States', 'gave women the right to vote', 'made all men citizens', 'created the income tax'], answer: 'abolished (ended) slavery throughout the United States',
    explanation: 'The 13th Amendment officially ENDED slavery in America — one of the most important changes to our Constitution! ✨' },

  { id: 'ess2-3-11', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'famous inventors',
    visual: '💡', prompt: 'Thomas Edison invented the electric light bulb after trying thousands of times. His response to failures was...',
    options: ['"I didn\'t fail — I found thousands of ways that won\'t work!"', '"I give up, this is impossible"', '"Someone else should do this"', '"I was lucky it worked"'], answer: '"I didn\'t fail — I found thousands of ways that won\'t work!"',
    explanation: 'Edison\'s GRIT and growth mindset changed the world! He also invented the phonograph (record player) and movie camera! 🌟' },

  { id: 'ess2-3-12', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'famous inventors',
    visual: '📞', prompt: 'Alexander Graham Bell invented the telephone in 1876. Before the telephone, how did people communicate over long distances?',
    options: ['by letter (mail) or telegraph', 'by shouting very loud', 'by sending carrier pigeons only', 'they couldn\'t communicate'], answer: 'by letter (mail) or telegraph',
    explanation: 'Bell\'s invention REVOLUTIONIZED communication — suddenly you could hear someone\'s voice from far away! Amazing! 📡' },

  { id: 'ess2-3-13', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'famous inventors',
    visual: '✈️', prompt: 'The Wright Brothers (Orville and Wilbur) made the first powered airplane flight in which year?',
    options: ['1903', '1876', '1920', '1865'], answer: '1903',
    explanation: 'On December 17, 1903, at Kitty Hawk, North Carolina, they flew 12 seconds — and changed human travel FOREVER! 🌤️' },

  { id: 'ess2-3-14', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'famous inventors',
    visual: '⚡', prompt: 'Nikola Tesla invented the AC (alternating current) electrical system. Why does this matter today?',
    options: ['AC power is what runs homes and businesses around the world today', 'it runs cars only', 'it was only used in the 1800s', 'it only works in Europe'], answer: 'AC power is what runs homes and businesses around the world today',
    explanation: 'Tesla\'s AC system is what powers your home RIGHT NOW! He was a genius who transformed civilization! ⚡🌍' },

  { id: 'ess2-3-15', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'famous inventors',
    visual: '🔬', prompt: 'What do Edison, Bell, the Wright Brothers, and Tesla all have in common?',
    options: ['they all persisted through many failures to create inventions that changed the world', 'they all went to the same school', 'they all worked for the government', 'they all lived in New York'], answer: 'they all persisted through many failures to create inventions that changed the world',
    explanation: 'Every great inventor FAILED many times first! Persistence + curiosity = changing the world! That\'s the spirit! 💡🌟' },

  { id: 'ess2-3-16', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US territories and time zones',
    visual: '🌐', prompt: 'The United States has HOW MANY time zones in the 48 contiguous states?',
    options: ['4 time zones', '3 time zones', '5 time zones', '6 time zones'], answer: '4 time zones',
    explanation: 'Eastern, Central, Mountain, and Pacific — 4 time zones! That\'s why it\'s a different time in New York than in California! ⏰' },

  { id: 'ess2-3-17', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US territories and time zones',
    visual: '🗺️', prompt: 'Puerto Rico is a US TERRITORY. What does that mean?',
    options: ['it is controlled by the US but is not a state — its people are US citizens', 'it is a foreign country', 'it is a US state', 'it is owned by Spain'], answer: 'it is controlled by the US but is not a state — its people are US citizens',
    explanation: 'Puerto Ricans are US citizens but Puerto Rico is a territory, not a state — it has different representation in government! 🏝️' },

  { id: 'ess2-3-18', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US territories and time zones',
    visual: '🌏', prompt: 'Hawaii and Alaska are US states but are NOT connected to the other 48 states. Hawaii is located in the...',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Caribbean Sea', 'Gulf of Mexico'], answer: 'Pacific Ocean',
    explanation: 'Hawaii is a chain of volcanic islands in the middle of the Pacific Ocean — paradise AND a US state! 🌺🌊' },

  { id: 'ess2-3-19', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Bill of Rights',
    visual: '📋', prompt: 'The Second Amendment gives citizens the right to...',
    options: ['keep and bear arms (own firearms)', 'free education', 'a job', 'travel freely'], answer: 'keep and bear arms (own firearms)',
    explanation: 'The 2nd Amendment was written so citizens could protect themselves — it is often debated because society has changed a lot! 🤔' },

  { id: 'ess2-3-20', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War',
    visual: '⚔️', prompt: 'The Confederate States seceded (left) the United States because they wanted to...',
    options: ['keep slavery legal and have states\' rights to decide their own laws', 'start a new religion', 'get more land from Mexico', 'control trade with Europe'], answer: 'keep slavery legal and have states\' rights to decide their own laws',
    explanation: 'The deep disagreement over slavery — and who had the power to decide — split the nation into war! 🕊️' },

  { id: 'ess2-3-21', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Reconstruction',
    visual: '🌱', prompt: 'The 14th Amendment (1868) gave citizenship and equal protection under the law to...',
    options: ['all persons born or naturalized in the United States, including formerly enslaved people', 'only white landowners', 'only soldiers', 'women but not men'], answer: 'all persons born or naturalized in the United States, including formerly enslaved people',
    explanation: 'The 14th Amendment is hugely important — it means ALL people born in the US are citizens with equal rights! 🌟' },

  { id: 'ess2-3-22', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution',
    visual: '🔄', prompt: 'The Constitution can be changed through AMENDMENTS. How many amendments does the Constitution have today?',
    options: ['27', '10', '50', '13'], answer: '27',
    explanation: 'The Constitution has been amended 27 times! The first 10 are the Bill of Rights. The newest amendment was ratified in 1992! 📜' },

  { id: 'ess2-3-23', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US territories and time zones',
    visual: '⏰', prompt: 'When it is 3:00 PM in New York (Eastern Time), what time is it in Los Angeles (Pacific Time)?',
    options: ['12:00 PM (noon)', '4:00 PM', '6:00 PM', '2:00 PM'], answer: '12:00 PM (noon)',
    explanation: 'Pacific Time is 3 hours BEHIND Eastern Time! 3:00 PM in New York = 12:00 PM in Los Angeles! ☀️' },

  { id: 'ess2-3-24', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'famous inventors',
    visual: '💡', prompt: 'Edison\'s first successful light bulb used a FILAMENT — a thin wire that glows. How many attempts did he reportedly make before succeeding?',
    options: ['about 1,000 attempts', '3 attempts', '10 attempts', 'just 1 attempt'], answer: 'about 1,000 attempts',
    explanation: 'Edison tried roughly 1,000 materials before finding one that worked! That\'s TRUE persistence! You can do hard things too! 💪' },

  { id: 'ess2-3-25', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Reconstruction',
    visual: '🗳️', prompt: 'The 15th Amendment (1870) gave Black men the right to vote. But many states still tried to stop them through...',
    options: ['literacy tests, poll taxes, and threats — unfair barriers called Jim Crow laws', 'open and fair elections', 'giving everyone extra votes', 'making voting free and easy'], answer: 'literacy tests, poll taxes, and threats — unfair barriers called Jim Crow laws',
    explanation: 'Even after Reconstruction, the fight for equal voting rights continued for almost 100 more years until the Voting Rights Act of 1965! ✊' },

  // =====================================================================
  // TAG LEVEL — 25 questions
  // Topics: Civil Rights Movement, global geography, world governments,
  //         international organizations, economic systems, modern history
  // =====================================================================
  { id: 'ess2-tag-01', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights Movement',
    visual: '✊', prompt: 'On December 1, 1955, Rosa Parks refused to give her seat to a white man on a Montgomery, Alabama bus. What followed?',
    options: ['the Montgomery Bus Boycott — Black citizens refused to ride buses for 381 days', 'a small protest that ended in a week', 'a law that immediately changed bus rules', 'nothing — it was ignored'], answer: 'the Montgomery Bus Boycott — Black citizens refused to ride buses for 381 days',
    explanation: 'For 381 days, Black citizens walked, carpooled, and organized — and WON! Boycotts prove that economic power is REAL power! 🌟' },

  { id: 'ess2-tag-02', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights Movement',
    visual: '🏫', prompt: 'Brown v. Board of Education (1954) was a Supreme Court case that ruled...',
    options: ['racial segregation in public schools was unconstitutional', 'schools should remain separate', 'only private schools could integrate', 'teachers must all be the same race'], answer: 'racial segregation in public schools was unconstitutional',
    explanation: 'This landmark case overturned "separate but equal" — proving the Supreme Court can protect civil rights when it acts boldly! ⚖️' },

  { id: 'ess2-tag-03', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights Movement',
    visual: '🎤', prompt: 'Dr. King\'s "I Have a Dream" speech was delivered at the March on Washington in August 1963. About how many people attended?',
    options: ['250,000 people', '1,000 people', '5,000 people', '1 million people'], answer: '250,000 people',
    explanation: '250,000 people marched for jobs and freedom! Dr. King\'s speech remains one of the greatest in American history! 🕊️✨' },

  { id: 'ess2-tag-04', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights Movement',
    visual: '🗳️', prompt: 'The Voting Rights Act of 1965 was passed to...',
    options: ['ban discriminatory voting practices like literacy tests that prevented Black Americans from voting', 'give voting rights to immigrants', 'lower the voting age to 16', 'allow the President to choose senators'], answer: 'ban discriminatory voting practices like literacy tests that prevented Black Americans from voting',
    explanation: 'The Voting Rights Act was a triumph! It removed barriers that had blocked Black Americans from voting for 100 years! ✊🌟' },

  { id: 'ess2-tag-05', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights Movement',
    visual: '🌍', prompt: 'The Civil Rights Movement used "nonviolent direct action" strategies. What does this mean?',
    options: ['protesting peacefully — through marches, sit-ins, and boycotts — without violence', 'fighting back physically against attacks', 'using laws as the ONLY strategy', 'only writing letters to the President'], answer: 'protesting peacefully — through marches, sit-ins, and boycotts — without violence',
    explanation: 'Dr. King was inspired by Gandhi\'s nonviolent strategy — peaceful protest can be MORE powerful than violence! ✌️' },

  { id: 'ess2-tag-06', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global geography',
    visual: '🌊', prompt: 'The AMAZON RIVER in South America is the world\'s largest river by...',
    options: ['water volume (discharge)', 'length (it\'s actually the Nile that\'s longer)', 'width only', 'speed of flow'], answer: 'water volume (discharge)',
    explanation: 'The Amazon carries more water than any river on Earth — about 20% of all fresh river water! The Nile is longer but the Amazon is MIGHTIER! 🌿' },

  { id: 'ess2-tag-07', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global geography',
    visual: '🏔️', prompt: 'The HIMALAYAS are the world\'s highest mountain range. On which continent are they located?',
    options: ['Asia', 'Africa', 'South America', 'Europe'], answer: 'Asia',
    explanation: 'The Himalayas stretch through Nepal, India, China, and Pakistan — and include Mount Everest, Earth\'s tallest peak at 29,032 feet! 🏔️' },

  { id: 'ess2-tag-08', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global geography',
    visual: '🌍', prompt: 'Which continent has the most countries?',
    options: ['Africa (54 countries)', 'Asia (48 countries)', 'Europe (44 countries)', 'South America (12 countries)'], answer: 'Africa (54 countries)',
    explanation: 'Africa has 54 recognized countries and is the second-largest continent in area AND population! It\'s extraordinarily diverse! 🌺' },

  { id: 'ess2-tag-09', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world governments',
    visual: '🗳️', prompt: 'In a DEMOCRACY, power belongs to...',
    options: ['the citizens, who choose leaders through free elections', 'one powerful ruler', 'a small group of military leaders', 'whichever family is richest'], answer: 'the citizens, who choose leaders through free elections',
    explanation: 'Democracy means "rule by the people" — citizens have the power to choose and even remove their leaders! 🌟' },

  { id: 'ess2-tag-10', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world governments',
    visual: '👑', prompt: 'In a MONARCHY, power is held by...',
    options: ['a king or queen who inherits power at birth', 'elected officials', 'military generals', 'religious leaders always'], answer: 'a king or queen who inherits power at birth',
    explanation: 'A monarchy means rule by a royal family — like the UK\'s monarchy. Some are constitutional (limited power) and some are absolute! 👑' },

  { id: 'ess2-tag-11', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world governments',
    visual: '⚠️', prompt: 'In a DICTATORSHIP, one leader has almost total control and citizens...',
    options: ['have few rights and cannot freely elect their leaders', 'vote every year for a new dictator', 'have more rights than in democracies', 'choose the dictator through secret vote'], answer: 'have few rights and cannot freely elect their leaders',
    explanation: 'Dictatorships are dangerous — power corrupts! History shows people in dictatorships often fight for freedom and democracy! ✊' },

  { id: 'ess2-tag-12', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world governments',
    visual: '🌐', prompt: 'What makes a CONSTITUTIONAL MONARCHY different from an absolute monarchy?',
    options: ['in a constitutional monarchy, the monarch\'s power is LIMITED by laws and a constitution', 'the royal family has even MORE power', 'there is no royal family', 'citizens never interact with the monarch'], answer: 'in a constitutional monarchy, the monarch\'s power is LIMITED by laws and a constitution',
    explanation: 'Countries like the UK and Sweden have constitutional monarchies — the monarch is a symbol but elected officials run the government! 🏛️' },

  { id: 'ess2-tag-13', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'international organizations',
    visual: '🌐', prompt: 'The United Nations (UN) was founded in 1945. Its primary goal is to...',
    options: ['promote peace, cooperation, and human rights among nations', 'create one world government', 'control all countries\' economies', 'set up free trade everywhere'], answer: 'promote peace, cooperation, and human rights among nations',
    explanation: 'The UN brings 193 nations together to prevent war, help people in need, and protect human rights worldwide! 🕊️🌍' },

  { id: 'ess2-tag-14', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'international organizations',
    visual: '🤝', prompt: 'The UN Security Council has 5 permanent members with VETO power. Which is NOT one of them?',
    options: ['Germany', 'United States', 'China', 'Russia'], answer: 'Germany',
    explanation: 'The 5 permanent members are: USA, UK, France, Russia, and China — each can VETO (block) any Security Council decision! 🌐' },

  { id: 'ess2-tag-15', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'economic systems',
    visual: '🏪', prompt: 'In a FREE MARKET economy, the government...',
    options: ['lets businesses and consumers mostly make their own economic decisions', 'controls all prices and production', 'owns all factories and farms', 'bans all trade with other countries'], answer: 'lets businesses and consumers mostly make their own economic decisions',
    explanation: 'Free market = economic freedom! Competition drives innovation and lower prices — the US has a mostly free market economy! 💡' },

  { id: 'ess2-tag-16', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'economic systems',
    visual: '🏭', prompt: 'In a COMMAND (planned) economy, the government...',
    options: ['controls most economic decisions — what to make, how much, and at what price', 'lets businesses decide everything', 'creates competition between companies', 'taxes businesses heavily but lets them operate freely'], answer: 'controls most economic decisions — what to make, how much, and at what price',
    explanation: 'Command economies (like the old Soviet Union) give the government total economic control — often leading to shortages and inefficiency! 📊' },

  { id: 'ess2-tag-17', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'economic systems',
    visual: '⚖️', prompt: 'Most countries today have MIXED economies. What does that mean?',
    options: ['some industries are privately owned and some are government-controlled', 'only one company controls everything', 'the government owns nothing', 'two countries share one economy'], answer: 'some industries are privately owned and some are government-controlled',
    explanation: 'Mixed economies blend free market and government control — like the US, where businesses run freely but the government regulates safety and monopolies! 🌐' },

  { id: 'ess2-tag-18', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'modern history',
    visual: '🚀', prompt: 'On July 20, 1969, NASA\'s Apollo 11 mission accomplished what historic feat?',
    options: ['first humans (Neil Armstrong and Buzz Aldrin) landed on the moon', 'first satellite was launched into space', 'first space shuttle flew around Earth', 'first telescope was sent to Mars'], answer: 'first humans (Neil Armstrong and Buzz Aldrin) landed on the moon',
    explanation: 'Armstrong\'s words "one small step for man, one giant leap for mankind" captured the moment humanity TOUCHED the moon! 🌕✨' },

  { id: 'ess2-tag-19', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'modern history',
    visual: '💻', prompt: 'The World Wide Web (internet) was invented by Tim Berners-Lee in...',
    options: ['1989-1991', '1970', '1776', '2001'], answer: '1989-1991',
    explanation: 'The internet has completely transformed how humans communicate, learn, and work — in just 30 years! You\'re using it right now! 🌐' },

  { id: 'ess2-tag-20', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'modern history',
    visual: '🇺🇸', prompt: 'The September 11, 2001 terrorist attacks on the US had major impacts. Which was NOT a direct result?',
    options: ['the US left the United Nations', 'the US started wars in Afghanistan and Iraq', 'airport security became much stricter', 'the Department of Homeland Security was created'], answer: 'the US left the United Nations',
    explanation: 'After 9/11, the US greatly increased security, went to war in the Middle East, and created new agencies — but stayed in the UN! 🕊️' },

  { id: 'ess2-tag-21', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights Movement',
    visual: '📚', prompt: 'Thurgood Marshall argued the Brown v. Board case before the Supreme Court and later became...',
    options: ['the first Black Supreme Court Justice', 'the first Black President', 'the leader of the NAACP permanently', 'governor of Maryland'], answer: 'the first Black Supreme Court Justice',
    explanation: 'Thurgood Marshall was a legal genius — he fought for civil rights in courtrooms and then became a Supreme Court Justice himself in 1967! 🌟' },

  { id: 'ess2-tag-22', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global geography',
    visual: '🌊', prompt: 'The NILE RIVER is the world\'s longest river. Through how many countries does it flow?',
    options: ['11 countries', '3 countries', '6 countries', '20 countries'], answer: '11 countries',
    explanation: 'The Nile flows through 11 African nations for about 4,130 miles — ancient civilizations like Egypt thrived because of its water! 🏺' },

  { id: 'ess2-tag-23', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'international organizations',
    visual: '🌍', prompt: 'UNICEF is a UN organization that focuses on...',
    options: ['protecting children\'s rights and wellbeing worldwide', 'controlling nuclear weapons', 'managing world trade', 'setting environmental policies'], answer: 'protecting children\'s rights and wellbeing worldwide',
    explanation: 'UNICEF works in 190 countries to make sure children have food, medicine, education, and safety — kids matter to the world! 🌟' },

  { id: 'ess2-tag-24', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'economic systems',
    visual: '📊', prompt: 'GDP (Gross Domestic Product) measures...',
    options: ['the total value of all goods and services produced by a country in a year', 'how happy citizens are', 'the number of factories in a country', 'how much gold a country has'], answer: 'the total value of all goods and services produced by a country in a year',
    explanation: 'GDP is how economists measure an economy\'s SIZE — the US has the world\'s largest GDP! Numbers tell the story of a nation! 📈' },

  { id: 'ess2-tag-25', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'modern history',
    visual: '🌡️', prompt: 'Climate change is a major modern global challenge. What is the primary human cause?',
    options: ['burning fossil fuels (coal, oil, gas) releases greenhouse gases that trap heat', 'having too many trees', 'building too many roads', 'eating too much meat only'], answer: 'burning fossil fuels (coal, oil, gas) releases greenhouse gases that trap heat',
    explanation: 'Understanding climate change is crucial for your generation — YOU will be the leaders who solve this challenge! 🌿💪🌍' },
]
