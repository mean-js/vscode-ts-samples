
class Student {
    private id:number;
    private name:string;
    private _bar:boolean = false;
    
    constructor(){
        
    }

    get bar():boolean {
        return this._bar;
    }
    set bar(theBar:boolean) {
        this._bar = theBar;
    }

    set username(name:string){
        this.name
    }
    
    area():string{
        return this.name;
    }
}


export default Student;
