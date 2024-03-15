import LayoutMain from "./LayoutMain";
import { getCities } from "../peticiones/citiesQueries";
import {useState, useEffect} from "react"
import CarrouselItem from "../components/CarrouselItem";


const Cities = () => {
  const [cities, setCities] = useState([])
  
  
  
useEffect(() => {
  getCities().then((data) => {
    setCities(data);
   
  }); 
}, []); 


console.log(cities)

  return (
    
    
    <main className="grow flex flex-col gap-5 justify-center items-center pt-20">

    <search className="grow flex flex-col gap-5 justify-center border w-70">
      <input type="text" name="Search city"  className="text-black rounded w-50" onInput={() => console.log("teclado")}/>
    </search>

    <h2>Ciudades</h2>
    <section>
    {cities.length > 0 && cities.map((city, i) => 
      <article key={i} className='w-9/12 p-10 relative'>
      <img className='w-full shadow-lg' src={city.image}/>
      <h3 className='text-3xl text-center'>{city.name}</h3>
      <p className='text-center text-1xl'>{city.description}</p>
    </article>
      )} 

    </section>


       </main> 
    
    
  )
}
export default Cities


