import React from 'react'

const Footer = () =>{
  return (
    <footer class="bg-gray-800 text-white p-7">
      <div class="flex justify-between items-center">
        
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-300">Facebook</a>
          <a href="#" class="hover:text-gray-300">Twitter</a>
          <a href="#" class="hover:text-gray-300">Instagram</a>
          
        </div>

        
        <p class="text-gray-300">&copy; 2024 MyTineray. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer