import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Home } from '../pages/Home.jsx'
import {Footer} from '../components/Footer/Footer.jsx'
import Cart from '../components/Cart/Cart.jsx'
 
const Rutas = () => {
    const navbar_items = [
       
        {
            path: "componentes",
            name: "Componentes"
        },
        {
            path: "perifericos",
            name: "Perifericos"
        } 
    ]
  return (
    <BrowserRouter>
      <Navbar navbar_items= {navbar_items}/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/category/:id' element={<ItemListContainer/>} />
         <Route path='/itemDetail/:id' element={<ItemDetailContainer/>}/>
         <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    )
}

export default Rutas
