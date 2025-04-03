// 1 - Crea una funcion que diga 'Hola ' y un nombre que se le pase

const sayHello: (name: string) => string = (name: string) => {
  const hola: string = 'Hello ';
  return hola + name;
};

const result1 = sayHello('Fernando');

console.log(result1);

// 2 - Crea una función que pasándole la longitud del lado calcule el area de un cuadrado

const squareArea: (side: number) => string = (side: number) => {
  return side * side + 'cm2';
};

const result2 = squareArea(4);
console.log(result2);

// 3 - Crea una función que pasándole la base y la altura de un triángulo calcule el area

const triangleArea: (base: number, height: number) => string = (
  base: number,
  height: number
) => {
  return (base * height) / 2 + 'cm2';
};

const result3 = triangleArea(3, 8);
console.log(result3);

// 4 - Crea una función que pasándole el radio de un circulo calcule el area

const circleArea: (radius: number) => string = (radius: number) => {
  return radius * radius * Math.PI + 'cm2';
};

const result4 = circleArea(8);
console.log(result4);

// 5 - Crea una funcion que convierta grados celsius a farenheit (*1.8 y despues sumado 32)

const celsiusToFarenheit: (celsius: number) => string = (celsius) => {
  return celsius * 1.8 + 32 + 'ºF';
};

const result5 = celsiusToFarenheit(20);
console.log(result5);

// 6 - Crea una función que convierta grados farenheit a celsius

const farenheitToCelsius: (farenheit: number) => string = (farenheit) => {
  return (farenheit - 32) * 0.55 + 'ºC';
};

const result6 = farenheitToCelsius(20);
console.log(result6);

// 7 - Crea una función en la que pasándole el nombre de un producto y el precio te lo devuelva con IVA (21%)

const productWithTaxes: (product: string, price: number) => string = (
  product,
  price
) => {
  return `The product ${product} has a price including taxes of ${
    price * 1.21
  }€`;
};

const result7 = productWithTaxes('gallinejas', 20);
console.log(result7);

// Funciones condicionales

// 8 - Crea una función que pasándole un nombre y una edad determine si eres mayor o menor de edad

const ageWarning: (name: string, age: number) => string = (name, age) => {
  if (age >= 18) {
    return `Hola ${name}, eres mayor de edad!`;
  }
  return `Hola ${name}, eres menor de edad!`;
};

const result8 = ageWarning('Fernando', 39);
console.log(result8);

// 9 - Crea una función que, dándole dos números te diga cual de los dos es mayor

const topNumber: (numberA: number, numberB: number) => string = (
  numberA,
  numberB
) => {
  if (numberA > numberB) {
    return `El numero ${numberA} es mayor que el número ${numberB}`;
  } else if (numberA < numberB) {
    return `El número ${numberB} es mayor que el numero ${numberA}`;
  } else {
    return `Los dos números son iguales`;
  }
};

const result9 = topNumber(12, 15);
console.log(result9);

// 10 - Crea una función que, pasándole un número nos diga si es positivo, negativo o igual a cero

const posOrNeg: (number: number) => string = (number) => {
  if (number > 0) {
    return `El número ${number} es positivo`;
  } else if (number < 0) {
    return `El número ${number} es negativo`;
  } else {
    return `El número ${number} es igual a cero`;
  }
};

const result10 = posOrNeg(-14);
console.log(result10);

// Ejercicios con strings

// 11 - Crea una función que reciba una palabra y, si es mayor de 5 letras, la imprima en mayúsculas. Si no, en minúsculas

const toUpper: (word: string) => string = (word) =>
  word.length >= 5 ? word.toUpperCase() : word.toLowerCase();

const result11 = toUpper('testimonio');
console.log(result11);

// 12 - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra

const randomLetter: (word: string) => string = (word) => {
  const randomNumber: number = Math.floor(Math.random() * word.length);
  return word.charAt(randomNumber);
};

const result12 = randomLetter('cerdo');
console.log(result12);

// 13 - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona"

const getRandomChar = (word: string): string => {
  return word.charAt(Math.floor(Math.random() * word.length));
};

const generateWord: (wordA: string, wordB: string, wordC: string) => string = (
  wordA,
  wordB,
  wordC
) => {
  return (
    getRandomChar(wordA) +
    getRandomChar(wordA) +
    getRandomChar(wordB) +
    getRandomChar(wordB) +
    getRandomChar(wordC) +
    getRandomChar(wordC)
  );
};

const result13 = generateWord('casas', 'peces', 'bichos');
console.log(result13);

// 14 - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "paco@gmail.com" deberá imprimir "El usuario es paco" y por otro lado "El dominio es gmail.com"

const nameAndDomain: (email: string) => string = (email) => {
  const splitPoint = email.indexOf('@');

  return `El user es ${email.substring(
    0,
    splitPoint
  )} y el dominio ${email.substring(splitPoint + 1)}.`;
};

const result14 = nameAndDomain('fernando@fertelo.es');
console.log(result14);

// 15 - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs*

const intercalated: (word: string) => string = (word) => {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    newWord +=
      i % 2 === 0 ? word.charAt(i).toLowerCase() : word.charAt(i).toUpperCase();
  }

  return newWord;
};

const result15 = intercalated('cerebral');
console.log(result15);

// 16 - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo,  "Juan Perez" podría convertirse en "JPerez87".

const userGenerator: (nameAndSurname: string) => string = (nameAndSurname) => {
  const splitPoint = nameAndSurname.indexOf(' ');
  const firstLetter = nameAndSurname.charAt(0).toUpperCase();
  const secondLetter = nameAndSurname.charAt(splitPoint + 1).toUpperCase();
  const restOfName = nameAndSurname.substring(splitPoint + 2).toLowerCase();
  const randomNumber = Math.ceil(Math.random() * 100);

  return firstLetter + secondLetter + restOfName + randomNumber;
};

const result16 = userGenerator('Fernando tejero');
console.log(result16);

// 17 - Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac"

const reversedWord: (word: string) => string = (word: string) => {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word.charAt(i);
  }
  return newWord;
};

const result17 = reversedWord('cantimplora');
console.log(result17);

// 18 - Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá devolver 17

const totalChar: (wordA: string, wordB: string, wordC: string) => number = (
  wordA,
  wordB,
  wordC
) => {
  return wordA.length + wordB.length + wordC.length;
};

const result18 = totalChar('Fer', 'fujur', 'Carlos');
console.log(result18);

// 19 - Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false

const bothEven: (number: number) => boolean = (number) => {
  const firstNum = String(number).charAt(0);
  const secondNum = String(number).charAt(1);

  if (Number(firstNum) % 2 === 0 && Number(secondNum) % 2 === 0) {
    return true;
  }
  return false;
};

const result19 = bothEven(22);
console.log(result19);

// 20 - Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase

const isIncluded: (sentence: string, word: string) => boolean = (
  sentence,
  word
) => sentence.includes(word);

const result20 = isIncluded('El gato que está triste y azul', 'pez');
console.log(result20);
