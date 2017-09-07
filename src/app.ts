import {first_method, first_method1} from "./core/first/first";
import Student from "./core/second/Student";


class Main {
    public static main():void{
        try{
            first_method();
            first_method1();

            let sref = new Student();
            sref.bar = true;
            sref.username = "Affixus Systems"

            console.log(sref);
        }catch(err){
            console.error(err);
        }
    }
}


Main.main();


