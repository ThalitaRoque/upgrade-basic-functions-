/* **Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan 
los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

 */
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {    
    //recorremos cada elemento del array
    for (let i = 0; i < param.length; i++) {
        //buscamos los repetidos de cada elemento
        for (let j = 0; j < param.length; j++) {
            //si el elemento j es igual al elemento i siendo distintos lo borro
            if(i!=j && param[i]===param[j]){
                param.splice(j,1);
            }            
        }                
    }
}
console.log(duplicates);
removeDuplicates(duplicates)
console.log(duplicates);



