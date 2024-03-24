import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authQueries from "../peticiones/authQueries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import alerts from "../utils/alerts";

function Sign(){

const [dataForm, setDataForm] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
});
const navigate = useNavigate()

function handleInput(e){
    const name = e.target.name;
    const value = e.target.value;
    const aux = {...dataForm};
    aux[name] = value;
    setDataForm(aux);
}

/*validacion de datos*/


function handleSubmit(e){
    e.preventDefault();
    const aux = {...dataForm};
    for(const key in aux){
        if(!aux[key]) delete aux[key];
    }
    authQueries.register(aux).then((response) =>{
        if(response.status == 201){
        alerts.success('account created')
        navigate("/login")
        }else{
           alerts.error(response.statusMsg); 
        }
    });
}



    return(
        <>
        
        <main className="flex flex-col justify-center grow pt-20 items-center mb-100">
            <h2 className="text-3xl font-bold mb-10">Sign Up</h2>
            <div className="border w-7/12 items-center bg-gray-800 pb-10 mb-40">
                <form 
                onSubmit={handleSubmit}
                onInput={handleInput}
                className="text-black flex flex-col gap-5 items-center pt-10 pb-10 bg-gray-800">
                    
     
                    <input className="w-10/12 h-10 border border-black rounded" type="text" placeholder="First Name" name="first_name"/>
                    <input className="w-10/12 h-10 border border-black rounded" type="text" placeholder="Last Name" name="last_name"/>
                    <input className="w-10/12 h-10 border border-black rounded" type="text" placeholder="Email" name="email"/>
                    <input className="w-10/12 h-10 border border-black rounded" type="password" placeholder="Password" name="password"/>
                    <select className="w-10/12 h-10 border border-black rounded" name="country">
                        <option value="Argentina ">Argentina</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Mexico">Mexico</option>
                        <option value="United States">United States</option>
                        <option value="Spain">Spain</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                    <input type="submit" className="border border-black rounded w-10/12 h-10 bg-white" value="send"/>
                </form>
                <Link className="flex border border-black rounded w-10/12 h-10 ml-20 justify-center items-center bg-white" to="/login">SIGN IN</Link>
            </div>
           
        </main>
        
        </>
        
    )
}

export default Sign