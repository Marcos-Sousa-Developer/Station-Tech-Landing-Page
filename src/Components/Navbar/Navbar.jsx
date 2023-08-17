import React from 'react'

function Navbar() {
      
    return (

        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
            <div class="container">
                <a class="navbar-brand d-inline-flex" href="index.html">
                    <span class="text-light fs-2 fw-bold ms-2">
                        <span style={{color:"#006199"}}>S</span>tation
                        <span style={{color:"#006199"}}>T</span>ech
                    </span>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item px-2"><a class="nav-link fw-bold active" aria-current="page" href="#collections">HOME</a></li>
                        <li class="nav-item px-2" ><a class="nav-link fw-bold" href="#section2">PRODUCTS</a></li>
                    </ul>
                    <form class="d-flex">
                        <a class="text-primary" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                        </a>
                        <div class="ms-4 text-light fw-bold">mrcdev.stationtech@gmail.com </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar