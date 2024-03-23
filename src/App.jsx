import Cities from "./pages/Cities";
import  Home  from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SingleCity from "./pages/SingleCity"
import LayoutMain from "./pages/LayoutMain";
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import Sign from "./pages/SignUp";
import Login from "./pages/Login";
import { useEffect } from "react";
import authQueries from "./peticiones/authQueries";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "./redux/actions/userAction";
import alerts from "./utils/alerts"

function App() {

  const dispatch = useDispatch();
  useEffect(() =>{
    authQueries.loginWithToken().then((res) =>{
      if(res.status ==200){
        dispatch(login(res.data));
        alerts.success("welcome")
      }
    });
  }, []);
  
  return (
    
     <BrowserRouter>
     <LayoutMain> 
      <Routes>

        <Route path="/" element={<Home></Home>}/>
        <Route path="/cities" element={<Cities></Cities>}/>
        <Route path="/cities/:_id" element={<SingleCity></SingleCity>}/>
        <Route path="/sign" element={<Sign></Sign>}/>                 
        <Route path="/login" element={<Login></Login>}/>   

      </Routes>
      
      <ToastContainer/>
      </LayoutMain>
     </BrowserRouter>
     

  );
}

export default App;
