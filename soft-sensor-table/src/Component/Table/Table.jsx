import React, { useEffect, useState } from 'react';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import tableTestData from '../../../public/tableTestData.json'

const Table = ({ exceptName, exceptCity, exceptEmail, exceptJoin, exceptRole }) => {
    const [tableData, setTableData] = useState([]);
    const [orderData, setOrderData] = useState("ASC");
    useEffect(() => {
        fetch('tableTestData.json')
            .then(res => res.json())
            .then(data => setTableData(data))
    }, [])

    const handleSort = (col) => {
        if (orderData === "ASC") {
            const sortedData = [...tableData].sort((a, b) =>
            a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1
            )
            setTableData(sortedData)
            setOrderData("DSC")
        }
        if (orderData === "DSC") {
            const sortedData = [...tableData].sort((a, b) =>
                a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1
            )
            setTableData(sortedData)
            setOrderData("ASC")
        }
    }

    return (
        <div className='container mx-auto flex justify-center py-16'>
            <table className='w-4/6'>
                <thead>
                    <tr className='border'>
                        <th className={`border text-left py-2 px-4 cursor-pointer ${exceptName === 'show' ? '' : 'hidden'}`} onClick={() => handleSort('name')}>
                            <span className='flex items-center'>Name <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 cursor-pointer ${exceptCity === 'show' ? '' : 'hidden'}`} onClick={() => handleSort('city')}>
                            <span className='flex items-center'>City <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 cursor-pointer ${exceptEmail === 'show' ? '' : 'hidden'}`} onClick={() => handleSort('email')}>
                            <span className='flex items-center'>Email Address <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 cursor-pointer ${exceptJoin === 'show' ? '' : 'hidden'}`} onClick={() => handleSort('joiningDate')}>
                            <span className='flex items-center'>Joining Date <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                        <th className={`border text-left py-2 px-4 cursor-pointer ${exceptRole === 'show' ? '' : 'hidden'}`} onClick={() => handleSort('role')}>
                            <span className='flex items-center'>Role <HiOutlineArrowsUpDown className='ml-2' /></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data, index) =>
                            <tr className='border'>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptName === 'show' ? '' : 'hidden'}`}>
                                    <span className='flex items-center gap-3'>
                                        <img src={data.person.avatar} alt="" />
                                        {data.person.name}
                                    </span>
                                </td>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptCity === 'show' ? '' : 'hidden'}`}>{data.city}</td>
                                <td className={`${index % 2 == 0 ? 'active' : ''} ${exceptEmail === 'show' ? '' : 'hidden'} underline text-blue-500`}> <a href={`mailto:${data.email}`}>{data.email}</a> </td>
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