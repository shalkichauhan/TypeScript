type score= string|number



function ABC(n:score){

    if(typeof n === 'number'){

        return n+2;

    }else{
        return "shal"
    }

}
ABC(9)

const Arrr :number[]|string[]=[3,5,4]
const Arrrr:(number|string)[]=[4,"jaja"]


let seat : "right"| "left"|"center"

seat="center"

type Tuser=[string,number,boolean]//tuple
let myVari:Tuser=["dog",9,false]
myVari[2]=true