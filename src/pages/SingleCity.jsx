import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCitiesById } from '../peticiones/citiesQueries';
import Header from '../components/Header';
import Footer from '../components/Footer';


 const City = () => {
   
    const params = useParams();
    const [ciudad, setCiudad] = useState ({})

    useEffect(() => {
      getCitiesById(params._id).then((res) =>{setCiudad(res)})
    }, [])
 
    console.log(ciudad)



  return (
    <>
    <Header></Header>
    <main class="flex justify-center items-center h-screen">
      <div class=''>
          <div className='pl-30 flex items-center justify-center'>
        <img class="w-100 h-80 shadow-lg rounded-t-lg" src={ciudad.image} alt={ciudad.name} />
        </div>
      <div class="p-4">
        <h3 class="text-3xl text-center mb-4">{ciudad.name}</h3>
        <p class="text-center text-lg mb-2">Country: {ciudad.country}</p>
        <p class="text-center text-lg mb-2">Description: {ciudad.description}</p>
        <p class="text-center text-lg mb-2">Language: {ciudad.language}</p>
        <p class="text-center text-lg mb-2">Currency: {ciudad.currency}</p>
    </div>
  </div>
</main>
<Footer></Footer>
</>
  ) 
  
}

export default City;






