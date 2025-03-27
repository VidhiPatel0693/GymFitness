import React from 'react'
import img1 from "../Assets/gymmmm.png"
import icon1 from "../Assets/p3.jpg"
import img2 from "../Assets/test1.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import FitnessGoal from './FitnessGoal';

const Home = () => {
  return (
    <>

    {/* **************************************** */}
    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='container-fluid Hero'>
          <div className='container gx-0'>
          <div className='row gx-0'>
          <div className='col-md-6'>
          <div className='Hero_col1'> 
          <h1>GET  <span>HEALTHY</span> BODY WITH THE  <span>PERFECT</span> EXERCISE</h1>
            <p>We are always there to help you to make a healthy body and mind through the power of fitness.</p>
            <div className='hero_btns'>
            <button className='btn1 btn0'>Get Started</button>
            <button className='play_btn'> <img src={icon1}/>  Watch Video</button>
            </div>
          </div>
          </div>
          <div className='col-md-6'>
          <div className='Hero_col2'>
          </div>
         </div>
         </div>
          </div>
          </div>
  </SwiperSlide>
  
  {/* **************************************** */}
        <SwiperSlide><div className='container-fluid Hero Hero1'>
          <div className='container gx-0'>
          <div className='row gx-0 align-items-center'>
          <div className='col-md-6'>
          <div className='Hero_col1'> 
          <h1>UNLOCKED YOUR  <span>BODY & MIND</span> IN PERFECT BALANCE </h1>
            <p>We are always there to help you to make a healthy body and mind through the power of fitness.</p>
            <div className='hero_btns'>
            <button className='btn1 btn0'>Get Started</button>
            <button className='play_btn'> <img src={icon1}/>  Watch Video</button>
            </div>
          </div>
          </div>
          <div className='col-md-6'>
          <div className='Hero1_col2'>
          <img src={img1} className='img-fluid'/>
          </div>
         </div>
         </div>
          </div>
          </div> </SwiperSlide>
        {/* **************************************** */}
        <SwiperSlide><div className='container-fluid Hero Hero2'>
          <div className='container gx-0'>
          <div className='row gx-0 align-items-center'>
          <div className='col-md-6 order-md-2' >
          <div className='Hero_col1'> 
          <h1>BUILD YOUR BODY <span>TRANSFORM </span> YOUR LIFE</h1>
            <p>We are always there to help you to make a healthy body and mind through the power of fitness.</p>
            <div className='hero_btns'>
            <button className='btn1 btn0'>Get Started</button>
            <button className='play_btn'> <img src={icon1}/>  Watch Video</button>
            </div>
          </div>
          </div>
          <div className='col-md-6 order-md-1'>
          <div className='Hero2_col2 '>
          <img src={img2} className='img-fluid'/>
          </div>
         </div>
         </div>
          </div>
          </div></SwiperSlide>
      </Swiper>
    {/* **************************************** */}
       {/* <div className='container-fluid Hero'>
          <div className='container gx-0'>
          <div className='row gx-0'>
          <div className='col-md-6'>
          <div className='Hero_col1'> 
          <h1>GET  <span>HEALTHY</span> BODY WITH THE  <span>PERFECT</span> EXERCISE</h1>
            <p>We are always there to help you to make a healthy body and mind through the power of fitness.</p>
            <div className='hero_btns'>
            <button className='btn1 btn0'>Get Started</button>
            <button className='play_btn'> <img src={icon1}/>  Watch Video</button>
            </div>
          </div>
          </div>
          <div className='col-md-6'>
          <div className='Hero_col2'>
          </div>
         </div>
         </div>
          </div>
          </div> */}
  
  {/* **************************************** */}

  {/* <div className='container-fluid Hero Hero1'>
          <div className='container gx-0'>
          <div className='row gx-0 align-items-center'>
          <div className='col-md-6'>
          <div className='Hero_col1'> 
          <h1>GET  <span>HEALTHY</span> BODY WITH THE  <span>PERFECT</span> EXERCISE</h1>
            <p>We are always there to help you to make a healthy body and mind through the power of fitness.</p>
            <div className='hero_btns'>
            <button className='btn1 btn0'>Get Started</button>
            <button className='play_btn'> <img src={icon1}/>  Watch Video</button>
            </div>
          </div>
          </div>
          <div className='col-md-6'>
          <div className='Hero1_col2'>
          <img src={img1} className='img-fluid'/>
          </div>
         </div>
         </div>
          </div>
          </div> */}
  {/* **************************************** */}
  
  {/* <div className='container-fluid Hero Hero2'>
          <div className='container gx-0'>
          <div className='row gx-0 align-items-center'>
          <div className='col-md-6 order-md-2' >
          <div className='Hero_col1'> 
          <h1>GET  <span>HEALTHY</span> BODY WITH THE  <span>PERFECT</span> EXERCISE</h1>
            <p>We are always there to help you to make a healthy body and mind through the power of fitness.</p>
            <div className='hero_btns'>
            <button className='btn1 btn0'>Get Started</button>
            <button className='play_btn'> <img src={icon1}/>  Watch Video</button>
            </div>
          </div>
          </div>
          <div className='col-md-6 order-md-1'>
          <div className='Hero2_col2 '>
          <img src={img2} className='img-fluid'/>
          </div>
         </div>
         </div>
          </div>
          </div> */}
  
  {/* **************************************** */}
    </>
  )
}

export default Home