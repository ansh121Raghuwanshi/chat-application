import React, { useEffect,useRef } from 'react'
import dp from '../assets/blank-profile-picture-973460_1280.png'
function ReceiverMessage({image,message}) {
  let scroll=useRef()
  useEffect(()=>{
scroll.current.scrollIntoView({behavior:"smooth"})
  },[message,image])
  return (
        <div className='w-fit max-w-[500px] bg-[rgb(23,151,194)] px-[20px] py-[10px] text-white text-[19px] rounded-tl-none rounded-2xl relative left-0 shadow-gray-400 shadow-lg gap-[10px] flex flex-col' ref={scroll}>
           {image && <img src={image} alt=""c className='w-[150px] rounded-lg' /> }
      {message &&<span >{message}</span>}
        </div>
  )
}

export default ReceiverMessage
