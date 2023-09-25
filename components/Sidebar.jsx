import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMail, HiChartPie} from 'react-icons/hi';
import {FiPieChart } from 'react-icons/fi';
import { CgProfile} from 'react-icons/cg';
import { BiSolidUserCircle} from 'react-icons/bi';
import { GoFileDirectoryFill } from 'react-icons/go'
import { MdHome, MdEmail} from 'react-icons/md';
import { TbBellRinging2Filled} from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';
const Sidebar = (props) => {
  function passData (e){
    console.log(e)
    props.func(e.target.innerText);
  }
  return (
    <div className='flex mx-0 my-0  flex-row'>
        <div className=' w-80 h-full p-4 bg-blue-950 flex flex-col justify-between items-center'>
        <div className='flex flex-col'>

        <Link href = '/'>
            
            <div className='flex flex-row justify-center text-white'>
             <BiSolidUserCircle size = {100} style={{boxShadow:'100'}} />
            </div>
            </Link>
            <div className='justify-center items-center'>
                <p className='text-4xl text-white my-2 px-4 text-center'>JOHN DON</p>
                <p className='text2xl font-thin text-white px-4 text-center'>johndon@company.com
                <br/><br/><br/></p>
            </div>
    

            
            <button onClick={passData}>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4  hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0 ">
                <MdHome className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                dashboard
                </h3>
              </div>       
          </button>      
            
            <button onClick={passData}>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <GoFileDirectoryFill className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                files
                </h3>
              </div> 
              </button>
           <button onClick={passData}>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <MdEmail className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                message
                </h3>
              </div> 
              </button>
            <button>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <TbBellRinging2Filled className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                <button onClick={passData}>notification</button>
                </h3>
              </div> 
              </button>
           <button>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <FaLocationDot className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                <button onClick={passData}>location</button>
                </h3>
              </div> 
              </button>
           
            
            <div className="flex  mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-0">
                <HiChartPie className="text-3xl text-white group-hover:text-black " />
                <h3 className="text-1xl text-white group-hover:text-white font-thin p-4">
                  graph
                </h3>
              </div> 
            
            
            
            
          


            <span className='border-b-[1-px] border-gray-200 w-full p-2'></span>

        </div>
        </div>
        
    </div>
  );
};
export default Sidebar;
