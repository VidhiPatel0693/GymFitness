import React from 'react'
import logo from "../Assets/logo_main1.png";

const Footer = () => {
  return (
   <>
    <div className="container-fluid Footer pt-5">
        <div className="container">
          <div className="row gx-0 py-4 footer_row1">
            <div className="col-md-2">
                  <div className="footer_col1">
                    <h5 className="ft_h5">Company</h5>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Why Us</a>
                      </li>
                      <li>
                        <a href="#">Security</a>
                      </li>
                      <li>
                        <a href="#">Partnership</a>
                      </li>
                    </ul>
                  </div>
            </div>
            <div className="col-md-2">
                  <div className="footer_col1">
                  <h5 className="ft_h5">Categories</h5>
                    <ul>
                      <li>
                        <a href="/BasicYoga">Basic Yoga</a>
                      </li>
                      <li>
                        <a href="/StrengthTraining">Strength Training</a>
                      </li>
                      <li>
                        <a href="/BodyBuilding">Body Building</a>
                      </li>
                      <li>
                        <a href="/WeightLoss">Weight Loss</a>
                      </li>
                    </ul>
                    </div>  
            </div>
            <div className="col-md-2">
                  <div className="footer_col1">
                  <h5 className="ft_h5">Help</h5>
                    <ul>
                      <li>
                        <a href="/Account">Account</a>
                      </li>
                      <li>
                        <a href="/SupportCenter">Support Center</a>
                      </li>
                      <li>
                        <a href="/PrivacyPolicy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/TermsAndCondition">Terms And Condition</a>
                      </li>
                    </ul>
                  </div>
            </div>
            <div className="col-md-2">
                <div className="footer_col2">
                  <h5 className="ft_h5">Contact Us</h5>
                  {/* ************************* */}
                  <div className="row pb-3">
                    <div className="col-2">
                      <i className="fa-solid fa-phone"></i>

                    </div>
                    <div className="col-10">
                       <p>+91 (6549873201)</p>
                    </div>

                  </div>
                  {/* ************************* */}
                  <div className="row pb-3">
                    <div className="col-2">
                      <i className="fa-solid fa-envelope"></i>

                    </div>
                    <div className="col-10">
                      <p> xyz123@gmail.com</p>
                    </div>

                  </div>
                  {/* ************************* */}
                  <div className="row pb-3">
                    <div className="col-2">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="col-10">
                      <p>Chikhli,Navsari,Gujarat</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-4">
                 <div className="footer_col3">
                  <h5 className="ft_h5"> Subscribe Our NewsLetter</h5>
                  <form action="#">
                  <div className="input-group mb-3">
                         <input type="email" className="form-control" required
                            placeholder="Enter Your Email"/>
                              <button className="" type="submit" id="button-addon2">
                                <i className="fa-solid fa-paper-plane"></i>
                              </button>
                         </div>
                  </form>
                  <p className='footer_col2'> Never miss on updates & news href your email. </p>
                 </div>
            </div>
          </div>
          {/* ************************************* */}
          <div className="row gx-0 footer_row2 align-items-center py-3">
            <div className="col-md-3">
              <img src={logo} alt="" className="img-fluid footer_img"/>
            </div>
            <div className="col-md-6 text-center">
              @2024 <span>(xyz)</span>.All Copyrights reserved.
            </div>
            <div className="col-md-3 text-end">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          {/* *************************************** */}
        </div>
      </div>
    </>
  )
}
  
export default Footer