import React from 'react'

function ProductsSlide2() {
  return (
    <div class="row h-100 align-items-center">
    <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
      <div class="card bg-black text-white p-6 pb-8"><img class="card-img" src={require('../../img/basktball.png')} alt="..."/>
        <div class="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
          <h6 class="text-primary" style={{fontSize: "20px"}}>Coming soon</h6>
          <h4 class="text-light text-uppercase">basket PREDICTIONS ROBOT</h4>
        </div><a class="stretched-link" href="#"></a>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
      <div class="card bg-black text-white p-6 pb-8"><img class="card-img" src={require('../../img/tennis.png')} alt="..."/>
        <div class="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
          <h6 class="text-primary" style={{fontSize: "20px"}}>Coming soon</h6>
          <h4 class="text-light text-uppercase">tennis PREDICTIONS ROBOT</h4>
        </div><a class="stretched-link" href="#"></a>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
      <div class="card bg-black text-white p-6 pb-8"><img class="card-img" src={require('../../img/robot2.png')} alt="..." />
        <div class="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
          <h6 class="text-primary" style={{fontSize: "20px"}}>Contact</h6>
          <h4 class="text-light text-uppercase">CUSTOM PRODUCTS/ROBOT</h4>
        </div><a class="stretched-link" href="#"></a>
      </div>
    </div>
    
  </div>
  )
}

export default ProductsSlide2