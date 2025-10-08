import React from 'react';
import ErrorImg from '../assets/resources/error-404.png'

const Error404 = () => {
    return (
        <div className='grid place-items-center my-20 w-11/12 mx-auto'>
            <img src={ErrorImg} alt="Error" />
        </div>
    );
};

export default Error404;