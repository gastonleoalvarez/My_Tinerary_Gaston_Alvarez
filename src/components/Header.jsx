import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import store from "../redux/store"; 

const Header = () => {

const user  = useSelector((store) => store.user.user);
const dispatch = useDispatch()
const location = useLocation();
const links = [
  {path: "/register",
    title:"/Register",
  active: "/register" == location.pathname }
]

const handleClick = () => {
  dispatch(logout()); 
}
  return (
    <header className="flex justify-between items-center bg-sky-200 px-3">
        <h2>MyTineray</h2>
        <img src="" />
        <nav className="flex gap-5 p-7 font-bold">
          <Link to="/">HOME</Link>
          <Link to="/cities">CITIES</Link>
          <Link to="/sign">SIGN UP</Link>
          <Link to="/login">SIGN IN</Link>
          <img className="w-7 h-7"  src="/images.png"/>
          {user.first_name && (
             <button onClick={handleClick}>LOG OUT</button>
           )}
         
        </nav>
      </header>
    
  )
}

export default Header;