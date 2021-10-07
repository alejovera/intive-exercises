var bar = 'bar'
if (bar % 2) {
    console.log('par');
} else {
    var bar = 'bar'
    var splitString = bar.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    
    var subcadena = joinArray.slice(2)
    var cadena3 = subcadena + bar.charAt(1).toUpperCase()+ bar.slice(2)
}
console.log(cadena3);