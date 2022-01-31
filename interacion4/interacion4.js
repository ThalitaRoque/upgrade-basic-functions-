/*
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:



const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}

*/
 const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    suma = 0;
    for (let i = 0; i < param.length; i++) {
        suma = suma + param[i];
        
    }
 return suma/param.length;
}

console.log(average(numbers)) 
