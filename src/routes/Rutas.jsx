import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Componentes from '../pages/Componentes.jsx'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx'
import Perifericos from '../pages/Perifericos'
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
         <Route path='/componentes' element={<Componentes/>}/>
         <Route path='/perifericos' element={<Perifericos/>}/>
         <Route path='/category/:id' element={<ItemListContainer/>} />
         <Route path='/item/:id' element={<ItemDetailContainer/>}/>
         <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    )
}

export default Rutas
