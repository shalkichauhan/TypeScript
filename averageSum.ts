// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average. There may be more than one pair that
// matches the average target.
/*
Write a function -> accepts the sorted array and a number
start a loop i from the front and one loop from the end
while(i<j)
if((arr[i]+arr[j])>2*x){
decrement j
}
if((ar[i]+arr[j])<2x){
increment i
}
if((arr[i]+arr[j])===2x){
return (arr[i],arr[j])}
[2,4,5,10] 2
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
*/

function sumAverage(arr:Array<number>,x:number):Array<number>{
    let i:number=0;
    let j:number=arr.length-1;
    //for(let i =0;i<arr.length;i++)
    while(i<j){

        if((arr[i]+arr[j])>2*x){
             j--;
        }
        if((arr[i]+arr[j])<2*x){
             i++;
        }
        if((arr[i]+arr[j])===2*x){
            break

    }


    }

    let vari : Array<number>=[arr[i],arr[j]];
    return vari;
}
console.log( sumAverage([1,3,3,5,6,7,10,12,19],8))