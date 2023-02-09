function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// exports.add = add; // this exports an object with the 'add' key
// module.exports = add; // this exports the function directly (Recommended)

// If you need to export multiple functions, create an object and export it

module.exports = {
    add,
    subtract
}