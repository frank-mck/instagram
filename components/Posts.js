import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post"

const posts = [
  {
    id: '123',
    username: 'frank',
    userImg: 'https://user-images.githubusercontent.com/77457834/146947844-21dbf64d-a1f1-4c94-b98b-170cda67719d.png',
    img: 'https://links.papareact.com/ocw',
    caption: 'Hi my name a Frank'
  },
  {
    id: '12',
    username: 'Amy',
    userImg: 'https://user-images.githubusercontent.com/77457834/146947844-21dbf64d-a1f1-4c94-b98b-170cda67719d.png',
    img: 'https://links.papareact.com/ocw',
    caption: 'Hi my name a Amy'
  }
]

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
      setPosts(snapshot.docs);
    });

    // Clean up useEffect funtion everytime the snapshot is called to update the docs
    // This means that we are never going to attach anymore than one realtime listener
    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post 
        key={post.id}
        id={post.id}
        username = {post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
