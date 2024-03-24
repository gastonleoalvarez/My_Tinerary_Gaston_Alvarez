
import Header from '../components/Header'
import Hero from '../components/Hero'
import Calltoaction from '../components/Calltoaction'
import Footer from '../components/Footer'

 const LayoutMain = (props) => {
  return (
      
    <div className="w-full min-h-screen flex flex-col">
      
    
    <Header></Header>
      
    

    {props.children} 
      
    <Footer></Footer>

    </div>

  )

}

export default LayoutMain