const { expect } = require("@jest/globals"); 

var str = 'javascript';
var array = ["foo", "bar", "baz", "qux", "origin"];

function upperFirst(str) {
  var cadena1 = str.charAt(0).toUpperCase() + str.slice(1);
  return cadena1;
}
function upperLast(str) {
    let pos = str.replace(str[str.length - 1], str[str.length - 1].toUpperCase())
    return pos;
}
const upperMiddle = (bar) => {
    if (bar % 2) {
        console.log('par');
        // return bar;
    } else {
        var splitString = bar.split(""); 
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join(""); 
        
        console.log(joinArray);
    
        var subcadena = joinArray.slice(2)
        var cadena3 = subcadena + bar.charAt(1).toUpperCase()+ bar.slice(2)
        return cadena3;
    }
}
const findBaz = (array) => {
    return array.find(element => element == 'baz')
    
}


function emptyArray(arr2) {
    return arr2.length = 0
    // return arr
}


test('upper the first letter', () => { 
  expect(upperFirst("str")).toBe("Str"); 
}); 

test('upper the last letter', () => { 
  expect(upperLast("str")).toBe("stR"); 
}); 

test('upper the middle letter', () => { 
  expect(upperMiddle("bar")).toBe("bAr"); 
}); 

test('find the element baz', () => { 
  expect(findBaz(array)).toBe("baz"); 
}); 

test('empty array', () => { 
    expect(emptyArray(array)).toBe(0); 
}); 
  

