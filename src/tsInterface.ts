// simple example 


interface chai { 
    type : string ; 
    price : number ; 
    addElaichi ?: boolean
}


let masalaTea : chai ={
    type : 'masala' , 
    price : 40 ,
    addElaichi : false
}


console.log(masalaTea);





// use interface  adding functions inside 
// we can also add only the definition without the body in interface 

interface myShop {

    chai(name : string ) : string ; 
    coffee(name : string) : string

}


const chaiTapri : myShop = { 
        chai(name : string) { 
            return `chai for ${name} `
        },

        coffee(name : string) { 
            return `coffee for ${name} `
        }
}


console.log(chaiTapri.chai("rohan"));




// use interface for index signature 
// we can add the type structure of chai ingrediants like this 



interface chaiIngredients { 
    [ingre:string] :number
}


const masalaChai : chaiIngredients = { 
    "chaiPatti" : 100 ,
    "water" : 100,
    "milk" : 30,
    "sugar" : 2
}


console.log(masalaChai);


// interface merge  , 

interface tonightParty { 
    drinks : string[]
}

interface tonightParty { 
    foods : string[]
}


const birthdayParty : tonightParty = { 
    drinks  : ['budwiser' , 'carlberg'] ,
    foods : ['chichken pakoda'  , 'mutton korma' , ]

}


// we have to implement all the property of the iterface , kind of merging of all property 


// extends multiple interface 



interface drinkParty { 
    drinks : string[]
}

interface foodParty { 
    foods : string[]
}


interface birthdayParty extends drinkParty , foodParty   { 
    drinks  : ['budwiser' , 'carlberg'] ,
    foods : ['chichken pakoda'  , 'mutton korma' , ]

}

