function Person(fullName, height, weight) {
    this.fullName = fullName;
    this.height = height;
    this.weight = weight;

    this.calcBMI = function() {
        return this.weight / (this.height * this.height);
    };
}

var person1 = new Person("Nguyen Tuan Anh", 1.75, 58);
var person2 = new Person("Nguyen Van Phuoc", 1.69, 63);

var bmiPerson1 = person1.calcBMI();
var bmiPerson2 = person2.calcBMI();

console.log(`${person1.fullName}'s BMI: ${bmiPerson1}`)
console.log(`${person2.fullName}'s BMI: ${bmiPerson2}`)

if(bmiPerson1 > bmiPerson2) {
    console.log(`${person1.fullName} has a higher BMI than ${person2.fullName}`);
}
else if(bmiPerson1 < bmiPerson2) {
    console.log(`${person2.fullName} has a higher BMI than ${person1.fullName}`);
}
else {
    console.log(`${person1.fullName} and ${person2.fullName} has the same BMI`);
}