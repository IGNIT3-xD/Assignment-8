import React from 'react';
import PlaystoreLogo from '../assets/resources/playstore.png'
import AppstoreLogo from '../assets/resources/appstore.png'
import HeroImg from '../assets/resources/hero.png'

const Hero = () => {
    return (
        <div className='my-14'>
            <div className='flex flex-col items-center justify-center text-center gap-5 w-11/12 mx-auto'>
                <h1 className='text-4xl md:text-5xl font-bold text-[#001931]'>We Build <br /><span className='text-[#632EE3] font-black'>Productive</span> Apps</h1>
                <p className='text-[#627382] lg:w-2/3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex items-center gap-5'>
                    <a href='https://play.google.com/store' target='_blank' className="btn border border-black/10 font-semibold px-4 py-6"><img src={PlaystoreLogo} /> Contribute</a>
                    <a href='https://www.apple.com/app-store/' target='_blank' className="btn border border-black/10 font-semibold px-4 py-6"><img src={AppstoreLogo} /> Contribute</a>
                </div>
                <img className='md:w-2/3 lg:w-1/2 mt-8' src={HeroImg} alt="" />
            </div>
            <div className='p-8 bg-linear-to-l from-[#632EE3] to-[#9F62F2] text-center text-white'>
                <h1 className='text-3xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 mt-8'>
                    <div className='space-y-3'>
                        <p className='opacity-70 font-extralight'>Total Downloads</p>
                        <p className='font-bold text-4xl'>29.6M</p>
                        <p className='opacity-70 font-extralight'>21% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='opacity-70 font-extralight'>Total Reviews</p>
                        <p className='font-bold text-4xl'>906K</p>
                        <p className='opacity-70 font-extralight'>46% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='opacity-70 font-extralight'>Active Apps</p>
                        <p className='font-bold text-4xl'>132+</p>
                        <p className='opacity-70 font-extralight'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;