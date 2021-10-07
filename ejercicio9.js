let arr = [10, "20", 30, "40", 50]

const newFn = arr.map(item => {
    if(typeof item == 'number') {
        return item
    }
    else if (typeof item == 'string') {
        const newElements = parseInt(item);
        return newElements;
    }
})
console.log(newFn);