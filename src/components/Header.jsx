import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import store from "../redux/store"; 

const Header = () => {

const user  = useSelector((store) => store.user.user);
const dispatch = useDispatch()
const location = useLocation();

const links = [
  {path:"/",
  title: "HOME",
  active: "/" == location.pathname 
  },

  {path:"/cities",
  title: "CITIES",
  active: "/cities" == location.pathname 

  },

  {path: "/signup",
    title: "SIGN UP",
  active: "/signup" == location.pathname },

  {path: "/Login",
  title: "SIGN IN",
active: "/Login" == location.pathname }
]

const handleClick = () => {
  dispatch(logout()); 
}

  return (
    <header className="flex justify-between items-center bg-sky-200 px-3">
        <h2>MyTineray</h2>
        <img src="" />
        {user && <p>{user.first_name}</p>}
        <nav className="flex gap-5 p-7 font-bold">

        {links.map((link) =>(
          <Link key={link.title} 
          className={`font-semibold ${link.active ? "text-blue" : ""}`}
          to={link.path}>{link.title}</Link>
        ))}

         <img className="w-7 h-7"  src="/images.png"/>

           
             <button 
             onClick={handleClick}>LOG OUT</button>
           
         
        </nav>
      </header>
  );
};

export default Header;