import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='justify-between px-0 pt-4'>
      <div className='text-4xl flex-row row-span-8'>
        <h2>Dashboard User
          <button>
           <div class="absolute top-6 right-5 h-16 w-16">
           <AiOutlineMenu className='hover:bg-gray-500'/>
            </div>

            
            </button>
        </h2>
      </div>
    </div>
  )
}

export default Header;