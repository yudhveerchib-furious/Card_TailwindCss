import React from 'react'

function ProfileVard() {
  return (
    <>
   <div className='outline-2 inline-block  mx-auto p-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 relative top-40 left-60 border-x-sky-300 shadow-2xs shadow-amber-300 text-amber-300'>
    <div className="flex justify-center text-center " >
      <img
        src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg"
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full border-4 border-emerald-600"
      />
    </div>
     <div  className=" text-center font-bold  text-gray-600">
        <h2 >Yudhveer Chib</h2>
        <p > Data Scientist</p>
        <h2 className="underline">"Likes Ai models"</h2>
    </div>
    <div className='flex justify-center gap-3'>
      <button className=" bg-blue-600 rounded-xl p-1 text-amber-100 hover:bg-gray-500 hover:outline-1 hover:outline-red-500 transition-all duration-300 ease-in-out">Follow</button>
      <button className="  bg-blue-600 rounded-xl p-1 text-amber-100 hover:bg-gray-500 hover:outline-1 hover:outline-red-500 transition-all duration-300 ease-in-out">Message</button>
    </div>
    </div> 
    </>
  )
}

export default ProfileVard
