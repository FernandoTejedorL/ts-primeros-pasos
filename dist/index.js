"use strict";
const sayHello = (name) => {
    const hola = 'Hello ';
    return hola + name;
};
const result1 = sayHello('Fernando');
console.log(result1);
const squareArea = (side) => {
    return side * side + 'cm2';
};
const result2 = squareArea(4);
console.log(result2);
const triangleArea = (base, height) => {
    return (base * height) / 2 + 'cm2';
};
const result3 = triangleArea(3, 8);
console.log(result3);
const circleArea = (radius) => {
    return radius * radius * Math.PI + 'cm2';
};
const result4 = circleArea(8);
console.log(result4);
const celsiusToFarenheit = (celsius) => {
    return celsius * 1.8 + 32 + 'ºF';
};
const result5 = celsiusToFarenheit(20);
console.log(result5);
const farenheitToCelsius = (farenheit) => {
    return (farenheit - 32) * 0.55 + 'ºC';
};
const result6 = farenheitToCelsius(20);
console.log(result6);
const productWithTaxes = (product, price) => {
    return `The product ${product} has a price including taxes of ${price * 1.21}€`;
};
const result7 = productWithTaxes('gallinejas', 20);
console.log(result7);
const ageWarning = (name, age) => {
    if (age >= 18) {
        return `Hola ${name}, eres mayor de edad!`;
    }
    return `Hola ${name}, eres menor de edad!`;
};
const result8 = ageWarning('Fernando', 39);
console.log(result8);
const topNumber = (numberA, numberB) => {
    if (numberA > numberB) {
        return `El numero ${numberA} es mayor que el número ${numberB}`;
    }
    else if (numberA < numberB) {
        return `El número ${numberB} es mayor que el numero ${numberA}`;
    }
    else {
        return `Los dos números son iguales`;
    }
};
const result9 = topNumber(12, 15);
console.log(result9);
const posOrNeg = (number) => {
    if (number > 0) {
        return `El número ${number} es positivo`;
    }
    else if (number < 0) {
        return `El número ${number} es negativo`;
    }
    else {
        return `El número ${number} es igual a cero`;
    }
};
const result10 = posOrNeg(-14);
console.log(result10);
const toUpper = (word) => word.length >= 5 ? word.toUpperCase() : word.toLowerCase();
const result11 = toUpper('testimonio');
console.log(result11);
const randomLetter = (word) => {
    const randomNumber = Math.floor(Math.random() * word.length);
    return word.charAt(randomNumber);
};
const result12 = randomLetter('cerdo');
console.log(result12);
const getRandomChar = (word) => {
    return word.charAt(Math.floor(Math.random() * word.length));
};
const generateWord = (wordA, wordB, wordC) => {
    return (getRandomChar(wordA) +
        getRandomChar(wordA) +
        getRandomChar(wordB) +
        getRandomChar(wordB) +
        getRandomChar(wordC) +
        getRandomChar(wordC));
};
const result13 = generateWord('casas', 'peces', 'bichos');
console.log(result13);
const nameAndDomain = (email) => {
    const splitPoint = email.indexOf('@');
    return `El user es ${email.substring(0, splitPoint)} y el dominio ${email.substring(splitPoint + 1)}.`;
};
const result14 = nameAndDomain('fernando@fertelo.es');
console.log(result14);
const intercalated = (word) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        newWord +=
            i % 2 === 0 ? word.charAt(i).toLowerCase() : word.charAt(i).toUpperCase();
    }
    return newWord;
};
const result15 = intercalated('cerebral');
console.log(result15);
const userGenerator = (nameAndSurname) => {
    const splitPoint = nameAndSurname.indexOf(' ');
    const firstLetter = nameAndSurname.charAt(0).toUpperCase();
    const secondLetter = nameAndSurname.charAt(splitPoint + 1).toUpperCase();
    const restOfName = nameAndSurname.substring(splitPoint + 2).toLowerCase();
    const randomNumber = Math.ceil(Math.random() * 100);
    return firstLetter + secondLetter + restOfName + randomNumber;
};
const result16 = userGenerator('Fernando tejero');
console.log(result16);
const reversedWord = (word) => {
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word.charAt(i);
    }
    return newWord;
};
const result17 = reversedWord('cantimplora');
console.log(result17);
const totalChar = (wordA, wordB, wordC) => {
    return wordA.length + wordB.length + wordC.length;
};
const result18 = totalChar('Fer', 'fujur', 'Carlos');
console.log(result18);
const bothEven = (number) => {
    const firstNum = String(number).charAt(0);
    const secondNum = String(number).charAt(1);
    if (Number(firstNum) % 2 === 0 && Number(secondNum) % 2 === 0) {
        return true;
    }
    return false;
};
const result19 = bothEven(22);
console.log(result19);
const isIncluded = (sentence, word) => sentence.includes(word);
const result20 = isIncluded('El gato que está triste y azul', 'pez');
console.log(result20);
//# sourceMappingURL=index.js.map