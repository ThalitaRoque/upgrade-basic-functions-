/*
**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

*/
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param, palabra) {  
    //contador de repeticiones
    let nRepeticiones= 0;
    //i = indice para recorrer el array
    //param = array que contiene todas las palabras
    for (let i = 0; i < param.length; i++) {
        //si la palabra que obtenemos con el indice en cada iteracion
        //es igual en contenido y tipo que la plabra que recibimos como parametro
        //incrementamos el contador de repeticiones en 1
        if(param[i]===palabra)      
          nRepeticiones++;
    }
    //devolvemos el valor del numero de repeticiones que una palabra dada existe en el array param
    return nRepeticiones;
  }
  
  //for para recorrer cada una de las palabras del array.. por cada una d ellas haremos una llamada
  //a la funcion repetarCounter pasandole como parametro el array de palabras y la palabra en cuestion
  //la primera llamada.. enviara como parametros => countersWord, code
  //la segunda llamada.. enviara como parametros => countersWord, repeat
  //y asi sucesivamente..
  //lo que devuelve en cada llamda.. osea, el numero de repeticiones lo sacamos por el console.log junto con la palabra
  //dando como resultado filas de este tipo..
  //code: 4
  //repeat: 1
  //...
  for(let i= 0; i< counterWords.length; i++)
      console.log(counterWords[i]+": "+repeatCounter(counterWords, counterWords[i]));
  
  