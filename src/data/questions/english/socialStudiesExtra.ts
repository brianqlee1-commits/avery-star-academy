import type { Question } from '../../../types'

export const socialStudiesQuestionsExtra: Question[] = [

  // ============================================================
  // KINDERGARTEN (25 questions)
  // ============================================================

  { id: 'ess2-k-01', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🎃', prompt: 'Halloween is celebrated on October 31. People dress in costumes and children say...', options: ['Trick or treat!', 'Happy New Year!', 'Ho ho ho!', 'Thank you!'], answer: 'Trick or treat!', explanation: 'Halloween is a fun holiday where kids dress up and collect candy by saying "Trick or treat!"' },

  { id: 'ess2-k-02', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🦃', prompt: 'Thanksgiving is a holiday when families gather to...', options: ['give thanks and share a meal together', 'give gifts under a tree', 'watch fireworks', 'wear costumes'], answer: 'give thanks and share a meal together', explanation: 'Thanksgiving is about being grateful and sharing a meal — we celebrate what we are thankful for!' },

  { id: 'ess2-k-03', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🎆', prompt: 'On July 4th (Independence Day), Americans celebrate by watching...', options: ['fireworks', 'parades and fireworks', 'only parades', 'football games'], answer: 'parades and fireworks', explanation: 'July 4th celebrates America\'s birthday! We celebrate with parades, fireworks, and patriotic pride!' },

  { id: 'ess2-k-04', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🌹', prompt: 'Martin Luther King Jr. Day honors a man who worked so that all people would be...', options: ['treated fairly and equally', 'given free food', 'able to fly in airplanes', 'allowed to go to school only'], answer: 'treated fairly and equally', explanation: 'Dr. King worked his whole life so that ALL people would be treated with fairness and equality. We celebrate him every January!' },

  { id: 'ess2-k-05', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'good citizenship',
    visual: '🤝', prompt: 'A good citizen at school...', options: ['helps others and follows the rules', 'takes things without asking', 'ignores people who need help', 'always does whatever they want'], answer: 'helps others and follows the rules', explanation: 'Good citizens are helpful, kind, and follow rules that keep everyone safe and happy!' },

  { id: 'ess2-k-06', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'good citizenship',
    visual: '♻️', prompt: 'Putting trash in the trash can (not on the ground) is an example of being a good...', options: ['citizen who cares for their community', 'helper at home only', 'student at school only', 'player on a team'], answer: 'citizen who cares for their community', explanation: 'Keeping our community clean is good citizenship! Every piece of trash in the bin makes our neighborhood better.' },

  { id: 'ess2-k-07', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'school vs community rules',
    visual: '📋', prompt: 'Which is a SCHOOL rule?', options: ['Raise your hand before speaking', 'Stop at red lights', 'Pay for things you want to buy', 'Do not park on the sidewalk'], answer: 'Raise your hand before speaking', explanation: 'Raising your hand is a school rule — it helps the teacher know who wants to speak!' },

  { id: 'ess2-k-08', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'school vs community rules',
    visual: '🚦', prompt: 'Which is a COMMUNITY rule (law)?', options: ['Stop at red traffic lights', 'Sit quietly in class', 'Line up when the bell rings', 'Walk in the hallways'], answer: 'Stop at red traffic lights', explanation: 'Traffic laws are community rules that keep EVERYONE safe — drivers, cyclists, and pedestrians!' },

  { id: 'ess2-k-09', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'different families',
    visual: '👨‍👩‍👧‍👦', prompt: 'Families come in many different shapes and sizes. Which is true about all families?', options: ['They love and care for each other', 'They all have two parents', 'They all have pets', 'They are all the same size'], answer: 'They love and care for each other', explanation: 'Families look different — some big, some small, some with one parent, some with grandparents — but ALL families share love and care!' },

  { id: 'ess2-k-10', type: 'true-false', level: 'K', subject: 'social-studies', language: 'english', topic: 'different families',
    visual: '🌍', prompt: 'Every family in the world is exactly the same.', options: ['True', 'False'], answer: 'False', explanation: 'FALSE! Families are wonderfully different in size, structure, culture, and traditions — and that\'s a beautiful thing!' },

  { id: 'ess2-k-11', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🇺🇸', prompt: 'The American flag has 50 stars. Each star represents...', options: ['one of the 50 states', 'one of the 50 presidents', 'one of the 50 cities', 'one of the 50 years'], answer: 'one of the 50 states', explanation: 'The 50 stars on the American flag represent the 50 states — one star for every state!' },

  { id: 'ess2-k-12', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🦅', prompt: 'What is the national bird of the United States?', options: ['bald eagle', 'robin', 'blue jay', 'flamingo'], answer: 'bald eagle', explanation: 'The BALD EAGLE is our national bird — chosen in 1782 as a symbol of strength, freedom, and long life!' },

  { id: 'ess2-k-13', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🏛️', prompt: 'The Lincoln Memorial in Washington D.C. honors President Lincoln. What did President Lincoln do?', options: ['He helped end slavery in the United States', 'He was the first President', 'He wrote the Constitution', 'He built the White House'], answer: 'He helped end slavery in the United States', explanation: 'President Lincoln signed the Emancipation Proclamation and helped end slavery — he is honored at the Lincoln Memorial!' },

  { id: 'ess2-k-14', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🏛️', prompt: 'What color is the White House, where the President lives?', options: ['white', 'red', 'blue', 'gray'], answer: 'white', explanation: 'The White House is white! It\'s located in Washington D.C. and is home to every U.S. President!' },

  { id: 'ess2-k-15', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'good citizenship',
    visual: '🗳️', prompt: 'When a class votes on what game to play at recess, they are learning about...', options: ['democracy', 'economics', 'geography', 'history'], answer: 'democracy', explanation: 'Voting is democracy in action! Even kindergartners practice democracy when they vote on class decisions!' },

  { id: 'ess2-k-16', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🌎', prompt: 'Earth Day is celebrated on April 22. On Earth Day, people think about how to...', options: ['take care of our planet', 'eat more food', 'watch more TV', 'play more video games'], answer: 'take care of our planet', explanation: 'Earth Day reminds us to protect and care for our beautiful planet — reduce, reuse, recycle!' },

  { id: 'ess2-k-17', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'community helpers',
    visual: '👮', prompt: 'Police officers help our community by...', options: ['keeping people safe and enforcing laws', 'building houses', 'growing food', 'teaching at school'], answer: 'keeping people safe and enforcing laws', explanation: 'Police officers are community helpers who keep us safe and make sure laws are followed!' },

  { id: 'ess2-k-18', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'different families',
    visual: '👵', prompt: 'When a grandparent lives with and helps raise their grandchildren, this is called a...', options: ['multigenerational family', 'single-parent family', 'adopted family', 'foster family'], answer: 'multigenerational family', explanation: 'When multiple generations (grandparents, parents, children) live together, it\'s a multigenerational family — common in many cultures!' },

  { id: 'ess2-k-19', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🎵', prompt: 'What do we call the song "The Star-Spangled Banner" — the official song of the United States?', options: ['the national anthem', 'the school song', 'the state song', 'the lullaby'], answer: 'the national anthem', explanation: 'The Star-Spangled Banner is America\'s NATIONAL ANTHEM — we stand and sing it with pride at special events!' },

  { id: 'ess2-k-20', type: 'true-false', level: 'K', subject: 'social-studies', language: 'english', topic: 'school vs community rules',
    visual: '📏', prompt: 'Rules help keep people safe and treat each other fairly.', options: ['True', 'False'], answer: 'True', explanation: 'Rules exist to keep everyone SAFE and FAIR — at school, at home, and in our community!' },

  { id: 'ess2-k-21', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'good citizenship',
    visual: '🌱', prompt: 'Planting trees and picking up litter are ways kids can be good...', options: ['environmental citizens', 'fire fighters', 'lawmakers', 'historians'], answer: 'environmental citizens', explanation: 'You can be a good environmental citizen right now! Planting trees and keeping places clean help our whole community!' },

  { id: 'ess2-k-22', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'holidays',
    visual: '🎁', prompt: 'Hanukkah is a Jewish holiday that lasts 8 nights. Families celebrate by lighting candles on a special holder called a...', options: ['menorah', 'Christmas tree', 'lantern', 'torch'], answer: 'menorah', explanation: 'A MENORAH holds 9 candles — one is lit each of the 8 nights of Hanukkah to celebrate the Festival of Lights!' },

  { id: 'ess2-k-23', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'different families',
    visual: '💙', prompt: 'When children are welcomed into a new family through a legal process, this is called...', options: ['adoption', 'fostering', 'moving', 'visiting'], answer: 'adoption', explanation: 'ADOPTION is when a family legally welcomes a child as their own — adopted children are completely loved family members!' },

  { id: 'ess2-k-24', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'national symbols',
    visual: '🏅', prompt: 'The Pledge of Allegiance is a promise Americans make to...', options: ['be loyal to the United States flag and country', 'vote for the President', 'pay their taxes', 'join the army'], answer: 'be loyal to the United States flag and country', explanation: 'When we say the Pledge of Allegiance, we promise to be loyal to our country and its values of liberty and justice for all!' },

  { id: 'ess2-k-25', type: 'multiple-choice', level: 'K', subject: 'social-studies', language: 'english', topic: 'good citizenship',
    visual: '🤗', prompt: 'Being kind to someone who is new to your school or community is an example of...', options: ['showing empathy and good citizenship', 'following school rules', 'learning history', 'understanding geography'], answer: 'showing empathy and good citizenship', explanation: 'Welcoming newcomers with kindness shows empathy and is wonderful citizenship — imagine how you\'d feel being new!' },

  // ============================================================
  // 1ST GRADE (25 questions)
  // ============================================================

  { id: 'ess2-1-01', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods and services',
    visual: '🛒', prompt: 'A GOOD is something you can touch and buy. Which of these is a GOOD?', options: ['a bicycle', 'a haircut', 'a doctor visit', 'a piano lesson'], answer: 'a bicycle', explanation: 'A GOOD is a physical thing you can hold — like a bicycle, food, or toys!' },

  { id: 'ess2-1-02', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods and services',
    visual: '💇', prompt: 'A SERVICE is a job someone does for you. Which of these is a SERVICE?', options: ['a haircut', 'a pair of shoes', 'a sandwich', 'a book'], answer: 'a haircut', explanation: 'A SERVICE is work done for others — haircuts, car washes, and teaching are all services!' },

  { id: 'ess2-1-03', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'producers and consumers',
    visual: '🧑‍🌾', prompt: 'A PRODUCER makes or grows things. A CONSUMER buys and uses things. What is a farmer who grows corn?', options: ['a producer', 'a consumer', 'both equally', 'neither'], answer: 'a producer', explanation: 'A farmer who GROWS corn is a PRODUCER — they make/grow a good that others will use or buy!' },

  { id: 'ess2-1-04', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'producers and consumers',
    visual: '🛍️', prompt: 'When you buy a toy at a store, you are acting as a...', options: ['consumer', 'producer', 'manufacturer', 'distributor'], answer: 'consumer', explanation: 'When you BUY and USE something, you\'re a CONSUMER! You consume (use up) the goods and services you buy.' },

  { id: 'ess2-1-05', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '⚖️', prompt: 'The United States government has THREE branches to make sure no one person has too much power. The branch that makes laws is the...', options: ['Legislative branch (Congress)', 'Executive branch (President)', 'Judicial branch (Supreme Court)', 'Military branch'], answer: 'Legislative branch (Congress)', explanation: 'The LEGISLATIVE branch (Senate + House of Representatives = Congress) writes and passes laws!' },

  { id: 'ess2-1-06', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '🏛️', prompt: 'The branch of government headed by the PRESIDENT is the...', options: ['Executive branch', 'Legislative branch', 'Judicial branch', 'Cabinet branch'], answer: 'Executive branch', explanation: 'The EXECUTIVE branch is led by the President — they carry out and enforce the laws!' },

  { id: 'ess2-1-07', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '⚖️', prompt: 'The SUPREME COURT is part of the Judicial branch. The Supreme Court\'s job is to...', options: ['interpret laws and decide if they are fair', 'write new laws', 'lead the military', 'collect taxes'], answer: 'interpret laws and decide if they are fair', explanation: 'The JUDICIAL branch (courts) interprets laws — they decide if laws follow the Constitution!' },

  { id: 'ess2-1-08', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'US states and capitals',
    visual: '🗺️', prompt: 'What is the capital city of the United States (where the President works)?', options: ['Washington D.C.', 'New York City', 'Los Angeles', 'Chicago'], answer: 'Washington D.C.', explanation: 'Washington D.C. is our nation\'s capital — home to the White House, Congress, and Supreme Court!' },

  { id: 'ess2-1-09', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'US states and capitals',
    visual: '🍑', prompt: 'What is the capital of Georgia (Avery\'s state)?', options: ['Atlanta', 'Savannah', 'Augusta', 'Macon'], answer: 'Atlanta', explanation: 'ATLANTA is the capital of Georgia — it\'s a big, exciting city and Avery\'s home state capital!' },

  { id: 'ess2-1-10', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'US states and capitals',
    visual: '🏝️', prompt: 'Which U.S. state is the only one made up entirely of islands in the Pacific Ocean?', options: ['Hawaii', 'Alaska', 'Florida', 'California'], answer: 'Hawaii', explanation: 'HAWAII is an island state in the Pacific Ocean — it\'s the newest state (joined 1959) and the only state made of islands!' },

  { id: 'ess2-1-11', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'US states and capitals',
    visual: '🗽', prompt: 'What is the capital of New York state?', options: ['Albany', 'New York City', 'Buffalo', 'Syracuse'], answer: 'Albany', explanation: 'ALBANY is the capital of New York — not New York City! Many people get confused by this!' },

  { id: 'ess2-1-12', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '✊', prompt: 'Dr. Martin Luther King Jr. is famous for...', options: ['leading the Civil Rights Movement peacefully', 'being the first President', 'discovering America', 'writing the Constitution'], answer: 'leading the Civil Rights Movement peacefully', explanation: 'Dr. King led peaceful marches and gave inspiring speeches for equal rights. He delivered the famous "I Have a Dream" speech!' },

  { id: 'ess2-1-13', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🚂', prompt: 'Harriet Tubman was a brave woman who...', options: ['helped enslaved people escape to freedom on the Underground Railroad', 'was the first female President', 'led an army in a war', 'discovered a cure for disease'], answer: 'helped enslaved people escape to freedom on the Underground Railroad', explanation: 'Harriet Tubman was incredibly brave — she escaped slavery and then went back 13 times to help about 70 more people escape to freedom!' },

  { id: 'ess2-1-14', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🌍', prompt: 'Sacagawea was a Native American woman who helped Lewis and Clark...', options: ['explore and map the American West', 'win the Revolutionary War', 'write the Declaration of Independence', 'build the White House'], answer: 'explore and map the American West', explanation: 'Sacagawea was a Shoshone woman who guided and translated for Lewis and Clark as they explored the American West!' },

  { id: 'ess2-1-15', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods and services',
    visual: '👩‍🍳', prompt: 'A baker who makes and sells bread is a...', options: ['producer of goods', 'consumer only', 'service worker only', 'government worker'], answer: 'producer of goods', explanation: 'A baker who MAKES bread is a PRODUCER — they create a good (bread) for consumers to buy!' },

  { id: 'ess2-1-16', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'US states and capitals',
    visual: '🌵', prompt: 'The capital of Texas is...', options: ['Austin', 'Houston', 'Dallas', 'San Antonio'], answer: 'Austin', explanation: 'AUSTIN is the capital of Texas — it\'s known for its music and tech scene!' },

  { id: 'ess2-1-17', type: 'true-false', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '⚖️', prompt: 'The three branches of U.S. government are the Legislative, Executive, and Judicial branches.', options: ['True', 'False'], answer: 'True', explanation: 'The three branches: LEGISLATIVE (Congress makes laws), EXECUTIVE (President enforces laws), JUDICIAL (Courts interpret laws)!' },

  { id: 'ess2-1-18', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '💡', prompt: 'Thomas Edison was a famous American inventor. He invented the practical...', options: ['light bulb', 'airplane', 'telephone', 'automobile'], answer: 'light bulb', explanation: 'Thomas Edison invented the practical light bulb in 1879 — before that, people used candles and gas lamps!' },

  { id: 'ess2-1-19', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods and services',
    visual: '🏥', prompt: 'When a doctor helps a sick patient, the doctor is providing a...', options: ['service', 'good', 'product', 'trade'], answer: 'service', explanation: 'Medical care is a SERVICE — the doctor\'s work and expertise help you, but you can\'t take the "help" home in a bag!' },

  { id: 'ess2-1-20', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '✈️', prompt: 'Amelia Earhart was a famous American because she was...', options: ['the first woman to fly solo across the Atlantic Ocean', 'the first President\'s wife', 'the first woman in space', 'the first female teacher'], answer: 'the first woman to fly solo across the Atlantic Ocean', explanation: 'Amelia Earhart was a record-breaking aviator — in 1932 she became the first woman to fly solo across the Atlantic!' },

  { id: 'ess2-1-21', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: '3 branches of government',
    visual: '🏛️', prompt: 'Congress is made up of two groups: the Senate and the...', options: ['House of Representatives', 'Supreme Court', 'Cabinet', 'Army'], answer: 'House of Representatives', explanation: 'Congress = Senate + House of Representatives. Together they make up the LEGISLATIVE branch!' },

  { id: 'ess2-1-22', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'US states and capitals',
    visual: '🌊', prompt: 'The capital of California is...', options: ['Sacramento', 'Los Angeles', 'San Francisco', 'San Diego'], answer: 'Sacramento', explanation: 'SACRAMENTO is California\'s capital — not the more famous LA or San Francisco!' },

  { id: 'ess2-1-23', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'goods and services',
    visual: '📚', prompt: 'A librarian helping you find a book is providing a...', options: ['service', 'good', 'product you can take home', 'trade'], answer: 'service', explanation: 'The librarian\'s HELP is a service — their knowledge and assistance make your library visit better!' },

  { id: 'ess2-1-24', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'producers and consumers',
    visual: '🏭', prompt: 'A factory that makes shoes is a...', options: ['producer', 'consumer', 'trader', 'buyer'], answer: 'producer', explanation: 'A factory that MAKES shoes is a PRODUCER — it creates goods for consumers to buy and wear!' },

  { id: 'ess2-1-25', type: 'multiple-choice', level: '1', subject: 'social-studies', language: 'english', topic: 'famous Americans',
    visual: '🔭', prompt: 'Mae C. Jemison was a famous American who became...', options: ['the first African American woman in space', 'the first female President', 'the first Black woman in Congress', 'the first female doctor'], answer: 'the first African American woman in space', explanation: 'Dr. Mae Jemison flew to space in 1992 — she was a doctor, engineer, and the first Black woman to travel to space. Amazing!' },

  // ============================================================
  // 2ND GRADE (25 questions)
  // ============================================================

  { id: 'ess2-2-01', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration and culture',
    visual: '🌍', prompt: 'When people move from one country to LIVE in another country, they are called...', options: ['immigrants', 'tourists', 'explorers', 'traders'], answer: 'immigrants', explanation: 'IMMIGRANTS move to a new country to start a new life — America is a nation of immigrants from all over the world!' },

  { id: 'ess2-2-02', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration and culture',
    visual: '🗽', prompt: 'The United States is often called a "melting pot" because...', options: ['many cultures blend together here', 'it gets very hot in summer', 'it has many cooking traditions', 'it was discovered by explorers'], answer: 'many cultures blend together here', explanation: 'A "melting pot" means many different cultures come together and blend — America\'s diversity is its strength!' },

  { id: 'ess2-2-03', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🏜️', prompt: 'A DESERT is a region that receives very little...', options: ['rainfall (precipitation)', 'sunlight', 'wind', 'soil'], answer: 'rainfall (precipitation)', explanation: 'DESERTS get less than 10 inches of rain per year — they can be hot (Sahara) or cold (Antarctica)!' },

  { id: 'ess2-2-04', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🌴', prompt: 'A RAINFOREST gets large amounts of rain and is home to more than half of the world\'s species. The largest rainforest is the...', options: ['Amazon Rainforest in South America', 'Sahara Desert in Africa', 'Gobi Desert in Asia', 'Great Barrier Reef in Australia'], answer: 'Amazon Rainforest in South America', explanation: 'The AMAZON Rainforest in Brazil (South America) is the world\'s largest tropical rainforest — it\'s called the "lungs of the Earth"!' },

  { id: 'ess2-2-05', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🏔️', prompt: 'The HIMALAYAS are the world\'s tallest mountain range. They are located in...', options: ['Asia', 'North America', 'Africa', 'Europe'], answer: 'Asia', explanation: 'The HIMALAYAS are in Asia — they include Mount Everest, the tallest mountain on Earth at about 29,032 feet!' },

  { id: 'ess2-2-06', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🌊', prompt: 'How many major oceans are there on Earth?', options: ['5', '4', '6', '3'], answer: '5', explanation: 'Earth has 5 oceans: Pacific, Atlantic, Indian, Arctic, and Southern (Antarctic). The Pacific is the biggest!' },

  { id: 'ess2-2-07', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'economics',
    visual: '💰', prompt: 'When there are more buyers who want something than there is of that thing available, the price usually...', options: ['goes up (higher demand = higher price)', 'goes down', 'stays the same', 'becomes free'], answer: 'goes up (higher demand = higher price)', explanation: 'Supply and demand: when everyone wants something and there\'s not much of it, sellers can charge MORE!' },

  { id: 'ess2-2-08', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'economics',
    visual: '🏪', prompt: 'SCARCITY means there is not enough of something to meet everyone\'s needs. Scarcity is why people must make...', options: ['choices (trade-offs)', 'friends', 'maps', 'governments'], answer: 'choices (trade-offs)', explanation: 'Because of scarcity, we can\'t have everything — we must make choices. Economics is all about making smart choices!' },

  { id: 'ess2-2-09', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Native Americans',
    visual: '🌽', prompt: 'Native Americans were the first people to live in North America. The Navajo, Cherokee, and Lakota Sioux are examples of Native American...', options: ['tribes (nations)', 'countries', 'states', 'cities'], answer: 'tribes (nations)', explanation: 'Native Americans lived in hundreds of different TRIBES (nations), each with their own language, customs, and traditions!' },

  { id: 'ess2-2-10', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Native Americans',
    visual: '🏹', prompt: 'Many Native American groups used teepees. Teepees were used by tribes who...', options: ['followed buffalo herds on the Great Plains', 'lived in the rainforest', 'lived near the ocean', 'lived in the mountains permanently'], answer: 'followed buffalo herds on the Great Plains', explanation: 'Plains tribes like the Lakota Sioux used teepees because they moved often to follow the buffalo — teepees were easy to set up and take down!' },

  { id: 'ess2-2-11', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Colonial America',
    visual: '⛵', prompt: 'The PILGRIMS came to America on the Mayflower in 1620. They came seeking...', options: ['religious freedom', 'gold and treasure', 'new trade routes to Asia', 'adventure'], answer: 'religious freedom', explanation: 'The Pilgrims came to America so they could practice their religion freely — they celebrated the first Thanksgiving with the Wampanoag people!' },

  { id: 'ess2-2-12', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Colonial America',
    visual: '🏠', prompt: 'The 13 original American colonies were ruled by...', options: ['Great Britain (England)', 'France', 'Spain', 'the United States'], answer: 'Great Britain (England)', explanation: 'The 13 colonies were part of the British Empire — ruled by the King of England until the Revolutionary War!' },

  { id: 'ess2-2-13', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration and culture',
    visual: '🗣️', prompt: 'Which is an example of cultural HERITAGE (things passed down from your ancestors)?', options: ['traditional foods, music, and holidays', 'laws made by Congress', 'weather patterns', 'school subjects'], answer: 'traditional foods, music, and holidays', explanation: 'Cultural HERITAGE includes the traditions, foods, music, languages, and holidays passed down through generations!' },

  { id: 'ess2-2-14', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🌎', prompt: 'The equator is an imaginary line that divides Earth into...', options: ['Northern and Southern Hemispheres', 'Eastern and Western Hemispheres', 'North and South Poles', 'two continents'], answer: 'Northern and Southern Hemispheres', explanation: 'The EQUATOR divides Earth into two halves: the Northern Hemisphere and the Southern Hemisphere!' },

  { id: 'ess2-2-15', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'economics',
    visual: '📈', prompt: 'When MORE of something is produced (supply increases) but demand stays the same, prices usually...', options: ['go down', 'go up', 'stay the same', 'disappear'], answer: 'go down', explanation: 'More supply with same demand = lower prices! When stores have too much of something, they lower the price to sell it!' },

  { id: 'ess2-2-16', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Native Americans',
    visual: '🌊', prompt: 'The Cherokee Nation originally lived in the southeastern United States. In the 1830s, they were forced to move west in what became known as...', options: ['the Trail of Tears', 'the Oregon Trail', 'the Pony Express', 'the Underground Railroad'], answer: 'the Trail of Tears', explanation: 'The Trail of Tears was the forced removal of Cherokee and other nations from their homeland — a tragic and painful event in American history.' },

  { id: 'ess2-2-17', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Colonial America',
    visual: '📜', prompt: 'The Declaration of Independence was signed in 1776. It declared that...', options: ['the colonies were free from British rule', 'a new king would be chosen', 'taxes would be raised', 'the colonies would join France'], answer: 'the colonies were free from British rule', explanation: 'The Declaration of Independence declared that the 13 colonies were no longer under British rule — America was born!' },

  { id: 'ess2-2-18', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🌍', prompt: 'Africa is the world\'s second-largest continent. The largest desert in the world, the Sahara, is located in...', options: ['North Africa', 'South Africa', 'East Africa', 'Central Africa'], answer: 'North Africa', explanation: 'The SAHARA DESERT covers most of North Africa — it\'s about the size of the United States!' },

  { id: 'ess2-2-19', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration and culture',
    visual: '🥘', prompt: 'When you eat pizza (from Italy), tacos (from Mexico), or sushi (from Japan), you are experiencing other cultures\' ...', options: ['culinary (food) traditions', 'government systems', 'geography', 'economic systems'], answer: 'culinary (food) traditions', explanation: 'Food is one of the most delicious ways cultures share their heritage! Food traditions are a key part of cultural identity!' },

  { id: 'ess2-2-20', type: 'true-false', level: '2', subject: 'social-studies', language: 'english', topic: 'Colonial America',
    visual: '🦅', prompt: 'The 13 original American colonies became the first 13 states of the United States.', options: ['True', 'False'], answer: 'True', explanation: 'The 13 colonies became the first 13 states! That\'s why the American flag has 13 stripes — one for each original colony!' },

  { id: 'ess2-2-21', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'economics',
    visual: '🏦', prompt: 'Money that you save and keep for later is called...', options: ['savings', 'taxes', 'trade', 'debt'], answer: 'savings', explanation: 'SAVINGS is money you keep and don\'t spend — saving is a smart economic habit that gives you choices later!' },

  { id: 'ess2-2-22', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🧊', prompt: 'Antarctica is a continent covered in ice at the South Pole. Almost no one permanently lives there because...', options: ['it is too cold for permanent settlement', 'it is too small', 'it belongs to one country that doesn\'t allow visitors', 'it has no land, only ice'], answer: 'it is too cold for permanent settlement', explanation: 'Antarctica is the coldest, windiest, and driest continent — scientists visit for research, but no one permanently lives there!' },

  { id: 'ess2-2-23', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'Native Americans',
    visual: '🌾', prompt: 'Many Native American groups were farmers who grew corn, beans, and squash together. These three crops were called...', options: ['the Three Sisters', 'the Sacred Trio', 'the Native Harvest', 'the Earth Crops'], answer: 'the Three Sisters', explanation: 'Corn, beans, and squash are called the THREE SISTERS — they were planted together because they help each other grow!' },

  { id: 'ess2-2-24', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'immigration and culture',
    visual: '🌐', prompt: 'America\'s motto is "E Pluribus Unum," which is Latin for...', options: ['Out of many, one', 'United we stand', 'Land of the free', 'Liberty and justice'], answer: 'Out of many, one', explanation: '"E Pluribus Unum" means OUT OF MANY, ONE — our motto reflects how many different people united to form one nation!' },

  { id: 'ess2-2-25', type: 'multiple-choice', level: '2', subject: 'social-studies', language: 'english', topic: 'world geography',
    visual: '🗺️', prompt: 'Lines of LATITUDE run east-west around the globe and measure how far north or south of the equator a place is. Lines of LONGITUDE run...', options: ['north-south from pole to pole', 'east-west like latitude', 'diagonally across the globe', 'in circles around the poles'], answer: 'north-south from pole to pole', explanation: 'Latitude lines go EAST-WEST (horizontal). Longitude lines go NORTH-SOUTH (vertical). Together they form a grid to find any location!' },

  // ============================================================
  // 3RD GRADE (25 questions)
  // ============================================================

  { id: 'ess2-3-01', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '🎪', prompt: 'One major cause of the American Revolution was "taxation without representation." This means colonists were angry because...', options: ['they had to pay British taxes but had no say in making the laws', 'they were taxed too little', 'they had too many representatives in British Parliament', 'British soldiers were friendly'], answer: 'they had to pay British taxes but had no say in making the laws', explanation: '"No taxation without representation!" — colonists paid taxes to Britain but had NO voice in Parliament. That was unfair!' },

  { id: 'ess2-3-02', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '☕', prompt: 'The Boston Tea Party (1773) was a protest where colonists dumped British tea into Boston Harbor because they were angry about...', options: ['unfair tea taxes', 'the taste of the tea', 'British soldiers using their ships', 'the price of coffee'], answer: 'unfair tea taxes', explanation: 'The Boston Tea Party was a PROTEST against the Tea Act — colonists dumped 342 chests of British tea into the harbor!' },

  { id: 'ess2-3-03', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '⚔️', prompt: 'Who led the Continental Army to victory in the American Revolution?', options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'Paul Revere'], answer: 'George Washington', explanation: 'George Washington led the Continental Army through terrible hardships and eventually won independence — he then became our first President!' },

  { id: 'ess2-3-04', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution basics',
    visual: '📜', prompt: 'The U.S. Constitution begins with "We the People." This phrase means...', options: ['the government gets its power from the citizens', 'only wealthy people have rights', 'the king rules the country', 'soldiers make the laws'], answer: 'the government gets its power from the citizens', explanation: '"We the People" shows that in America, the PEOPLE are in charge — the government serves the people, not the other way around!' },

  { id: 'ess2-3-05', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution basics',
    visual: '📋', prompt: 'The Preamble is the opening of the Constitution. It states one of its goals is to "promote the general welfare," which means...', options: ['improve the well-being of all citizens', 'collect welfare payments', 'build welfare offices', 'pay for the military'], answer: 'improve the well-being of all citizens', explanation: '"General welfare" means the well-being of ALL people — the Constitution aims to make life better for every citizen!' },

  { id: 'ess2-3-06', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution basics',
    visual: '🔐', prompt: 'The FIRST AMENDMENT protects important freedoms. Which of these is protected by the First Amendment?', options: ['Freedom of speech and religion', 'The right to own a car', 'The right to free healthcare', 'The right to a free education'], answer: 'Freedom of speech and religion', explanation: 'The First Amendment protects: freedom of speech, religion, press, assembly, and petition — these are fundamental to democracy!' },

  { id: 'ess2-3-07', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US landmarks',
    visual: '🏛️', prompt: 'The Washington Monument in Washington D.C. honors...', options: ['George Washington, the first President', 'Abraham Lincoln', 'Benjamin Franklin', 'Thomas Jefferson'], answer: 'George Washington, the first President', explanation: 'The WASHINGTON MONUMENT is the world\'s tallest stone structure — a 555-foot obelisk honoring our first President!' },

  { id: 'ess2-3-08', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US landmarks',
    visual: '🏜️', prompt: 'The Grand Canyon is a massive gorge carved by the Colorado River. It is located in...', options: ['Arizona', 'Colorado', 'Utah', 'Nevada'], answer: 'Arizona', explanation: 'The GRAND CANYON is in Arizona — it\'s about a mile deep and up to 18 miles wide! It took millions of years to form!' },

  { id: 'ess2-3-09', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US landmarks',
    visual: '🌋', prompt: 'Yellowstone National Park is famous for its geysers (jets of hot water). It is located mostly in...', options: ['Wyoming', 'California', 'Florida', 'Alaska'], answer: 'Wyoming', explanation: 'Yellowstone is in Wyoming (also touches Idaho and Montana) — Old Faithful geyser erupts about every 90 minutes!' },

  { id: 'ess2-3-10', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🗺️', prompt: 'New York, Massachusetts, and Pennsylvania are all in which U.S. region?', options: ['Northeast', 'South', 'Midwest', 'West'], answer: 'Northeast', explanation: 'The NORTHEAST region includes the New England states plus New York, Pennsylvania, and New Jersey — it\'s the oldest settled part of America!' },

  { id: 'ess2-3-11', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🌾', prompt: 'States like Ohio, Illinois, and Iowa are known for their flat farmland. They are in the...', options: ['Midwest', 'South', 'Northeast', 'West'], answer: 'Midwest', explanation: 'The MIDWEST is called "America\'s Breadbasket" — its flat plains are perfect for growing corn, wheat, and soybeans!' },

  { id: 'ess2-3-12', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🌵', prompt: 'Texas, New Mexico, Arizona, and Oklahoma are part of which region?', options: ['Southwest', 'Southeast', 'Northwest', 'Midwest'], answer: 'Southwest', explanation: 'The SOUTHWEST region is known for deserts, canyons, and strong Native American and Hispanic cultural influence!' },

  { id: 'ess2-3-13', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War basics',
    visual: '🇺🇸', prompt: 'The American Civil War (1861-1865) was fought mainly over the issue of...', options: ['slavery', 'which country owned the west', 'religious freedom', 'foreign invasion'], answer: 'slavery', explanation: 'The Civil War was fought over slavery and states\' rights — the Union (North) fought to preserve the country and end slavery!' },

  { id: 'ess2-3-14', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War basics',
    visual: '🗺️', prompt: 'During the Civil War, the UNION was the name for...', options: ['the Northern states that stayed loyal to the United States', 'the Southern states that left', 'the British forces helping America', 'the western territories'], answer: 'the Northern states that stayed loyal to the United States', explanation: 'The UNION = Northern states. The CONFEDERACY = Southern states. The Union won and the country stayed together!' },

  { id: 'ess2-3-15', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War basics',
    visual: '🕊️', prompt: 'President Lincoln issued the Emancipation Proclamation in 1863. This declared that...', options: ['enslaved people in Confederate states were free', 'the war was over', 'a new President would be elected', 'taxes would be cut'], answer: 'enslaved people in Confederate states were free', explanation: 'The EMANCIPATION PROCLAMATION declared enslaved people in rebel states were free — a huge step toward ending slavery in America!' },

  { id: 'ess2-3-16', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '📢', prompt: 'Thomas Paine wrote "Common Sense" in 1776 to convince colonists to...', options: ['declare independence from Britain', 'remain loyal to Britain', 'join the British Army', 'move to France'], answer: 'declare independence from Britain', explanation: '"Common Sense" was a powerful pamphlet that convinced many colonists that independence from Britain was not just possible — it was right!' },

  { id: 'ess2-3-17', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🌲', prompt: 'The Pacific Northwest is known for its tall forests, mountains, and rainy climate. Which states are in this region?', options: ['Washington and Oregon', 'Texas and New Mexico', 'Florida and Georgia', 'New York and New Jersey'], answer: 'Washington and Oregon', explanation: 'Washington state and Oregon make up the Pacific Northwest — famous for rain forests, mountains, and the Pacific Coast!' },

  { id: 'ess2-3-18', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution basics',
    visual: '⚖️', prompt: 'The Bill of Rights is the first 10 amendments to the Constitution. It was added because...', options: ['citizens wanted their individual rights clearly protected', 'the original Constitution was too long', 'the President demanded it', 'it was required by Britain'], answer: 'citizens wanted their individual rights clearly protected', explanation: 'The BILL OF RIGHTS was added in 1791 to guarantee specific freedoms — like speech, religion, and fair trials — to every American!' },

  { id: 'ess2-3-19', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US landmarks',
    visual: '🗽', prompt: 'The Statue of Liberty was a gift to the United States from...', options: ['France', 'Great Britain', 'Canada', 'Spain'], answer: 'France', explanation: 'France gave the Statue of Liberty to the USA in 1886 as a symbol of friendship and shared values of freedom and democracy!' },

  { id: 'ess2-3-20', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '🌴', prompt: 'Florida, Georgia, and Louisiana are in which U.S. region?', options: ['South (Southeast)', 'Midwest', 'Northeast', 'Southwest'], answer: 'South (Southeast)', explanation: 'The SOUTH (Southeast) region is known for warm weather, the Gulf of Mexico coast, and rich cultural history!' },

  { id: 'ess2-3-21', type: 'true-false', level: '3', subject: 'social-studies', language: 'english', topic: 'Constitution basics',
    visual: '📜', prompt: 'The United States Constitution is the oldest written national constitution still in use in the world.', options: ['True', 'False'], answer: 'True', explanation: 'The U.S. Constitution (written in 1787) is the world\'s oldest national constitution still in use — a remarkable document!' },

  { id: 'ess2-3-22', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'Civil War basics',
    visual: '🏳️', prompt: 'The Civil War ended in 1865 when Confederate General Robert E. Lee surrendered to Union General...', options: ['Ulysses S. Grant', 'Abraham Lincoln', 'William Sherman', 'Stonewall Jackson'], answer: 'Ulysses S. Grant', explanation: 'General Ulysses S. Grant accepted General Lee\'s surrender at Appomattox Court House in 1865 — ending the Civil War!' },

  { id: 'ess2-3-23', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'American Revolution',
    visual: '🕯️', prompt: 'Paul Revere\'s famous midnight ride warned colonial militia that...', options: ['British troops were approaching', 'the war had ended', 'a new king had been chosen', 'supplies were arriving'], answer: 'British troops were approaching', explanation: 'Paul Revere rode through the night shouting "The Redcoats are coming!" to warn colonists — a legendary act of patriotism!' },

  { id: 'ess2-3-24', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US landmarks',
    visual: '🏔️', prompt: 'Mount Rushmore in South Dakota has the faces of four Presidents carved into granite. Which President is NOT on Mount Rushmore?', options: ['John Adams', 'George Washington', 'Abraham Lincoln', 'Thomas Jefferson'], answer: 'John Adams', explanation: 'Mount Rushmore features WASHINGTON, JEFFERSON, LINCOLN, and THEODORE ROOSEVELT. John Adams is not on it!' },

  { id: 'ess2-3-25', type: 'multiple-choice', level: '3', subject: 'social-studies', language: 'english', topic: 'US regions',
    visual: '⛰️', prompt: 'California, Colorado, and Montana are in which U.S. region?', options: ['West', 'South', 'Midwest', 'Northeast'], answer: 'West', explanation: 'The WEST region includes states west of the Great Plains — known for mountains, deserts, Pacific coastline, and National Parks!' },

  // ============================================================
  // TAG LEVEL (25 questions)
  // ============================================================

  { id: 'ess2-t-01', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '✊', prompt: 'In 1955, Rosa Parks refused to give up her seat on a bus. Her act of courage helped spark the...', options: ['Montgomery Bus Boycott', 'March on Washington', 'Freedom Rides', 'Selma to Montgomery March'], answer: 'Montgomery Bus Boycott', explanation: 'Rosa Parks\' arrest led to the MONTGOMERY BUS BOYCOTT — Black citizens boycotted the buses for 381 days until segregation on buses ended!' },

  { id: 'ess2-t-02', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '🏫', prompt: 'Brown v. Board of Education (1954) was a Supreme Court case that declared...', options: ['racial segregation in public schools was unconstitutional', 'schools should be free', 'children must attend school until age 16', 'teachers must have degrees'], answer: 'racial segregation in public schools was unconstitutional', explanation: 'BROWN v. BOARD was a landmark case — the Supreme Court ruled that "separate but equal" schools were NOT equal and were unconstitutional!' },

  { id: 'ess2-t-03', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '📖', prompt: 'The Civil Rights Act of 1964 was signed by President Lyndon B. Johnson. This law...', options: ['banned discrimination based on race, color, religion, or national origin', 'gave women the right to vote', 'ended the Civil War', 'created the Supreme Court'], answer: 'banned discrimination based on race, color, religion, or national origin', explanation: 'The CIVIL RIGHTS ACT of 1964 was transformative — it outlawed discrimination in employment, schools, restaurants, and more!' },

  { id: 'ess2-t-04', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '🎤', prompt: 'Dr. King\'s "I Have a Dream" speech was delivered during which 1963 event?', options: ['The March on Washington for Jobs and Freedom', 'The Montgomery Bus Boycott', 'The Selma to Montgomery March', 'The sit-ins at Woolworth\'s'], answer: 'The March on Washington for Jobs and Freedom', explanation: 'On August 28, 1963, over 250,000 people gathered at the Lincoln Memorial — and Dr. King delivered his iconic "I Have a Dream" speech!' },

  { id: 'ess2-t-05', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '🌍', prompt: 'The Civil Rights Movement was inspired in part by Mahatma Gandhi\'s philosophy of...', options: ['nonviolent resistance (peaceful protest)', 'armed revolution', 'economic boycotts only', 'political negotiation only'], answer: 'nonviolent resistance (peaceful protest)', explanation: 'Dr. King studied Gandhi\'s philosophy of NONVIOLENT RESISTANCE — peaceful protests, marches, and sit-ins achieved change without violence!' },

  { id: 'ess2-t-06', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world history connections',
    visual: '🌍', prompt: 'The French Revolution (1789) was partly inspired by the American Revolution. Both revolutions were about...', options: ['citizens overthrowing oppressive governments for liberty', 'one country attacking another', 'religious disagreements', 'economic trade disputes'], answer: 'citizens overthrowing oppressive governments for liberty', explanation: 'Both the American and French Revolutions were about citizens demanding liberty, equality, and self-governance — they inspired each other!' },

  { id: 'ess2-t-07', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world history connections',
    visual: '🚂', prompt: 'The Industrial Revolution (1760s-1840s) changed society by moving production from...', options: ['hand craftsmanship to machine manufacturing', 'machines back to hand craftsmanship', 'farms to fishing villages', 'cities back to the countryside'], answer: 'hand craftsmanship to machine manufacturing', explanation: 'The Industrial Revolution moved production from hand-crafted to factory-made — it changed work, cities, transportation, and society forever!' },

  { id: 'ess2-t-08', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global economics',
    visual: '🌐', prompt: 'GLOBALIZATION means that countries around the world are...', options: ['increasingly connected through trade, technology, and culture', 'becoming more separate and isolated', 'using the same language', 'having the same government'], answer: 'increasingly connected through trade, technology, and culture', explanation: 'GLOBALIZATION connects countries through trade (buying/selling), technology, travel, and cultural exchange — the world is more connected than ever!' },

  { id: 'ess2-t-09', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global economics',
    visual: '🚢', prompt: 'When a country IMPORTS something, it...', options: ['brings goods in from another country', 'sends goods to another country', 'makes goods at home only', 'bans goods from other countries'], answer: 'brings goods in from another country', explanation: 'IMPORTS come IN to a country from abroad. EXPORTS go OUT. The U.S. imports coffee from Brazil and exports airplanes to other countries!' },

  { id: 'ess2-t-10', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global economics',
    visual: '📦', prompt: 'A TARIFF is a tax placed on...', options: ['imported goods from other countries', 'income earned by workers', 'land owned by citizens', 'sales within a country'], answer: 'imported goods from other countries', explanation: 'TARIFFS are taxes on imports — countries use them to protect their own industries or as tools in trade negotiations!' },

  { id: 'ess2-t-11', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'democratic vs non-democratic governments',
    visual: '🗳️', prompt: 'In a DEMOCRACY, citizens have the right to...', options: ['vote for their leaders and participate in government', 'be ruled by whoever is strongest', 'follow a single ruler without question', 'only obey religious leaders'], answer: 'vote for their leaders and participate in government', explanation: 'Democracy comes from Greek: "demos" (people) + "kratos" (rule). In a democracy, the PEOPLE rule through voting!' },

  { id: 'ess2-t-12', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'democratic vs non-democratic governments',
    visual: '👑', prompt: 'In an AUTOCRACY (like a dictatorship), power is held by...', options: ['one ruler with little or no limits on their power', 'elected representatives', 'all citizens equally', 'religious leaders alone'], answer: 'one ruler with little or no limits on their power', explanation: 'An AUTOCRACY concentrates power in one person or small group with no checks and balances — citizens have little or no say!' },

  { id: 'ess2-t-13', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'democratic vs non-democratic governments',
    visual: '👑', prompt: 'A CONSTITUTIONAL MONARCHY (like the United Kingdom today) is a government where a king or queen...', options: ['serves as head of state but elected officials make the laws', 'has absolute unlimited power', 'is chosen by citizens through voting', 'is always overthrown by the military'], answer: 'serves as head of state but elected officials make the laws', explanation: 'In a CONSTITUTIONAL MONARCHY, the monarch is a symbol but Parliament makes the laws — King Charles III reigns but doesn\'t rule alone!' },

  { id: 'ess2-t-14', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'how laws are made',
    visual: '📋', prompt: 'In the U.S., a new law starts as a "bill." For a bill to become law, it must be passed by both houses of Congress AND...', options: ['signed by the President (or have a veto overridden)', 'approved by the Supreme Court', 'voted on by all citizens', 'approved by state governors'], answer: 'signed by the President (or have a veto overridden)', explanation: 'Bill → House votes → Senate votes → President signs = LAW! The President can also veto, but Congress can override with 2/3 vote!' },

  { id: 'ess2-t-15', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'how laws are made',
    visual: '⚖️', prompt: 'If the President VETOES a bill, what happens?', options: ['The bill is returned to Congress, which can try to override the veto', 'The bill automatically becomes law', 'The Supreme Court votes on it', 'The bill is permanently rejected'], answer: 'The bill is returned to Congress, which can try to override the veto', explanation: 'A VETO rejects the bill, but Congress can OVERRIDE it with a 2/3 majority vote in both houses — checks and balances at work!' },

  { id: 'ess2-t-16', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '🎓', prompt: 'The Little Rock Nine (1957) were nine brave Black students who integrated...', options: ['a high school in Arkansas despite a hostile mob', 'a university in Alabama', 'lunch counters in Georgia', 'a bus line in Montgomery'], answer: 'a high school in Arkansas despite a hostile mob', explanation: 'The Little Rock Nine bravely integrated Central High School in Arkansas — protected by federal troops sent by President Eisenhower!' },

  { id: 'ess2-t-17', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world history connections',
    visual: '🏺', prompt: 'Ancient ROME\'s concept of a "republic" (elected senators representing citizens) directly influenced the design of...', options: ['the United States government system', 'the British monarchy', 'the French Revolution\'s goals', 'the Russian Empire'], answer: 'the United States government system', explanation: 'America\'s Founding Fathers studied ancient Rome\'s republic — that\'s why we have a Senate and representative government!' },

  { id: 'ess2-t-18', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global economics',
    visual: '🌍', prompt: 'The United Nations (UN) is an organization of countries that works to...', options: ['promote peace, human rights, and cooperation among nations', 'rule all countries from one headquarters', 'create one world government', 'manage all world trade'], answer: 'promote peace, human rights, and cooperation among nations', explanation: 'The UNITED NATIONS (founded 1945) has 193 member countries working together on peace, humanitarian aid, and global challenges!' },

  { id: 'ess2-t-19', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'democratic vs non-democratic governments',
    visual: '📜', prompt: 'In a TRUE DEMOCRACY, which RIGHT is most essential?', options: ['Freedom of expression (speech, press, assembly)', 'The right to own property', 'The right to own weapons', 'The right to travel freely'], answer: 'Freedom of expression (speech, press, assembly)', explanation: 'Freedom of EXPRESSION is the foundation of democracy — without it, citizens cannot criticize leaders, organize, or demand change!' },

  { id: 'ess2-t-20', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'how laws are made',
    visual: '🗺️', prompt: 'The U.S. has FEDERALISM, which means power is shared between the national (federal) government and...', options: ['state governments', 'local city governments only', 'international governments', 'corporations'], answer: 'state governments', explanation: 'FEDERALISM divides power between the federal government (national) and state governments — states can make many of their own laws too!' },

  { id: 'ess2-t-21', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'Civil Rights movement',
    visual: '⚖️', prompt: 'The 13th Amendment (1865), 14th Amendment (1868), and 15th Amendment (1870) are called the "Reconstruction Amendments." What was their collective purpose?', options: ['To grant rights to formerly enslaved people and Black Americans', 'To rebuild the South\'s economy', 'To forgive Confederate soldiers', 'To expand westward territory'], answer: 'To grant rights to formerly enslaved people and Black Americans', explanation: '13th ended slavery, 14th granted citizenship, 15th gave Black men voting rights — these amendments were supposed to ensure equality, though enforcement took much longer!' },

  { id: 'ess2-t-22', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'world history connections',
    visual: '🌍', prompt: 'Which event in 1989 symbolized the end of the Cold War and the fall of communism in Eastern Europe?', options: ['The fall of the Berlin Wall', 'The moon landing', 'World War II ending', 'The French Revolution'], answer: 'The fall of the Berlin Wall', explanation: 'The BERLIN WALL divided East and West Germany from 1961-1989 — when it fell, it marked the end of the Cold War era!' },

  { id: 'ess2-t-23', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'how laws are made',
    visual: '📜', prompt: 'The process of changing the U.S. Constitution is called AMENDING it. Amendments require approval from...', options: ['two-thirds of Congress AND three-fourths of states', 'the President alone', 'a simple majority vote in Congress', 'the Supreme Court'], answer: 'two-thirds of Congress AND three-fourths of states', explanation: 'Amending the Constitution is intentionally DIFFICULT — it requires supermajority support to ensure broad agreement before changing our foundational law!' },

  { id: 'ess2-t-24', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'global economics',
    visual: '🏭', prompt: 'When a company moves its manufacturing to another country where labor costs less, this is called...', options: ['outsourcing', 'importing', 'exporting', 'tariffing'], answer: 'outsourcing', explanation: 'OUTSOURCING means hiring workers in another country to do work that was done at home — it\'s a key feature of globalization and economic trade-offs!' },

  { id: 'ess2-t-25', type: 'multiple-choice', level: 'TAG', subject: 'social-studies', language: 'english', topic: 'democratic vs non-democratic governments',
    visual: '⚖️', prompt: 'The concept of "CHECKS AND BALANCES" in the U.S. government means that...', options: ['each branch of government limits the power of the other two branches', 'the President can overrule anyone', 'the military controls the government', 'all laws must be checked by citizens before passing'], answer: 'each branch of government limits the power of the other two branches', explanation: 'CHECKS AND BALANCES prevent any one branch from having too much power — each branch can check (limit) the others. Brilliant design!' },

]
