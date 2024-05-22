function isPalindrome(str:string):boolean{

    let i:number =0;
    let j:number = str.length-1;

    while(i!==j || i<j){

        if(!(str[i]===str[j])){ return false;}
        i++;
        j--;
    }

    return true;
}
isPalindrome("aglga")

