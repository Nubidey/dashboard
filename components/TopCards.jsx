import React from 'react'
import { AiFillDollarCircle, AiOutlineShareAlt, AiOutlineStar} from "react-icons/ai"
import { SlLike } from "react-icons/sl"
const TopCards = () => {
  return (
    <div className='flex flex-row mx-0 gap-8 my-4 '>
        <div className='flex flex-col bg-white justify-between w-full border p-3 hover:bg-blue-950 hover:text-white shadow-lg'>
        
            <p className='text-lg mt-1 ml-2 flex'>Earnings
            <AiFillDollarCircle className='col-start-5 flex flex-row text-2xl ml-28'/>
            
            </p>
            
            <p className='text-5xl justify-center mb-4 ml-6 mt-4'>$ 682</p>

    
        </div>

        <div className='flex flex-col bg-white justify-between w-full border p-3 hover:bg-blue-950 hover:text-white shadow-lg'>
        <p className='text-lg mt-1 ml-2 flex'>Shares
        <AiOutlineShareAlt className='col-start-5 flex flex-row text-2xl ml-28'/>
        </p>
            <p className='text-5xl justify-center mb-4 ml-6 mt-4'> 2434</p>
        </div>
    

        <div className='flex flex-col col-span-1 bg-white justify-between w-full border p-4  hover:bg-blue-950  hover:text-white shadow-lg'>

        <p className='text-lg mt-1 ml-2 flex'>Likes</p>
            <p className='text-5xl justify-center mb-4 ml-6 mt-4'>1245
            < SlLike  className='col-start-5 flex flex-row text-2xl ml-28'/>
            
            </p>


        </div>


       <div className='flex flex-col col-span-1 bg-white justify-between w-full border p-2  hover:bg-blue-950  hover:text-white shadow-lg'>
    
       <p className='text-lg mt-1 ml-2 flex'>Ratings</p>
            <p className='text-5xl justify-center mb-4 ml-6 mt-4'>8.5
            <AiOutlineStar className='col-start-5 flex flex-row text-2xl ml-28'/>
            </p>
        </div>
    </div>
  )
}

export default TopCards;