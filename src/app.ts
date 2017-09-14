import {first_method, first_method1} from "./core/first/first";
import Student from "./core/second/Student";
import {defaultArgumentTest, optionArugmentTest, tempFatRefObj} from "./core/second/temp";


class Main {
    public static main():void{
        try{
            let sdata = tempFatRefObj.method4();
            console.log(sdata);
        }catch(err){
            console.error(err);
        }
    }
}


Main.main();


