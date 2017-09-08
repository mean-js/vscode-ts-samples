import {first_method, first_method1} from "./core/first/first";
import Student from "./core/second/Student";
import {defaultArgumentTest, optionArugmentTest} from "./core/second/temp";


class Main {
    public static main():void{
        try{
            first_method();
            first_method1();

            let sref = new Student();
            sref.bar = true;
            sref.username = "Affixus Systems";
            console.log(sref);

            let str1 = optionArugmentTest("Hello");
            console.log(str1);

            let str2 = defaultArgumentTest("Hello")
            console.log(str2);
        }catch(err){
            console.error(err);
        }
    }
}


Main.main();


