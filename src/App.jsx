import { useState } from "react";
import {Routes, Route} from "react-router-dom"  
import Home from "./pages/Home";                 
import Inicio from "./pages/inicio";

const App = () => {
const [color] = useState ("#eb568f")
document.body.style.backgroundColor = color

return(
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/inicio" element={<Inicio/>} />
  </Routes>
)
}

export default App