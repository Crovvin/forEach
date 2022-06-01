function doubleValues(arr){
    let output = [];
    arr.forEach(function(values){
        output.push(values * 2);
    });
    return output;
}

function onlyEvenValues(arr){
    let output = [];
    arr.forEach(function(values){
        if(values % 2 === 0) {
            output.push(values);
        }
    })
    return output;
}

function showFirstAndLast(arr){
    let output = [];
    arr.forEach(function(values){
        let lastLetter = values.length - 1
        output.push(values[0] + values[lastLetter]);
    })
    return output;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(values){values[key] = value});
    return arr;
}

function vowelCount(str){
   let output = {};
   let vowels = "aeiou";
   str = str.toLowerCase();
   let splittedString = str.split("");
   splittedString.forEach(function(value) {
       if(vowels.indexOf(value) !== -1){
           if(output[value]) {
               output[value] = output[value] + 1;
           } else {
               output[value] = 1;
           }
       }
   })
   return output;
}

function doubleValuesWithMap(arr) {
    return arr.map(function(values){return values * 2;});
}

function valTimesIndex(arr){
    return arr.map(function(values, index){return values * index});
}

function extractKey(arr, key){
    return arr.map(function(values){return values[key];});
}

function extractFullName(arr){
    return arr.map(function(values) {return values.first + " " + values.last});
}

function filterByValue(arr, key) {
    return arr.filter(function(values){return values[key] !== undefined});
}

function find(arr, searchValue) {
    return arr.filter(function(values){return values === searchValue})[0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(values){return values[key] === searchValue})[0];
}

function removeVowels(str) {
    let vowels = "aeiou";
    str = str.toLowerCase();
    str = str.split("");
    str = str.filter(function(value) {return vowels.indexOf(value) === -1;})
    return str.join("");
}

function doubleOddNumbers(arr) {
    let output = [];
    output = arr.filter(function(values) {return values % 2 !== 0;})
    return output.map(function(values) {return values * 2})
}
