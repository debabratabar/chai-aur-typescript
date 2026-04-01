/**
 * diff b/w type and interface 
 * 1. we usually use interface in class implements , as a class do implement only object type or 
 * intersection of object types , can't implement types like this ( line no. 24 )
 */

// type & interface working properly no issue

type  chaiorder = {
    type : string ; 
    price : number | string
}

class c1 implements chaiorder{ 
    type = 'masala' ; 
    price=  10

}


// in below example type fails when we implement from class , we 
// have to declare like line no 28 


type items = "cycle" | "bike" // literal types 


interface itemss { 
    itemName :  "cycle" | "bike" ;
    price ?: number // optional object 
}


class bike implements itemss {
        itemName: "cycle" | "bike" = 'cycle';
        price = 100;
}


// below exmaple also doesn't work 

type response = {ok : true} & { not_ok: false }

// class myRes implements response { 
//     ok : false 
// }




// readonly properties 


type config ={ 
    readonly appName : string
    version : string 
}


const android_cfg : config = {
    appName : 'chaicode' ,  
    version : '1.0'
 }

//  android_cfg.appName = 'chaicpde' // can't chnge the value of appname 2nd time 