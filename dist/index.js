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
//# sourceMappingURL=index.js.map