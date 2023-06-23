/* Ejercicio 1: */

function extractValues(data) {
  return Object.values(data);
}

/* Ejercicio 2: */

function arrayToLengthCounters(array) {
  var result = {};
  for (var x = 0; i < array.length; x++) {
    var element = array[i];
    result[element] = array.length;
  }
  return result;
}

/* Ejercicio 3: */

function findKeysInCommon(objeto1, objeto2) {
  var keys1 = Object.keys(objeto1); keys2 = Object.keys(objeto2); commonKeys = [];
  for (var i = 0; i < keys1.length; i++) {
    var key = keys1[i];
    if (keys2.includes(key)) {
      commonKeys.push(key);
    }
  }
  return commonKeys;
}

// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log(extractValues({a: 1, b: 2, c: 3}));
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log(findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}));
}

main();
