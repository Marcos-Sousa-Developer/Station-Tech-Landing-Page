import React, { useEffect, useState } from 'react'
import ProductsSlide1 from './Slides/ProductsSlide1'
import ProductsSlide2 from './Slides/ProductsSlide2'

function Section2() {

  return (
    <section class="py-0" id="collections">
    <div class="container">
      <div class="row h-100">
        <div class="col-lg-7 mt-5">
          <h5 class="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase" id='section2'>Products</h5>
        </div>
        <div class="col-12">
          <nav>
            <div class="nav nav-tabs watch-tabs justify-content-end mb-2" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-latest-tab" data-bs-toggle="tab" data-bs-target="#nav-latest" type="button" role="tab" aria-controls="nav-latest" aria-selected="true">PRODUCTS </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-latest" role="tabpanel" aria-labelledby="nav-latest-tab">
                <div class="carousel slide" id="carouselLatest" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <ProductsSlide1></ProductsSlide1>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <ProductsSlide2></ProductsSlide2>
                        </div>

                        <div class="row">
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselLatest" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselLatest" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next </span></button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2