
import CarrouselItem from './CarrouselItem'
import { useState } from 'react'



 const Carrousel = ({cities}) => {
 
    const [indexSlide, setIndexSlide] = useState(0);

    const next = () => { //aumenta en 1 , si alcanza el valor de 2, vuelve a 0
        setIndexSlide((prevIndex) => (prevIndex + 1) % 3);
      };
    
      
      const prev = () => {     //disminuye indexslide en 1 . si es 0 lo establece en 2 
        setIndexSlide((prevIndex) => (prevIndex - 1 + 3) % 3);
      };
      


  return (
    <div className='w-11/12 flex justify-between mb-10'>
    

    <button onClick={prev}>prev</button>

    <CarrouselItem cities={cities.slice(indexSlide * 4, (indexSlide + 1) * 4)} />
    

  <button onClick={next}>next</button>
  </div>
  )
}

export default Carrousel 

