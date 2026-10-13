import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import dp from '../assets/blank-profile-picture-973460_1280.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Profile() {
    let {userData}=useSelector(state=>state.user)
    let navigate=useNavigate()
  return (
    <div className='w-full h-[100vh] bg-slate-200 flex flex-col justify-center items-center gap-[20px]'>
        <div className='fixed top-[20px] left-[20px] hover:cursor-pointer' onClick={()=>  navigate("/")}>
            <IoIosArrowBack className='w-[30px] h-[30px]'/>
            </div>
     <div className=' bg-white rounded-full border-4 border-[#20c7ff] shadow-gray-400 shadow-lg relative '>
    
    <div className='w-[200px] h-[200px] rounded-full overflow-hidden '>
        <img src={dp} alt="" className='h-[100%]'/>
    </div>
    <FaCameraRetro className='absolute bottom-4 right-5 w-[25px] h-[25px]' />
     </div>
     <form className='w-[95%]  max-w-[500px] flex flex-col gap-[20px] items-center justify-center'>
        <input type="text" placeholder='Enter your name'  className='w-[90%] h-[50px] outline-none border-2 border-[#20c7ff] px-[20px] py-[10px] bg-[white] rounded-lg shadow-gray-400 shadow-lg' />
        <input type="text" readOnly  className='w-[90%] h-[50px] outline-none border-2 border-[#20c7ff] px-[20px] py-[10px] bg-[white] rounded-lg shadow-gray-400 shadow-lg text-gray-400' value={userData?.userName}/>
        <input type="email"  readOnly  className='w-[90%] h-[50px] outline-none border-2 border-[#20c7ff] px-[20px] py-[10px] bg-[white] rounded-lg shadow-gray-400 shadow-lg text-gray-400' value={userData?.email}/>
        <button className='p-[20px] py-[10px] bg-[#20c7ff] rounded-2xl  shadow-gray-400 shadow-lg text-[20px] w-[150px] mt-[20px] font-semibold hover:shadow-inner'>Save profile</button>
     </form>
    </div>
  )
}

export default Profile
