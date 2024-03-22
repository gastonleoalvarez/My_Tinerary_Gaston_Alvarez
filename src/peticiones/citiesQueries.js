import axios from "axios";


export const getCities = async () => {

    try{
        const res = await axios.get('http://localhost:4000/api/cities')       
        return res.data.data;
        
    }catch(err){
        return []
    }
}


export const getCitiesById = async (_id) => {
 try{
    const resp = await axios.get('http://localhost:4000/api/cities/' + _id)
    return resp.data.data;

 }catch(error){
    return console.log(error)
 }

}