import React from 'react';

const BookMark = ({bookMark}) => {
    return (
        <div className='bg-white rounded-lg p-5 mt-3'>
            <p className='text-blue-500 font-bold'>{bookMark.reading_time} min read</p>
              <h1 className='font-semibold'>{bookMark.title}</h1>
        </div>
    );
};

export default BookMark;