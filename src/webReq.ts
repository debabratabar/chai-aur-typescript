import axios  from "axios" ;
import type { AxiosResponse } from "axios";


interface company { 
    name : string , 
    catchPhrase : string , 
    bs : string 
}

interface User { 
    "id" : number , 
    "name" : string, 
    username  : string ,
    email : string ,
    address : object , 
    phone : string , 
    website : string , 
    company : company

}

interface respData { 
    status : number ;
    data : object
}



async function apiRequest ( url : string ) : Promise<respData | undefined>  {
    
    try { 

        const resp : AxiosResponse<User[]> = await axios.get(url)

        const successData : respData = { 
            status : resp.status , 
            data : resp.data
        }

        return successData 
        
    }catch(error : any ){

        if ( axios.isAxiosError(error)){
        console.log(error.message);
        }
        
        
    }
    



}

const url = 'https://jsonplaceholder.typicode.com/users'

console.log(await apiRequest(url));



// axios.get()
