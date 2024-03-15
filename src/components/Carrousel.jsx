
import CarrouselItem from './CarrouselItem'
import { useState } from 'react'



 const Carrousel = ({cities}) => {
 
    const [indexSlide, setIndexSlide] = useState(0);

    const next = () => {
        setIndexSlide((prevIndex) => (prevIndex + 1) % 3);
      };
    
      
      const prev = () => {
        setIndexSlide((prevIndex) => (prevIndex - 1 + 3) % 3);
      };
      


  return (
    <div className='w-11/12 flex justify-between'>
    

    <button onClick={prev}>prev</button>

    <CarrouselItem cities={cities.slice(indexSlide * 4, (indexSlide + 1) * 4)} />
    

  <button onClick={next}>next</button>
  </div>
  )
}

export default Carrousel 

