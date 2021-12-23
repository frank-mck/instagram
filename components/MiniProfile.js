function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img 
        className="w-16 h-16 rounded-full border p-[2px] mt-14 ml-10"
        src ='https://user-images.githubusercontent.com/77457834/146947844-21dbf64d-a1f1-4c94-b98b-170cda67719d.png'
        alt='' />
        
        <div className="flex-1 mx-4 ">
          <h2 className="font-bold">frank</h2>
          <h3 className="text-sm">Welcome to Instagram</h3>
        </div>

        <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  )
}

export default MiniProfile
