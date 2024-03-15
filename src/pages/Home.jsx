
import LayoutMain from './LayoutMain'
import {useState} from "react"; 
import {ciudades} from '../data/data'
import Carrousel from '../components/Carrousel';

const Home = () => {


  return (
    
   <LayoutMain>
        <h2 className='text-3xl text-center'>Popular Mytineraries</h2>
              
               
        <main className='flex flex-wrap justify-center items-center'>
                
        

          <Carrousel cities = {ciudades.slice(0,12)}/>
        
         

        </main>
   </LayoutMain>
  )
}

export default Home; 
