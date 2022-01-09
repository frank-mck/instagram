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
import { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
 
function Post({ id, username, userImg, caption, img }) {
  const {data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(
    () =>  onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
        ),
      (snapshot) => setComments(snapshot.docs)      
  ), [db]);

  const sendComment = async (e) => {
    e.preventDefault();
    
    // copy comment to local variable to make it reponsive rather than awaiting response first
    // will update to a .then chain to catch errors and restore the value;
    const commentTosend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentTosend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }


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

      {comments.length > 0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map(comment => (
            <div key ={comment.id} className='flex items-center space-x-2 mb-3'>
              <img
               src={comment.data().userImage}
               alt=""
               className='h-7 rounded-full'
              />
              <p className='text-sm flex-1'>
                <span className='font-bold'>{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input 
          type ='text' 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none' />
        <button
          type='submit' 
          disabled={!comment.trim()} 
          className='font-semibold text-blue-400'
          onClick={sendComment}
         >Post</button>
      </form>
      )}       
    </div>
  )
}

export default Post
