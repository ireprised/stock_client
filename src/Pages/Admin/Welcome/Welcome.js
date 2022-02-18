import React from 'react';
import { Container } from 'react-bootstrap';
import Chart1 from './Chart1';
import Chart2 from './Chart2';

const componentName = () => {
    return (
        <Container>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <h3>This is for test</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic facere. Impedit fugit qui praesentium libero suscipit sunt tempore similique officia ipsam consequatur in, dicta facere provident reiciendis mollitia, non voluptatem unde saepe excepturi natus, molestiae ad quod obcaecati. Nihil ipsa expedita similique, dolores nisi nulla molestias voluptatem reiciendis in.</p>
                </div>
                <div className="col-12 col-md-6">
                    <Chart2/>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <Chart1/>
                </div>
                <div className="col-12 col-md-6 text-end">
                <h3>This is for test</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic facere. Impedit fugit qui praesentium libero suscipit sunt tempore similique officia ipsam consequatur in, dicta facere provident reiciendis mollitia, non voluptatem unde saepe excepturi natus, molestiae ad quod obcaecati. Nihil ipsa expedita similique, dolores nisi nulla molestias voluptatem reiciendis in.</p>
                </div>
            </div>
        </Container>
    );
};

export default componentName;