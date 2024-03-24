import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authQueries from "../peticiones/authQueries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import alerts from "../utils/alerts"
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction";

function Login(){

const [dataForm, setDataForm] = useState({
    email:"",
    password:"",
});

const navigate = useNavigate();

const dispatch = useDispatch()

function handleInput(e){
    const name = e.target.name;
    const value = e.target.value;
    const aux = {...dataForm};
    aux[name] = value;
    setDataForm(aux);
}


function handleSubmit(e){
    e.preventDefault();
    const aux = {...dataForm};
    for(const key in aux){
        if(!aux[key]) delete aux[key];
    }
    authQueries.login(aux).then((response) =>{
        if(response.status == 200){
            dispatch(login(response.data));
        alerts.success("Welcome");
        navigate("/")
        }else{
           alerts.error(response.statusMsg); 
        }
    });
}



    return(
        <>
        
        <main className="flex flex-col justify-center grow pt-20 items-center ">
            <h2 className="text-3xl font-bold mb-10">Sign In</h2>
            <div className="border w-7/12 items-center mb-40 bg-gray-800 ">
                <form 
                onSubmit={handleSubmit}
                onInput={handleInput}
                className="text-black flex flex-col gap-5 items-center pt-10 pb-10 bg-gray-800">
                    
     
                   
                    <input className="w-10/12 h-10 border border-black rounded" type="text" placeholder="Email" name="email"/>
                    <input className="w-10/12 h-10 border border-black rounded" type="password" placeholder="Password" name="password"/>
                   
                    <input type="submit" className="border border-black rounded w-10/12 h-10 bg-white" value="send"/>
                </form>
                <Link className="flex border border-black rounded w-10/12 h-10 ml-20 justify-center items-center bg-white mb-10" to="/sign">Sign Up</Link>
            </div>
        </main>
        
        </>
    )
}

export default Login