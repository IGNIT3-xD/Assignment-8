import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='grid place-content-center my-40 col-span-1 md:col-span-3 lg:col-span-4'>
            <GridLoader
                color="#4712c2"
                size={20}
            />
        </div>
    );
};

export default Loading;