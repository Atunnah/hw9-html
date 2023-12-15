function onePlus(digit) {
    let digitString = digit.toString();
    let digitArray = digitString.split('').map(Number)
    for(let i = digitArray.length - 1; i >= 0; i--) {
        if(digitArray[i] < 9) {
            digitArray[i]++;
            return digitArray;
        }
        else {
            digitArray[i] = 0;
        }
    }
    digitArray.unshift(1);
    return digitArray;
}

var digit1 = 1234;
var digit2 = 999;

console.log(`Ket qua 1: ${onePlus(digit1)}`);
console.log(`Ket qua 2: ${onePlus(digit2)}`);