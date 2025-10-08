import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='grid place-content-center my-40'>
            <GridLoader
                color="#4712c2"
                size={20}
            />
        </div>
    );
};

export default Loading;