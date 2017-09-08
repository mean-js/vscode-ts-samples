
export function optionArugmentTest(firstName:string, lastName?:string):string{
    lastName = lastName || "";
    let output = firstName + " - " + lastName;
    return output;
};


export function defaultArgumentTest(firstName:string, lastName:string="Affixus Systems Pvt Ltd"):string{
    return firstName + " - " + lastName;
};


let PI = 3.14;

export default PI;

export let radius = 1234.00;

export function tempFunction1() {

};


let tempFunction2 = function() {

};
export { tempFunction2 };



