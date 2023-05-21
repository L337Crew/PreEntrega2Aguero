import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Componentes from '../pages/Componentes.jsx'
import ItemListContainer from '../pages/ItemListContainer'
import Perifericos from '../pages/Perifericos'
import Navbar from '../components/Navbar'
import ItemDetailContainer from '../pages/ItenDetailContainer.jsx'

const Rutas = () => {
    const navbar_items = [
       
        {
            path: "/Componentes",
            name: "Componentes"
        },
        {
            path: "/Perifericos",
            name: "Perifericos"
        } 
    ]
  return (
    <BrowserRouter>
      <Navbar navbar_items= {navbar_items}/>
      <Routes>
         <Route path='/' element={<ItemListContainer/>}/>
         <Route path='/Componentes' element={<Componentes/>}/>
         <Route path='/Perifericos' element={<Perifericos/>}/>
         <Route path='/category/:id' element={<ItemListContainer/>} />
         <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

    )
}

export default Rutas
