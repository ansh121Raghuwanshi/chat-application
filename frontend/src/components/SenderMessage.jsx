import React, { useEffect,useRef } from 'react'
import dp from '../assets/blank-profile-picture-973460_1280.png'
import { useSelector } from 'react-redux'
function SenderMessage({image,message}) {
    let scroll=useRef()
    let {userData}=useSelector(state=>state.user)
    useEffect(()=>{
  scroll.current.scrollIntoView({behavior:"smooth"})
    },[message,image])
    const handleImageScroll=()=>{
       scroll.current.scrollIntoView({behavior:"smooth"})
    }
  return (
    <div className='w-fit max-w-[500px] bg-[#20c7ff] px-[20px] py-[10px] text-white text-[19px] rounded-tr-none rounded-2xl relative right-0 ml-auto shadow-gray-400 shadow-lg gap-[10px] flex flex-col'>


       <div  ref={scroll}>
     {image && <img src={image} alt=""c className='w-[150px] rounded-lg' onLoad={handleImageScroll} /> }
      {message &&<span >{message}</span>}
          </div>
    </div>
  )
}

export default SenderMessage
