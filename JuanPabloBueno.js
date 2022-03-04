'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(words) {
   let result = ``;
   let charactersLenght = testWord.length;
   for (var i = 0; i < words; i++ ){
       result += testWord.charAt(Math.floor(Math.random() *
  charactersLenght));     
   }
   return result.split(``);
   
}
console.log(wordCutter(22));

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    wordsList.includes(targetWord)
    let a = ['a', 'b', 'c'].includes('a')
    let b = ['a', 'b', 'c'].includes('b')
    let c =['a', 'b', 'c'].includes('c')
    
}



/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let largo=strings[0];
let la_palabra_mas_larga='';

for (let i = 0; i<strings.length; i++){



  if (strings[i].length>largo.length) {
    la_palabra_mas_larga=strings[i];
  }
}

return la_palabra_mas_larga;
}



/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
   return word.split("").reverse().join("") == word;
}
console.log(palindromeVerifier("reconocer"));
console.log(palindromeVerifier("querer"));
console.log(palindromeVerifier("Gomosos"));
console.log(palindromeVerifier("Somos"));

/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
   let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]  
   }
   let  result = containerTestObject.list.split('');
   for (let i = 0; 1< objectContainer.length; i++) {
       if (containerTestObject.indexOf(objectContainer[1]) !== -1){
        counter +=1;

       }
       console.log(counter);
       

    }
}


/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
let array1 = listA
let array2 = listB
let array3 = array1.concat(array2);

console.log(array3);
}


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    testWordToExplore = testWordToExplore.toLowerCase();
    wordsToVerify = wordsToVerify.toLowerCase();
    
    testWordToExplore = testWordToExplore.split("");
    wordsToVerify = wordsToVerify.split("");
    
    testWordToExplore = testWordToExplore.sort();
    wordsToVerify = wordsToVerify.sort();
    
    testWordToExplore = testWordToExplore.join("");
    wordsToVerify = wordsToVerify.join("");
    
    if(testWordToExplore === wordsToVerify){
      return wordsToVerify.indexOf;

    }
  }


/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    // :)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    let caracteres = words
    return caracteres.replace(/[aeiou]/gi, 'x');
}
console.log(lastVocalReplacer("compañeros"));
console.log(lastVocalReplacer("estudiantes"));
console.log(lastVocalReplacer("señores"));
console.log(lastVocalReplacer("amigos"));
console.log(lastVocalReplacer("graduandos"));
console.log(lastVocalReplacer("artistas"));
console.log(lastVocalReplacer("universitarios"));


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}