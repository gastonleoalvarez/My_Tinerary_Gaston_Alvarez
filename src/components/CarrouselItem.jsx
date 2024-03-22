import React from 'react' 


const CarrouselItem = ({cities}) => {
   console.log(cities)
    
  return (
    <> 

    {cities.map((city, i) =>(
        <article key={i} className='w-9/12 mx-auto p-10 relative shadow-lg rounded-lg ml-5 mr-5'>
          <img className='text-3xl text-center mt-4' src={city.image}/>
          <h3 className='text-3xl text-center'>{city.name}</h3>
          <h2 className='text-1xl text-center'>{city.country}</h2>
      </article>
        ))}
     </>
  )
}

export default CarrouselItem