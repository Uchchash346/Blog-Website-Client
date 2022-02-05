import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Blogs.css';

const Blogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/myFirstBlog', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Blog added successfully');
                    reset();
                }
            })
    };
    return (
        <>
            <div className="add-service">
                <h2 className="pt-5 mb-3">Please, add a blog</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder="Description" {...register("description")} />
                    <input placeholder="Price" type="number" {...register("price")} />
                    <input placeholder="image" {...register("image")} />
                    <input placeholder="submit" type="submit" />
                </form>
            </div>
        </>
    );
};

export default Blogs;