let restSpread = {

    restMethod(id:number, ...colors:string[]){
        console.log(id);
        console.log(colors);
    },

    callRestMethod(){
        let colors:string[] = ["red", "green"];
        this.restMethod(1, ...colors);
    },


    loopTest() {
        let colors:string[] = ["red", "green", "blue"];

        // FOR IN
        for(let index in colors){
            console.log(colors[index]);
            
            if(index == '1'){
                break;
            }
        }

        // FOR OF
        for(let color of colors){
            console.log(color);
        }

    }

};
export default restSpread;