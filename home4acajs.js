// first

// function foo(arr) {

//     for (var k of arr) {
//         if (typeof k == 'object') {
//             return foo(arr.flat())
//         }
//     }

//     return arr
// }

// console.log(foo([14, [1, [
//     [
//         [3],
//         [4, [54, 'sdfg', [
//             [],
//             [5]
//         ], 'oiyy']]
//     ], 1
// ], 0]]))



// second


// function foo(num) {
//     let sum = 0
//     if (num.toString().split('').length == 1) {
//         console.log(num)
//     } else {
//         num.toString().split('').forEach((val) => sum += +val)
//         return foo(sum)
//     }
// }

// console.log(foo(539))




// third

// function foo(arr, num) {
//     return (num == 0) ? arr : foo(arr.concat(arr.splice(0, 1)), --num)
// }

// console.log(foo([1, 2, 3, 4, 5, 6], 5))





// forth

// function foo(obj) {
//     let obj3 = new Map()

//     let arrvalues = [...new Set(Object.values(obj))]


//     for (var k of arrvalues) {
//         obj3.set(k, [])

//         for (var h in obj) {
//             if (obj[h] == k) {
//                 obj3.get(k).push(h)
//             }
//         }

//     }
//     return Object.fromEntries(obj3)
// }

// console.log(foo({ z: '1', a: '1', b: '2', n: '1', c: '2', h: '1', d: '2', e: '1', k: '3', po: '1' }))




// fivth


// first type


// function foo(arr) {
//     return arr.filter((val) => val.readStatus == true).sort(function(a, b) { return a.percent - b.percent });
// }

// console.log(foo([
//     { book: 'Catcher in the Rye', readStatus: true, percent: 40 },
//     { book: 'Animal Farm', readStatus: true, percent: 20 },
//     { book: 'Solaris', readStatus: false, percent: 90 },
//     { book: 'The Fall', readStatus: true, percent: 50 },
//     { book: 'White Nights', readStatus: false, percent: 60 },
//     { book: 'After Dark', readStatus: true, percent: 70 },


// ]))


// second type


// function foo(arr) {

//     let arr1 = []
//     let arr2 = []

//     let arr3 = new Map()


//     arr.filter((val, ind) => (val.readStatus) ? arr1.push(ind) : arr2.push(ind))

//     let arr5 = arr.filter((val) => val.readStatus).sort(function(a, b) { return a.percent - b.percent });

//     let arr4 = arr.filter((val) => !val.readStatus)

//     for (var i = 0; i < arr.length; i++) {
//         arr3.set(arr1[i], arr5[i])
//         arr3.set(arr2[i], arr4[i])
//     }

//     return Object.fromEntries(Object.entries(Object.fromEntries(arr3)).splice(0, arr.length))

// }

// console.log(foo([

//     { book: 'Catcher in the Rye', readStatus: true, percent: 40 },
//     { book: 'zzx', readStatus: false, percent: 60 },
//     { book: 'poiuyh', readStatus: true, percent: 100 },
//     { book: 'Solaris', readStatus: false, percent: 90 },
//     { book: 'Animal Farm', readStatus: true, percent: 20 },
//     { book: 'The Fall', readStatus: true, percent: 50 },
//     { book: 'White Nights', readStatus: false, percent: 60 },
//     { book: 'After Dark', readStatus: true, percent: 70 },
//     { book: 'hutr', readStatus: true, percent: 120 },
//     { book: 'Nights', readStatus: false, percent: 150 },
//     { book: 'Nigh', readStatus: false, percent: 200 },
//     { book: 'oioi', readStatus: true, percent: 55 },



// ]))