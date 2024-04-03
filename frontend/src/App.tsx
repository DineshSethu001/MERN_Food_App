import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"
export default function App(){
  return(
    <div className="app">
     
      <BrowserRouter>
      <Navbar/>
      <Home />
      </BrowserRouter>
    </div>
  )
}
