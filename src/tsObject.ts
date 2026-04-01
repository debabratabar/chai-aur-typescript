// object types declaration and assign values


let chai : { 
    name : string ; 
    price : number ; 
    isHot : boolean ;
} = { 
    name : 'masala' , 
    price : 43 , 
    isHot : true
}


// another way to declare types 


type chaiType = { 
    name : string ; 
    price : number ; 
    isHot : boolean ;
    ingrediants : string[]
} 


let myChai : chaiType = { 
    name : 'masala' , 
    price : 43 , 
    isHot : true,
    ingrediants : ['water' , 'patti']
}


// structured typing vs duck typing 
// if you have the bare minimum properties you can assign a object to another object 


let cup :{ size : string  }

let bigCup = { size : 'large' , color : 'white'}

cup = bigCup //its ok as the bare min. key is present in bigcup 





// use datatypes to create new types 


type name = { firstName : string , lastname : string }
type address = { colony : number , pin : number}


type User = { 
    name : name,
    address : address 
}

// using name & address types to create User type 




// partial , required   , pick , omit 

type todays_chai = {
    name : string ;
    curSize : string ;
    isHot  : boolean 
}


let myChaiCup : Partial<todays_chai> = {
    

}

// partial we use to get partil values of an objec t, it can be empty also 


type todays_coffee = {
    name : string ;
    cupSize ?: string ;
    isHot  ?: boolean 
}


let myCoffeeCup : Required<todays_coffee> = {
    name: "latte" , 
    cupSize : "small",
    isHot : false
}



//pick we used to pick specific keys 




type todays_bevreze = {
    name : string ;
    cupSize : string ;
    nature : string
}


let mydrink : Pick<todays_bevreze , "name" | "nature" > = {
    name : 'protienShake',
    nature : 'cold' , 

}




// the omit keyword , 


type todays_bevreze2 = {
    name : string ;
    cupSize : string ;
    nature : string
}


let mydrink2 : Omit<todays_bevreze2 , "nature" > = {
    name : 'protienShake',
    cupSize : "medium"
}

console.log(mydrink2);



