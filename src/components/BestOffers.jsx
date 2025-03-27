import React from 'react'
import img1 from "../Assets/first.png"
import img2 from "../Assets/yoga4.png"
import img3 from "../Assets/muscle.png"
import img4 from "../Assets/runner.png"

const BestOffers = () => {
  return (
    <>
        <div className='container-fluid BestOffers'>
        <div className='container '>
          <div className='row gx-0 py-4 align-items-center'>
          <div className='col-md-7'>
          <h1 className='main_heading pe-md-4 me-md-5'>The Best Programs We Offers For You</h1>
          </div>
          <div className='col-md-5'> 
          <p>We  offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels.Our aim to help your achieve specific goals & maximize results.</p>
          </div>
          </div>
          {/* ******************************** */}
          <div className='row gx-0 py-4'>
          <div className='col-md-3'>
          <div className="bestoffer_col1">
          <img src={img1} className='img-fluid pb-3'/>
          <h4>Strength Training</h4>
          <p>Our trainers will design that a progressive workout plans that achieve gains strength.</p>
          <button > Learn More <i className="fa-solid fa-arrow-right ps-2"></i></button> 
          </div>
         </div>
         <div className='col-md-3'>
          <div className="bestoffer_col1">
          <img src={img2} className='img-fluid pb-3'/>
          <h4>Basic Yoga</h4>
          <p>This program combines yoga with  strength training to help lose weight & fitness.</p>
          <button > Learn More <i className="fa-solid fa-arrow-right ps-2"></i></button> 
          </div>
         </div>
         <div className='col-md-3'>
          <div className="bestoffer_col1">
          <img src={img3} className='img-fluid pb-3'/>
          <h4>Body Building</h4>
          <p>For those looking to increase strength build lean muscle,our strength & muscle.</p>
          <button > Learn More <i className="fa-solid fa-arrow-right ps-2"></i></button> 
          </div>
         </div>
         <div className='col-md-3'>
          <div className="bestoffer_col1">
          <img src={img4} className='img-fluid pb-3'/>
          <h4>Weight Loss</h4>
          <p>Our weight loss programs are designed to help you make sustainable lifestyle changes.</p>
          <button > Learn More <i className="fa-solid fa-arrow-right ps-2"></i></button> 
          </div>
         </div>
        </div>
          {/* ******************************** */}
        </div>
        </div>
    </>
  )
}

export default BestOffers