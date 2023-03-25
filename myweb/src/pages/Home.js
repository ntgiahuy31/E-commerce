import React from "react"
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <div>
           <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner  position-relative">
                            <img 
                            src="images/main-banner-1.jpg"
                            className="img-fluid rounded-3"
                            alt="main banner" />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS</h4>
                                <h5>iPad </h5>
                                <p>From $999.00 or $41%/month</p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-1-center">
                        <div className="small-banner position-relative">
                            <img 
                            src="images/catbanner-01.jpg"
                            className="img-fluid rounded-3"
                            alt="small banner" />
                            <div className="small-banner-content position-absolute">
                                <h4>BEST SALE</h4>
                                <h5>Laptops Max </h5>
                                <p>From $999.00 <br/> or $41%/month</p>
                                
                            </div>
                        </div>
                        <div className="small-banner  position-relative">
                            <img 
                            src="images/catbanner-02.jpg"
                            className="img-fluid rounded-3"
                            alt="small banner" />
                            <div className="small-banner-content position-absolute">
                                <h4>NEW ARRIVAL</h4>
                                <h5>iPad Air </h5>
                                <p> $49.99/mo. for 12 mo</p>
                                
                            </div>
                        </div>
                        <div className="small-banner  position-relative">
                            <img 
                            src="images/catbanner-03.jpg"
                            className="img-fluid rounded-3"
                            alt="small banner" />
                            <div className="small-banner-content position-absolute">
                                <h4>15% OFF</h4>
                                <h5>Smartwatch 7 </h5>
                                <p> Shop the latest band <br/> styles and colors </p>
                            
                            </div>
                        </div>
                        <div className="small-banner  position-relative">
                            <img 
                            src="images/catbanner-04.jpg"
                            className="img-fluid rounded-3"
                            alt="small banner" />
                            <div className="small-banner-content position-absolute">
                                <h4>FREE ENGRAVING</h4>
                                <h5>AirPods Max </h5>
                                <p>High-fidelity playback <br/> & ultra-low distortion</p>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
           <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service.png" alt="services"/>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p className="mb-0">From all orders over $100</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15"> 
                                <img src="images/service-02.png" alt="services"/>
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p className="mb-0">Save up to 25%</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-03.png" alt="services"/>
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className="mb-0">Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-04.png" alt="services"/>
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className="mb-0">Get factory defaul price </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-05.png" alt="services"/>
                                <div >
                                    <h6>Secure Payments</h6>
                                    <p className="mb-0">100% Protected Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
           <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                            <div className="d-flex gap-15  align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30  align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
           </section>
           <section className="marquee-wrapper py-5 ">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-08.png" alt="brand" />
                                </div>
                                
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
           </section>
           <section blog-wrapper py-5 home-wrapper-2>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading"> Ours Latest Blogs</h3>
                    </div>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
           </section>
           <section blog-wrapper py-5 home-wrapper-2>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h3 className="section-heading"> Ours Latest Blogs</h3>
                    </div>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
           </section>
        </div>
    )
};

export default Home;