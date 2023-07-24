function add(a, b) { 
    return a + b;
}
function sub(a, b) { 
    return a - b;
}

function multi(a,b) { 
    let result = 0;

    for (let i = 1; i <= Math.abs(b); i++) { 
        result = add(result, a);
    }
    return result;
}
function div(a, b) {
    let result = 0;

    for (let i = 1; i <= Math.abs(b); i++) {
        result = add(result, a);
    }
    return result;
}
console.log(multi(4, 2));