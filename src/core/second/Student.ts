
class Student {
    private id:number;
    private name:string;

    constructor(){
        this.id = 1;
        this.name = "Affixus";
    }

    get_name(){
        return this.name;
    }
}


export default Student;
