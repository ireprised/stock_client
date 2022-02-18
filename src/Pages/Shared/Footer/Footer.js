import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const Footer = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const date = new Date()

        const message = {...data}
        message.date = date.toLocaleDateString()
        message.time = date.toLocaleTimeString()

        fetch('http://localhost:7000/message',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(message)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Your message sent successfully')
            }
        })
        document.querySelector('.name').value = '';
        document.querySelector('.message').value = '';
    }
    return (
        <section className='footer'>
            <Container>
                <div className="row pb-5">
                    <div className="col-12 col-md-3">
                        <h5 className='pb-2  border-3 border-bottom'>Company</h5>
                        <p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum miniquod atque.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className='pb-2  border-3 border-bottom'>Office</h5>
                        <p className='m-0'>Local area name</p>
                        <p>20/7A road JHALKHATHI,Khulna</p>
                        <Link className='text-light'>example@gmail.com</Link>
                        <p>+88-01234567891</p>
                    </div>
                    <div className="col-12 col-md-3">
                    <h5 className='pb-2  border-3 border-bottom'>Links</h5>
                    <p className='m-0'>Home</p>
                    <p className='m-0'>Services</p>
                    <p className='m-0'>Office</p>
                    <p className='m-0'>Login</p>
                    <p className='m-0'>Admin</p>
                    </div>
                    <div className="col-12 col-md-3">
                    <h5 className='pb-2  border-3 border-bottom'>Send message</h5>
                        <form className="text-start w-100" onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Your Name' className='name form-control p-1' {...register("personName", { required: true })} /><br/> 
                            <textarea name="" id="" cols="30" rows="2" placeholder='Your Message' className='message form-control p-1' {...register("message", { required: true })} ></textarea> <br />
                            {/* <input placeholder='Your Email' className='form-control rounded p-1' {...register("message")} /><br/>  */}
                            <input className='px-2 border-0 btn-light py-1 text-secondary' value={'Send Message'} type="submit" />
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Footer;