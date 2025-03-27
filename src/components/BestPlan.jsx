import React from 'react'
import tick from "../Assets/tick.png"

const BestPlan = () => {
  return (
    <>
        <div className='container-fluid BestPlan'>
        <h1 className=' plan '>Choose The Best Plan</h1>
        <p className='main_para'>Choose a plan that's right for your growing team.Simple pricing & No hidden charges.</p>
          <div className='container pt-5'>
          <div className='row gx-0 align-items-center'>
          <div className='col-md-4'>
          <div className='bestplan_col1'>
            <h4>DISCOVER</h4>
            <h1 className="pt-3">$99 <span>/ Per Month</span></h1>
                <div className="bestplan_detail py-3">
                  <p><img src={tick} alt="" /> 5 Classes Per Month</p>
                  <p><img src={tick} alt="" /> 4 group class monthly</p>
                  <p><img src={tick} alt="" /> Online class access</p>
                  <p><img src={tick} alt="" /> E-book fitness guide</p>
                  <p><img src={tick} alt="" /> Fitness guide detail</p>
                </div>
                <button className="btn3"  to="/chooseplan" onClick={() => handleChoosePlan('Discover')}>Choose Plan</button>

          </div>
          </div>
          <div className='col-md-4'>
          <div className='bestplan_col1  bestplan_col2'>
          <h3 className="BestPlan_h3 ">MOST POPULAR</h3>

                <h4>ENTERPRISE</h4>
                <h1 className="pt-3">$299 <span>/ Per Month</span></h1>
                <div className="bestplan_detail py-3">
                  <p><img src={tick} alt="" /> 10 classes per month</p>
                  <p><img src={tick} alt="" /> 8 group class monthly</p>
                  <p><img src={tick} alt="" /> Online class access</p>
                  <p><img src={tick} alt="" /> E-book fitness guide</p>
                  <p><img src={tick} alt="" /> 7 Extra fitness training</p>
                  <p><img src={tick} alt="" /> 7 Extra fitness training</p>
                </div>
                <button className="btn4" onClick={() => handleChoosePlan('Enterprise')}>Choose Plan</button>
          </div>
          </div>
          <div className='col-md-4'>
          <div className='bestplan_col1'>
          <h5>PROFESSIONAL</h5>
                <h1 className="pt-3">$199 <span>/ Per Month</span></h1>
                <div className="bestplan_detail py-3">
                  <p><img src={tick} alt="" /> 7 Classes Per Month</p>
                  <p><img src={tick} alt="" /> 6 group class monthly</p>
                  <p><img src={tick} alt="" /> Online class access</p>
                  <p><img src={tick} alt="" /> E-book fitness guide</p>
                  <p><img src={tick} alt="" /> Fitness guide detail</p>
                </div>
                <button className='btn3'>Choose Plan</button>
                
              </div>

          </div>
          </div>
          </div>
          </div>
          
    </>
  )
}

export default BestPlan