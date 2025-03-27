import React from 'react'
import img1 from "../Assets/f6.png"

const Services = () => {
  return (
    <>
       <div className='container-fluid services'>
          <div className='container '>
          <div className='row gx-0'>
          <div className='col-md-6'>
          <div className='services_col1'>
          <h1 className='main_heading'>Why Should People Choose Fitness Services</h1>
           {/* ****************************** */}
          <div className='services_main pt-3 pb-5'>  
           {/* ****************************** */}
           <div class="form-check py-3"> 
  <input 
  className="form-check-input" 
  type="checkbox" 
  value="" 
  id="defaultCheck1"/>
  <label 
  className="form-check-label" 
  htmlFor="defaultCheck1">
   <h5 className='ps-3'>Personal Training</h5>
  </label>
   </div>
   <p>Our personal trainers can help you create a personalized fitness plan and track your progress.</p>
    {/* ****************************** */}
    <div class="form-check py-3"> 
  <input 
  className="form-check-input" 
  type="checkbox" 
  value="" 
  id="defaultCheck1"/>
  <label 
  className="form-check-label" 
  htmlFor="defaultCheck1">
   <h5 className='ps-3'>Expert Trainer</h5>
  </label>
   </div>
   <p>Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health & fitness goals.</p>
     {/* ****************************** */}
     <div class="form-check py-3"> 
  <input 
  className="form-check-input" 
  type="checkbox" 
  value="" 
  id="defaultCheck1"/>
  <label 
  className="form-check-label" 
  htmlFor="defaultCheck1">
   <h5 className='ps-3'>Flexible Time</h5>
  </label>
   </div>
   <p>There are many fitness classes that  are offered  during off-peak hours,such as early morning or late evening.</p>
      {/* ****************************** */}
          </div>
          {/* ****************************** */}
          <button className='btn1 btn0'>Join Today</button>
         {/* ****************************** */}
          </div>
         </div>
         <div className='col-md-6'>
          <div className='services_col2'>
            <img src={img1} className='img-fluid'/>
          </div>
         </div>
         </div>
          </div>
          </div>
    </>
  )
}

export default Services