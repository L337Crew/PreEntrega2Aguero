import React from 'react'
import Item from '../components/Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import {productos} from '../data'


const ItemListContainer = () => {

   
  return (
    <>
    <div className="container">
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-lg-3 p-2">
            <Item {...producto} />
          </div>
        ))}
      </div>
    </div>
    </>
    
    
  )
}

export default ItemListContainer