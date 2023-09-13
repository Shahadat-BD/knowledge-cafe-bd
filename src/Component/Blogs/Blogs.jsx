import React, { useEffect, useState } from 'react';
import image from '../../assets/Ellipse 1 (1).png'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [bookMark ,setBookMark] = useState([])
    const [readingTime,setReadingTime] =  useState(0)

    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const handleBookMark = (blog,reading_time) => {
        const newBookMark = [...bookMark, blog]
              setBookMark(newBookMark)
        const allBookReadingTime =  readingTime + reading_time
              setReadingTime(allBookReadingTime)
    }

    const handleMarkRead =(id,reading_time) => {
       const rainingBook =   bookMark.filter(rainingBookRead => rainingBookRead.id !== id)
             setBookMark(rainingBook)
       const allBookReadingTime =  readingTime - reading_time
             setReadingTime(allBookReadingTime)
    }

    return (
        <div className='lg:w-[70%] w-[90%] m-auto'>
             <div className='flex justify-between items-center my-5 pb-5 border-b-2'>
                 <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                 <img className='w-14' src={image} />
             </div>
             
             <div className='flex lg:flex-row flex-col   gap-5'>
             <div className='lg:w-2/3'>
                 {
                 blogs.map(blog => <Blog key={blog.id} blog={blog} handleMarkRead={handleMarkRead}  handleBookMark={ handleBookMark}></Blog>)
                 }
             </div>
              <div className='lg:w-2/6'>
                   <div className='bg-blue-50 mb-2 p-3 rounded-md'>
                     <h1 className='font-bold text-lg text-blue-500'>Spend time on read : {readingTime} min  </h1>
                   </div>
                    <div className='bg-gray-100 p-5 rounded-md'>
                       <h3 className='text-lg font-bold'> Bookmarked Blogs : {bookMark.length} </h3>
                        {
                            bookMark.map((bookMark,idx) => <BookMark key={idx} bookMark={bookMark}></BookMark> )
                        }
                    </div>
             </div>
             </div>
        </div>
    );
};

export default Blogs;