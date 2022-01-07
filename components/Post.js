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
  ChatIcon,
  BookmarkAltIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from 'next-auth/react';
 
function Post({ id, username, userImg, caption, img }) {
  const {data: session } = useSession();
  
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
      {session && (
        <div className='flex justify-between pt-4 px-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn' />

        </div>
        <BookmarkAltIcon className='btn' />
      </div>
      )}
      

      {/* caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      {session && (
        <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input 
          type ='text' 
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none' />
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
      )}
      

    </div>
  )
}

export default Post
