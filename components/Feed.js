import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols2 md:max-w-3xl 
    xl:grid-cols-3 xl:max-w-6xl mx-auto'>
      <section className='col-span-2'>
        {/* section */}
        {/* Stories */}
        <Stories />
        <Posts />
      </section>


      <section className='hidden xl:inline-grid md:col-span-1'>
        {/* Mini profile */}
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
          
        {/* Suggestions */}
      </section>

    </main>
  )
}

export default Feed
