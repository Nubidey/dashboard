import React from 'react'
import { AiFillDollarCircle, AiOutlineShareAlt, AiOutlineStar} from "react-icons/ai"
import { SlLike } from "react-icons/sl"
const TopCards = (item) => {
  const {key, icon, value}= item.item
  return (<div className='col-span-4'>
    <div className='flex flex-row mx-0 my-4'>
    <div className='flex flex-col bg-white justify-between border p-5 hover:bg-blue-950 hover:text-white shadow-lg gap-6'>
        <div className='flex row gap-28'>
        <p className='text-lg'>{key}
        </p>
      {icon}
       
        </div>
        <div className=''>
            <p className='text-5xl justify-center'> {value}</p>
            </div>
        </div>

        {/* <div className='flex flex-col bg-white justify-between border p-5 hover:bg-blue-950 hover:text-white shadow-lg'>
        <div className='flex row gap-16'>
        <p className='text-lg'>Shares
        </p>
        <AiOutlineShareAlt id=''/>
       
        </div>
        <div>
            <p className='text-5xl justify-center'> 2434</p>
            </div>
        </div>
    

        <div className='flex flex-col bg-white justify-between border p-5 hover:bg-blue-950 hover:text-white shadow-lg'>
        <div className='flex row gap-16'>
        <p className='text-lg'>Likes
        </p>
        <SlLike id=''/>
       
        </div>
        <div>
            <p className='text-5xl justify-center'> 2434</p>
            </div>
        </div>


        <div className='flex flex-col bg-white justify-between border p-5 hover:bg-blue-950 hover:text-white shadow-lg gap-5'>
        <div className='flex row gap-16'>
        <p className='text-lg'>Ratings
        </p>
        <AiOutlineStar id=''/>
       
        </div>
        <div>
            <p className='text-5xl justify-center'> 2434</p>
            </div>
        </div> */}
    </div>
    </div>
    
  )
}

export default TopCards;