import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

            <section className='section footer text-white bg-dark '>
                <div className="container py-5 py-md-5 mt-5">
                    <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                                <h6>Contact Information</h6>
                                <hr />
                                <div className='d-flex justify-content-around fs-5'>
                                <p className='test-white mb-1'><i class="fa-brands fa-whatsapp fa-xl"></i></p> 
                                <p className='test-white mb-1'><i class="fa-solid fa-envelope fa-xl"></i></p>
                                </div>
                            </div>
                        
                        <div className="col-md-5 ">
                            <h6>Quick Links</h6>
                            <hr />

                            <div className="buttons d-flex justify-content-center mb-5">
                                <NavLink to="/" className="btn btn-outline-primary me-2">Home</NavLink>
                                <NavLink to="https://www.facebook.com/" className="btn btn-outline-primary me-2"> <i class="fa-brands fa-facebook"></i></NavLink>
                                <NavLink to="https://twitter.com/i/flow/login" className="btn btn-outline-primary me-2"><i class="fa-brands fa-twitter"></i></NavLink>
                                <NavLink to="https://www.instagram.com/" className="btn btn-outline-primary me-2"><i class="fa-brands fa-instagram"></i></NavLink>
                                <NavLink to="https://www.linkedin.com/feed/" className="btn btn-outline-primary me-2"><i class="fa-brands fa-linkedin"></i></NavLink>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Footer;
