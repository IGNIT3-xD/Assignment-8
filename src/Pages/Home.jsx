import React from 'react';
import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards';
import { Link, useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    // console.log(data);
    const homeCardsData = data.slice(0, 8)

    return (
        <div className='my-14'>
            <Hero></Hero>
            <p className='text-[#001931] text-center text-2xl md:text-4xl font-bold mb-2'>Trending Apps</p>
            <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>

            <div className='my-12 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    homeCardsData.map(item => <HomeCards key={item.id} item={item}></HomeCards>)
                }
            </div>

            <div className='grid place-items-center'>
                <Link to={'/apps'} className='btn bg-linear-to-l from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;