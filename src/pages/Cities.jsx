
import { getCities } from "../peticiones/citiesQueries";
import {useState, useEffect, useRef} from "react"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { filterByName, load } from "../redux/actions/ciudadesAction";
import Header from "../components/Header";


const Cities = () => {
  /*const [cities, setCities] = useState([])
  const [seleccionados, setSeleccionados] = useState ([]);
  */

  const refer = useRef(null);
  
  const dispatch = useDispatch();  

  const seleccionados = useSelector((store) => store.cities.filtered)  
/*console.log(allCities) */

useEffect(() => {
  getCities().then((data) => {
    /*setCities(data);
    setSeleccionados(data);*/

   dispatch(load(data))
  }); 
}, []); 


const handleInput =() =>{
  dispatch(filterByName(refer.current.value))
 /*const aux = filterByName(cities, refer.current.value)*/
 /*setSeleccionados(aux)*/
}



/*const filterByName = (lista, value) => 
  lista.filter((ciudad) => ciudad.name.toLowerCase().startsWith(value.toLowerCase()) 
  )*/


  return (
    <>
    
    <main className="grow flex flex-col gap-5 justify-center items-center pt-20  pl-20 pb-10">

     <span className="text-black-600 py-2 px-4">Search city</span>
     <search className="bg-white p-2 rounded-lg shadow-md border border-black">
      
      <input type="text" name="Search city"  className="" onInput={handleInput}
      ref={refer}
      />
    </search>


    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >

    {seleccionados.length > 0 && seleccionados.map((city, i) => 
      <article key={i} className='w-9/12  border border-black rounded-lg relative shadow-lg'>
      
      <img className='w-full shadow-lg' src={city.image}/>
      <h3 className='text-3xl text-center p-4'>{city.name}</h3>
      <p className='text-center text-1xl'>{city.country}</p>
      <p className='text-center text-1xl'>{city.description}</p>
      <div className="text-center">
      <Link to={"/cities/" + city._id}>Details</Link>
      </div>

      </article>

      )} 

    </section>


       </main> 
       </>
  )
}
export default Cities


