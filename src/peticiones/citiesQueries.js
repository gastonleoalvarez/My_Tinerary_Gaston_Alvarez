import axios from "axios";


export const getCities = async () => {

    try{
        const res = await axios.get('http://localhost:4000/api/cities')       
        return res.data.data;
        
    }catch(err){
        console.log("error", err)
        return []
    }
}

