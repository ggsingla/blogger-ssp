import BlogCard from '../../components/BlogCard'
import avatar from '../../media/avatar.jpg'

const dash = () => {
  return (
    <>
      <section className='flex '>
        <aside className='w-96 flex px-8 py-10 flex-col bg-slate-700 h-screen fixed'>
          <img
            src={avatar.src}
            alt='avatar'
            className='max-w-48 rounded-full ring-4 ring-white'
          />
          <h2 className='text-4xl text-white mt-10 font-bold'>Kevin Powell</h2>
          <p className='text-white'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            saepe.
          </p>
          <div>
            <button
              className='inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring'
              href='/'>
              Edit Profile
            </button>
          </div>
        </aside>
        <main className='ml-96 p-10'>
          <button
            className='inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring'
            href='/'>
            New Blog
          </button>
          <div className='grid grid-cols-2 gap-5 mt-10 '>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </main>
      </section>
    </>
  )
}

export default dash
