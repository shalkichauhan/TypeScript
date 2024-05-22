function userCheck(details:object): { name: boolean; age: number } {

    console.log(details)
    // const sum:number = 2+4
    return {name:false,age:39}
}

// @ts-ignore
const user = {
    name: 'shalki',
    age: 32
}
userCheck(user)

//////////////////////////////////////////////////





