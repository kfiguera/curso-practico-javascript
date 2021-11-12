// Código del Cuadrado

console.group('Cuadrado');

const ladoCuadrado = parseFloat(prompt('Ingrese el lado'));
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4
}
console.log('El perímetro del cuadrado es: ' + perimetroCuadrado(ladoCuadrado) + 'cm');

function areaCuadrado(lado) {
    return lado * lado;

}
console.log('El área del cuadrado es: ' + areaCuadrado(ladoCuadrado) + 'cm^2');

console.groupEnd();

// Código del Triángulo

console.group('Triángulo');

const triangulo = {
    lado1: parseFloat(prompt('Ingrese el lado 1')),
    lado2: parseFloat(prompt('Ingrese el lado 2')),
    base: parseFloat(prompt('Ingrese la base')),
    altura: parseFloat(prompt('Ingrese la altura'))
};
console.log('La altura del triángulo mide: ' + triangulo.altura + 'cm');
console.log('Los lados del triángulo miden: ' + triangulo.lado1 + 'cm,' + triangulo.lado2 + 'cm,' + triangulo.base + 'cm');

const perimetroTriangulo = (triangulo) => triangulo.lado1 + triangulo.lado2 + triangulo.base;
console.log('El perímetro del triángulo es: ' + perimetroTriangulo(triangulo) + 'cm');

const areaTriangulo = (triangulo) =>  (triangulo.base * triangulo.altura) / 2;
console.log('El área del triángulo es: ' + areaTriangulo(triangulo) + 'cm^2');

console.groupEnd();


// Código del Círculo
console.group('Círculo');

const radioCirculo = parseFloat(prompt('Ingrese el radio'));
console.log('El radio del Círculo es: ' + radioCirculo + 'cm');

const diametroCirculo =  (radio) => radio * 2;
console.log('El diametro del Círculo es: ' + diametroCirculo(radioCirculo) + 'cm');

const PI = Math.PI;
console.log('El valor de PI es: ' + PI);

const perimetroCirculo = (diametro, pi) => diametro * pi;
console.log('El perímetro del Círculo es: ' + perimetroCirculo(diametroCirculo(radioCirculo),PI) + 'cm');

const areaCirculo = (radio, pi) => (radio * radio) * pi;
console.log('El área del Círculo es: ' + areaCirculo(radioCirculo, PI) + 'cm^2');

console.groupEnd();