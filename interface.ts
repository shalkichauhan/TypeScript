interface student{
    name:string,
    class:number,
    isPass?: boolean,
    isfail():string
}
//reopening of the interface
interface student{
    favColour:string
}
interface employee extends student{
    role:string
}

const jug:student ={
    name:"water",
    class:9,
    isfail:()=>{
        return "Fail"
    },
    favColour:"green"
}
