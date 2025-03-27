import React from 'react'
import img1 from "../Assets/test1.jfif"
import img2 from "../Assets/tes1.jfif"
import img3 from "../Assets/tes2.jfif"
import im from "../Assets/tes3.jpg"
import img from "../Assets/tes4.jpg"
import imgg from "../Assets/tes5.jpg"
import imggg from "../Assets/tes6.jpg"
import icon from "../Assets/f7.png"
import jb from "../Assets/f8.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { Autoplay,EffectCreative } from 'swiper/modules';

const Testimonial = () => {
  return (
  <>
    <div className='container-fluid testimonial'>
          <div className='container '>
          <div className='row gx-0'>
          <div className='col-md-7'>
          <div className='testimonial_col1  me-5'>
            <h1 className='main_heading'>What Our Happy Clients Say About Us</h1>
            <p className="py-4"> I've  been a member of fitness within for about 6 months
                            now and i absolutely love it! The trainers are so motivate 
                            and they really help to reach fitness goals.
            </p>
            <div className="row py-3  align-items-center">
            <div className='col-md-5'>
            <div className="test_images">
                            <img src={im} alt="" className="img-fluid"/>
                            <img src={img} alt="" className="img-fluid  test_images1"/>
                            <img src={imgg} alt="" className="img-fluid test_images2 "/>
                            <img src={imggg} alt="" className="img-fluid test_images3 "/>
                            <img src={icon} alt="" className="img-fluid test_images"/>
                              </div>
                              </div>
            
            <div className='col-md-7 gx-0'>
            <p className="test_p3"><i className="fa-solid fa-star"></i> 4.9 (450 Reviews)</p>
            </div>
         </div>  
         <img src={jb} className='img-fluid py-4'/> 
          </div>
          </div>
          
          <div className='col-md-5'>
          <div className='testimonial_col2'>
          <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          
          next: {
            translate: ['100%', 0, 0],
          },

        }}
        autoplay={{
            delay:1000,
            disableOnInteraction:false,
          }}
        modules={[Autoplay,EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="row test_main">
        <div className='col-12'>
        <div className='row gx-0 align-items-center'>
        <div className='col-md-4 text-center'>
            <img src={img1} className='img-fluid'/>
        </div>
        <div className='col-md-8'> 
            <h5>Rohan Mehta</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                    </div>
                    <div className="stars py-4">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            </div>
                    <p className="test_p2">
                        I've been coming to this gym for 3 year now and
                        I've never been in better shape.The trainers are 
                        amazing and they always push me be my best.
                        I'm so glad to this gym.
                        </p>
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="row test_main">
                <div className="col-12">
                    <div className="row gx-0">
                        <div className="col-md-4 text-center">
                            <img src={img2} alt="" className="img-fluid"/>
                        </div> 
                        <div className="col-md-8">
                            <h5>Panth Patel</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                    </div>
                    <div className="stars py-4">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            </div>
                    <p className="test_p2">
                        I've been coming to this gym for 2 year now and
                        I've never been in better shape.The trainers are 
                        amazing and they always help me for my workout.
                        I'm so glad to this gym.
                        </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="row test_main">
                <div className="col-12">
                    <div className="row gx-0">
                        <div className="col-md-4 text-center">
                            <img src={img3} alt="" className="img-fluid"/>
                        </div> 
                        <div className="col-md-8">
                            <h5>Kush Parmar</h5>
                            <p className="test_p1 pt-1">Happy Customer</p>
                        </div>
                    </div>
                    <div className="stars py-4">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            </div>
                    <p className="test_p2">
                        I've been coming to this gym for 3.5 year now and
                        I've never been in better shape.The trainers are 
                        amazing and they always push me be my best.
                        
                        </p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>

          </div>
         </div>
         </div>
          </div>
</div>
  </>
  )
}

export default Testimonial