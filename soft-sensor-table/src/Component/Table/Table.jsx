import React, { useEffect, useState } from 'react';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';

const Table = ({ exceptName, exceptCity, exceptEmail, exceptJoin, exceptRole }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('tableTestData.json')
            .then(res => res.json())
            .then(data => setTableData(data))
    }, [])

    return (
        <div className='container mx-auto flex justify-center py-16'>
            <table className='w-4/6'>
                <thead>
                    <tr className='border'>
                        <th className={`border text-left py-2 px-4 ${exceptName === 'show' ? '' : 'hidden'}`}>
                            <span className='flex items-center'>Name <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 ${exceptCity === 'show' ? '' : 'hidden'}`}>
                            <span className='flex items-center'>City <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 ${exceptEmail === 'show' ? '' : 'hidden'}`}>
                            <span className='flex items-center'>Email Address <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 ${exceptJoin === 'show' ? '' : 'hidden'}`}>
                            <span className='flex items-center'>Joining Date <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 ${exceptRole === 'show' ? '' : 'hidden'}`}>
                            <span className='flex items-center'>Role <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data, index) =>
                            <tr className='border'>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptName === 'show' ? '' : 'hidden'}`}>{data.person.name}</td>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptCity === 'show' ? '' : 'hidden'}`}>{data.city}</td>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptEmail === 'show' ? '' : 'hidden'}`}>{data.email}</td>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptJoin === 'show' ? '' : 'hidden'}`}>{data.joiningDate}</td>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptRole === 'show' ? '' : 'hidden'}`}>{data.role}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;