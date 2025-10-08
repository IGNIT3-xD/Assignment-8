import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { appsUninstall, getInstalledApps } from './../Utilities/InstalledApps';
import DownloadIcon from '../assets/resources/icon-downloads.png'
import RatingIcon from '../assets/resources/icon-ratings.png'

const Installation = () => {
    const data = useLoaderData()
    const [installed, setInstalled] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        const storedApps = getInstalledApps();
        const apps = data.filter(app => storedApps.includes(app.id))
        setInstalled(apps);
    }, [data])

    // installed.forEach(f => console.log(f.downloads.replace(/[^0-9.]/g, "")))

    // console.log(installed);

    const handleSort = (type) => {
        setSort(type)

        if (type === 'High to Low') {
            const highToLow = [...installed].sort((a, b) => b.downloads.replace(/[^0-9.]/g, "") - a.downloads.replace(/[^0-9.]/g, ""))
            setInstalled(highToLow)
        }

        if (type === 'Low to High') {
            const lowToHigh = [...installed].sort((a, b) => a.downloads.replace(/[^0-9.]/g, "") - b.downloads.replace(/[^0-9.]/g, ""))
            setInstalled(lowToHigh)
        }
    }

    const handleUninstall = (id) => {
        // console.log(id);
        setInstalled(prev => prev.filter(app => app.id !== id))
        appsUninstall(id)
    }

    return (
        <div className='my-10 mx-auto w-11/12'>
            <h1 className='text-4xl font-bold text-center text-[#001931]'>Your Installed Apps</h1>
            <p className='text-[#627382] text-center mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='my-5 flex items-center justify-between'>
                <p className='text-xl font-bold text-[#001931]'>({installed.length}) Apps Found</p>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-black/50">Sort by size {sort}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
                        <li onClick={() => handleSort('High to Low')}><a>High → Low </a></li>
                        <li onClick={() => handleSort('Low to High')}><a>Low → High</a></li>
                    </ul>
                </div>
            </div>

            <div className='space-y-4'>
                {
                    installed.map(app =>
                        <div key={app.id} className='bg-white p-2 rounded-md shadow-sm flex justify-between items-center'>
                            <div className='flex gap-5'>
                                <img className='w-20 rounded-md p-1 bg-black/5' src={app.image} />
                                <div className='flex flex-col justify-around'>
                                    <p className='font-bold text-[#001931]'>{app.title}</p>
                                    <div className='flex items-center justify-around gap-5 text-sm'>
                                        <span className='flex items-center text-green-400 gap-2'><img className='w-4' src={DownloadIcon} /> {app.downloads}</span>
                                        <span className='flex items-center text-green-500 gap-2'><img className='w-4' src={RatingIcon} /> {app.ratingAvg}</span>
                                        <span className='flex items-center text-black/50 gap-2'>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleUninstall(app.id)} className='btn bg-[#00D390] text-white mt-4'>Uninstall</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Installation;