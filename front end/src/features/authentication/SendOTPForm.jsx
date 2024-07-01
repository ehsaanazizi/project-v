import  { useState } from 'react'
import TextField from "../../ui/TextField";
import {useMutation} from "@tanstack/react-query";
import {getOtp}from "../../services/authService";
import {toast} from "react-hot-toast";
import Loading from '../../ui/Loading';
function SendOTPForm({onSubmit , isSendingOtp , phoneNumber , onChange }) {
  // const[phoneNumber , setPhoneNumber]=useState("");

// const {isPending , error , data , mutateAsync} = useMutation({
// mutationFn:getOtp
// });

// //usequery:get,
// //useMutation:post , put , delete ,...
// const sendOtpHandler= async(e)=>{
//   e.preventDefault();
//   try{
//     const data =await mutateAsync({phoneNumber})
//     setStep(2)
//     // console.log(data.message);
//     toast.success(data.message)
//   } catch(error){
//     toast.error(error?.response?.data?.message)
//   }
// };

  return (
    <div>
      <form className='space-y-4' onSubmit={onsubmit}>
        
         <TextField 
         label="شماره موبایل"
         name="phonenumber"
         value={phoneNumber} 
         onChange={onChange}/>

         <div>
          {isSendingOtp  ? <Loading /> :(
          <button  type="submit" className='btn btn--primary w-full'>ارسال</button>
          )
          }
         </div>
        
      </form>
    </div>
  );
}

export default SendOTPForm;
