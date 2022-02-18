import React, { useEffect, useState } from 'react';
import {  Container} from 'react-bootstrap';
// import products from '../../product.json'

const Feature = () => {
    
    return (
        <section className='py-5'>
        <Container className='pt-5'>
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
             <h4>About Us</h4>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eius impedit quos odit, quidem consectetur placeat, nostrum sed rem ad eos possimus accusantium aperiam soluta nulla in dolore suscipit fugit consequuntur corporis culpa! Omnis porro doloremque expedita alias aliquam. Hic voluptatem pariatur possimus ea voluptatibus blanditiis dicta libero dolorum minus.</p>
           </div>
           <div className="col-12 col-md-6">
             <img src="https://www.microsoft.com/en-us/microsoft-365/blog/uploads/sites/2/2012/06/Excel-charts-11.png" alt="" className="w-100" />
           </div>
          </div>
           
           
        </Container>
        </section>
    );
};

export default Feature;