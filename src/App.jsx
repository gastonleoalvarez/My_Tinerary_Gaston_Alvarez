import Cities from "./pages/Cities";
import  Home  from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/cities" element={<Cities></Cities>}/>

      </Routes>
      
     </BrowserRouter>
     

  );
}

export default App;
