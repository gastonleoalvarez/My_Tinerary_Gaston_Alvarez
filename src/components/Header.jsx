import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-sky-200 px-3">
        <h2>MyTineray</h2>
        <img src="" />
        <nav className="flex gap-5 p-7 font-bold">
          <Link to="/">HOME</Link>
          <Link to="/cities">CITIES</Link>
          <img className="w-7 h-7"  src="/images.png"/>
        </nav>
      </header>
    
  )
}

export default Header;