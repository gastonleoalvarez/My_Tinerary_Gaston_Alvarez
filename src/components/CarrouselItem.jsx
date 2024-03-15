import React from 'react' 


const CarrouselItem = ({cities}) => {
   console.log(cities)
    
  return (
    <> 
    {cities.map((city, i) =>(
        <article key={i} className='w-9/12 p-10 relative'>
        <img className='w-full shadow-lg' src={city.image}/>
        <h3 className='text-3xl text-center'>{city.name}</h3>
        <p className='text-center text-1xl'>{city.description}</p>
      </article>
        ))}
     </>
  )
}

export default CarrouselItem