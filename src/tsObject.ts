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

