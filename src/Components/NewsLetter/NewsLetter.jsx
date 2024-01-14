import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto p-[0px 140px mb-[150px]'>
      <h1>Get Eclusivr Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className=''>
        <input type="text" placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
