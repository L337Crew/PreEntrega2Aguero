import React from 'react'
import Item from '../components/Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import {productos} from '../data'


const ItemListContainer = () => {

   
  return (
    <>
        <div className='d-flex align-items-center justify-content-around mt-5'>
            {productos.map((producto)=>(
                <Item key={producto.id} {...producto}/>
            ))}
        </div>
    </>
    
    
  )
}

export default ItemListContainer