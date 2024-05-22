

type myType = {
    isValid: boolean;
    name: string;
    age?: number

}

type myType2 ={
    id :number;
    signature:string,
    name:number

}
function funTwo(name: myType| myType2){
if(typeof name ==="string"){

}

    return ({
    isValid: true,
    name:'ship',
    signature:'shalki_chauhan'
})

}

