/*Napisz funkcje, w których wykorzystasz pętle for lub while w celu odwzorowania podanych niżej metod tablicowych:
.forEach
.map
.entries
.filter
.reduce
.every
.some
*/

// (element, index, refArray) =>


/// forEachFn
let arr = [];
arr.forEach(el => console.log(el));
const forEachFn = (array, callback) => {
    if (!Array.isArray(array)) {
        throw 'Is not array'
    }
    if (!array.length > 0) {
        throw 'Array lenght should be higher than 0'
    }
    for (let arr of array) {
        callback(arr);
    }
};

console.log("forEachFn");
forEachFn(arr, function (text) {
    console.log(text);
});


// mapFn
const mapFn = (array, callback) => {
    if (!Array.isArray(array)) {
        throw 'Is not array'
    }
    if (!array.length > 0) {
        throw 'Array lenght should be higher than 0'
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;

};
console.log("mapFn");
console.log(mapFn(arr, function (element) {
    return element * 2;
}));


// symbol iterator
// array [index, element]

//entriesFn

const entriesFn = (array) => {

    if (!Array.isArray(array)) {
        throw 'Is not array'
    }
    if (!array.length > 0) {
        throw 'Array lenght should be higher than 0'
    }
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push([i, array[i]])
    }
    return arr;
};
console.log("entriesFn");
entriesFn(arr)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const filterFn = (array, callback) => {
    let result = [];

    if (!Array.isArray(array)) {
        throw 'Is not array'
    }
    if (!array.length > 0) {
        throw 'Array lenght should be higher than 0'
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i])
        }
    }

    return result;
};

console.log("filterFn")
console.log(filterFn(arr, function (value) {
    if (value > 2) return true;
    else return false;

}))

// reduceFn

const reduceFn = (array, callback) => {

    if (!Array.isArray(array)) {
        throw 'It is not array'
    }
    let temp = [...array];
    for (let i = 0; i < array.length; i++) {
        console.log(callback(temp));
    }
};

console.log("reduceFn")
console.log(reduceFn(array, function (value) {
    return value.shift()
}))

//everyFn

const everyFn = (array, callback) => {
    if (!Array.isArray(array)) {
        throw 'Is not array'
    }

    let result = true;

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            result = false;
            break;
        }
    }
    return result;
}

console.log(everyFn(array, function (value) {
    if (value < 9) {
        return true
    }
    else { return false }
}))

//someFn
const someFn = (array, callback) => {
    if (!Array.isArray(array)) {
        throw 'Is not array'
    }
    let bool = false;
    for (let arr of array) {
        if (callback(arr)) {
            bool = true
        }
    }
    return bool;
};
console.log("someFn")

console.log(someFn(arr, function (element) {
    if (element > 5) {
        return true;
    }
}))









