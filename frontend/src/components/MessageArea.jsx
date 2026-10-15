import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import dp from '../assets/blank-profile-picture-973460_1280.png'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import {RiEmojiStickerLine, RiSendPlane2Fill} from "react-icons/ri"
import {FaImages} from "react-icons/fa6"
import { useState } from 'react';
import EmojiPicker from "emoji-picker-react"

function MessageArea() {
  let{selectedUser}=useSelector(state=>state.user)
  let dispatch=useDispatch()
  let[showPicker,setShowPicker]=useState(false)
let [input,setInput]=useState("")
  const onEmojiClick=(emojiData)=>{
    setInput(prevInput=>prevInput+emojiData.emoji)
    setShowPicker(false)
  }
  return (
    //css me hidden lg:block,lg:flex likhna h 
    <div className={`lg:w-[70%] relative ${selectedUser?"flex":"hidden"} w-full h-full lg:flex  bg-slate-200 border-l-2 border-gray-300`}>

      {selectedUser && 
      <div className='w-full h-[100vh] flex flex-col'>
      <div className='w-full h-[100px] bg-[#20c7ff] rounded-b-[30px] shadow-gray-400 shadow-lg flex items-center px-[10px] gap-[20px] '>
              <div className=' hover:cursor-pointer' onClick={()=>dispatch(setSelectedUser(null))}>
                         <IoIosArrowBack className='w-[30px] h-[30px] text-white'/>
               </div> 
       <div className='w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 bg-white cursor-pointer shadow-lg '>
        <img src={ selectedUser?.image || dp} alt="" className='h-[100%]'/>
    </div>
    <h1 className='text-white font-bold text-[20px]'>{selectedUser?.name || "User"}</h1>
       </div>

       <div className='w-full h-[550px] '>
       { showPicker && <div className='absolute bottom-[150px] left-[20px]'><EmojiPicker width={300} height={350} className='shadow-lg' onEmojiClick={onEmojiClick}/></div> }
       </div>
        </div>
      }
       {!selectedUser && <div className='w-full h-full flex flex-col justify-center items-center'> 
      <h1 className=' font-bold text-[50px]'>  Welcome to ZapChat </h1>
      <span className='text-[30px] text-[#20c7ff] font-bold'>Chat Friendly !!</span>
        </div>}
       {selectedUser &&  <div className='w-full lg:w-[70%] h-[100px] fixed bottom-[20px] flex items-center justify-center  '>
         <form className='w-[95%] lg:w-[70%] bg-[#20c7ff] h-[60px]  shadow-gray-400 shadow-lg rounded-full flex items-center gap-[20px] px-[20px]'>
        <div>
          <RiEmojiStickerLine className='w-[25px] h-[25px] text-white cursor-pointer' onClick={()=>setShowPicker(prev=>!prev)}/>
        </div>
        <input type="text" className='w-full h-full px-[10px] outline-none border-0 text-[19px] cursor-pointer ' placeholder='Message' onChange={(e)=>setInput(e.target.value)} value={input} />
        <div>
          <FaImages className='w-[25px] h-[25px] text-white cursor-pointer'/>
        </div>
        <div>
          <RiSendPlane2Fill className='w-[25px] h-[25px] text-white cursor-pointer'/>
        </div>
         </form>
       </div>}
       

    </div>
  )
}

export default MessageArea
