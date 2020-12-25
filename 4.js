let numbers =[-2, 2, -5];
let swapped = true;
do{
    swapped=false;
    for (let i=0; i<numbers.length-1;i++){
        if (numbers[i]>numbers[i+1]){
            let temp = numbers[i];
            numbers[i]=numbers[i+1];
            numbers[i+1]=temp;
            swapped=true; 
        }
    }
} while(swapped);
console.log(numbers);