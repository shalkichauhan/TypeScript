function addTwo(num:string){

    return num+num;
}

addTwo('3')

function getUpper(val:string){

    return val.toUpperCase()
}

//to throw a new error and handle the error
function handleError(error:string):never{
    throw new Error(error)

}


getUpper("Shalki")

export type Name={
    firstName: string,
    MiddleName?: string,
    lastName:string
}
function  userDetails(name:string  ,age: number,password:number, isPaid:boolean=false):Name{

    return {firstName:"shalki", lastName:"Shalki"}
}

userDetails("Ankit",30,123456)



const myFun = (num: number):number=>{
    return 9

}

myFun(3)



let heros = ["Thor"," Spiderman", "Ironman","superman", "Loki"]

heros.map((value:string)=>{return `hero is ${value}`})










export{}