import React from 'react';

const Blog = ({blog}) => {
     const {cover,title,author,author_img,reading_time,posted_date,hashtags} = blog
    return (
        <div className='mb-3'>
            <img className='w-full' src={cover} />

             <div className='flex justify-between items-center my-5'>
                <div className='flex items-center'>
                     <img className='w-14' src={author_img} />
                     <div className='ml-4'>
                        <p className='font-bold text-lg'>{author}</p>
                        <p>{posted_date}</p>
                     </div>
                </div>

                 <div>
                    <p>{reading_time} min read</p>
                 </div>

             </div>

            <h3 className='text-3xl font-bold mb-3'>{title}</h3>
            {
                hashtags.map(has => <span className='text-gray-500 font-medium'> # {has} </span>)
            } <br />
            <button className='text-blue-500 my-3 underline'>Mark as Read</button>
        </div>
    );
};

export default Blog;