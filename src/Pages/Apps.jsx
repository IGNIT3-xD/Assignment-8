import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsCards from '../Components/AppsCards';
import Loading from '../Components/Loading';

const Apps = () => {
    const data = useLoaderData()
    const [search, setSearch] = useState("");
    const [searchLoading, setSearchLoading] = useState(false)
    const [macthedData, setMatchedData] = useState(data)

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    // const validateSearch = search.trim().toLowerCase();
    // console.log(validateSearch);
    // const matchedData = validateSearch ? data.filter(item => item.title.toLowerCase().includes(validateSearch)) : data
    // console.log(matchedData);

    useEffect(() => {
        const validateSearch = search.trim().toLowerCase();

        if (validateSearch) {
            setSearchLoading(true);
        }
        else {
            setMatchedData(data)
            setSearchLoading(false)
            return;
        }

        const loadingTime = setTimeout(() => {
            const filteredData = data.filter(item => item.title.toLowerCase().includes(validateSearch))
            setMatchedData(filteredData)
            setSearchLoading(false)
        }, 500)

        return () => clearTimeout(loadingTime);

    }, [search, data])


    return (
        <div className='my-12 w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center text-[#001931]'>Our All Applications</h1>
            <p className='text-[#627382] text-center mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='mt-8 flex items-center justify-between'>
                <p className='font-medium md:text-xl text-[#001931]'>({macthedData.length}) Apps Found</p>
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
                    <input onChange={handleSearch} type="search" required placeholder="Search Apps" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5'>
                {
                    searchLoading ? <Loading></Loading> :
                        macthedData.length !== 0 ?
                            macthedData.map(item => <AppsCards key={item.id} item={item}></AppsCards>) :
                            <p className='text-5xl text-black/60 font-bold text-center my-10 col-span-1 md:col-span-3 lg:col-span-4'>App Not Found</p>
                }
            </div>
        </div>
    );
};

export default Apps;