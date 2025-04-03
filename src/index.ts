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
