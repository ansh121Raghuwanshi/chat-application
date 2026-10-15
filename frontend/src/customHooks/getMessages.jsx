import axios from "axios"
import { useEffect, useState } from "react"
import { serverUrl } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { setOtherUsers, setUserData } from "../redux/userSlice"

const getMessage=()=>{
    let dispatch=useDispatch()
    let{userData,selectedUser}=useSelector(state=>state.user)
    useEffect(()=>{
        const fetchMessages=async()=>{
            try {
                let result =await axios.get(`${serverUrl}/api/message/get/${selectedUser._id}`,{withCredentials:true})
                dispatch(setOtherUsers(result.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    },[userData])
}
export default getOtherUsers