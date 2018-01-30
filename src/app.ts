import {first_method, first_method1} from "./core/first/first";
import Student from "./core/second/Student";
import {defaultArgumentTest, optionArugmentTest, tempFatRefObj} from "./core/second/temp";
import obj_literal from "./core/second/temp_object_literal";
import restSpread from "./core/second/rest.spread";

class Main {
    public static main():void{
        try{
            
            restSpread.loopTest();

        }catch(err){
            console.error(err);
        }
    }
}


Main.main();


