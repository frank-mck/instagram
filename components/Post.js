import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
 
function Post({ id, username, userImg, caption, img }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* header     */}
      <div className='flex items-center p-5'>
        <img src ={userImg} alt='post'
        className='rounded-full h-12 w-12 object-contain border p-1 mr-3' />
        <p className='flex-1 font-bold' >
          {username}
        </p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* img */}
      <img src={img} className='object-cover w-full' alt='' />

      {/* buttons */}

      {/* comments */}

      {/* input box */}

    </div>
  )
}

export default Post
