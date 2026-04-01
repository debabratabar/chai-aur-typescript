//array declaration 

const chaiFlavours : string[] = ['masala' , 'aadrak']


const chaiFlavours2 : Array<string> = ['masala' , 'aadrak']


// array of  objects 

type chai = { 
    name : string ; 
    price : number
}

let chaiArray : chai[] = [
    {name : "masala" , price : 45 },
    {name : "masala" , price : 45 },
]



// readonly array 

let menu : readonly string[] = ['katchuri' , 'idli']

// menu.push('') // can't push as menu is readOnly


// we can also declare tuples below

let menu2 :  [string , number ] = ['katchuri' ,100  ]

let location :  [number , number ] = [38.25 ,100.65  ]




// enum decalration 

// default values is 0 , 1 , 2 
enum status {
    PENDING , COMPLETED , 'IN-PROGRESS'
}


const mystat = status.PENDING



// COMPLETED =1 101 ,and so on ....
enum order  {
    PENDING=100 , COMPLETED , 'IN-PROGRESS'
}


const ordStat = order.COMPLETED


console.log("============")
console.log(ordStat);




enum ChaiType  {
    MASALA = "masalaa" , 
    AADRAK = "aadrak"
}


const myChaai = ChaiType.MASALA

console.log(myChaai);




//gotcha cases 

let t : [string , number] = ['masala' , 40]

t.push(67) // this can break your code 










