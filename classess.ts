class student{
    name:string
    email:string
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
}

//////////////protected
class employee{


    constructor(
        protected name: string,
        public salary: number,
        ){
        this.name="shalki"
    }
}

///
class swimmer extends employee{
    get swimmingLesson():string{
        return employee.name
    }
}
const Alexender = new student("alex","alex@gmail.com")

const dhruv = new employee("dhruval",99999)


interface fish{
    colour:string,
    design:string
}

class sea implements fish {
    constructor(
        colour: string,
        design: string
    ) {
    }

}