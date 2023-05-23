
import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Cartwidget from './CartWidget'

const Navbar = (props) => {
  const {navbar_items} = props
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme= "dark">
    <div className="container-fluid ">
    <Link to='/'>
       <img src='/logouz.png' width='125' alt="logo uz"  />
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          {
            navbar_items.map(({path, name}, index) => (
              <li key={index} className="nav-item">
                <NavLink className={'nav-link fs-3 text-light'} to={`category/${path}`}>{name}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    <div>
      <Cartwidget/>
    </div>
  </nav>
  )
}

export default Navbar