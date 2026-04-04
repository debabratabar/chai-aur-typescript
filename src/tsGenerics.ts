// simple code example 
//helping devs to create n


function wrapInArry<T>(item : T) : T[] { 
    if ( Array.isArray(item)){// type gurding
            return [...item]
    }

    return [item]
    
}


console.log(wrapInArry(['chaicode','yntp']));



function swap<A,B>( a : A , b : B) : [B , A] {
    return [b,a]

}


console.log(swap(1,2 ));




// real world example 



// example with partial , omit , pick  