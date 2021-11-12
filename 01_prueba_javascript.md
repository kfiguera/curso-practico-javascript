## VARIABLES Y OPERACIONES

### 1. Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una variable y para qué sirve?
    - Es un espacio en memoria el cual nos permite almacenar datos
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
    - **Declarar:** Es cuando se define o crea la variable, reservando un espacio en memoria para ella.
    - **Inicializar:** Es asignar un valor inicial a la variable.
    
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
    - **Sumar:** Es incrementar el valor resultante de la operación entre dos datos de tipo numérico.
    - **Concatenar:** Es unificar dos valores de tipo String para formar un único valor.
- ¿Cuál operador me permite sumar o concatenar?
    - El operador **+**.

### 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- **Nombre:** String nombre.
- **Apellido:** String apellido.
- **Nombre de usuario en Platzi:** String usuario.
- **Edad:** Integer edad.
- **Correo electrónico:** String email.
- **Mayor de edad:** Boolean mayorEdad.
- **Dinero ahorrado:** Float ahorros.
- **Deudas:** Float deudas.

### 3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Kevin';
let apellido = 'Figuera';
let usuario = 'kfiguera';
let edad = 27;
let email = 'kfiguera@example.com';
let mayorEdad = true;
let dineroAhorrado = 10000.00;
let deudas = 120.00; 
```
### 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
```
let nombreCompleto = nombre + ' ' + apellido;
```
- Dinero real (dinero ahorrado menos deudas)
```
let dineroReal = ahorros - deudas;
```
---
## FUNCIONES

### 1. Responde las siguientes preguntas en la sección de comentarios:
    
- ¿Qué es una función?:
    - Un bloque de código que cumple con una tarea especifica, que funcionan de manera independiente y puede ser reutilizado en diferentes partes del programa.
- ¿Cuándo me sirve usar una función en mi código?
    - Cuando requerimos utilizar un mismo bloque de codigo en diferentes lugares de nuestra aplicación.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    - **Parámetro:** es una variable en una definición de una función
    - **Argumentos:** Son las validable o datos que pasa a los parámetros de la función.

### 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```
const getFullName = (nombre, apellido, usuario) => {
    let nombreCompleto = nombre + ' ' + apellido;
    console.log('Mi nombre es ' + nombreCompleto + ', pero prefiero que me digas ' + usuario);
}
```
---
## CONDICIONALES

### 1. Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una condicional?
    - es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    - **if:** Ejecuta un bloque de código si la condición es *true*.
    - **else:** Ejecuta un bloque de código si la condición es *false*.
- ¿Puedo combinar funciones y condicionales?
    - Si totalmente.

### 2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:


```
const tipoDeSuscripcion = "Basic";

if(suscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(suscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(suscripcion === 'Expert+'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {
    console.log("Solo puedes tomar los cursos gratis");
}

```
### 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```
const tipoDeSuscripcion = "Basic";

if(suscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(suscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(suscripcion === 'Expert+'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if(suscripcion !== 'Expert+' && suscripcion !== 'Expert' && suscripcion !== 'Basic'){ 
    console.log("Solo puedes tomar los cursos gratis");
}

```
---
## CICLOS

### 1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
    - es una secuencia de instrucciones de código que se ejecuta repetidas veces, hasta que la condición asignada a dicho bucle deja de cumplirse.
- ¿Qué tipos de ciclos existen en JavaScript?
    - while, do while, for
- ¿Qué es un ciclo infinito y por qué es un problema?
    - Es un ciclo que se repite de forma indefinida ya que su condición para finalizar nunca se cumple.
- ¿Puedo mezclar ciclos y condicionales?
    - Si, sin problemas

### 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```
let i = 0;
while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
```
```
let i = 10; 
while(i>=2) {
    console.log("El valor de i es: " + i);
    i--;
}
```
### 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```
let solucion = 0
do{
    solucion = Number(prompt('Cuanto es 2+2?'));
} while(solucion!==4);
console.log("Felicidades!!!, tu respuesta es correcta");
```
---
## LISTAS
### 1. Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
    - Una manera ordenada de almacenar una lista de elementos de datos bajo un solo nombre de variable.
- ¿Qué es un objeto?
    -  Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
- ¿Cuándo es mejor usar objetos o arrays?
    - Los objetos son recomendados cuando queremos agrupar valores, incluyendo otros objetos, permitiéndonos construir estructuras más complejas. 
    - Los arrays son recomendados cuando queremos trabajar con tipos de datos simples como Strings, números, booleanos; y almacenar sus secuencias de valores.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    - Si es posible.

### 2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```
function primerElemento(array) {
    console.log(array[0]);
}
```

### 3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```
function imprimirElementos(array) {
    array.forEach(function(element,index,array) {
        console.log(element);
    });
}
```
### 4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
var estudiante = {
    nombre:'Kevin',
    apellido:'Figuera',
    usuario: 'kfiguera',
    edad: 27
};

const datosEstudiante = (objeto) => {
    for(let key in objeto){
        console.log(`${key}: ${objeto[key]}`);
    }
};

datosEstudiante(estudiante);

```