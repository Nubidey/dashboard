import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { auth } from "../utils/firebase";
import { Dropdown } from '../components/Dropdown';




const Header = () => {
  return (
    <div className='justify-between px-0 pt-4 mx-4'>
      <div className='text-4xl flex-row row-span-8'>
        <h2>Dashboard User
        
           <div class="absolute top-4 right-2 h-16 w-10">
         
          <button>
           <AiOutlineMenu className='hover:bg-gray-500'/>
           <div className='flex  hover:visible'>
           <button onClick={() => auth.signOut()}>Sign out</button>
            <dropdown/>
           
           
           </div>
          </button>
           
            </div>

            
           
        </h2>
      </div>
    </div>
  )
}

export default Header;

