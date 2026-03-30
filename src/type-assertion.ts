

let chaiCup : any = '42'

// forceful type assertion 
console.log((chaiCup as string).charAt(4))

// custom type declare 
type res = {
    status : number ;
    message : string
}

let responseString  = '{"status" : 400}'


//below process fails the typescript behavior it doesn't give error for having only status 

// let responseJson : res = JSON.parse(responseString) 
let responseJson = JSON.parse(responseString)  as res 



// console.log( responseJson)

console.log(responseJson.message);


// diff b/w any & unknown key words 


let marks : any = '45'

marks = 'full'
marks = true

// we can assign any value anytime in any keyword 


let chaiRecipe : unknown = '45'

chaiRecipe = 'full'
chaiRecipe = true


if ( typeof chaiRecipe == 'string'){
    console.log(chaiRecipe.length);
    
}


// We can asign value to any and unknown datatype . but to work with  unknown type we must check type first 




// never datatype , when a variable value is set to never exist 


type Color = 'black' | 'blue'


function findColor(color : Color   ):void {

if ( color === 'black'){ 
    color;
        console.log('color is black');

}
 if ( color === 'blue'){
        color ; 
        console.log('color is blue ');
}

// technically we will not come in this code ever as we can't give any input other than "black" & "Blue "
color ;
console.log(typeof color );

}


findColor('black')