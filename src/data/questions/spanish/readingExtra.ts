import type { Question } from '../../../types'

export const spanishReadingExtraQuestions: Question[] = [

  // ==============================================================
  // === KINDERGARTEN — 20 questions (sr2-k-01 to sr2-k-20) ===
  // ==============================================================

  { id: 'sr2-k-01', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'colores',
    visual: '🟣', prompt: '¿Cómo se dice PURPLE en español?', options: ['morado', 'naranja', 'rosa', 'blanco'], answer: 'morado',
    explanation: '¡Muy bien! Purple = MORADO! Los uvas son moradas. (Grapes are purple!) Can you say it? Mooorado!' },

  { id: 'sr2-k-02', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'colores',
    visual: '🍊', prompt: 'Orange in Spanish is called...', options: ['naranja', 'morado', 'rosa', 'negro'], answer: 'naranja',
    explanation: '¡Excelente! Orange = NARANJA — and a naranja (orange fruit) is also called naranja! Same word for the color AND the fruit! ¡Qué interesante!' },

  { id: 'sr2-k-03', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'colores',
    visual: '🌸', prompt: '¿Cómo se dice PINK en español?', options: ['rosa', 'rojo', 'morado', 'blanco'], answer: 'rosa',
    explanation: '¡Sí! Pink = ROSA — and rosa also means rose (the flower)! Las flores rosas son muy bonitas. (Pink flowers are very pretty!)' },

  { id: 'sr2-k-04', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'colores',
    visual: '⬜', prompt: 'WHITE in Spanish is...', options: ['blanco', 'negro', 'gris', 'morado'], answer: 'blanco',
    explanation: '¡Correcto! White = BLANCO! La nieve (snow) es blanca. El papel (paper) es blanco. ¡BLANCO!' },

  { id: 'sr2-k-05', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'colores',
    visual: '⬛', prompt: '¿Cómo se dice BLACK en español?', options: ['negro', 'blanco', 'gris', 'naranja'], answer: 'negro',
    explanation: '¡Muy bien! Black = NEGRO! La noche (night) es negra. Los osos panda son negros y blancos. (Pandas are black and white!)' },

  { id: 'sr2-k-06', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'números',
    visual: '🔢', prompt: '¿Cuánto es ONCE? What number is ONCE in Spanish?', options: ['11', '10', '12', '9'], answer: '11',
    explanation: '¡Sí! ONCE = 11! After diez (10) comes once (11). Let\'s count: ocho, nueve, diez, ¡ONCE!' },

  { id: 'sr2-k-07', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'números',
    visual: '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟', prompt: 'How do you say TWELVE in Spanish?', options: ['doce', 'once', 'trece', 'catorce'], answer: 'doce',
    explanation: '¡Excelente! 12 = DOCE! Once (11), DOCE (12), trece (13)... You\'re counting in Spanish like a pro!' },

  { id: 'sr2-k-08', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'números',
    visual: '🔟', prompt: '¿Cómo se dice TWENTY in Spanish?', options: ['veinte', 'diez', 'quince', 'dieciocho'], answer: 'veinte',
    explanation: '¡Perfecto! 20 = VEINTE! In Spanish, after diez y nueve (19) comes VEINTE (20). Can you count from diez to veinte?' },

  { id: 'sr2-k-09', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'días de la semana',
    visual: '📅', prompt: 'Monday in Spanish is...', options: ['lunes', 'martes', 'miércoles', 'jueves'], answer: 'lunes',
    explanation: '¡Sí! Monday = LUNES! In Spanish, days come from Latin: LUNES comes from "luna" — the moon! Spanish calendars start the week on lunes (Monday)!' },

  { id: 'sr2-k-10', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'días de la semana',
    visual: '📆', prompt: '¿Cómo se dice FRIDAY in Spanish?', options: ['viernes', 'sábado', 'domingo', 'jueves'], answer: 'viernes',
    explanation: '¡Muy bien! Friday = VIERNES! The Spanish days: lunes, martes, miércoles, jueves, VIERNES, sábado, domingo. ¡Friday = Viernes!' },

  { id: 'sr2-k-11', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'estaciones',
    visual: '🌺', prompt: 'SPRING in Spanish is...', options: ['primavera', 'verano', 'otoño', 'invierno'], answer: 'primavera',
    explanation: '¡Correcto! Spring = PRIMAVERA! En primavera, florecen las flores y llueve mucho. (In spring, flowers bloom and it rains a lot!) PRIMAVERA = spring!' },

  { id: 'sr2-k-12', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'estaciones',
    visual: '❄️', prompt: '¿Cómo se dice WINTER en español?', options: ['invierno', 'verano', 'primavera', 'otoño'], answer: 'invierno',
    explanation: '¡Sí! Winter = INVIERNO! En invierno, hace mucho frío y nieva. (In winter, it is very cold and it snows!) INVIERNO = winter!' },

  { id: 'sr2-k-13', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'saludos',
    visual: '👋', prompt: 'How do you say GOODBYE in Spanish?', options: ['adiós', 'hola', 'gracias', 'por favor'], answer: 'adiós',
    explanation: '¡Adiós! ADIÓS = goodbye! You already know hola (hello) — now you know adiós (goodbye)! ¡Hola y adiós! Hello and goodbye!' },

  { id: 'sr2-k-14', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'saludos',
    visual: '🙏', prompt: '¿Cómo se dice THANK YOU en español?', options: ['gracias', 'por favor', 'hola', 'adiós'], answer: 'gracias',
    explanation: '¡GRACIAS! Thank you = GRACIAS! And you can say "De nada" which means "You\'re welcome!" ¡Gracias y de nada — thank you and you\'re welcome!' },

  { id: 'sr2-k-15', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'cuerpo',
    visual: '👤', prompt: 'HEAD in Spanish is...', options: ['cabeza', 'hombros', 'rodillas', 'pies'], answer: 'cabeza',
    explanation: '¡Correcto! Head = CABEZA! Cabeza, hombros, rodillas y pies — do you know that song? Head, shoulders, knees and toes — ¡en español!' },

  { id: 'sr2-k-16', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'cuerpo',
    visual: '🦷', prompt: '¿Cómo se dice FEET en español?', options: ['pies', 'manos', 'cabeza', 'rodillas'], answer: 'pies',
    explanation: '¡Muy bien! Feet = PIES! And hand = mano, knee = rodilla. PIES sounds a bit like "pee-es" — your PIES (feet) carry you everywhere!' },

  { id: 'sr2-k-17', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'tiempo',
    visual: '☀️', prompt: 'When it\'s sunny and warm, in Spanish we say...', options: ['hace sol', 'llueve', 'hace frío', 'nieva'], answer: 'hace sol',
    explanation: '¡Sí! HACE SOL means it\'s sunny! Hace = it makes/it is. Sol = sun. So "hace sol" literally means "the sun is making [heat]!" ¡Hace sol hoy!' },

  { id: 'sr2-k-18', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'tiempo',
    visual: '🌧️', prompt: '¿Cómo se dice "It is raining" en español?', options: ['llueve', 'hace sol', 'nieva', 'hace calor'], answer: 'llueve',
    explanation: '¡Correcto! LLUEVE = it is raining! When it rains in Spanish-speaking countries, you say "¡Llueve!" and grab your paraguas (umbrella)!' },

  { id: 'sr2-k-19', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'tiempo',
    visual: '🥶', prompt: '"Hace frío" means...', options: ['it is cold', 'it is hot', 'it is raining', 'it is sunny'], answer: 'it is cold',
    explanation: '¡Muy bien! HACE FRÍO = it is cold! And HACE CALOR = it is hot! When you\'re shivering, say "¡Hace mucho frío!" (It is very cold!)' },

  { id: 'sr2-k-20', type: 'multiple-choice', level: 'K', subject: 'reading', language: 'spanish', topic: 'estaciones',
    visual: '🍂', prompt: 'AUTUMN (fall) in Spanish is called...', options: ['otoño', 'verano', 'invierno', 'primavera'], answer: 'otoño',
    explanation: '¡Excelente! Autumn/Fall = OTOÑO! En otoño, las hojas cambian de color y caen. (In fall, leaves change color and fall!) OTOÑO is such a beautiful word!' },


  // ==============================================================
  // === 1ST GRADE — 20 questions (sr2-1-01 to sr2-1-20) ===
  // ==============================================================

  { id: 'sr2-1-01', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'frases',
    visual: '📝', prompt: 'Translate: "El gato es pequeño y blanco."', options: ['The cat is small and white', 'The dog is small and white', 'The cat is big and black', 'The cat is small and black'], answer: 'The cat is small and white',
    explanation: '¡Fantástico! El gato = the cat, es = is, pequeño = small, y = and, blanco = white. The cat is small and white! Every word helped you understand!' },

  { id: 'sr2-1-02', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'frases',
    visual: '🌈', prompt: 'What does "El arcoíris tiene muchos colores" mean?', options: ['The rainbow has many colors', 'The rainbow is very big', 'The sky has many clouds', 'The rainbow is beautiful'], answer: 'The rainbow has many colors',
    explanation: '¡Perfecto! Arcoíris = rainbow, tiene = has, muchos = many, colores = colors. El arcoíris tiene muchos colores — ¡Así es! (That\'s right!)' },

  { id: 'sr2-1-03', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'objetos de clase',
    visual: '📚', prompt: '¿Cómo se dice BOOK en español?', options: ['libro', 'mesa', 'silla', 'lápiz'], answer: 'libro',
    explanation: '¡Sí! Book = LIBRO! Los libros son maravillosos (books are wonderful)! Can you say "¡Me gustan los libros!" — I like books!' },

  { id: 'sr2-1-04', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'objetos de clase',
    visual: '✏️', prompt: 'What does LÁPIZ mean in English?', options: ['pencil', 'book', 'table', 'chair'], answer: 'pencil',
    explanation: '¡Correcto! LÁPIZ = pencil! In your classroom: libro (book), lápiz (pencil), mesa (table), silla (chair), pizarrón (board). ¡Muy inteligente!' },

  { id: 'sr2-1-05', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'objetos de clase',
    visual: '🪑', prompt: '¿Cómo se dice CHAIR en español?', options: ['silla', 'mesa', 'libro', 'puerta'], answer: 'silla',
    explanation: '¡Bien hecho! Chair = SILLA! Table = mesa. Sit in your silla at your mesa! Silla starts with S — just like Sit and Silla!' },

  { id: 'sr2-1-06', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comida',
    visual: '🍗', prompt: 'What does POLLO mean in English?', options: ['chicken', 'bread', 'milk', 'rice'], answer: 'chicken',
    explanation: '¡Excelente! POLLO = chicken! Pollo con arroz (chicken with rice) is a delicious dish eaten all over the Spanish-speaking world! ¡Qué rico!' },

  { id: 'sr2-1-07', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comida',
    visual: '🍚', prompt: '¿Cómo se dice RICE en español?', options: ['arroz', 'pan', 'leche', 'fruta'], answer: 'arroz',
    explanation: '¡Muy bien! Rice = ARROZ! Arroz is one of the most popular foods in the world. Arroz con leche is a yummy rice pudding dessert in Spanish-speaking countries!' },

  { id: 'sr2-1-08', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comida',
    visual: '🥛', prompt: 'What does LECHE mean?', options: ['milk', 'bread', 'water', 'juice'], answer: 'milk',
    explanation: '¡Correcto! LECHE = milk! Café con leche (coffee with milk) is a popular drink. Bebemos leche para tener huesos fuertes (We drink milk to have strong bones)!' },

  { id: 'sr2-1-09', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comida',
    visual: '🍞', prompt: '¿Cómo se dice BREAD en español?', options: ['pan', 'leche', 'arroz', 'agua'], answer: 'pan',
    explanation: '¡Sí! Bread = PAN! PAN in Spanish means bread — completely different from the English word "pan"! In Mexican bakeries (panaderías), you can find delicious pan dulce (sweet bread)!' },

  { id: 'sr2-1-10', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🌙', prompt: 'Read: "Sofía tiene sueño. Ella va a dormir." What is Sofía going to do?', options: ['go to sleep', 'go to school', 'eat dinner', 'play outside'], answer: 'go to sleep',
    explanation: '¡Fantástico! Tiene sueño = is sleepy, va a dormir = is going to sleep. Even if you didn\'t know every word, you used clues! That\'s real Spanish reading!' },

  { id: 'sr2-1-11', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '⚽', prompt: 'Read: "Carlos juega al fútbol con sus amigos en el parque." Where does Carlos play soccer?', options: ['in the park', 'at school', 'at home', 'on the beach'], answer: 'in the park',
    explanation: '¡Muy bien! Juega = plays, fútbol = soccer, amigos = friends, parque = park. Carlos plays soccer with his friends IN THE PARK. ¡El fútbol es divertido! (Soccer is fun!)' },

  { id: 'sr2-1-12', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🎂', prompt: 'Read: "Hoy es el cumpleaños de Ana. Ella tiene siete años." How old is Ana today?', options: ['7 years old', '6 years old', '8 years old', '5 years old'], answer: '7 years old',
    explanation: '¡Correcto! Cumpleaños = birthday, tiene = is/has, siete = seven, años = years. Ana\'s birthday is today and she is SEVEN years old! ¡Feliz cumpleaños Ana!' },

  { id: 'sr2-1-13', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'vocabulario',
    visual: '🏠', prompt: 'What does "mi casa" mean?', options: ['my house/home', 'my school', 'my friend', 'my family'], answer: 'my house/home',
    explanation: '¡Sí! MI = my, CASA = house. "Mi casa es tu casa" is a famous Spanish saying that means "My house is your house" — come in and feel welcome!' },

  { id: 'sr2-1-14', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'vocabulario',
    visual: '👨‍👩‍👧‍👦', prompt: '¿Cómo se dice FAMILY en español?', options: ['familia', 'amigo', 'hermano', 'escuela'], answer: 'familia',
    explanation: '¡Excelente! Family = FAMILIA! It sounds almost the same! La familia is very important in Spanish-speaking cultures. Mi familia = my family!' },

  { id: 'sr2-1-15', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'objetos de clase',
    visual: '🖊️', prompt: 'The PIZARRÓN in the classroom is used by the teacher to write on. What is a pizarrón?', options: ['a board (chalkboard or whiteboard)', 'a desk', 'a pencil', 'a notebook'], answer: 'a board (chalkboard or whiteboard)',
    explanation: '¡Correcto! PIZARRÓN = board (chalkboard or whiteboard)! The teacher writes on the pizarrón. In some countries it\'s called la pizarra or el tablero. ¡El maestro escribe en el pizarrón!' },

  { id: 'sr2-1-16', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'frases',
    visual: '🤔', prompt: 'What does "¿Cuántos años tienes?" mean?', options: ['How old are you?', 'What is your name?', 'Where do you live?', 'What do you like?'], answer: 'How old are you?',
    explanation: '¡Bien! ¿Cuántos años tienes? = How old are you? You answer "Tengo ___ años" (I am ___ years old). ¿Cuántos años tienes tú? (How old are YOU?)' },

  { id: 'sr2-1-17', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'vocabulario',
    visual: '🌳', prompt: '¿Cómo se dice TREE en español?', options: ['árbol', 'flor', 'hierba', 'hoja'], answer: 'árbol',
    explanation: '¡Muy bien! Tree = ÁRBOL! Flower = flor, grass = hierba, leaf = hoja. Los árboles son muy importantes para el planeta. (Trees are very important for the planet!)' },

  { id: 'sr2-1-18', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🐕', prompt: 'Read: "Mi perro se llama Max. A Max le gusta correr y jugar." What does Max like?', options: ['running and playing', 'sleeping and eating', 'swimming and jumping', 'reading and learning'], answer: 'running and playing',
    explanation: '¡Excelente! Le gusta = likes, correr = to run, jugar = to play. Max likes RUNNING AND PLAYING! ¡Los perros son muy divertidos! (Dogs are so fun!)' },

  { id: 'sr2-1-19', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'saludos',
    visual: '🌙', prompt: 'How do you say GOOD NIGHT in Spanish?', options: ['buenas noches', 'buenos días', 'buenas tardes', 'hasta luego'], answer: 'buenas noches',
    explanation: '¡Correcto! Good night = BUENAS NOCHES! Buenos días = good morning, buenas tardes = good afternoon, buenas noches = good night. ¡Buenas noches, Avery! Sweet dreams!' },

  { id: 'sr2-1-20', type: 'multiple-choice', level: '1', subject: 'reading', language: 'spanish', topic: 'comida',
    visual: '🥦', prompt: '¿Cómo se dice VEGETABLES en español?', options: ['verduras', 'fruta', 'leche', 'pan'], answer: 'verduras',
    explanation: '¡Sí! Vegetables = VERDURAS! Fruits = frutas. "Come tus verduras y frutas" — eat your vegetables and fruits! Verduras keep you healthy and strong! ¡Sí a las verduras!' },


  // ==============================================================
  // === 2ND GRADE — 20 questions (sr2-2-01 to sr2-2-20) ===
  // ==============================================================

  { id: 'sr2-2-01', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '📖', prompt: 'Read: "María vive en una casa azul cerca del río. Tiene dos hermanos y una hermana. Le gusta mucho leer libros y nadar." How many siblings does María have?', options: ['3 siblings (2 brothers + 1 sister)', '2 siblings', '1 sibling', '4 siblings'], answer: '3 siblings (2 brothers + 1 sister)',
    explanation: '¡Fantástico! Hermanos = brothers (or siblings), hermana = sister. Dos hermanos (2 brothers) + una hermana (1 sister) = THREE siblings total! Great reading comprehension!' },

  { id: 'sr2-2-02', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🐝', prompt: 'Read: "Las abejas son insectos muy importantes. Viven en colmenas y producen miel deliciosa. Sin abejas, muchas plantas no podrían crecer." What do bees produce?', options: ['delicious honey', 'sweet fruit', 'fresh water', 'colorful flowers'], answer: 'delicious honey',
    explanation: '¡Muy inteligente! Abejas = bees, producen = produce, miel = honey, deliciosa = delicious. Las abejas producen MIEL — bees produce HONEY! ¡Fascinante!' },

  { id: 'sr2-2-03', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'verbos',
    visual: '🏃', prompt: 'Complete the verb pattern. YO SOY (I am), TÚ ERES (you are), ÉL/ELLA ___ (he/she is):', options: ['es', 'soy', 'eres', 'somos'], answer: 'es',
    explanation: '¡Correcto! The verb SER (to be): yo SOY, tú ERES, él/ella ES. "Ella ES inteligente" = She IS smart! This is one of the most important verbs in Spanish!' },

  { id: 'sr2-2-04', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'verbos',
    visual: '👤', prompt: '"Yo tengo un perro." Who has a dog in this sentence?', options: ['I (yo) have a dog', 'You have a dog', 'She has a dog', 'We have a dog'], answer: 'I (yo) have a dog',
    explanation: '¡Sí! YO = I (me, myself)! YO tengo = I have. Tú tienes = you have. Él/ella tiene = he/she has. YO is the Spanish word for the first person — yourself!' },

  { id: 'sr2-2-05', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'adjetivos',
    visual: '🐕🏠', prompt: 'In Spanish, adjectives MATCH the noun! "El perro GRANDE" = the big dog. "La casa ___" (the big house) uses what form of grande?', options: ['grande (same! grande doesn\'t change)', 'granda', 'grando', 'grands'], answer: 'grande (same! grande doesn\'t change)',
    explanation: '¡Excelente! GRANDE stays GRANDE for both masculine and feminine! El perro grande, la casa grande. BUT some adjectives DO change: el perro pequeño (masc.) → la casa pequeña (fem.)!' },

  { id: 'sr2-2-06', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'preguntas',
    visual: '❓', prompt: '¿DÓNDE? is a question word in Spanish. What does ¿Dónde vives? mean?', options: ['Where do you live?', 'When do you live?', 'Who do you live with?', 'Why do you live there?'], answer: 'Where do you live?',
    explanation: '¡Correcto! DÓNDE = WHERE! ¿Dónde vives? = Where do you live? The 5 question words: ¿Quién? (Who?) ¿Qué? (What?) ¿Dónde? (Where?) ¿Cuándo? (When?) ¿Por qué? (Why?)' },

  { id: 'sr2-2-07', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'preguntas',
    visual: '🤷', prompt: '¿POR QUÉ? means...', options: ['Why?', 'Where?', 'When?', 'Who?'], answer: 'Why?',
    explanation: '¡Muy bien! ¿POR QUÉ? = Why! ¿Por qué estudias? (Why do you study?) And the answer uses PORQUE (because): "Porque quiero aprender" (Because I want to learn)! ¿Por qué vs. porque!' },

  { id: 'sr2-2-08', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🌊', prompt: 'Read: "El océano es muy profundo y está lleno de vida. Los tiburones, los delfines y los pulpos viven allí." Which animal is NOT mentioned?', options: ['sharks, dolphins, octopuses are mentioned — whale is NOT', 'sharks', 'dolphins', 'octopuses'], answer: 'sharks, dolphins, octopuses are mentioned — whale is NOT',
    explanation: '¡Brillante! Tiburones = sharks, delfines = dolphins, pulpos = octopuses. The passage mentions three animals but NOT whales (ballenas)! Reading for detail in Spanish — ¡fantástico!' },

  { id: 'sr2-2-09', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'adjetivos',
    visual: '🌟', prompt: '"La estrella es brillante." The adjective brillante describes the star. What does this sentence mean?', options: ['The star is brilliant/shining', 'The star is big', 'The star is far away', 'The star is small'], answer: 'The star is brilliant/shining',
    explanation: '¡Correcto! Estrella = star, brillante = brilliant/shining. La estrella es brillante — the star is brilliant! Brillante describes the star and sounds almost like the English word brilliant!' },

  { id: 'sr2-2-10', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🌧️☀️', prompt: 'Read: "En primavera, a veces llueve y a veces hace sol. Las flores crecen cuando llueve." When do flowers grow?', options: ['when it rains', 'when it is sunny', 'in winter only', 'in fall only'], answer: 'when it rains',
    explanation: '¡Muy bien! Cuando = when, llueve = it rains, crecen = they grow. Flowers grow WHEN IT RAINS! ¡La lluvia ayuda a las flores a crecer! (Rain helps flowers grow!)' },

  { id: 'sr2-2-11', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'verbos',
    visual: '🎨', prompt: '"Nosotros pintamos un cuadro." Who is painting?', options: ['We (nosotros) are painting', 'I am painting', 'She is painting', 'They are painting'], answer: 'We (nosotros) are painting',
    explanation: '¡Excelente! NOSOTROS = we! Nosotros pintamos = We paint/are painting. YO = I, TÚ = you, ÉL/ELLA = he/she, NOSOTROS = we, ELLOS = they!' },

  { id: 'sr2-2-12', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🦁', prompt: 'Read: "El león es el rey de la selva. Es muy fuerte y valiente. Los leones viven en manadas en África." Where do lions live?', options: ['in Africa, in groups called manadas', 'in the jungle alone', 'in South America', 'in the ocean'], answer: 'in Africa, in groups called manadas',
    explanation: '¡Fantástico! África = Africa, manadas = groups/prides, viven = live. Lions live IN AFRICA in GROUPS! ¡El rey de la selva! (The king of the jungle!)' },

  { id: 'sr2-2-13', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'preguntas',
    visual: '📅', prompt: '¿CUÁNDO? means what question word?', options: ['When?', 'Where?', 'Why?', 'Who?'], answer: 'When?',
    explanation: '¡Correcto! CUÁNDO = WHEN! ¿Cuándo es tu cumpleaños? (When is your birthday?) ¿Cuándo comes? (When do you eat?) CUÁNDO asks about TIME!' },

  { id: 'sr2-2-14', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'vocabulario avanzado',
    visual: '🌍', prompt: 'What does "el mundo" mean?', options: ['the world', 'the sea', 'the sky', 'the earth/ground'], answer: 'the world',
    explanation: '¡Muy bien! EL MUNDO = the world! "El mundo es grande y hermoso" — the world is big and beautiful. ¡Hay tanto que aprender del mundo! (There is so much to learn about the world!)' },

  { id: 'sr2-2-15', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'adjetivos',
    visual: '🎨', prompt: '"Los colores son bonitos." The adjective BONITOS describes los colores. Why does it end in -OS?', options: ['because colores is plural and masculine, so the adjective matches', 'because all adjectives end in -os', 'because bonito is the only form', 'because it\'s a special word'], answer: 'because colores is plural and masculine, so the adjective matches',
    explanation: '¡Brillante! In Spanish, adjectives match the noun! Bonito (1 masc.) → bonitos (many masc.) → bonita (1 fem.) → bonitas (many fem.). Colores is plural masculine, so → bonITOS!' },

  { id: 'sr2-2-16', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🍎', prompt: 'Read: "La maestra le dio una manzana roja a Sofía porque trabajó muy bien." Why did the teacher give Sofía an apple?', options: ['because she worked very well', 'because she was hungry', 'because it was her birthday', 'because she asked for one'], answer: 'because she worked very well',
    explanation: '¡Perfecto! Porque = because, trabajó = she worked, muy bien = very well. The teacher gave Sofía the apple BECAUSE SHE WORKED VERY WELL. ¡Buen trabajo Sofía!' },

  { id: 'sr2-2-17', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'vocabulario avanzado',
    visual: '💙', prompt: '¿Cómo se dice FRIENDSHIP en español?', options: ['amistad', 'familia', 'escuela', 'amor'], answer: 'amistad',
    explanation: '¡Excelente! Friendship = AMISTAD! From "amigo" (friend). "La amistad es un tesoro" — friendship is a treasure! ¿Quiénes son tus amigos? (Who are your friends?)' },

  { id: 'sr2-2-18', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'preguntas',
    visual: '👥', prompt: '¿QUIÉN? means which question word?', options: ['Who?', 'What?', 'When?', 'Why?'], answer: 'Who?',
    explanation: '¡Correcto! QUIÉN = WHO! ¿Quién es ella? (Who is she?) ¿Quién hizo esto? (Who did this?) QUIÉN is the word you use when you want to know about a person!' },

  { id: 'sr2-2-19', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'comprensión',
    visual: '🏔️', prompt: 'Read: "Los Andes son las montañas más largas del mundo. Están en América del Sur. Muchos animales únicos viven allí." Where are the Andes Mountains?', options: ['in South America', 'in North America', 'in Europe', 'in Africa'], answer: 'in South America',
    explanation: '¡Fantástico! América del Sur = South America. The Andes (Los Andes) are in SOUTH AMERICA — the longest mountain range in the world! ¡Increíble!' },

  { id: 'sr2-2-20', type: 'multiple-choice', level: '2', subject: 'reading', language: 'spanish', topic: 'verbos',
    visual: '🌟', prompt: 'Fill in the blank: "Tú ___ muy inteligente." (You are very smart.) Use the verb SER.', options: ['eres', 'soy', 'es', 'somos'], answer: 'eres',
    explanation: '¡Bravo! TÚ ERES = you are! Yo soy (I am), Tú ERES (you are), Él/ella es (he/she is), Nosotros somos (we are). Tú eres muy inteligente — YOU ARE very smart! ¡Es verdad!' },


  // ==============================================================
  // === 3RD GRADE — 20 questions (sr2-3-01 to sr2-3-20) ===
  // ==============================================================

  { id: 'sr2-3-01', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '📖', prompt: 'Read: "El agua es esencial para la vida. Sin agua, los animales y las plantas no pueden sobrevivir. El 70% de la Tierra está cubierta de agua, pero solo el 3% es agua dulce." What percentage is freshwater?', options: ['3%', '70%', '30%', '7%'], answer: '3%',
    explanation: '¡Brillante! Agua dulce = freshwater. Solo el 3% = only 3%. Even though 70% of Earth is water, only 3% is freshwater (agua dulce)! That\'s why water conservation matters!' },

  { id: 'sr2-3-02', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comparaciones',
    visual: '🐘🐭', prompt: 'In Spanish: "El elefante es MÁS grande QUE el ratón." What comparison is being made?', options: ['The elephant is bigger than the mouse', 'The mouse is bigger than the elephant', 'They are the same size', 'The elephant is smaller'], answer: 'The elephant is bigger than the mouse',
    explanation: '¡Excelente! MÁS...QUE = MORE...THAN! "Más grande que" = bigger than. To compare in Spanish: más + adjective + que (more + adjective + than)! ¡El elefante es más grande que el ratón!' },

  { id: 'sr2-3-03', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comparaciones',
    visual: '🐁🦁', prompt: '"El ratón es MENOS peligroso QUE el león." This comparison means...', options: ['the mouse is less dangerous than the lion', 'the mouse is more dangerous than the lion', 'they are equally dangerous', 'the lion is less dangerous'], answer: 'the mouse is less dangerous than the lion',
    explanation: '¡Correcto! MENOS...QUE = LESS...THAN! Menos peligroso que = less dangerous than. So: MÁS...QUE (more than) and MENOS...QUE (less than). Two essential comparison tools in Spanish!' },

  { id: 'sr2-3-04', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comparaciones',
    visual: '⚖️', prompt: '"Avery es TAN inteligente COMO su amiga." What does TAN...COMO express?', options: ['just as...as (equally)', 'more than', 'less than', 'not as...as'], answer: 'just as...as (equally)',
    explanation: '¡Fantástico! TAN...COMO = AS...AS (equally)! "Avery es tan inteligente como su amiga" = Avery is AS intelligent AS her friend. It shows they\'re EQUAL! Three comparisons: más...que, menos...que, tan...como!' },

  { id: 'sr2-3-05', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'pasado',
    visual: '🕰️', prompt: '"Ayer yo FUI al parque." This sentence uses past tense. FUI is the past tense of IR (to go). What does this sentence mean?', options: ['Yesterday I went to the park', 'Today I go to the park', 'Tomorrow I will go to the park', 'I sometimes go to the park'], answer: 'Yesterday I went to the park',
    explanation: '¡Brillante! Ayer = yesterday, fui = I went (past tense of ir = to go). FUI is past tense! Yo voy = I go (now). Yo fui = I went (before)! Past tense helps you talk about the past!' },

  { id: 'sr2-3-06', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'pasado',
    visual: '🌟', prompt: '"Ella TUVO una idea brillante." TUVO is past tense of TENER (to have). What does this mean?', options: ['She had a brilliant idea', 'She has a brilliant idea', 'She will have a brilliant idea', 'She needs a brilliant idea'], answer: 'She had a brilliant idea',
    explanation: '¡Excelente! TUVO = she had (past). TENER = to have. Ella tiene = she has (now). Ella tuvo = she had (before). Past tense in Spanish tells us what already happened!' },

  { id: 'sr2-3-07', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'conectores',
    visual: '🔗', prompt: '"Me gustan los perros, PERO tengo alergia." What does PERO mean?', options: ['but', 'because', 'and also', 'therefore'], answer: 'but',
    explanation: '¡Correcto! PERO = but! "I like dogs BUT I have allergies." PERO introduces a contrast or opposite idea. Connectors (conectores) help link ideas in Spanish: pero (but), porque (because), también (also)!' },

  { id: 'sr2-3-08', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'conectores',
    visual: '💡', prompt: '"Estudio mucho PORQUE quiero aprender." What does PORQUE mean in this sentence?', options: ['because', 'but', 'also', 'then'], answer: 'because',
    explanation: '¡Muy bien! PORQUE = because! "I study a lot BECAUSE I want to learn." PORQUE explains the reason. ¿Por qué? (Why?) → Porque... (Because...). Remember: ¿POR QUÉ? (question) vs PORQUE (answer)!' },

  { id: 'sr2-3-09', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '🦋', prompt: 'Read: "La mariposa comienza su vida como un huevo. Luego se convierte en oruga, después en crisálida y finalmente en mariposa." What is the LAST stage?', options: ['butterfly (mariposa)', 'egg (huevo)', 'caterpillar (oruga)', 'chrysalis (crisálida)'], answer: 'butterfly (mariposa)',
    explanation: '¡Perfecto! Finalmente = finally (the last stage). The life cycle: huevo → oruga → crisálida → MARIPOSA! Finalmente es la mariposa! Sequence words: luego, después, finalmente!' },

  { id: 'sr2-3-10', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '🌮', prompt: 'Read: "México es famoso por su comida deliciosa, sus pirámides antiguas y su música vibrante. El español es el idioma oficial." What is Mexico\'s official language?', options: ['Spanish (español)', 'English', 'French', 'Portuguese'], answer: 'Spanish (español)',
    explanation: '¡Excelente! Idioma oficial = official language. ESPAÑOL is the official language of Mexico — and of 19 other countries! Spanish is one of the most spoken languages in the world. ¡Qué importante!' },

  { id: 'sr2-3-11', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'conectores',
    visual: '➕', prompt: '"Me gusta la pizza y TAMBIÉN me gusta la pasta." What does TAMBIÉN mean?', options: ['also/too', 'but', 'because', 'however'], answer: 'also/too',
    explanation: '¡Correcto! TAMBIÉN = also, too! "I like pizza and I ALSO like pasta!" También is used to add similar ideas. Other connectors: pero (but), porque (because), aunque (even though)!' },

  { id: 'sr2-3-12', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '🌺', prompt: 'Read: "Colombia es conocida por sus flores hermosas. De hecho, es uno de los mayores exportadores de flores del mundo, incluyendo rosas y orquídeas." What is Colombia known for exporting?', options: ['beautiful flowers, including roses and orchids', 'coffee only', 'silver and gold', 'tropical fruits'], answer: 'beautiful flowers, including roses and orchids',
    explanation: '¡Fantástico! Flores = flowers, rosas = roses, orquídeas = orchids, exportadores = exporters. Colombia is one of the world\'s biggest flower exporters! Conocer más sobre países hispanohablantes es fascinante!' },

  { id: 'sr2-3-13', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'vocabulario avanzado',
    visual: '🌍', prompt: '¿Cómo se dice POPULATION en español?', options: ['población', 'polución', 'posición', 'pasión'], answer: 'población',
    explanation: '¡Excelente! Population = POBLACIÓN! It\'s a cognate — it looks similar to the English word! La población del mundo es de casi 8 mil millones de personas. (World population is about 8 billion!)' },

  { id: 'sr2-3-14', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'pasado',
    visual: '📚', prompt: '"El año pasado, nosotros FUIMOS a México de vacaciones." FUIMOS is the past tense of IR (to go) for "we." What does this sentence mean?', options: ['Last year, we went to Mexico on vacation', 'This year, we go to Mexico', 'Next year, we will go to Mexico', 'We always go to Mexico'], answer: 'Last year, we went to Mexico on vacation',
    explanation: '¡Brillante! Año pasado = last year, fuimos = we went (past tense). IR past tense: yo fui, tú fuiste, él fue, nosotros FUIMOS! Nosotros fuimos a México — so cool!' },

  { id: 'sr2-3-15', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '⭐', prompt: 'Read: "Las estrellas son soles muy lejanos. Parecen pequeñas porque están muy lejos de la Tierra. En realidad, algunas son más grandes que nuestro sol." Why do stars look small?', options: ['because they are very far from Earth', 'because they are actually tiny', 'because they only glow a little', 'because the sky hides them'], answer: 'because they are very far from Earth',
    explanation: '¡Increíble! Lejanos = far away, parecen = they seem/appear, porque = because, lejos = far. Stars LOOK small BECAUSE they are very far from Earth. ¡La ciencia y el español juntos!' },

  { id: 'sr2-3-16', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'conectores',
    visual: '🌦️', prompt: '"AUNQUE llueve, salgo a jugar." What does AUNQUE mean?', options: ['even though/although', 'because', 'and also', 'but never'], answer: 'even though/although',
    explanation: '¡Muy bien! AUNQUE = even though / although! "Even though it\'s raining, I go out to play." AUNQUE introduces a surprising contrast. ¡Aunque es difícil, tú puedes hacerlo! (Even though it\'s hard, you can do it!)' },

  { id: 'sr2-3-17', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comparaciones',
    visual: '🏆', prompt: '"Avery es LA MÁS inteligente de la clase." LA MÁS means...', options: ['the most (superlative)', 'more than (comparative)', 'as...as (equal)', 'less than'], answer: 'the most (superlative)',
    explanation: '¡Perfecto! LA MÁS = the most (superlative)! EL/LA MÁS + adjective = the most! La más inteligente = the most intelligent! El más rápido = the fastest! Superlatives = the ULTIMATE comparison!' },

  { id: 'sr2-3-18', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '🎵', prompt: 'Read: "La música une a las personas. Aunque hablemos idiomas diferentes, la música nos hace sentir las mismas emociones." What does music do according to this passage?', options: ['unites people and creates shared feelings across languages', 'only makes musicians happy', 'is only understood by Spanish speakers', 'creates problems between people'], answer: 'unites people and creates shared feelings across languages',
    explanation: '¡Fantástico! Une = unites, aunque = even though, idiomas diferentes = different languages, mismas emociones = same emotions. Music UNITES people across language barriers! ¡La música es universal!' },

  { id: 'sr2-3-19', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'vocabulario avanzado',
    visual: '🌱', prompt: 'What does "el medio ambiente" mean?', options: ['the environment/nature', 'the middle school', 'the neighborhood', 'the weather'], answer: 'the environment/nature',
    explanation: '¡Excelente! EL MEDIO AMBIENTE = the environment! "Cuidemos el medio ambiente" = Let\'s protect the environment! Protecting el medio ambiente is one of the most important things we can do for the future!' },

  { id: 'sr2-3-20', type: 'multiple-choice', level: '3', subject: 'reading', language: 'spanish', topic: 'comprensión avanzada',
    visual: '📜', prompt: 'Read: "Sor Juana Inés de la Cruz fue una escritora y poeta mexicana del siglo XVII. Fue una de las primeras mujeres en escribir literatura en las Américas." She was one of the first women to do what?', options: ['write literature in the Americas', 'speak Spanish in Mexico', 'travel to Europe', 'teach at a university'], answer: 'write literature in the Americas',
    explanation: '¡Brillante! Escritora = writer, poeta = poet, primera = first, mujeres = women, escribir = to write. Sor Juana was a trailblazer — one of the first women to write literature in the Americas! ¡Una mujer increíble!' },


  // ==============================================================
  // === TAG LEVEL — 20 questions (sr2-t-01 to sr2-t-20) ===
  // ==============================================================

  { id: 'sr2-t-01', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'refranes',
    visual: '🌟', prompt: '"Camarón que se duerme, se lo lleva la corriente." This proverb literally says a shrimp that sleeps gets carried away by the current. What does it really mean?', options: ['If you\'re not paying attention, you\'ll miss your chance', 'Sleep is very important for health', 'The ocean is very dangerous', 'Shrimp should swim faster'], answer: 'If you\'re not paying attention, you\'ll miss your chance',
    explanation: '¡Perfecto! This famous Spanish proverb means: stay alert and focused! If you fall asleep (metaphorically), life\'s current will sweep you past your opportunities. ¡No te quedes dormido!' },

  { id: 'sr2-t-02', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'refranes',
    visual: '💫', prompt: '"Dime con quién andas y te diré quién eres." (Tell me who you walk with and I\'ll tell you who you are.) What is the message of this proverb?', options: ['Your friends shape who you are and how others see you', 'Walking is good exercise', 'It\'s important to travel with others', 'Talking to strangers is dangerous'], answer: 'Your friends shape who you are and how others see you',
    explanation: '¡Excelente! This proverb means: choose your friends wisely because they reflect who you are! It\'s similar to "You are the company you keep." ¡Escoge bien a tus amigos!' },

  { id: 'sr2-t-03', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🗿', prompt: 'The ancient Aztec civilization built their capital city, Tenochtitlán, where Mexico City stands today. What is the Spanish word for city?', options: ['ciudad', 'pueblo', 'aldea', 'villa'], answer: 'ciudad',
    explanation: '¡Correcto! CIUDAD = city! Ciudad de México (Mexico City) is built on the ruins of Tenochtitlán. La ciudad más grande del mundo de habla hispana — the world\'s largest Spanish-speaking city!' },

  { id: 'sr2-t-04', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '📚', prompt: 'Read: "Gabriel García Márquez, escritor colombiano, ganó el Premio Nobel de Literatura en 1982. Su estilo, llamado realismo mágico, mezcla eventos realistas con elementos fantásticos." What is magical realism?', options: ['a style that blends realistic events with fantastic/magical elements', 'a type of Spanish magic spell', 'a style of only fantasy stories', 'a technique using only realistic facts'], answer: 'a style that blends realistic events with fantastic/magical elements',
    explanation: '¡Fantástico! Mezcla = mixes/blends, realistas = realistic, fantásticos = fantastic. Magical realism (realismo mágico) blends the real and magical! García Márquez\'s "One Hundred Years of Solitude" is a famous example!' },

  { id: 'sr2-t-05', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🎨', prompt: 'Frida Kahlo was a Mexican artist famous for her self-portraits. The Spanish word for self-portrait is AUTORRETRATO. What does auto + retrato mean?', options: ['auto = self + retrato = portrait = self-portrait', 'auto = car + retrato = drawing = car drawing', 'auto = again + retrato = image = re-image', 'auto = artist + retrato = painting = artist painting'], answer: 'auto = self + retrato = portrait = self-portrait',
    explanation: '¡Excelente! AUTO = self (like autobiography = writing about yourself!), RETRATO = portrait. Frida Kahlo painted AUTOretratos — pictures of herself! She was one of Mexico\'s greatest artists!' },

  { id: 'sr2-t-06', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '🌊', prompt: 'Read: "El Amazonas es el río más largo y caudaloso del mundo. Fluye por Brasil, Perú y Colombia. Su selva es el hogar de millones de especies." Through which THREE countries does the Amazon flow?', options: ['Brazil, Peru, and Colombia', 'Mexico, Argentina, and Chile', 'Spain, Portugal, and France', 'Venezuela, Ecuador, and Bolivia'], answer: 'Brazil, Peru, and Colombia',
    explanation: '¡Brillante! Fluye = flows, por = through/across. The Amazon flows through BRAZIL (Brasil), PERU (Perú), and COLOMBIA. It\'s the most water-carrying river on Earth! ¡El Amazonas es increíble!' },

  { id: 'sr2-t-07', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'refranes',
    visual: '🌱', prompt: '"El que siembra vientos, recoge tempestades." (He who sows winds, harvests storms.) What does this proverb mean?', options: ['Your actions have consequences — bad actions lead to bad results', 'Farming is hard work', 'Storms are caused by wind', 'Plant seeds in good weather only'], answer: 'Your actions have consequences — bad actions lead to bad results',
    explanation: '¡Perfecto! This proverb means: if you cause trouble (sow winds), you\'ll face big problems (harvest storms). Similar to "What goes around comes around"! ¡Las acciones tienen consecuencias!' },

  { id: 'sr2-t-08', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🎭', prompt: 'Don Quixote (Don Quijote) by Miguel de Cervantes is considered the FIRST modern novel and was written in Spanish in 1605. What is the Spanish word for novel?', options: ['novela', 'cuento', 'poema', 'obra'], answer: 'novela',
    explanation: '¡Excelente! NOVELA = novel! Don Quijote is a novela — in fact, considered the FIRST modern novel in the world! Written in Spanish over 400 years ago! ¡El español tiene una literatura riquísima!' },

  { id: 'sr2-t-09', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '🏔️', prompt: 'Read: "Machu Picchu, construida por los Incas en el siglo XV, se encuentra en las montañas de Perú. Fue abandonada y redescubierta en 1911. Es Patrimonio de la Humanidad." What is Machu Picchu classified as?', options: ['World Heritage Site (Patrimonio de la Humanidad)', 'the capital of Peru', 'a modern tourist resort', 'an active Inca city'], answer: 'World Heritage Site (Patrimonio de la Humanidad)',
    explanation: '¡Brillante! Patrimonio de la Humanidad = World Heritage Site (UNESCO). Construida = built, abandonada = abandoned, redescubierta = rediscovered. Machu Picchu is one of the world\'s most famous archaeological sites!' },

  { id: 'sr2-t-10', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'refranes',
    visual: '🤝', prompt: '"Más vale tarde que nunca." What does this famous Spanish proverb mean?', options: ['Better late than never', 'Early is always better', 'Never be on time', 'Time is always lost'], answer: 'Better late than never',
    explanation: '¡Correcto! "Más vale tarde que nunca" = BETTER LATE THAN NEVER! Más vale = it\'s better, tarde = late, que = than, nunca = never. This is the exact Spanish equivalent of the English proverb!' },

  { id: 'sr2-t-11', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🎵', prompt: 'Salsa, tango, flamenco, and cumbia are all types of music and dance from Spanish-speaking countries. FLAMENCO comes from which country?', options: ['Spain (España)', 'Mexico', 'Argentina', 'Cuba'], answer: 'Spain (España)',
    explanation: '¡Excelente! FLAMENCO is from SPAIN (España)! TANGO is from Argentina. SALSA has roots in Cuba and Puerto Rico. CUMBIA is from Colombia. Each Spanish-speaking country has its own amazing music! ¡Viva la música!' },

  { id: 'sr2-t-12', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '🔬', prompt: 'Read: "Severo Ochoa, científico español, ganó el Premio Nobel de Fisiología o Medicina en 1959 por descubrir cómo se sintetizan los ácidos nucleicos." What did Severo Ochoa discover?', options: ['how nucleic acids are synthesized', 'a cure for a common disease', 'the structure of DNA only', 'how blood circulates'], answer: 'how nucleic acids are synthesized',
    explanation: '¡Increíble! Descubrir = to discover, sintetizan = are synthesized. Severo Ochoa was a brilliant Spanish scientist who won the Nobel Prize! Science and Spanish together — ¡qué combinación poderosa!' },

  { id: 'sr2-t-13', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'refranes',
    visual: '🌟', prompt: '"No todo lo que brilla es oro." This Spanish proverb means...', options: ['Not everything that glitters is gold (things aren\'t always what they seem)', 'Gold is the most valuable metal', 'Stars are made of gold', 'Shiny things are always valuable'], answer: 'Not everything that glitters is gold (things aren\'t always what they seem)',
    explanation: '¡Perfecto! "No todo lo que brilla es oro" = "Not all that glitters is gold"! This proverb warns us not to judge by appearances — something attractive on the outside may not be valuable. ¡Las apariencias engañan! (Appearances deceive!)' },

  { id: 'sr2-t-14', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🎉', prompt: 'Día de los Muertos (Day of the Dead) is celebrated on November 1-2 in Mexico. It is a time to honor and remember loved ones who have passed. What does "muertos" mean?', options: ['dead/those who have died', 'flowers and celebration', 'ancestors and elders', 'colors and costumes'], answer: 'dead/those who have died',
    explanation: '¡Excelente! MUERTOS = dead (those who have died). Día = day, de los = of the. Day of the Dead! Far from being sad, it\'s a beautiful, colorful celebration of life and memory. ¡Una tradición muy especial!' },

  { id: 'sr2-t-15', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '🌍', prompt: 'Spanish is spoken in 20 countries as the official language. After China and India, Spanish is the world\'s ___ most spoken language. ¿Cuántos países hablan español oficialmente?', options: ['20 countries (veinte países)', '5 countries', '15 countries', '30 countries'], answer: '20 countries (veinte países)',
    explanation: '¡Brillante! VEINTE PAÍSES = 20 countries speak Spanish officially! They include Spain, Mexico, Colombia, Argentina, Peru, Chile, and many more across Latin America and the Caribbean. ¡El español conecta un mundo enorme!' },

  { id: 'sr2-t-16', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'refranes',
    visual: '🌊', prompt: '"Al mal tiempo, buena cara." (To bad weather, a good face.) What does this proverb advise?', options: ['Face hard times with a positive attitude', 'Always check the weather forecast', 'Rain is actually good luck', 'Never go outside when it\'s rainy'], answer: 'Face hard times with a positive attitude',
    explanation: '¡Excelente! "Al mal tiempo, buena cara" = Face hard times with a smile and positive attitude! Mal = bad, tiempo = time/weather, buena = good, cara = face. When life is tough, keep a good face! ¡Qué bello mensaje!' },

  { id: 'sr2-t-17', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🏛️', prompt: 'Simón Bolívar is known as "El Libertador" because he helped liberate many South American countries from Spanish colonial rule. LIBERTADOR means...', options: ['liberator (one who sets people free)', 'president', 'general only', 'writer and poet'], answer: 'liberator (one who sets people free)',
    explanation: '¡Fantástico! LIBERTADOR = liberator! From "liberar" (to free) + "dor" (one who does it). Bolívar freed Venezuela, Colombia, Ecuador, Peru, and Bolivia from colonial rule! Bolivia is even named after him! ¡Un héroe de la historia!' },

  { id: 'sr2-t-18', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '🌺', prompt: 'Read: "El quechua es un idioma indígena hablado por más de 8 millones de personas en Sudamérica, principalmente en Perú, Bolivia y Ecuador. Fue el idioma del Imperio Inca." Why is Quechua historically important?', options: ['It was the language of the Inca Empire', 'It was the first Spanish dialect', 'It is the most common language in the world', 'It was invented in Spain'], answer: 'It was the language of the Inca Empire',
    explanation: '¡Brillante! Idioma = language, Imperio Inca = Inca Empire. QUECHUA was the language of the ancient Inca Empire and is still spoken by millions today! Languages like Quechua show us the rich indigenous heritage of South America!' },

  { id: 'sr2-t-19', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'cultura',
    visual: '🎨', prompt: 'Diego Rivera was a famous Mexican MURALIST. His paintings covered the walls of buildings and told stories of Mexican history and culture. What does MURAL mean in Spanish?', options: ['a very large painting on a wall (mural)', 'a small painting in a museum', 'a painting of nature only', 'a painting of portraits only'], answer: 'a very large painting on a wall (mural)',
    explanation: '¡Excelente! MURAL = mural (from Latin "murus" = wall)! Diego Rivera painted enormous murales on the walls of public buildings to share history with everyone. Art for the people — ¡arte para el pueblo!' },

  { id: 'sr2-t-20', type: 'multiple-choice', level: 'TAG', subject: 'reading', language: 'spanish', topic: 'lectura avanzada',
    visual: '🌍', prompt: 'Read: "El español evolucionó del latín vulgar traído por los romanos a la Península Ibérica. Con el tiempo, absorvió palabras árabes, indígenas y de otras lenguas, convirtiéndose en el rico idioma que es hoy." Where did Spanish originally come from?', options: ['Vulgar Latin brought by the Romans to the Iberian Peninsula', 'Ancient Greek spoken in Spain', 'Indigenous American languages only', 'Arabic spoken in North Africa'], answer: 'Vulgar Latin brought by the Romans to the Iberian Peninsula',
    explanation: '¡Increíble! Evolucionó = evolved, latín vulgar = vulgar Latin (everyday Latin), romanos = Romans. Spanish comes from LATIN! That\'s why Spanish, French, Italian, Portuguese, and Romanian are all "Romance languages" — from Rome!' },
]
