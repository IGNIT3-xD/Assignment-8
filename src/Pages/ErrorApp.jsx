import React from 'react';
import ErrorImg from '../assets/resources/App-Error.png'

const ErrorApp = () => {
    return (
        <div className='grid place-items-center my-20 w-11/12 mx-auto'>
            <img src={ErrorImg} alt="Error" />
        </div>
    );
};

export default ErrorApp;