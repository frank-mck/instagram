function Story({ image, username }) {
  return (
    <div>
      <img src={image} className='h-14 w-14 rounded-full p-{1.5}
       border-red-500 border-2 object-fit cursor-pointer' 
        alt='' img={image} />
      <p className="text-xs w-14 truncate text-center
       hover:scale-110 transition transform duration-200 ease-out">
        {username}
      </p>
    </div>
  )
}

export default Story
