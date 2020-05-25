//promise version:

// slowMath.add(6, 2).then(function(res) {
//     console.log(`add result, should be 8: ${res}`);
//     return slowMath.multiply(res, 2);
// }).then(function(res) {
//     console.log(`multiply result, should be 16: ${res}`);
//     return slowMath.divide(res, 4);
// }).then(function(res) {
//     console.log(`divide result, should be 4: ${res}`);
//     return slowMath.subtract(res, 3);
// }).then(function(res) {
//     console.log(`subtract result, should be 1: ${res}`);
//     return slowMath.add(res, 98);
// }).then(function(res) {
//     console.log(`add result 2, should be 99: ${res}`);
//     return slowMath.remainder(res, 2);
// }).then(function(res) {
//     console.log(`remainder result, should be 1: ${res}`);
//     return slowMath.multiply(res, 50);
// }).then(function(res) {
//     console.log(`multiply result 2, should be 50: ${res}`);
//     return slowMath.remainder(res, 40);
// }).then(function(res) {
//     console.log(`remainder result 2, should 10: ${res}`);
//     return slowMath.add(res, 32);
// }).then(function(res) {
//     console.log(`add result 3, should be 42: ${res}`);
//     console.log(`the final result is ${res}`);
// }).catch(function(err) {
//     console.log(err);
// });

//async/await version:

async function doMath() {
    try {
        let val = await slowMath.add(6, 2);
        console.log(`add result, should be 8: ${val}`);
        val = await slowMath.multiply(val, 2);
        console.log(`multiply result, should be 16: ${val}`);
        val = await slowMath.divide(val, 4);
        console.log(`divide result, should be 4: ${val}`);
        val = await slowMath.subtract(val, 3);
        console.log(`subtract result, should be 1: ${val}`);
        val = await slowMath.add(val, 98);
        console.log(`add result 2, should be 99: ${val}`);
        val = await slowMath.remainder(val, 2);
        console.log(`remainder result, should be 1: ${val}`);
        val = await slowMath.multiply(val, 50);
        console.log(`multiply result 2, should be 50: ${val}`);
        val = await slowMath.remainder(val, 40);
        console.log(`remainder result 2, should 10: ${val}`);
        val = await slowMath.add(val, 32);
        console.log(`add result 3, should be 42: ${val}`);
        console.log(`the final result is ${val}`);
    } catch (e) {
        console.log(e);
    } 
}

doMath();