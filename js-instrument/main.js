console. log('Hola mundo!');
const myName = 'Areli';
//myName = 'Carolina'
let myAge = 17;
let x = 3;
let y = 4;
const likesMusic = true;
console.log('myName',myName);
console.log('myAge',myAge);
console.log('x,x');
console.log('y,y');
console.log('likesMusic', likesMusic);

console.log('myName es de tipo', typeof myName);
console.log('myAge es de tipo', typeof myAge);
console.log('x es de tipo', typeof x);
console.log('y es de tipo', typeof y);
console.log('likesMusic es de tipo', typeof likesMusic);

let z;
// Operador aritmetico de suma
z=x+y;
console.log('la suma de '+x+' y '+y+' es '+z);

//Operadpr aritmetico de resta
z=x-y;
console.log('la resta de '+x+' y '+y+' es '+z);

//Operador aritmetico de division
z=x/y;
console.log('la división de '+x+' y '+y+' es '+z);

//Operador aritmetico de multiplicación
z=x*y;
console.log('la multiplicación de '+x+' y '+y+' es '+z)

let num = '22';
console.log('El valor actual de x es',x);
//Operadores aritmeticos adicionales:
//console.log('Operador de incremento',x++);
//console.log('Operador de decremento',x-- );
x++;
console.log('Operador de incremento', x);
x--;
console.log('Operador de decremento', x);
console.log('Operacion de negacion unaria', -x);
console.log('Operador de suma unaria', +num);

//Operadores de comparación
//x == y;
console.log(x == y);

//x != y;
console.log(x != y);

//x === y;
console.log(x === y);

//x !== y;
console.log(x !== y);

//x > y;
console.log(x > y);

//x >= y
console.log(x >= y);

//x < y;
console.log(x < y);

//x <= y;
console.log(x <=  y);

//Operadores logicos

if (likesMusic == true) {
    console.log('Me gusta la música');
} else {
    console.log('No me gusta la musica');
}

let compraRealizada = false;
let pisoBarrido = true;
let dinero;

if (compraRealizada == true || pisoBarrido == true){
    dinero = 10;
}else{
    dinero = 5
}
console.log('El dinero de tu hermanito es:', dinero);

let compraRealizada2 = false;
let pisoBarrido2 = true;
let dinero2;
if (compraRealizada2 == true || pisoBarrido2 == true){
    dinero2 = 20;
} else {
    dinero2 = 0
}
console.log('El dinero de tu hermanito es:', dinero2);

//YOB = Year Of Birth
let YOB = 2005;
const d = new Date();
//CY = Current Year
let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
    if (year == YOB) {
        console.log('En ' + year + 'yo naci');
    }
else if(year-YOB==1){
console.log('En' + year + 'yo tenia' + (year - YOB) + 'año');
}
else if(year == CY){
console.log ('En el' + year + 'yo tendre' + (year - YOB) + 'años');
} else {
    console.log('En' + year + 'yo tenia' + (year - YOB) + 'años');
    }
}    

let age;

let year = YOB
while(year<=CY){
    let age = year-YOB;
    if (year == YOB){
        console.log('En' + year + 'yo naci');
    }
    else if(age==1){
        console.log('En' + year + 'yo tenia' + age + 'año');
    }
    else if(year == CY){
        console.log('En el' + year + 'yo tendre' + age + 'años');
    } else{
        console.log('En' + year + 'yo tendre' + age + 'años');
    }
    year++;
}

const aCelsius = (fahrenheit) => (fahrenheit -32) / 1.8;
console.log(aCelsius(100));

function saludo(name) {
    alert('Hola!,' + name);
}
function ProcesarEntradaDeDatos( callback){
    const nombre = prompt('Please enter your name.');
    callback(nombre);
}
ProcesarEntradaDeDatos(saludo);


function playNote(key){
    const noteAudio = document.getElementById (key.dataset.note);
    noteAudio.play();
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];


const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log ('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);

nameElement.textContent=myName
ageElement.textContent=myAge

if (likesMusic == true){
    likesMusicElement. textContent='Me gusta la musica';

} else{
    likesMusicElement.textContent='No me gusta la musica';
}

const body = document.querySelector ('body');
const text = document.createElement('p');
text.textContent = 'Hola mundo desde el DOM!';

body.appendChild(text);

body.removeChild(text);

document.addEventListener('keydown', (e) =>{
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf (key);
    
    if (whiteKeyIndex > -1)
playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1)
playNote(blackKeys[blackKeyIndex]);    
})
