import faker from 'faker';
import React, { useState, useEffect } from 'react';
import Story from './Story';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

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
      {suggestions.map(profile => (
        <Story 
        key={profile.id} 
        image={profile.avatar} 
        username={profile.username}
         />
      ))}
    </div>
  )
}

export default Stories
