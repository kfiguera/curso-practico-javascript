// Código del Cuadrado

console.group('Cuadrado');

const ladoCuadrado = 25;
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
    lado1: 25,
    lado2: 25,
    base: 25,
    altura: 25,
};
console.log('La altura del triángulo mide: ' + triangulo.altura + 'cm');
console.log('Los lados del triángulo miden: ' + triangulo.lado1 + 'cm,' + triangulo.lado2 + 'cm,' + triangulo.base + 'cm');

const perimetroTriangulo = (triangulo) => triangulo.lado1 + triangulo.lado2 + triangulo.base;
console.log('El perímetro del triángulo es: ' + perimetroTriangulo(triangulo) + 'cm');

const areaTriangulo = (triangulo) => (triangulo.base * triangulo.altura) / 2;
console.log('El área del triángulo es: ' + areaTriangulo(triangulo) + 'cm^2');

console.groupEnd();


// Código del Círculo
console.group('Círculo');

const radioCirculo = 25;
console.log('El radio del Círculo es: ' + radioCirculo + 'cm');

const diametroCirculo = (radio) => radio * 2;
console.log('El diametro del Círculo es: ' + diametroCirculo(radioCirculo) + 'cm');

const PI = Math.PI;
console.log('El valor de PI es: ' + PI);

const perimetroCirculo = (diametro, pi) => diametro * pi;
console.log('El perímetro del Círculo es: ' + perimetroCirculo(diametroCirculo(radioCirculo), PI) + 'cm');

const areaCirculo = (radio, pi) => (radio * radio) * pi;
console.log('El área del Círculo es: ' + areaCirculo(radioCirculo, PI) + 'cm^2');

console.groupEnd();

function calcularPerimetroCuadrado() {


    let input = document.getElementById('inputSquare');
    let value = parseInt(input.value);
    let response = document.getElementById('resultSquare');
    response.classList.remove("active");

    if (isNaN(value)) {
        alert('You must enter a number.')
    } else {
        let permimeter = perimetroCuadrado(value);
        response.classList.toggle("active");
        console.log(response.firstElementChild);
        response.firstElementChild.innerHTML = "Perimeter: " + permimeter + "cm"
    }

}

function calcularAreaCuadrado() {


    let input = document.getElementById('inputSquare');
    let value = parseFloat(input.value);
    let response = document.getElementById('resultSquare');
    response.classList.remove("active");

    if (isNaN(value)) {
        alert('You must enter a number.')
    } else {
        let permimeter = areaCuadrado(value);
        response.classList.toggle("active");
        console.log(response.firstElementChild);
        response.firstElementChild.innerHTML = "Area: " + permimeter + "cm<sup>2</sup>"
    }

}

function calcularPerimetroTriangulo() {


    const triangle = {
        lado1: parseFloat(document.getElementById('sideA').value),
        lado2: parseFloat(document.getElementById('sideB').value),
        base: parseFloat(document.getElementById('base').value),
        altura: parseFloat(document.getElementById('height').value),
    };
    let response = document.getElementById('resultTriangle');
    response.classList.remove("active");

    if (isNaN(triangle.lado1) || isNaN(triangle.lado2) || isNaN(triangle.base) || isNaN(triangle.altura)) {
        alert('You must enter a number.')
    } else {
        let permimeter = perimetroTriangulo(triangle);
        response.classList.toggle("active");
        console.log(response.firstElementChild);
        response.firstElementChild.innerHTML = "Perimeter: " + permimeter + "cm"
    }

}

function calcularAreaTriangulo() {
    const triangle = {
        lado1: parseFloat(document.getElementById('sideA').value),
        lado2: parseFloat(document.getElementById('sideB').value),
        base: parseFloat(document.getElementById('base').value),
        altura: parseFloat(document.getElementById('height').value),
    };
    let response = document.getElementById('resultTriangle');
    response.classList.remove("active");

    if (isNaN(triangle.lado1) || isNaN(triangle.lado2) || isNaN(triangle.base) || isNaN(triangle.altura)) {
        alert('You must enter a number.')
    } else {
        let area = areaTriangulo(triangle);
        response.classList.toggle("active");
        console.log(response.firstElementChild);
        response.firstElementChild.innerHTML = "Area: " + area + "cm<sup>2</sup>"
    }

}

function calcularPerimetroCirculo() {


    let input = document.getElementById('radio');
    let value = parseFloat(input.value);
    let response = document.getElementById('resultCircle');
    response.classList.remove("active");

    if (isNaN(value)) {
        alert('You must enter a number.')
    } else {
        let permimeter = perimetroCirculo(diametroCirculo(value),PI);
        response.classList.toggle("active");
        console.log(response.firstElementChild);
        response.firstElementChild.innerHTML = "Perimeter: " + permimeter + "cm"
    }

}

function calcularAreaCirculo() {
    let input = document.getElementById('radio');
    let value = parseFloat(input.value);
    let response = document.getElementById('resultCircle');
    response.classList.remove("active");

    if (isNaN(value)) {
        alert('You must enter a number.')
    } else {
        console.log(PI);
        let area = areaCirculo(value,PI);
        response.classList.toggle("active");
        console.log(response.firstElementChild);
        response.firstElementChild.innerHTML = "Area: " + area + "cm<sup>2</sup>"
    }

}