import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './addProduct.css'

const AddProduct = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/addNewProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your data submited Successfully..!');
                    navigate('/')
                }
            })
    };
    return (
        <div className="container mt-5">
            <div className="section-title text-center">
                <h2 className='mb-5'>Add New Product</h2>
            </div>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="product-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Product Name' {...register("name")} />
                            <input type='url' placeholder='product image url' {...register("img", { required: true })} />
                            <input placeholder='Product Price' {...register("price")} />
                            <input type='number' placeholder='Rating Number' {...register("start")} />
                            <textarea cols='30' rows='5' placeholder='Product Description' {...register("desc")} />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input style={{ fontSize: '18px', fontWeight: '600', width: '25%', borderRadius: '5px' }} className='btn-success' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;