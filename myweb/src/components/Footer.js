import React from "react";
import { BsGift, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl ">
          <div className="row align-items-center">
            <div className="col-5 ">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="text-white mb-0">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7 ">
              <div className="input-group  ">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                    <h4 className="text-white mb-4">Contact Us</h4>
                    <div>
                        <div className="social-icons d-flex align-items-center gap-30">
                            <a className="text-white" href="">
                                <BsLinkedin className="fs-4"/>
                            </a>
                            <a className="text-white" href="">
                                <BsInstagram className="fs-4"/>
                            </a>
                            <a className="text-white" href="">
                                <BsGithub className="fs-4"/>
                            </a>
                            <a className="text-white" href="">
                                <BsYoutube className="fs-4"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className="text-white mb-4">Information</h4>
                    <div className="footer-linsk d-flex flex-column">
                        <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                        <Link className="text-white py-2 mb-1">Refund Policy</Link>
                        <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                        <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                        <Link className="text-white py-2 mb-1">Blogs</Link>

                    </div>
                </div>
                <div className="col-3">
                    <h4 className="text-white mb-4">Account</h4>
                    <div className="footer-linsk d-flex flex-column">
                       <Link className="text-white py-2 mb-1">About Us</Link>
                        <Link className="text-white py-2 mb-1">FAQ</Link>
                        <Link className="text-white py-2 mb-1">Contact</Link>
                        <Link className="text-white py-2 mb-1">Size Chart</Link>
                    </div>
                </div>
                <div className="col-2">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <div className="footer-links d-flex flex-column">
                        <Link className="text-white py-2 mb-1">Laptop</Link>
                        <Link className="text-white py-2 mb-1">Headphones</Link>
                        <Link className="text-white py-2 mb-1">Tablets</Link>
                        <Link className="text-white py-2 mb-1">Match</Link>
                        
                    </div>
                </div>
            </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              {" "}
              &copy; {new Date().getFullYear()}; Powered by{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
