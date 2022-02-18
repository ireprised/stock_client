import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageProducts = () => {
    const { register, handleSubmit} = useForm();
    const date = new Date()
    const onSubmit = data => {
        const newData = {...data}
        newData.rQ = '';
        newData.sQ = '';
        newData.damagePrice = '';
        newData.sellPrice = '';
        newData.delivery = '';
        newData.date = date.toLocaleDateString();
        fetch('http://localhost:7000/data',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Added your Product')
            }
        })
    }
    return (
        <div className='griD d-flex align-items-center justify-content-center'>
            <Container>
            <div className='w-75 mx-auto border p-3'>
                <h1 className='text-center mb-3 bg-primary p-3 text-light'>পন্য আমদানি</h1>
                    <form className="text-start w-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label>পন্যের নাম</label>
                            <input placeholder='পন্যের নাম' className='form-control rounded p-2' {...register("productName", { required: true })} />
                        </div>
                        <div className='mb-3'>
                            <label>কার্টন সংখ্যা</label>
                            <input placeholder='কার্টন সংখ্যা' className='form-control rounded p-2' {...register("cQ", { required: true })} />
                        </div>
                        <div className='mb-3'>
                            <label>কার্টনের ভিতরের পরিমাণ</label>
                            <input placeholder='কার্টনের ভিতরের পরিমাণ' className='form-control rounded p-2' {...register("cIQ", { required: true })} />
                        </div>
                        <div className='mb-3'>
                            <label>সর্বমোট ক্রয়মূল্য</label>
                            <input placeholder='সর্বমোট ক্রয়মূল্য' className='form-control rounded p-2' {...register("cost", { required: true })} />
                        </div>
                        <div className="text-end w-100">
                            <input className='rounded px-3 border-0 btn-primary py-2 text-end' value={'Add Product'} type="submit" />
                        </div>
                    </form>
            </div>
            </Container>
        </div>
    );
};

export default ManageProducts;