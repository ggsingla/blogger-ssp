import BlogCard from '../../components/BlogCard'
import avatar from '../../media/avatar.jpg'
import {API} from 'aws-amplify'
import { useEffect } from 'react'



const User = () => {
  const handleSubmmit= e =>{
    // e.preventDefault()
    API.post('getBlogs', '/blogs', {
      body: {
        title: "hello",
        content: "world"
      }
    })
  }
  useEffect(() => {
  handleSubmmit()
  },[])
  return (
    <>
      <div className='flex items-center justify-center flex-col mb-10 bg-orange-50 py-10'>
        <img
          src={avatar.src}
          alt=''
          className='w-32 rounded-full object-contain ring-4 ring-white'
        />
        <h2 className='text-4xl'>Kevin Powell</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          asperiores?
        </p>
      </div>
      <div className='grid grid-cols-2 gap-5 mx-auto w-fit'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  )
}

export default User
