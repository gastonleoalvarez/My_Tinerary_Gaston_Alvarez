
import LayoutMain from './LayoutMain'
import {useState} from "react"; 
import {ciudades} from '../data/data'
import Carrousel from '../components/Carrousel';
import Hero from '../components/Hero';
import Calltoaction from '../components/Calltoaction';

const Home = () => {


  return (
    
    <>
    <Hero></Hero>    
    <main>
      <Calltoaction></Calltoaction>
      <div className='text-center w-full'>
        <h2 className='text-3xl'>Popular Mytineraries</h2>
      </div>
      <div className='flex justify-center w-full'>
        <Carrousel cities={ciudades.slice(0,12)} />
      </div>
    </main>
  </>
  )
}

export default Home; 
