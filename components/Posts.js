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
