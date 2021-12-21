import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
        {/* left */}
        <div className='relative hidden lg:inline-grid w-24 '>
          <Image src='https://links.papareact.com/ocw' 
            layout='fill' 
            objectFit='contain'         
          />
        </div> 

        <div className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
          <Image src='https://links.papareact.com/jjm' 
            layout='fill' 
            objectFit='contain'         
          />
        </div>

      {/* middle - search input field */}
      <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounded-md '>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none' >
            <SearchIcon className='h-5 w-5 text-gray-500' />
          </div>
          <input 
          className='bg-gray-50 block w-full pl-10 sm:text-small
          border-gray-300 rounded-md focus:ring-black focus:border-black' 
          type ='text'
          placeholder='Search' />
        </div>
      </div>

      {/* right */}
      <div className='flex items-center justify-end space-x-4'>
        <HomeIcon className='nav-btn' />
        <MenuIcon className='h-6 w-10 md:hidden cursor-pointer' />        
        <div className='relative nav-btn'>
        <PaperAirplaneIcon className='nav-btn' />
          <div className='absolute -top-2 -right-1 text-xs w-5 h-5
           bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
        </div>
        <PlusCircleIcon className='nav-btn' />
        <UserGroupIcon className='nav-btn' />
        <HeartIcon className='nav-btn' />
        <img src ='https://user-images.githubusercontent.com/77457834/146947844-21dbf64d-a1f1-4c94-b98b-170cda67719d.png'
        className='h-10 rounded-full cursor-pointer' alt='profile pic' />
      </div>

      </div>
      
    </div>
  )
}

export default Header
