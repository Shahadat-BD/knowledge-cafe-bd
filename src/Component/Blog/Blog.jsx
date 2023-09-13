import React from 'react';
import {BsBookmark } from 'react-iconS/bs';

const Blog = ({blog, handleBookMark,handleMarkRead}) => {
     const {cover,title,author,author_img,reading_time,posted_date,hashtags,id} = blog
    return (
        <div className='mb-3'>
            <img className='w-full' src={cover} />

             <div className='flex justify-between items-center my-5'>
                <div className='flex items-center'>
                     <img className='w-14' src={author_img} />
                     <div className='ml-4'>
                        <p className='font-bold text-lg'>{author}</p>
                        <p>{posted_date} </p>
                     </div>
                </div>

                 <div className='flex items-center'>
                    <p className='mr-2 text-gray-400 font-medium'>{reading_time} min read</p>
                    <BsBookmark className='cursor-pointer' onClick={()=>handleBookMark(blog,reading_time)}></BsBookmark>
                 </div>

             </div>

            <h3 className='lg:text-3xl md:text-2xl text-xl font-bold mb-3'>{title}</h3>
            {
                hashtags.map((has,idx) => <span key={idx} className='text-gray-500 font-medium'> # {has} </span>)
            } <br />
            <button className='text-blue-500 my-3 underline' onClick={()=>handleMarkRead(id,reading_time)}>Mark as Read</button>
        </div>
    );
};

export default Blog;