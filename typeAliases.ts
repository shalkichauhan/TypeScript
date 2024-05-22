type point={
   readonly x: string;
    y:string;
    z?:number
};

function getPoints(pt:point):point{

    return ({x:pt.x,y:pt.y,z:pt.z})


}
console.log(getPoints({x:"shalki",y:"ankit",z:100}))

const vari:point ={
    x: "Earth",
    y:"Sun"

}
vari.y="moon"