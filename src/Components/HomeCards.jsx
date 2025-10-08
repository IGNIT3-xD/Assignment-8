import React from 'react';
import DownloadIcon from '../assets/resources/icon-downloads.png'
import RatingIcon from '../assets/resources/icon-ratings.png'

const HomeCards = ({ item }) => {
    // console.log(item);
    
    return (
        <div className='shadow-md rounded-md p-4 space-y-3 hover:translate-y-2 transition duration-200'>
            <figure>
                <img className='rounded-md w-full md:w-60 lg:w-11/12 mx-auto' src={item.image} alt="" />
            </figure>
            <div className='space-y-3'>
                <p className='font-medium text-[#001931]'>{item.title}</p>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] p-1.5 rounded-md'><img className='w-4' src={DownloadIcon} />{item.downloads}</p>
                    <p className='flex items-center gap-2 bg-[#F1F5E8] text-[#FF8811] p-1.5 rounded-md'><img className='w-4' src={RatingIcon} />{item.ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCards;