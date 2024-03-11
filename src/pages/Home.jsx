
import LayoutMain from './LayoutMain'
import {useState} from "react"; 
import {ciudades} from '../data/data'

 const Home = () => {

const cities = ciudades.slice(0,12) // se obtinenen solo 12 ciudades
const [slide, setSlide] = useState(0);

const next = () => {
    setSlide((prev) => (prev +1) % cities.length);
}

const prev = () => {
    setSlide ((prev) => prev === 0 ? cities.length -1 : prev -1)
    
  
}


const mostrarSlides = () => {
    return cities.slice(slide, slide + 4).map((city, index) => (
        <article className='w-9/12 p-10 relative' key={index}>
            <img className='w-full shadow-lg' src={city.image} alt={`Slide ${slide + index + 1}`} />
            <div className="absolute top-1/3 left- transform -translate-x-10 -translate-y-1/2 text-center pb-80 ml-40 text-white">
            <h3 className='text-3xl text-center'>{city.name}</h3>
            
            <p className='text-center text-2xl'>{city.description}</p>
            </div>

        </article>
    ))
}


  return (
    
   <LayoutMain>
        <h2 className='text-3xl text-center'>Popular Mytineraries</h2>
                <button onClick={prev}>Previous</button> <button onClick={next}>Next</button> 
               
        <main className='flex flex-wrap justify-center items-center'>
                
                {mostrarSlides()}
                
                <p></p>
                
            
        
        </main>

   </LayoutMain>
  )
}

export default Home; 