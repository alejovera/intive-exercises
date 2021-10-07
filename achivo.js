var str = 'javascript';

var cadena1 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(cadena1);

let pos = str.replace(str[str.length - 1], str[str.length - 1].toUpperCase())
console.log(pos);

var bar = 'bar'
if (bar % 2) {
    console.log('par');
} else {
    var bar = 'bar'
    var splitString = bar.split(""); 
    console.log(splitString);
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    
    console.log(joinArray);

    var subcadena = joinArray.slice(2)
    var cadena3 = subcadena + bar.charAt(1).toUpperCase()+ bar.slice(2)
}
console.log(cadena3);

var arr = ["foo", "bar", "baz", "qux", "origin"] 
var cadena4 = arr.find(element => element == 'baz')
console.log(cadena4);

arr.splice(0, arr.length)
console.log(arr);

// var string = 'origin'

// let counter = 0;
// var arraySplitted = string.split('')

// while (counter <= 6) {
//     let newString = arraySplitted.splice(0, 1);
//     counter = counter + 3;
//     console.log(newString);
// }