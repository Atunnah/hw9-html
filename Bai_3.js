function findIndex(nums, target) {
    const numMap = {};
    for(let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if(comp in numMap) {
            return [numMap[comp], i];
        }
        numMap[nums[i]] = i;
    }
}

var nums = [3, 2, 4];
var target = 7;
var result = findIndex(nums, target);
console.log(`Vi tri cac so can tim: ${result}`);