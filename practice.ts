type apple={
    colour:string,
    shape:string
}

type fruit={
    quantity : number,
    quality : boolean
}

type banana = apple & fruit & {
    weight:number
}


const fruitSalad:banana={
    colour:"Pink",
    shape:"round",
    quantity:9,
    quality:true,
    weight:39


}