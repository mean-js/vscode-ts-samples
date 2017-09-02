import {first_method, first_method1} from "./core/first/first";
import Student from "./core/second/Student";


class Main {
    public static main():void{
        try{
            first_method();
            first_method1();

            let sref = new Student();
            console.log(sref.get_name());
        }catch(err){
            console.error(err);
        }
    }
}


Main.main();


