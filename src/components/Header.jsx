import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {logout} from "../redux/actions/userAction" 

const Header = () => {
  const location = useLocation();
const user  = useSelector((store) => store.user.user);
const dispatch = useDispatch()

const links = [
  {path:"/",
  title: "HOME",
  active: "/" == location.pathname,
  visible: true, 
  },

  {path:"/Cities",
  title: "CITIES",
  active: "/Cities" == location.pathname,
  visible: true, 

  },

  {path: "/signup",
    title: "SIGN UP",
  active: "/signup" == location.pathname,
  visible: user.first_name ? false: true,
},

  {path: "/Login",
  title: "SIGN IN",
active: "/Login" == location.pathname,
visible: user.first_name ? false : true,
}
]

const handleClick = () => {
  dispatch(logout()); 
};

  return (
    <header className="flex justify-between items-center bg-sky-200 px-3">
        <h2>MyTineray</h2>
        <img src="" />
        
        <nav className="flex gap-5 p-7 font-bold">

        {links.map((link) => (
        <Options key={link.title} link={link}/>
        ))}

            
         {user.first_name && ( 
           <button 
           onClick={handleClick}>LOG OUT</button>
         )}
        </nav>
      </header>
  );
};

export default Header;

const Options = ({link}) => {
  if(link.visible){
    return <Link 
    key={link.title} 
    className={`font-semibold ${link.active ? "text-blue" : ""}`}
    to={link.path}
    >{link.title}
    </Link>

  }else{
    <></>;
  }
 
}

