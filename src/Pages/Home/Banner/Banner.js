import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section className='banner'>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 text-light">
                            <h5 className="mb-5">Agency Advice</h5>
                            <h1 className="fw-bold mt-2">Marketing Agency For <br/> Small Business</h1>
                            <p></p>
                            <div className="d-flex mt-5 align-items-center">
                                <Link className="me-5 text-decoration-none py-2 px-4 bg-danger fs-5 text-light rounded">Read More</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="banner_img">
                                <img src='https://i.ibb.co/2gxrgQc/landing.jpg' alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;