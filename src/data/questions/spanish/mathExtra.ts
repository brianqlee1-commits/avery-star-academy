import type { Question } from '../../../types'

export const spanishMathExtraQuestions: Question[] = [

  // ==============================================================
  // === KINDERGARTEN — 15 questions (sm2-k-01 to sm2-k-15) ===
  // ==============================================================

  { id: 'sm2-k-01', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '0️⃣', prompt: '¿Cómo se dice ZERO en español?', options: ['cero', 'uno', 'dos', 'nada'], answer: 'cero',
    explanation: '¡Sí! ZERO = CERO! Zero is a very special number — without it, we couldn\'t write 10, 20, or 100! Cero es muy importante. ¡Cero, uno, dos, tres!' },

  { id: 'sm2-k-02', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '🔢', prompt: 'How do you say FIFTEEN in Spanish?', options: ['quince', 'catorce', 'dieciséis', 'doce'], answer: 'quince',
    explanation: '¡Excelente! 15 = QUINCE! Practice counting: trece (13), catorce (14), QUINCE (15), dieciséis (16)! You\'re becoming a Spanish number expert!' },

  { id: 'sm2-k-03', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟', prompt: '¿Cuánto es DIECIOCHO? What number is dieciocho?', options: ['18', '17', '19', '16'], answer: '18',
    explanation: '¡Muy bien! DIECIOCHO = 18! Diez (10) + ocho (8) = dieciocho (18)! In Spanish, numbers 11-19 follow patterns: dieci + siete = diecisiete (17), dieci + ocho = dieciocho (18)!' },

  { id: 'sm2-k-04', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'formas',
    visual: '🔺', prompt: '¿Cómo se dice TRIANGLE en español?', options: ['triángulo', 'círculo', 'cuadrado', 'rectángulo'], answer: 'triángulo',
    explanation: '¡Correcto! Triangle = TRIÁNGULO! TRI = three (like tricycle has 3 wheels)! El triángulo tiene TRES lados (the triangle has THREE sides). ¡Tri = tres = three!' },

  { id: 'sm2-k-05', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'formas',
    visual: '⬡', prompt: 'A hexagon in Spanish is HEXÁGONO. How many sides does a hexágono have?', options: ['seis (6)', 'cuatro (4)', 'ocho (8)', 'cinco (5)'], answer: 'seis (6)',
    explanation: '¡Brillante! HEXÁGONO = hexagon! HEX = 6 (in both Spanish and English!). El hexágono tiene SEIS lados (the hexagon has SIX sides). Honeycombs are hexágonos — ¡son perfectos!' },

  { id: 'sm2-k-06', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'comparación',
    visual: '⚖️', prompt: '¿Cuál es MENOS? (Which is less?) 3 o 7?', options: ['tres (3)', 'siete (7)', 'son iguales', 'no sé'], answer: 'tres (3)',
    explanation: '¡Sí! MENOS = less! Tres (3) es MENOS que siete (7)! 3 < 7. Más (more/greater) and menos (less) are super useful comparison words in Spanish math!' },

  { id: 'sm2-k-07', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'comparación',
    visual: '🌟🌟🌟🌟🌟 vs 🌟🌟🌟', prompt: 'En español: cinco estrellas y tres estrellas — ¿cuántas hay en total? (5 stars and 3 stars — how many total?)', options: ['ocho (8)', 'siete (7)', 'seis (6)', 'nueve (9)'], answer: 'ocho (8)',
    explanation: '¡Excelente! Cinco (5) + tres (3) = OCHO (8)! En total = in total. You just solved a word problem in Spanish! ¡Matemáticas en español — tú puedes!' },

  { id: 'sm2-k-08', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'suma',
    visual: '🍎🍎 ➕ 🍎🍎🍎🍎', prompt: 'Dos manzanas más cuatro manzanas son... (2 apples + 4 apples = ?)', options: ['seis (6)', 'cinco (5)', 'siete (7)', 'cuatro (4)'], answer: 'seis (6)',
    explanation: '¡Muy bien! DOS (2) + CUATRO (4) = SEIS (6)! Dos MÁS cuatro son SEIS. You can count the apples: 1, 2 plus 3, 4, 5, 6 — ¡seis!' },

  { id: 'sm2-k-09', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'resta',
    visual: '🎈🎈🎈🎈🎈', prompt: 'Tienes cinco globos y se van dos. ¿Cuántos te quedan? (5 balloons - 2 = ?)', options: ['tres (3)', 'cuatro (4)', 'dos (2)', 'seis (6)'], answer: 'tres (3)',
    explanation: '¡Correcto! Cinco (5) MENOS dos (2) = TRES (3)! Se van = go away (pop!). 5 - 2 = 3. ¡TRES globos te quedan! Three balloons are left!' },

  { id: 'sm2-k-10', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '🔢', prompt: '¿Cuánto es TRECE? What number is trece?', options: ['13', '14', '12', '30'], answer: '13',
    explanation: '¡Sí! TRECE = 13! Dieci + tres would be diecitrés... but 13 has the special name TRECE! 11=once, 12=doce, 13=TRECE! These are the tricky teen numbers in Spanish!' },

  { id: 'sm2-k-11', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'formas',
    visual: '⭐', prompt: '¿Cuántos lados tiene una estrella de cinco puntas? (How many points does a 5-pointed star have?)', options: ['cinco (5)', 'cuatro (4)', 'seis (6)', 'ocho (8)'], answer: 'cinco (5)',
    explanation: '¡Correcto! Una estrella de CINCO puntas (a five-pointed star) has CINCO points! Cinco = five! ⭐ Las estrellas son bonitas — y tienen cinco puntas!' },

  { id: 'sm2-k-12', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'comparación',
    visual: '🌡️', prompt: '"Nueve es mayor que seis." What does MAYOR QUE mean?', options: ['greater than', 'less than', 'equal to', 'next to'], answer: 'greater than',
    explanation: '¡Muy bien! MAYOR QUE = greater than (>)! Nueve (9) es MAYOR QUE seis (6) → 9 > 6. And MENOR QUE = less than (<)! These are the comparison words in Spanish math!' },

  { id: 'sm2-k-13', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'suma',
    visual: '➕', prompt: 'En español: ocho más nueve son... (8 + 9 = ?)', options: ['diecisiete (17)', 'dieciséis (16)', 'dieciocho (18)', 'quince (15)'], answer: 'diecisiete (17)',
    explanation: '¡Excelente! OCHO (8) + NUEVE (9) = DIECISIETE (17)! Dieci + siete = diecisiete. You just did math in Spanish! ¡Matemáticas bilingüe!' },

  { id: 'sm2-k-14', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'números',
    visual: '🎊', prompt: 'How do you say SIXTEEN in Spanish?', options: ['dieciséis', 'quince', 'diecisiete', 'catorce'], answer: 'dieciséis',
    explanation: '¡Correcto! 16 = DIECISÉIS! Diez (10) + seis (6) = dieciséis (16). The accent on the é is important! Practice: quince (15), DIECISÉIS (16), diecisiete (17)!' },

  { id: 'sm2-k-15', type: 'multiple-choice', level: 'K', subject: 'math', language: 'spanish', topic: 'resta',
    visual: '🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪', prompt: 'Tienes diez galletas y comes cuatro. ¿Cuántas te quedan? (10 - 4 = ?)', options: ['seis (6)', 'cinco (5)', 'siete (7)', 'cuatro (4)'], answer: 'seis (6)',
    explanation: '¡Perfecto! Diez (10) MENOS cuatro (4) = SEIS (6)! Galletas = cookies. 10 - 4 = 6. ¡Todavía tienes seis galletas! (You still have six cookies!) ¡Que ricos!' },


  // ==============================================================
  // === 1ST GRADE — 15 questions (sm2-1-01 to sm2-1-15) ===
  // ==============================================================

  { id: 'sm2-1-01', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'conteo',
    visual: '🔢', prompt: 'Cuenta de dos en dos en español (count by 2s in Spanish): 2, 4, 6, 8, ___', options: ['diez (10)', 'nueve (9)', 'once (11)', 'ocho (8)'], answer: 'diez (10)',
    explanation: '¡Sí! Counting by 2s in Spanish: dos, cuatro, seis, ocho, DIEZ! De dos en dos = by twos/skip counting by 2! 2, 4, 6, 8, ¡DIEZ!' },

  { id: 'sm2-1-02', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'conteo',
    visual: '⭐', prompt: 'Cuenta de diez en diez (count by 10s in Spanish): 10, 20, 30, ___', options: ['cuarenta (40)', 'treinta y cinco (35)', 'cincuenta (50)', 'treinta y uno (31)'], answer: 'cuarenta (40)',
    explanation: '¡Excelente! De diez en diez: diez, veinte, treinta, ¡CUARENTA! 10, 20, 30, 40! Cuarenta = 40. Next would be cincuenta (50)! ¡Contar de diez en diez es divertido!' },

  { id: 'sm2-1-03', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'valor posicional',
    visual: '🏠', prompt: 'In the number 47, which digit is in the DECENAS (tens) place? (47)', options: ['4', '7', '47', '74'], answer: '4',
    explanation: '¡Correcto! En el número 47: el 4 está en las DECENAS (tens = 40), el 7 está en las UNIDADES (ones = 7). DECENAS = tens place! 4 decenas + 7 unidades = 47!' },

  { id: 'sm2-1-04', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'valor posicional',
    visual: '🔢', prompt: '¿Cuántas DECENAS hay en el número 63? (How many tens are in 63?)', options: ['seis (6)', 'tres (3)', 'nueve (9)', 'dos (2)'], answer: 'seis (6)',
    explanation: '¡Muy bien! 63 = SEIS decenas (60) + tres unidades (3). There are SEIS (6) groups of ten! 6 × 10 = 60, then + 3 = 63. ¡El valor posicional en español!' },

  { id: 'sm2-1-05', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'la hora',
    visual: '🕐', prompt: '¿Qué hora es? The clock shows 1:00. In Spanish, this is "La una." What time is "Las dos"?', options: ['2:00', '1:00', '3:00', '12:00'], answer: '2:00',
    explanation: '¡Sí! Las DOS = 2 o\'clock! "La" UNA (1:00) but "Las" DOS (2:00) because dos is plural! La hora in Spanish: la una (1), las dos (2), las tres (3)... ¿Qué hora es ahora?' },

  { id: 'sm2-1-06', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'la hora',
    visual: '⏰', prompt: '"Son las tres y media." What time is this?', options: ['3:30', '3:00', '3:15', '3:45'], answer: '3:30',
    explanation: '¡Excelente! Y MEDIA = and a half = :30! Son las tres Y MEDIA = 3:30! Y cuarto = and a quarter = :15. Son las tres y cuarto = 3:15. ¡El tiempo en español!' },

  { id: 'sm2-1-07', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'dinero',
    visual: '💰', prompt: 'In Spanish, CENTAVO means...', options: ['cent (1/100 of a dollar)', 'dollar', 'quarter', 'dime'], answer: 'cent (1/100 of a dollar)',
    explanation: '¡Correcto! CENTAVO = cent! Cien centavos = one dollar (un dólar). Cent, centavo, century — they all come from Latin "centum" meaning 100! 100 centavos = un dólar!' },

  { id: 'sm2-1-08', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'dinero',
    visual: '🪙', prompt: '¿Cuántos centavos hay en un dólar? (How many cents are in a dollar?)', options: ['cien (100)', 'diez (10)', 'cincuenta (50)', 'veinte (20)'], answer: 'cien (100)',
    explanation: '¡Sí! CIEN centavos = un dólar! Cien = 100. 100 cents = 1 dollar! Cien is a very important number — cien centavos, cien años (100 years), ¡me importa cien! You\'ve got this!' },

  { id: 'sm2-1-09', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'suma',
    visual: '🌸', prompt: 'En español: veinticuatro más doce son... (24 + 12 = ?)', options: ['treinta y seis (36)', 'treinta y dos (32)', 'cuarenta (40)', 'treinta y cuatro (34)'], answer: 'treinta y seis (36)',
    explanation: '¡Fantástico! 24 + 12 = 36 = TREINTA Y SEIS! Treinta (30) + seis (6) = treinta y seis. You just solved a two-digit addition problem in Spanish! ¡Increíble!' },

  { id: 'sm2-1-10', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'conteo',
    visual: '🔄', prompt: 'Cuenta de cinco en cinco (count by 5s): 5, 10, 15, 20, 25, ___', options: ['treinta (30)', 'veintisiete (27)', 'veintiocho (28)', 'veintiséis (26)'], answer: 'treinta (30)',
    explanation: '¡Brillante! De cinco en cinco: cinco, diez, quince, veinte, veinticinco, ¡TREINTA! 5, 10, 15, 20, 25, 30! Thirty = TREINTA! Skip counting in Spanish — ¡lo hiciste!' },

  { id: 'sm2-1-11', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'la hora',
    visual: '🕙', prompt: '"Son las diez y cuarto." What time is this?', options: ['10:15', '10:30', '10:45', '10:00'], answer: '10:15',
    explanation: '¡Correcto! Y CUARTO = and a quarter = 15 minutes! Son las diez Y CUARTO = 10:15! Y media = :30, y cuarto = :15. What time is "son las nueve y media"? ¡9:30!' },

  { id: 'sm2-1-12', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'resta',
    visual: '🍭', prompt: 'Avery tiene cuarenta y dos estrellas y regala doce. ¿Cuántas le quedan? (42 - 12 = ?)', options: ['treinta (30)', 'veinte (20)', 'cuarenta (40)', 'treinta y dos (32)'], answer: 'treinta (30)',
    explanation: '¡Perfecto! Cuarenta y dos (42) MENOS doce (12) = TREINTA (30)! 42 - 12 = 30. Regala = gives away. Avery has TREINTA stars left! ¡Muy bien calculado!' },

  { id: 'sm2-1-13', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'valor posicional',
    visual: '💡', prompt: '¿Cómo escribes OCHENTA Y NUEVE en número? (How do you write eighty-nine?)', options: ['89', '98', '79', '88'], answer: '89',
    explanation: '¡Excelente! OCHENTA Y NUEVE = 89! Ochenta (80) + nueve (9) = 89. ¡Eres muy bueno con los números en español! Spanish number words: ochenta (80), noventa (90), cien (100)!' },

  { id: 'sm2-1-14', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'suma',
    visual: '🎯', prompt: 'En español: ¿cuánto es cincuenta y cuatro más treinta? (54 + 30 = ?)', options: ['ochenta y cuatro (84)', 'ochenta (80)', 'noventa (90)', 'setenta y cuatro (74)'], answer: 'ochenta y cuatro (84)',
    explanation: '¡Brillante! Cincuenta y cuatro (54) + treinta (30) = OCHENTA Y CUATRO (84)! Ochenta (80) + cuatro (4) = ochenta y cuatro. ¡Excelente suma en español!' },

  { id: 'sm2-1-15', type: 'multiple-choice', level: '1', subject: 'math', language: 'spanish', topic: 'dinero',
    visual: '💵', prompt: 'Tienes dos dólares y gastas setenta y cinco centavos. ¿Cuánto te queda? (You have $2.00 and spend $0.75. What\'s left?)', options: ['un dólar y veinticinco centavos ($1.25)', 'veinticinco centavos ($0.25)', 'un dólar ($1.00)', 'un dólar y setenta y cinco ($1.75)'], answer: 'un dólar y veinticinco centavos ($1.25)',
    explanation: '¡Fantástico! $2.00 - $0.75 = $1.25 = UN DÓLAR Y VEINTICINCO CENTAVOS! You solved a money problem in Spanish! Dólares y centavos — ¡muy bien!' },


  // ==============================================================
  // === 2ND GRADE — 15 questions (sm2-2-01 to sm2-2-15) ===
  // ==============================================================

  { id: 'sm2-2-01', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'multiplicación',
    visual: '✖️', prompt: '¿Cuánto es cuatro por seis? (4 × 6 = ?)', options: ['veinticuatro (24)', 'veintidós (22)', 'dieciocho (18)', 'veinte (20)'], answer: 'veinticuatro (24)',
    explanation: '¡Excelente! CUATRO (4) POR SEIS (6) = VEINTICUATRO (24)! 4 × 6 = 24. POR = times/multiplied by in Spanish. ¡Las tablas de multiplicar en español son poderosas!' },

  { id: 'sm2-2-02', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'multiplicación',
    visual: '🌟', prompt: 'En español: tres por siete son... (3 × 7 = ?)', options: ['veintiuno (21)', 'veinte (20)', 'veintidós (22)', 'dieciocho (18)'], answer: 'veintiuno (21)',
    explanation: '¡Correcto! TRES (3) POR SIETE (7) = VEINTIUNO (21)! 3 × 7 = 21. Veintiuno = twenty-one! ¡Las tablas de multiplicar son la base de las matemáticas!' },

  { id: 'sm2-2-03', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'fracciones',
    visual: '🍕🍕', prompt: 'Si divides una pizza en dos partes iguales y comes una, ¿qué fracción comiste? (1 out of 2 equal parts)', options: ['un medio (1/2)', 'un cuarto (1/4)', 'un tercio (1/3)', 'dos tercios (2/3)'], answer: 'un medio (1/2)',
    explanation: '¡Perfecto! 1 de 2 partes = UN MEDIO = 1/2! Un medio (1/2) = one half! Medio also means middle — like "el medio del salón" (the middle of the room)! ¡Un medio de la pizza!' },

  { id: 'sm2-2-04', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'fracciones',
    visual: '🍫', prompt: 'You have a chocolate bar divided into 3 equal pieces and you eat 1. In Spanish, you ate...', options: ['un tercio (1/3)', 'un medio (1/2)', 'un cuarto (1/4)', 'dos tercios (2/3)'], answer: 'un tercio (1/3)',
    explanation: '¡Excelente! 1 de 3 partes = UN TERCIO = 1/3! UN TERCIO means one-third! Spanish fractions: un medio (1/2), un tercio (1/3), un cuarto (1/4). Third in Spanish = tercio!' },

  { id: 'sm2-2-05', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'medidas',
    visual: '📏', prompt: 'In Spanish, the unit of measurement METRO is used to measure length. Which object would you most likely measure in metros?', options: ['the height of a classroom (metros)', 'the length of a pencil (centímetros)', 'your weight (kilogramos)', 'the temperature (grados)'], answer: 'the height of a classroom (metros)',
    explanation: '¡Correcto! Un METRO = about 3.3 feet! Use metros for larger things like room height. Use CENTÍMETROS (cm) for smaller things like pencils. 100 centímetros = 1 metro!' },

  { id: 'sm2-2-06', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'medidas',
    visual: '⚖️', prompt: '¿Cómo se dice KILOGRAM en español? It\'s used to measure weight.', options: ['kilogramo', 'metro', 'litro', 'centímetro'], answer: 'kilogramo',
    explanation: '¡Muy bien! KILOGRAM = KILOGRAMO! Kilo = 1000, gramo = gram. Un kilogramo = 1,000 grams! Most of the world uses kilogramos to measure weight. ¿Cuántos kilogramos pesas?' },

  { id: 'sm2-2-07', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🛒', prompt: 'Ana tiene ocho pesos. Compra una manzana por tres pesos. ¿Cuánto dinero le queda? (Ana has 8 pesos. She buys an apple for 3 pesos. How much is left?)', options: ['cinco pesos (5)', 'cuatro pesos (4)', 'seis pesos (6)', 'tres pesos (3)'], answer: 'cinco pesos (5)',
    explanation: '¡Fantástico! Ocho (8) menos tres (3) = CINCO (5). Ana has CINCO pesos left! Compra = buys, manzana = apple, le queda = is left. Word problem in Spanish — ¡lo resolviste!' },

  { id: 'sm2-2-08', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'multiplicación',
    visual: '🌼🌼🌼', prompt: 'Hay 5 grupos con 8 flores cada uno. ¿Cuántas flores hay en total? (5 groups × 8 flowers)', options: ['cuarenta (40)', 'treinta y cinco (35)', 'treinta (30)', 'cuarenta y cinco (45)'], answer: 'cuarenta (40)',
    explanation: '¡Brillante! Cinco (5) POR ocho (8) = CUARENTA (40)! 5 × 8 = 40. Grupos = groups, flores = flowers, cada uno = each one, en total = in total. ¡Multiplicación en español!' },

  { id: 'sm2-2-09', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'fracciones',
    visual: '🥧', prompt: '"Tres cuartos" (3/4) means...', options: ['3 out of 4 equal parts', '3 times 4', '4 minus 3', '3 + 4 parts'], answer: '3 out of 4 equal parts',
    explanation: '¡Correcto! TRES CUARTOS = 3/4 = three out of four equal parts! Tres (3) = three, cuartos (4ths) = fourths. 3/4 is more than half! More than un medio but less than one whole!' },

  { id: 'sm2-2-10', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'medidas',
    visual: '📐', prompt: 'La cinta mide treinta y dos centímetros. ¿Cuántos centímetros mide la cinta? (A ribbon is 32 centimeters. How many centimeters?)', options: ['treinta y dos (32)', 'veintitrés (23)', 'cuarenta y dos (42)', 'treinta (30)'], answer: 'treinta y dos (32)',
    explanation: '¡Muy bien! TREINTA Y DOS centímetros = 32 cm! Cinta = ribbon, mide = measures. The ribbon measures TREINTA Y DOS (32) centimeters! ¡Medir en español!' },

  { id: 'sm2-2-11', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🚌', prompt: 'En el autobús hay veintiún estudiantes. Suben siete más. ¿Cuántos hay ahora? (21 + 7 = ?)', options: ['veintiocho (28)', 'veintiséis (26)', 'treinta (30)', 'veintinueve (29)'], answer: 'veintiocho (28)',
    explanation: '¡Excelente! Veintiún (21) + siete (7) = VEINTIOCHO (28)! Autobús = bus, suben = get on, más = more. 28 students are on the bus now! ¡Problema resuelto en español!' },

  { id: 'sm2-2-12', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'multiplicación',
    visual: '⭐', prompt: '¿Cuánto es nueve por tres? (9 × 3 = ?)', options: ['veintisiete (27)', 'veinticuatro (24)', 'treinta (30)', 'dieciocho (18)'], answer: 'veintisiete (27)',
    explanation: '¡Brillante! NUEVE (9) POR TRES (3) = VEINTISIETE (27)! 9 × 3 = 27. Veintisiete = twenty-seven! Veinti + siete = veintiSIETE. ¡Las tablas de multiplicar en español!' },

  { id: 'sm2-2-13', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'fracciones',
    visual: '🍊', prompt: 'Un naranja se divide en cuatro partes. Comes DOS partes. ¿Qué fracción comiste?', options: ['dos cuartos = un medio (2/4 = 1/2)', 'un cuarto (1/4)', 'tres cuartos (3/4)', 'dos tercios (2/3)'], answer: 'dos cuartos = un medio (2/4 = 1/2)',
    explanation: '¡Fantástico! 2/4 = DOS CUARTOS. And dos cuartos simplifies to UN MEDIO (1/2)! 2 out of 4 = 1 out of 2. ¡Las fracciones equivalentes en español! 2/4 = 1/2 ¡siempre!' },

  { id: 'sm2-2-14', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '📦', prompt: 'Hay cuatro cajas con seis libros cada una. ¿Cuántos libros hay en total? (4 boxes × 6 books each)', options: ['veinticuatro (24)', 'veintidós (22)', 'dieciocho (18)', 'veinte (20)'], answer: 'veinticuatro (24)',
    explanation: '¡Correcto! Cuatro (4) cajas × seis (6) libros = VEINTICUATRO (24) libros en total! Cajas = boxes, libros = books, cada una = each one. 4 × 6 = 24 — ¡multiplicación aplicada!' },

  { id: 'sm2-2-15', type: 'multiple-choice', level: '2', subject: 'math', language: 'spanish', topic: 'medidas',
    visual: '💧', prompt: 'La botella contiene un LITRO de agua. Un litro es approximately equal to...', options: ['about 4 cups of water', '1 tablespoon', '10 gallons', '1 teaspoon'], answer: 'about 4 cups of water',
    explanation: '¡Excelente! Un LITRO = approximately 4 cups (a little over 1 quart)! Most countries use LITROS to measure liquids. Leche, agua, jugo — all measured in litros! ¡Un litro de agua por favor!' },


  // ==============================================================
  // === 3RD GRADE — 15 questions (sm2-3-01 to sm2-3-15) ===
  // ==============================================================

  { id: 'sm2-3-01', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'división',
    visual: '➗', prompt: '¿Cuánto es cuarenta y ocho entre seis? (48 ÷ 6 = ?)', options: ['ocho (8)', 'siete (7)', 'nueve (9)', 'seis (6)'], answer: 'ocho (8)',
    explanation: '¡Brillante! Cuarenta y ocho (48) ENTRE seis (6) = OCHO (8)! 48 ÷ 6 = 8. ENTRE = divided by in Spanish! Check: 8 × 6 = 48. ¡División perfecta!' },

  { id: 'sm2-3-02', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🚗', prompt: 'Un auto recorre sesenta y tres kilómetros en una hora. ¿Cuántos kilómetros recorre en siete horas? (63 × 7 = ?)', options: ['cuatrocientos cuarenta y uno (441)', 'cuatrocientos veinte (420)', 'cuatrocientos noventa (490)', 'trescientos sesenta y tres (363)'], answer: 'cuatrocientos cuarenta y uno (441)',
    explanation: '¡Excelente! Sesenta y tres (63) × siete (7) = CUATROCIENTOS CUARENTA Y UNO (441)! Recorre = travels, kilómetros = kilometers, hora = hour. 63 × 7 = 441! ¡Problema de multiplicación avanzado!' },

  { id: 'sm2-3-03', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'geometría',
    visual: '📐', prompt: 'El ÁREA de un rectángulo se calcula multiplicando el largo por el ancho. Si un rectángulo mide 5 cm de largo y 3 cm de ancho, ¿cuál es su área?', options: ['quince centímetros cuadrados (15 cm²)', 'dieciséis cm²', 'ocho cm²', 'diez cm²'], answer: 'quince centímetros cuadrados (15 cm²)',
    explanation: '¡Fantástico! ÁREA = largo × ancho (length × width)! 5 × 3 = QUINCE (15) centímetros cuadrados (cm²)! Área = area, largo = length, ancho = width. ¡Geometría en español!' },

  { id: 'sm2-3-04', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'geometría',
    visual: '🔷', prompt: 'El PERÍMETRO de una figura es la suma de todos sus lados. Si un triángulo tiene lados de 4, 6, y 5 metros, ¿cuál es el perímetro?', options: ['quince metros (15 m)', 'diez metros (10 m)', 'veinte metros (20 m)', 'doce metros (12 m)'], answer: 'quince metros (15 m)',
    explanation: '¡Excelente! PERÍMETRO = suma de todos los lados! 4 + 6 + 5 = QUINCE (15) metros! Perimeter in Spanish is PERÍMETRO. Add all the sides! ¡La geometría en español es fascinante!' },

  { id: 'sm2-3-05', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'división',
    visual: '🍕', prompt: 'Cuatro amigos quieren compartir 56 galletas igualmente. ¿Cuántas galletas recibe cada uno? (56 ÷ 4 = ?)', options: ['catorce (14)', 'doce (12)', 'dieciséis (16)', 'trece (13)'], answer: 'catorce (14)',
    explanation: '¡Correcto! Cincuenta y seis (56) ENTRE cuatro (4) = CATORCE (14)! 56 ÷ 4 = 14. Compartir = to share, galletas = cookies. Each friend gets CATORCE cookies! ¡Compartir es divertido!' },

  { id: 'sm2-3-06', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '📚', prompt: 'Una biblioteca tiene 245 libros de ciencias y 178 libros de historia. ¿Cuántos libros hay en total? (245 + 178 = ?)', options: ['cuatrocientos veintitrés (423)', 'cuatrocientos doce (412)', 'cuatrocientos cincuenta (450)', 'cuatrocientos treinta (430)'], answer: 'cuatrocientos veintitrés (423)',
    explanation: '¡Brillante! 245 + 178 = CUATROCIENTOS VEINTITRÉS (423)! Biblioteca = library, ciencias = science, historia = history. 423 libros en total — ¡una biblioteca increíble!' },

  { id: 'sm2-3-07', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'geometría',
    visual: '📐', prompt: 'Un ÁNGULO recto mide exactamente 90 grados. ¿Cuántos ángulos rectos tiene un cuadrado?', options: ['cuatro (4)', 'dos (2)', 'tres (3)', 'uno (1)'], answer: 'cuatro (4)',
    explanation: '¡Correcto! Un cuadrado tiene CUATRO ángulos rectos (4 right angles)! Un ÁNGULO = an angle, recto = right (90°). CUATRO ángulos de 90° cada uno. Squares and rectangles always have 4 right angles! ¡Geometría perfecta!' },

  { id: 'sm2-3-08', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'división',
    visual: '🍭', prompt: '¿Cuánto es ochenta y uno entre nueve? (81 ÷ 9 = ?)', options: ['nueve (9)', 'ocho (8)', 'siete (7)', 'diez (10)'], answer: 'nueve (9)',
    explanation: '¡Fantástico! Ochenta y uno (81) ENTRE nueve (9) = NUEVE (9)! 81 ÷ 9 = 9. And check: 9 × 9 = 81. ¡Perfecto! This is a fact worth knowing: 9 × 9 = 81!' },

  { id: 'sm2-3-09', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🌻', prompt: 'Un jardín rectangular mide 8 metros de largo y 6 metros de ancho. ¿Cuál es el área del jardín? (8 × 6 = ?)', options: ['cuarenta y ocho metros cuadrados (48 m²)', 'cuarenta metros cuadrados (40 m²)', 'catorce metros (14 m)', 'cincuenta y seis metros cuadrados (56 m²)'], answer: 'cuarenta y ocho metros cuadrados (48 m²)',
    explanation: '¡Excelente! Área = largo × ancho = 8 × 6 = CUARENTA Y OCHO (48) metros cuadrados (m²)! Jardín = garden, largo = length, ancho = width. ¡El área del jardín es 48 m²!' },

  { id: 'sm2-3-10', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🍎', prompt: 'Un árbol produce 120 manzanas. Se reparten igualmente entre 8 familias. ¿Cuántas manzanas recibe cada familia? (120 ÷ 8 = ?)', options: ['quince (15)', 'doce (12)', 'dieciséis (16)', 'veinte (20)'], answer: 'quince (15)',
    explanation: '¡Correcto! Ciento veinte (120) ENTRE ocho (8) = QUINCE (15)! 120 ÷ 8 = 15. Produce = produces, reparten = are shared out, familias = families. Each family gets QUINCE apples!' },

  { id: 'sm2-3-11', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'geometría',
    visual: '📏', prompt: 'El perímetro de un cuadrado es 36 centímetros. ¿Cuánto mide cada lado? (36 ÷ 4 = ?)', options: ['nueve centímetros (9 cm)', 'doce centímetros (12 cm)', 'seis centímetros (6 cm)', 'ocho centímetros (8 cm)'], answer: 'nueve centímetros (9 cm)',
    explanation: '¡Brillante! Un cuadrado tiene 4 lados IGUALES. 36 ÷ 4 = NUEVE (9) centímetros por lado. Check: 9 + 9 + 9 + 9 = 36. ¡Cada lado mide 9 cm! ¡Genial!' },

  { id: 'sm2-3-12', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'división',
    visual: '🎯', prompt: '¿Cuánto es cien entre cuatro? (100 ÷ 4 = ?)', options: ['veinticinco (25)', 'veinte (20)', 'treinta (30)', 'cuarenta (40)'], answer: 'veinticinco (25)',
    explanation: '¡Perfecto! Cien (100) ENTRE cuatro (4) = VEINTICINCO (25)! 100 ÷ 4 = 25. Check: 25 × 4 = 100. ¡Exacto! Veinticinco = twenty-five. ¡División con números grandes en español!' },

  { id: 'sm2-3-13', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🎒', prompt: 'Avery tiene 7 paquetes de lápices con 12 lápices cada uno. ¿Cuántos lápices tiene en total? (7 × 12 = ?)', options: ['ochenta y cuatro (84)', 'setenta y siete (77)', 'setenta y dos (72)', 'noventa (90)'], answer: 'ochenta y cuatro (84)',
    explanation: '¡Excelente! Siete (7) paquetes × doce (12) lápices = OCHENTA Y CUATRO (84)! 7 × 12 = 84. Paquetes = packages, lápices = pencils. Avery has OCHENTA Y CUATRO pencils! ¡Suficientes para toda la clase!' },

  { id: 'sm2-3-14', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'geometría',
    visual: '🔺', prompt: 'El área de un triángulo se calcula con: (base × altura) ÷ 2. Si la base es 10 cm y la altura es 6 cm, ¿cuál es el área?', options: ['treinta centímetros cuadrados (30 cm²)', 'sesenta cm²', 'quince cm²', 'veinte cm²'], answer: 'treinta centímetros cuadrados (30 cm²)',
    explanation: '¡Brillante! Área del triángulo = (base × altura) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = TREINTA (30) cm²! Base = base, altura = height. ¡La fórmula del área del triángulo en español!' },

  { id: 'sm2-3-15', type: 'multiple-choice', level: '3', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🚂', prompt: 'Un tren viaja 180 kilómetros en 3 horas. ¿Cuántos kilómetros viaja por hora? (180 ÷ 3 = ?)', options: ['sesenta kilómetros (60 km)', 'cincuenta kilómetros (50 km)', 'setenta kilómetros (70 km)', 'cuarenta y cinco kilómetros (45 km)'], answer: 'sesenta kilómetros (60 km)',
    explanation: '¡Fantástico! Ciento ochenta (180) ÷ tres (3) = SESENTA (60) kilómetros por hora! Por hora = per hour. The train travels 60 km/h — ¡SESENTA kilómetros por hora! ¡Un problema de velocidad en español!' },


  // ==============================================================
  // === TAG LEVEL — 15 questions (sm2-t-01 to sm2-t-15) ===
  // ==============================================================

  { id: 'sm2-t-01', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'razonamiento',
    visual: '🧩', prompt: 'En español: Si 🔺 + 🔺 = 14 y 🔺 + ⭐ = 11, ¿cuánto vale ⭐?', options: ['cuatro (4)', 'siete (7)', 'tres (3)', 'cinco (5)'], answer: 'cuatro (4)',
    explanation: '¡Genial! Dos triángulos (🔺+🔺) = 14, entonces un triángulo = 7. Si triángulo (7) + estrella = 11, entonces estrella = 11 - 7 = CUATRO (4)! ¡Álgebra en español!' },

  { id: 'sm2-t-02', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'patrones',
    visual: '🔢', prompt: '¿Cuál es el patrón? 1, 4, 9, 16, 25, ___ (¿Cuál es el número que falta?)', options: ['treinta y seis (36)', 'treinta (30)', 'cuarenta y nueve (49)', 'treinta y cinco (35)'], answer: 'treinta y seis (36)',
    explanation: '¡Fantástico! Estos son los CUADRADOS PERFECTOS: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=TREINTA Y SEIS (36)! Perfect squares (cuadrados perfectos) — each number times itself! ¡Brillante!' },

  { id: 'sm2-t-03', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'álgebra',
    visual: '🌟', prompt: 'En español: Si 3n = 24, ¿cuánto vale n?', options: ['ocho (8)', 'siete (7)', 'nueve (9)', 'seis (6)'], answer: 'ocho (8)',
    explanation: '¡Excelente! Si 3 × n = 24, entonces n = 24 ÷ 3 = OCHO (8)! Check: 3 × 8 = 24 ¡correcto! Resolver ecuaciones en español — ¡eres una matemática increíble!' },

  { id: 'sm2-t-04', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🏪', prompt: 'En una tienda, cada caja tiene 24 chocolates y cada fila tiene 6 cajas. Si hay 4 filas, ¿cuántos chocolates hay en total? (24 × 6 × 4 = ?)', options: ['quinientos setenta y seis (576)', 'cuatrocientos ochenta (480)', 'seiscientos (600)', 'quinientos cuarenta (540)'], answer: 'quinientos setenta y seis (576)',
    explanation: '¡Brillante! 24 × 6 = 144 chocolates por fila. 144 × 4 filas = QUINIENTOS SETENTA Y SEIS (576)! Tienda = store, fila = row, chocolates = chocolates. ¡Un problema de múltiples pasos en español!' },

  { id: 'sm2-t-05', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'patrones',
    visual: '⭐', prompt: 'La secuencia: 2, 6, 18, 54, ___ ¿Cuál es el patrón y el siguiente número?', options: ['ciento sesenta y dos (162)', 'ciento ocho (108)', 'doscientos dieciséis (216)', 'noventa (90)'], answer: 'ciento sesenta y dos (162)',
    explanation: '¡Increíble! El patrón: cada número se MULTIPLICA por 3 (×3)! 2×3=6, 6×3=18, 18×3=54, 54×3=CIENTO SESENTA Y DOS (162)! This is a geometric sequence — ¡secuencia geométrica en español!' },

  { id: 'sm2-t-06', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'razonamiento',
    visual: '🧠', prompt: 'En español: Hay 32 estudiantes en una clase. La mitad tiene mascotas. Un cuarto tiene perros específicamente. ¿Cuántos estudiantes tienen perros?', options: ['ocho (8)', 'dieciséis (16)', 'cuatro (4)', 'doce (12)'], answer: 'ocho (8)',
    explanation: '¡Fantástico! La mitad (1/2) de 32 = 16 tienen mascotas. Un cuarto (1/4) de 32 = OCHO (8) tienen perros. 32 ÷ 4 = 8. Mitad = half, cuarto = quarter/fourth. ¡Fracciones y lógica en español!' },

  { id: 'sm2-t-07', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'álgebra',
    visual: '🔢', prompt: 'En español: El doble de un número más cinco es veintitrés. (2n + 5 = 23) ¿Cuánto vale el número?', options: ['nueve (9)', 'diez (10)', 'ocho (8)', 'siete (7)'], answer: 'nueve (9)',
    explanation: '¡Genial! 2n + 5 = 23. Primero: 23 - 5 = 18. Luego: 18 ÷ 2 = NUEVE (9)! Check: 2(9) + 5 = 18 + 5 = 23. ¡Correcto! El doble = double, más = plus. ¡Álgebra de dos pasos en español!' },

  { id: 'sm2-t-08', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🚂', prompt: 'Dos trenes salen al mismo tiempo desde ciudades diferentes separadas por 360 km. El tren A viaja a 90 km/h y el tren B a 60 km/h. ¿En cuántas horas se encontrarán?', options: ['dos horas (2 horas)', 'tres horas (3 horas)', 'cuatro horas (4 horas)', 'una hora (1 hora)'], answer: 'dos horas (2 horas)',
    explanation: '¡Increíble! La velocidad combinada = 90 + 60 = 150 km/h. 360 ÷ 150 = DOS HORAS (2 horas)! Trenes = trains, ciudades = cities, separadas = separated. ¡Un problema clásico de velocidad en español!' },

  { id: 'sm2-t-09', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'patrones',
    visual: '🌀', prompt: 'En la secuencia de Fibonacci en español: 1, 1, 2, 3, 5, 8, 13, ___ ¿Cuál es el siguiente número?', options: ['veintiuno (21)', 'dieciocho (18)', 'dieciséis (16)', 'veinticuatro (24)'], answer: 'veintiuno (21)',
    explanation: '¡Brillante! En la SUCESIÓN DE FIBONACCI, cada número es la SUMA de los dos anteriores! 8 + 13 = VEINTIUNO (21)! La sucesión de Fibonacci aparece en flores, caracoles, y hasta en el arte. ¡Es mágica!' },

  { id: 'sm2-t-10', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'razonamiento',
    visual: '⚖️', prompt: 'En español: Si una bolsa de 5 kg de naranjas cuesta 15 pesos, ¿cuánto cuesta 1 kg?', options: ['tres pesos (3 pesos)', 'cinco pesos (5 pesos)', 'diez pesos (10 pesos)', 'dos pesos (2 pesos)'], answer: 'tres pesos (3 pesos)',
    explanation: '¡Excelente! 15 pesos ÷ 5 kg = TRES PESOS por kilogramo! Bolsa = bag, naranjas = oranges, cuesta = costs. Unit price in Spanish — precio unitario! 3 pesos por kg. ¡Matemáticas del mundo real!' },

  { id: 'sm2-t-11', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'álgebra',
    visual: '🌟', prompt: 'En español: El producto de un número y seis es igual a cuarenta y dos. (n × 6 = 42) ¿Cuál es el número?', options: ['siete (7)', 'ocho (8)', 'seis (6)', 'nueve (9)'], answer: 'siete (7)',
    explanation: '¡Correcto! n × 6 = 42. n = 42 ÷ 6 = SIETE (7)! Producto = product, igual a = equals. Check: 7 × 6 = 42. ¡El producto es siete! Álgebra en español — ¡lo dominas!' },

  { id: 'sm2-t-12', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🎨', prompt: 'Avery pinta 3 cuadros por día durante 5 días, luego 4 cuadros por día durante 3 días. ¿Cuántos cuadros pintó en total? ((3×5) + (4×3) = ?)', options: ['veintisiete (27)', 'veinticuatro (24)', 'treinta (30)', 'veintitrés (23)'], answer: 'veintisiete (27)',
    explanation: '¡Fantástico! (3 × 5) + (4 × 3) = 15 + 12 = VEINTISIETE (27) cuadros! Pinta = paints, cuadros = paintings, por día = per day, en total = in total. ¡Dos pasos y en español! ¡Avery es una artista productiva!' },

  { id: 'sm2-t-13', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'razonamiento',
    visual: '🔢', prompt: 'En español: Los números primos son divisibles solo entre uno y sí mismos. ¿Cuál de estos es un número PRIMO?', options: ['trece (13)', 'quince (15)', 'veintiuno (21)', 'veintisiete (27)'], answer: 'trece (13)',
    explanation: '¡Brillante! Los NÚMEROS PRIMOS (prime numbers) solo son divisibles entre 1 y sí mismos! 13 is prime: only 1 × 13. 15 = 3 × 5, 21 = 3 × 7, 27 = 3 × 9. ¡TRECE es el primo! ¡Números primos en español!' },

  { id: 'sm2-t-14', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'problema de palabras',
    visual: '🌍', prompt: 'La Tierra viaja alrededor del Sol a 30 km por segundo. ¿Cuántos km viaja en un minuto? (60 segundos × 30 km = ?)', options: ['mil ochocientos (1,800)', 'tres mil (3,000)', 'novecientos (900)', 'seiscientos (600)'], answer: 'mil ochocientos (1,800)',
    explanation: '¡Increíble! 60 segundos × 30 km = MIL OCHOCIENTOS (1,800) km por minuto! Segundos = seconds, minuto = minute. The Earth travels 1,800 km every minute around the Sun! ¡La ciencia y las matemáticas juntas en español!' },

  { id: 'sm2-t-15', type: 'multiple-choice', level: 'TAG', subject: 'math', language: 'spanish', topic: 'álgebra',
    visual: '🏆', prompt: 'En español: Una secuencia aritmética comienza en 7 y aumenta de 5 en 5. ¿Cuál es el décimo número de la secuencia? (Fórmula: primero + (n-1) × diferencia)', options: ['cincuenta y dos (52)', 'cincuenta y siete (57)', 'cuarenta y siete (47)', 'sesenta y dos (62)'], answer: 'cincuenta y dos (52)',
    explanation: '¡Genial! Secuencia aritmética: 7 + (10-1) × 5 = 7 + 9 × 5 = 7 + 45 = CINCUENTA Y DOS (52)! Check: 7, 12, 17, 22, 27, 32, 37, 42, 47, 52 — ¡el décimo es 52! ¡Álgebra avanzada en español — eres una estrella!' },
]
