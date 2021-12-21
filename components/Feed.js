import Stories from "./Stories"

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto'>
      <section className='col-span-2'>
        {/* section */}
        {/* Stories */}
        <Stories />
      </section>


      <section className='col-span-1'>
        {/* Mini profile */}
          
        {/* Suggestions */}
      </section>

    </main>
  )
}

export default Feed
