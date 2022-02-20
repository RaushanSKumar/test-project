import React from "react"; 
import Navbar from "./components/Navbar"; 
import Jumbo from "./components/Jumbo";
import '../src/App.css'

const App = () => {
  return(
  <div className="app-background">
    <Navbar/>
    <Jumbo/>
    
  </div>
  )
}

export default App;