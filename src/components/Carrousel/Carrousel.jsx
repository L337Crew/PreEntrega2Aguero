import React from 'react'

const Carrousel = () => {
  return (
    <>
     <div id="carouselExampleAutoplaying" className="carousel slide mt-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='amd-slider.png' alt="" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src='intel-slider.png' alt="" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src='corsair-slider.png' alt="" className="d-block w-100"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carrousel