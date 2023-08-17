import React, { useEffect, useState } from 'react'

function Section1() {
    
    const [hide, setHide] = useState(false)
  
    const handleResize = () => {
      console.log(window.innerWidth)
      if(window.innerWidth < 900) {
        setHide(true)
      }
      else  {
        setHide(false)
      }
    };
  
    useEffect(() => { 
      window.addEventListener('resize', handleResize);
    },[])

  return (
    <section class="py-0" id="header">
        <div class="bg-holder" id="main_image"></div>
        <div class="container">
        <div class="row align-items-center min-vh-lg-75 min-vh-xl-100">
            <div class="col-md-8 col-lg-6 text-md-start text-center">
                <h1 class="display-1 lh-sm text-uppercase text-light"  style={{paddingTop:!hide ?"0px" : "70px"}}>
                  Transforming <span style={{color:"#006199"}}>THOUGHTS</span><br class="d-none d-xxl-block" /> into Realities</h1>
                <div class="pt-4">
                    <div class="text-uppercase">
                        <a class="btn btn-sm btn-outline-primary m-1" href="#">Security  &amp; Cybersecurity  </a>
                        <a class="btn btn-sm btn-outline-primary m-1" href="#">SOFTWARE DEVELOPMENT</a>
                        <a class="btn btn-sm btn-outline-primary m-1" href="#">Artificial Intelligence</a>
                        <a class="btn btn-sm btn-outline-primary m-1" href="#">WEB DEVELOPMENT </a>
                        
                    </div>
                </div>
            </div>
            {
                !hide ? ( <div class="col-md-4 col-lg-6 text-md-start text-center" id="gif">
                    <img src={require('../img/Ai-robot.gif')}></img>
                </div >)
                :
                ""
            }
        </div>
        </div>
    </section>
  )
}

export default Section1