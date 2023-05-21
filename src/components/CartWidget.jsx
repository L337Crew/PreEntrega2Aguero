import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'


const Cartwidget = () => {
  return (
    <div className="cart-widget">
     <FaShoppingCart size={'25'} color={'white'}/>
      <span className="cart-notification fs-4" style={{color: 'white'}}>2</span>
    </div>

  )
}

export default Cartwidget
