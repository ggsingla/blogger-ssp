import React from 'react'

const editor = () => {
  return (
    <>
      <div className='container mx-auto flex flex-col gap-10 py-10 px-2 min-h-screen'>
        <input
          type='text'
          placeholder='Title'
          id='title'
          className='text-5xl font-bold focus-within:outline-none'
        />
        <textarea
          id='desp'
          placeholder='Write your Awesome thoughts here...'
          className='text-xl focus-within:outline-none h-full'
          autoComplete='off'
        />
      </div>
    </>
  )
}

export default editor
