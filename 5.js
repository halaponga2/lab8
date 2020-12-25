let numbers = [2,-1,0,-5,-4];
let max = numbers[0];
for (let i=1;i<numbers.length;i++){
    if (max<numbers[i]){
        max=numbers[i];
    }
}
console.log(numbers);
console.log(max);