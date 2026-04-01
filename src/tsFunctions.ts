// funtion parameter types declaration and return type declaration 


function add( a : number , b:number) : number{
    return a+b 
}



// when function doesn't return anything 


function printName(name : string):void { 
    console.log('My name' , name) 
}



// optional parameter 


function guessmyAge(age ?: number |undefined ): number| undefined { 
    return age 
}



function guessmyAge2(age : number = 17 ): number { 
    return age 
}

