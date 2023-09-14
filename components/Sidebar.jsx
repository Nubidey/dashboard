import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMail} from 'react-icons/hi';
import {FiPieChart } from 'react-icons/fi';
import { CgProfile, CgHome } from 'react-icons/cg';
import { GoFileDirectory, GoLocation } from 'react-icons/go'
import {RiNotification4Line } from 'react-icons/ri';
const Sidebar = ({children}) => {
  return (
    <div className='flex mx-0 my-0 items-center flex-row'>
        <div className=' w-80 h-screen p-4 bg-blue-950 flex flex-col justify-between'>
        <div className='flex flex-col'>

        <Link href = '/'>
            
            <div className='flex flex-row text-white p-1 rounded-lg px-10 justify-center'>
             <CgProfile size = {100} />
            </div>
            </Link>
            <div className='justify-center'>
                <p className='text-4xl text-white my-2 px-4'>JOHN DOE</p>
                <p className='text2xl font-thin text-white px-4'>johndon@company.com
                <br/><br/><br/></p>
            </div>
    

            <Link href = '/dashboard'>
            
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <CgHome className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  home
                </h3>
              </div>             
            </Link>
            <Link href = '/'>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <GoFileDirectory className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  files
                </h3>
              </div> 
            </Link>
            <Link href = '/customers'>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <HiOutlineMail className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  messages
                </h3>
              </div> 
            </Link>
            <Link href = '/person'>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <RiNotification4Line className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  notifications
                </h3>
              </div> 
            </Link>
            <Link href = '/'>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <GoLocation className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  location
                </h3>
              </div> 
            </Link>
            <Link href=''>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <FiPieChart className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  graph
                </h3>
              </div> 
            
            
            
            </Link>


            <span className='border-b-[1-px] border-gray-200 w-full p-2'></span>

        </div>
        </div>
        
    </div>
  );
};
export default Sidebar;
