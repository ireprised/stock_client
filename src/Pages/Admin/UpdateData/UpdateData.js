import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';

const UpdateData = () => {
    const {id} = useParams()
    const { register, handleSubmit} = useForm();
    const [singleItem,setSingleItem] = useState({})
    const [showChat,setShowChart] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:7000/data/${id}`)
        .then(res => res.json())
        .then(data => setSingleItem(data))
    },[])
    // console.log(singleItem)

    const onSubmit = data => {
        const newData = {...data}
        newData.sQ = data.sQ ? data.sQ : singleItem?.sQ
        newData.delivery = data?.delivery ? data?.delivery : singleItem?.delivery
        newData.sellPrice = data?.sellPrice ? data?.sellPrice : singleItem?.sellPrice
        newData.rQ = data?.rQ ? data?.rQ : singleItem?.rQ
        newData.damagePrice = data?.damagePrice ? data?.damagePrice : singleItem?.damagePrice
        setShowChart(true)
        fetch(`http://localhost:7000/data/${id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount > 0) {
                alert('Data Updated')
            }

        })
    }
    return (
            <div className='griD d-flex align-items-center justify-content-center'>
            <Container>
            <div className='w-75 mx-auto border px-3 pt-5'>
            <h1 className='text-center mb-3 bg-primary p-3 text-light'>আপডেট ডাটা</h1>
                    <form className="text-start w-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label>কার্টন ডেলিভারি পরিমান</label>
                            <input  placeholder='কার্টন ডেলিভারি পরিমান' className='form-control rounded p-2' {...register("delivery")} />
                        </div>
                        <div className='mb-3'>
                            <label>সর্বমোট বিক্রিত কার্টন</label>
                            <input  placeholder='সর্বমোট বিক্রিত কার্টন' className='form-control rounded p-2' {...register("sQ")} />
                        </div>
                        <div className='mb-3'>
                            <label>বিক্রয় মূল্য</label>
                            <input  placeholder='বিক্রয় মূল্য'  className='form-control rounded p-2' {...register("sellPrice")} />
                        </div>
                        <div className='mb-3'>
                            <label>রিটার্ন কার্টন</label>
                            <input placeholder='রিটার্ন কার্টন' className='form-control rounded p-2' {...register("rQ")} />
                        </div>
                        <div className='mb-3'>
                            <label>ড্যামেজ মূল্য</label>
                            <input placeholder='ড্যামেজ মূল্য' className='form-control rounded p-2' {...register("damagePrice")} />
                        </div>
                        <div className="text-end w-100 mb-3">
                            <input className='rounded px-3 border-0 btn-primary py-2' value={'Add export data'} type="submit" />
                        </div>
                    </form> 
            </div>
            </Container>
        </div>
    );
};

export default UpdateData;