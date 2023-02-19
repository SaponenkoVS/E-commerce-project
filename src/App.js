import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import SingIn from "./components/routes/SingIn/SingIn.component";

const Shop=()=>{
  return (
    <h1>here is the shop</h1>
  )
}

const App =()=>{
   return (
    <Routes>
      <Route path ='/' element ={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path ='/shop' element ={<Shop/>}></Route>
        <Route path ='/sing-in' element ={<SingIn/>}></Route>
      </Route>
    </Routes>
    
   ) 
}
export default App;