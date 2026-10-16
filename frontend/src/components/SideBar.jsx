import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dp from '../assets/blank-profile-picture-973460_1280.png'
import { IoIosSearch } from 'react-icons/io'
import {RxCross2} from "react-icons/rx";
import {BiLogOutCircle} from "react-icons/bi";
import axios from 'axios';
import { setOtherUsers, setSelectedUser, setUserData } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
function SideBar() {
    let {userData,otherUsers,selectedUser,onlineUsers}=useSelector(state=>state.user)
    let [search,setSearch]=useState(false)
    let dispatch=useDispatch()
    let navigate=useNavigate()
    const handleLogOut =async ()=>{
      try {
        let result=await axios.get('${serverUrl/api/auth/logout}',{withCredentials:true})
        dispatch(setUserData(null))
          dispatch(setOtherUsers(null))
          navigate("/login")
      } catch (error) {
        console.log(error)
      } 
    }
  return (
    <div className={`lg:w-[30%] w-full h-full lg:block bg-slate-200 ${!selectedUser?"block":"hidden"}`}>

    <div className='w-[60px] h-[60px] mt-[10px] rounded-full overflow-hidden flex justify-center items-center bg-[#20c7ff] shadow-gray-500 shadow-lg cursor-pointer fixed bottom-[20px] left-[10px]' onClick={handleLogOut}>
            <BiLogOutCircle className='w-[25px] h-[25px]'/>
    </div>

        <div className='w-full h-[300px] bg-[#20c7ff] rounded-b-[30%] shadow-gray-400 shadow-lg flex flex-col  justify-center px-[10px]'>
       
        <h1 className='text-white font-bold text-[25px]'>ZapChat</h1>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-gray-800 font-bold text-[25px]'>Hii,{userData.name || "user"}</h1>
               <div className='w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 bg-white cursor-pointer shadow-lg ' onClick={()=>navigate("/profile")}>
        <img src={userData.image || dp} alt="" className='h-[100%]'/>
    </div>
        </div>
         <div className='w-full flex items-center gap-[10px] overflow-y-auto py[15px]'>
            {!search &&  <div className='w-[60px] h-[60px] mt-[10px] rounded-full overflow-hidden flex justify-center items-center bg-white shadow-gray-500 shadow-lg cursor-pointer' onClick={()=>setSearch(true)}>
            <IoIosSearch className='w-[25px] h-[25px]'/>
    </div> }
    {search && <form className='w-full h-[60px] bg-white rounded-full shadow-gray-500 shadow-lg flex items-center gap-[10px] mt-[10px] p-[20px]'>
        <IoIosSearch className='w-[25px] h-[25px]'/>
        <input type="text" placeholder='search user....' className='w-full h-full p-[10px] outline-0 border-0' />
        <RxCross2 className='w-[25px] h-[25px] cursor-pointer' onClick={()=>setSearch(false)}/>
        </form>}
        {!search && otherUsers?.map((user)=>(
          onlineUsers?.includes(user._id) &&
          <div className='relative rounded-full shadow-gray-500 bg-white shadow-lg  flex justify-center items-center cursor-pointer'onClick={()=>dispatch(setSelectedUser(user))}>
                <div className='w-[60px] h-[60px]  rounded-full overflow-hidden flex justify-center items-center '>
        <img src={user.image || dp} alt="" className='h-[100%]'/>
    </div>
    <span className='w-[15px] h-[15px] rounded-full absolute bg-[#3aff20] bottom-1 right-0 shadow-gray-500  shadow-md'></span>
      </div>
            ))}
            
         </div>
         </div>

         <div className='w-full h-[50%] overflow-auto flex flex-col gap-[20px] items-center mt-[20px]'>
          {otherUsers?.map((user)=>(
            <div className='w-[95%] h-[60px] flex  items-center gap-[20px] bg-white shadow-gray-500 shadow-lg rounded-full hover:bg-[#20c7ff]' onClick={()=>dispatch(setSelectedUser(user))}>
                <div className='w-[60px] h-[60px]  rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 bg-white shadow-lg '>
        <img src={user.image || dp} alt="" className='h-[100%]'/>
    </div>
    <h1 className='text-gray-800 font-bold text-[20px]'>{user.name || user.username}</h1>
    </div>
            ))}
         </div>

    </div>
  )
}

export default SideBar
