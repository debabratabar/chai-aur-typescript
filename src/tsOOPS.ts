// simple class declaration 


// class properties without intializing gives you error 
// class Chai {
//     name : string  ; 
//     price :  number  ; 
// }




class Chai {
    name : string  ; 
    price :  number  ; 

    constructor(name : string , price : number ){
        this.name = name 
        this.price = price
    }
}


const c = new Chai("masalaa" , 43) 

console.log(`${c.name} - ${c.price}`);

c.name = 'masala'// we can also change the values 
c.price =10  

console.log(`${c.name} - ${c.price}`);






// public , private , protected keyword demonstration 

/**
 * public you can access from anywhere 
 * private you can access only from inside the class
 * protected you can access from child class and inside the class 
 */



class ChaiMaking { 

    public chaipatti : number ;
    private  secretIng : string  ; // you can't access private from outside of the class

    protected Name  :  string = 'chaiCanteen';



    constructor ( chaipatti : number , secretIng : string){
        this.chaipatti = chaipatti 
        this.secretIng =  secretIng

    }


    getMeThis(){
        console.log(this);
        
    }


    secretMasala(){
        return this.secretIng
    }
}



class CanteenChai extends ChaiMaking{

    // constructor(){

    // }
    getMeSecret() {
        return this.Name
    }
}


const chai = new ChaiMaking ( 10 , 'elachi')

chai.getMeThis()

console.log(chai.secretMasala);

console.log(new CanteenChai(10 , 'elachi').getMeSecret())




// static class properties 

// static vatiables we can access dirently from class , as its a class property 

class MyChaiCorner {
    static name : string = 'MyChaiCorner'
}


console.log(MyChaiCorner.name);




// abstract class concept , no body 


abstract class Drink {
    abstract make() : void 
}


class lassi extends Drink{
    make(): void {
        console.log("lassi Making ");
        
    }
}


new lassi().make()




//class composition 

// using  differert class composition into diff. class 



class Heater{
    heat(drink : string ){
        return `${drink} making `
    }
}


class chaiMaker {
    public heater : Heater ; 
    public drink : string ;

    constructor(heater : Heater ,  drink : string){
        this.heater = heater
        this.drink = drink
    }

    make(){
       return  this.heater.heat(this.drink)
    }
}



console.log( new chaiMaker(new Heater(),'chai').make());



