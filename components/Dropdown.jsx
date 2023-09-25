import { AiOutlineCaretDown, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { dropdown } from '@nextui-org/react';


function Dropdown()
{
    const[isOpen, setIsOpen] = useState(false);
return(
    <div className=''>
        <button
         onClick={() => setIsOpen((prev) => !prev)} className=''> 
        <AiOutlineMenu className='hover:bg-gray-500'/>
        Dropdown
        {!isOpen ?(
            <AiOutlineCaretDown className='h-8'/>
        )   :   (
            <AiOutlineCaretDown className='h-8'/>
        )

        }
        </button>
        {isOpen &&(
            <div className='bg-blue-400 absolute'>
                {list.map((item, i) => (
                    <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer'>
                        <h3></h3>
                    </div>

                ))

                }

            </div>
        )}
    </div>
    
);
}
export default dropdown;