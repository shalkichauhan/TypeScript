/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
// price =[4,7,5,3,8]
// max sum
//run two loops
//i (let i=0,i<arr.lenght-1,i++)
//j  (let j=i+1,j<arr.lenght-1,j++)
// if(arr[i]-arr[j] >max){
// then max = arr[i]-arr[j]
// else do nothing
//}return max
function profit(arr) {
    var max = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[i] - arr[j]) > max) {
                max = arr[i] - arr[j];
            }
        }
    }
    return max;
}
console.log(profit([4, 7, 5, 3, 8]));
