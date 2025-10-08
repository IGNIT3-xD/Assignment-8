import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DownloadIcon from '../assets/resources/icon-downloads.png'
import RatingIcon from '../assets/resources/icon-ratings.png'
import ReviewIcon from '../assets/resources/icon-review.png'
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { addApps, getInstalledApps } from '../Utilities/InstalledApps';

const AppsDetails = () => {

    const { id } = useParams()
    const data = useLoaderData()

    const app = data.find(item => item.id === parseInt(id))
    // console.log(app);
    const ratingData = app.ratings.slice().reverse()
    // console.log(ratingData);
    const [isInstalled, setIsInstalled] = useState(false)

    // Fix installed button on reload
    useEffect(() => {
        const installedApps = getInstalledApps();
        if (installedApps.includes(app.id)) {
            setIsInstalled(true)
        }
    }, [app])

    const handleInstalled = () => {
        addApps(app.id)
        setIsInstalled(true)
    }

    return (
        <div className='my-10 mx-auto w-11/12'>
            <div className='flex flex-col md:flex-row gap-8'>
                <figure className='md:bg-white p-2 rounded-md'>
                    <img className='max-w-68 mx-auto' src={app.image} alt="App Icon" />
                </figure>
                <div>
                    <p className='font-bold text-2xl text-[#001931]'>{app.title}</p>
                    <p className='text-sm text-black/50'>Developed By: <span className='text-blue-600 font-bold'>{app.companyName}</span></p>
                    <div className="divider"></div>
                    <div className='flex items-center gap-8 md:gap-12 justify-center'>
                        <div className='space-y-2 grid place-items-center'>
                            <img className='w-10' src={DownloadIcon} alt="" />
                            <p className='font-extralight text-sm'>Downloads</p>
                            <p className='font-bold text-2xl text-[#001931]'>{app.downloads}</p>
                        </div>
                        <div className='space-y-2 grid place-items-center'>
                            <img className='w-10' src={RatingIcon} alt="" />
                            <p className='font-extralight text-sm'>Average Ratings</p>
                            <p className='font-bold text-2xl text-[#001931]'>{app.ratingAvg}</p>
                        </div>
                        <div className='space-y-2 grid place-items-center'>
                            <img className='w-10' src={ReviewIcon} alt="" />
                            <p className='font-extralight text-sm'>Total Reviews</p>
                            <p className='font-bold text-2xl text-[#001931]'>{app.reviews}</p>
                        </div>
                    </div>
                    <button onClick={handleInstalled} disabled={isInstalled} className='btn bg-[#00D390] text-white mt-4'>{isInstalled ? "Installed" : `Install Now (${app.size} MB)`}</button>
                </div>
            </div>

            <div className="divider"></div>

            <div className='my-8 h-72'>
                <h1 className='text-[#001931] font-bold text-xl mb-5'>Ratings</h1>

                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={500}
                        data={ratingData}
                        margin={{
                            top: 25,
                            right: 20,
                            bottom: 20,
                            left: 0,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" barSize={25} fill="green" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="divider mt-14"></div>

            <div>
                <h1 className='text-[#001931] font-bold text-xl'>Description</h1>
                <p className='mt-2 text-black/50'>{app.description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;