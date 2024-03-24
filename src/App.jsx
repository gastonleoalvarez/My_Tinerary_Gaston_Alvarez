import Cities from "./pages/Cities";
import  Home  from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SingleCity from "./pages/SingleCity"
import LayoutMain from "./pages/LayoutMain";
import { Provider, useDispatch } from "react-redux";
import Login from "./pages/Login";
import { useEffect } from "react";
import authQueries from "./peticiones/authQueries";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "./redux/actions/userAction";
import alerts from "./utils/alerts"
import SignUp from "./pages/SignUp"
import UserProtect from "./protect/UserProtect";


function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    authQueries.loginWithToken().then((res) =>{
      if(res.status == 200){
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
        <Route element ={<UserProtect/>}>
          <Route path="/signUp" element={<SignUp></SignUp>}/>                 
          <Route path="/login" element={<Login></Login>}/>   
        </Route>
      </Routes>
      
      <ToastContainer/>
      </LayoutMain>
     </BrowserRouter>
     

  );
}

export default App;
