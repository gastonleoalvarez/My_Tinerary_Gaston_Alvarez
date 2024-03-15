import React from 'react'
import { Link } from "react-router-dom";

const Footer = () =>{
  return (
    <footer className="bg-gray-800 text-white p-7">
      <div className="flex justify-between items-center">
        
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
        </div>



        <div className="flex space-x-10"> 
        <Link to="/">HOME</Link>
        <Link to="/cities">CITIES</Link>
        </div>
        
        <p className="text-gray-300">&copy; 2024 MyTineray. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer