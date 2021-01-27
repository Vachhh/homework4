// first exercise

let count = 0

function foo(num) {
    num = num.toString().split('')

    if (num.length == 1) {
        return (num[0] % 2 == 1 || num[0] == 0) ? true : false
    } else {
        num.splice(0, 1)
        count++
        return (num[count] % 2 == 0) ? false : foo(+num.join(''))
    }
}

console.log(foo(119111555383311))



// second


let count = 0

function foo(arr) {
    arr = arr.filter((val) => val >= 0)

    if (count == arr.length) {
        return (arr[0] || arr[0] == 0) ? arr[0] : -1
    } else {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[count]) {
                let t = arr[i]
                arr[i] = arr[count]
                arr[count] = t
            }
        }
        count++
        return foo(arr)
    }

}

console.log(foo([12, 11, 14, -45, -9, 8, 15, -5, -1, -78]))







// third


// first variant

function foo(arr) {

    return (arr.filter((val, ind, arra) => arra[ind] > arra[ind + 1]).length > 0) ? arr.indexOf(arr.filter((val, ind, arra) => arra[ind] > arra[ind + 1])[0]) + 1 : -1
}

console.log(foo([2, 12, 14, 15, 13, 48, 64]))



// second variant

let count = 0
let arr1 = []

function foo(arr) {

    if (count == 0) {
        arr1 = arr.map((val) => val)
    }

    if (arr[0] > arr[1]) {
        return arr1.indexOf(arr[1])
    } else {
        count++
        if (arr[0] <= arr[1]) {
            arr.splice(0, 1)
            return foo(arr)
        } else {
            return -1
        }
    }
}

console.log(foo([2, 12, 11, 14, 15, 48, 42, 64]))




// forth


function fibonacciCurrentItem(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return fibonacciCurrentItem(num - 2) + fibonacciCurrentItem(num - 1);
};

console.log(fibonacciCurrentItem(5));




// fivth

let count = 0

function foo(arr) {
    if (count == arr.length) {
        arr.splice(0, 1)
        return arr
    } else {


        count++

        return foo(arr)
    }
}

console.log(foo(['aqerr', 2, 'zxcv', 4, 2, 1, 6, 78, 'n', 0, 'au', 1]))