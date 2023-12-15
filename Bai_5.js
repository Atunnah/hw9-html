function moveZeros(arr) {
    let nonZeroArray = arr.filter(element => element !== 0);
    let zeroArray = arr.filter(element => element == 0);
    let resultArray = nonZeroArray.concat(zeroArray);
    return resultArray;
}

const arr1 = [0, 1, 0, 3, 12];
const resulttt = moveZeros(arr1);
console.log(`Mang can tim: ${resulttt}`);