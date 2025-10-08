import React from 'react';
import { useLoaderData } from 'react-router';
import AppsCards from '../Components/AppsCards';

const Apps = () => {
    const data = useLoaderData()

    return (
        <div className='my-12 w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center text-[#001931]'>Our All Applications</h1>
            <p className='text-[#627382] text-center mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='mt-8 flex items-center justify-between'>
                <p className='font-medium md:text-xl text-[#001931]'>({data.length}) Apps Found</p>
                <label className="input w-40 md:w-auto">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Apps" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5'>
                {
                    data.map(item => <AppsCards key={item.id} item={item}></AppsCards>)
                }
            </div>
        </div>
    );
};

export default Apps;