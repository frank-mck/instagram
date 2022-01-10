import faker from 'faker';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Story from './Story';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  
  const {data: session} = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }));
    setSuggestions(suggestions);
  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8
     border-gray-20 border rounded-sm overflow-x-scroll scrollbar-thumb-black scrollbar-thin">
      {session && 
        <Story image={session.user.image} username={session.user.username} />
      }
      
      {suggestions.map(profile => (
        <Story 
        key={profile.id} 
        image='https://images.unsplash.com/photo-1640017955477-75b58521007d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
        username={profile.username}
         />
      ))}
    </div>
  )
}

export default Stories
