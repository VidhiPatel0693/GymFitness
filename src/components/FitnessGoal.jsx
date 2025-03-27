import React from 'react'
import img1 from "../Assets/f3.png"
import img2 from "../Assets/f4.jpg"
import img3 from "../Assets/f5.png"
import img4 from "../Assets/fitness1.jpeg"
import img5 from "../Assets/mini.png"

const FitnessGoal = () => {
  return (
    <>
        <div className='container-fluid Fitness_Goal'>
        <div className='container'>
        <div className='row gx-0 align-items-center'>
        <div className='col-md-5'>
        <div className='fitness_col1'>
            <h1 className=''>970K+ More </h1>
            <p>Trusted Companies Partner</p>
        </div>
        </div>
        <div className='col-md-7'>
        <div className='fitness_col2'>
        <img src={img1} className='image-fluid px-3'/>
        <img src={img2} className='image-fluid px-3 '/>
        <img src={img3} className='image-fluid px-3'/>
        </div>
        </div>
        </div>
        </div>
        </div>

        {/* *********************************** */}
        <div className='container-fluid Fitness_Goal1'>
        <div className='container'>
        <div className='row gx-0 align-items-center'>
        <div className='col-md-6'>
        <div className='fitness_col3'>
        <img src={img4} className='image-fluid'/>
        <div className='popup'>
         <img src={img5} className=''/>
         <h6 className='fw-bold'>Professional Trainer</h6>
        </div>
        </div>
        </div>
        <div className='col-md-6'>
        <div className='fitness_col4'>
        <div className='pt-3 pb-4'>
        <h1 className='main_heading'>Get Ready To Reach Your Fitness Goals</h1>
        <p>We are a gym that is committed to hepling people reach their fitness golas.We offer a variety of theirs programs and services to fit your needs,whether you are a experienced athlete.</p>
        <p>We believe that everyone should have access to the benefits of exercise make it happen.</p>
        </div>
        <button className='btn1 btn0'>Free Trial Today</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* *********************************** */}

        {/* *********************************** */}
    </>
  )
}

export default FitnessGoal