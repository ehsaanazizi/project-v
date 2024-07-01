import React, { useEffect } from 'react'
import OTPInput from 'react-otp-input';
import { useState} from 'react';
import { checkOtp } from '../../services/authService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {HiArrowRight} from "react-icons/hi";
import {CiEdit} from "react-icons/ci";
import Loading from '../../ui/Loading';

const Resend_Time=10;




function CheckOTPForm({phoneNumber , OnBack , onResendOtp , otpResponse}) {
  const [otp, setOtp] = useState('');
  const [time , setTime] = useState(Resend_Time);
  const navigate = useNavigate();



const { isPending:isSendOtp, mutateAsync } = useMutation({
  mutationFn: checkOtp,
});


const checkOtpHandler = async (e) => {
  e.preventDefault();
  try {
    const { message, user } = await mutateAsync({ phoneNumber, otp });
    toast.success(message);
    if (!user.isActive) return navigate ("/Complete-Profile");
    if (!user.status) {
     navigate ("/");
     toast.error("پروفایل شما در انتظار تایید است");
     return;
    }
    if (!user.role === "OWNER") return navigate ("/owner");
    if (!user.role === "FREELANCER") return navigate ("/freelancer");
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
// const checkOtpHandler =e =>{
//   e.preventDefault()
//   try{
//     const {message , user} = await mutateAsync({phoneNumber , otp});
//     toast.success(message);
//     console.log(message , user)
//   } catch(error){
//     toast.error(error?.response?.data?.message)
//   }
// }
useEffect(()=>{
  const timer =time > 0 && setInterval(()=>setTime((t)=> t-1), 1000);
  return ()=>{
  if (timer) clearInterval(timer);
  };
}
, [time]);



  return (
    <div>
      <button onClick={OnBack}>
        <HiArrowRight className='w-6 h-6 text-secondary-600' />
      </button>
      
       {/* {otpResponse && (
        <p className='flex gap-x-2 items-center my-4' >
        <span> {Response?.message} </span>
        <button   onClick={OnBack}>
        <CiEdit  className='w-6 h-6 text-primary-900 '/>
        </button>
        </p>
       )} */}
       


      
      <div className='mb-4 text-secondary-500'>
       {time > 0 ? ( <p>{time}ثانیه تا ارسال مجدد کد</p> ): ( <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>)}
      </div >
      <form className='space-y-8' onSubmit={checkOtpHandler}>
        <p className='font-bold text-secondary-800'>کد تایید را وارد کنید</p>
        <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />} 
      containerStyle=" flex flex-row-reverse gap-x-2 justify-center "
      inputStyle={{
        width:"2.5rem",
        padding:"0.5rem 0.2rem",
        border:"1px solid rgb(var(--color-primary-300))",
        borderRadius:"0.5rem"
      }}
      />
      <div>
          {isSendOtp ? <Loading /> :(
          <button  type="submit" className='btn btn--primary w-full'>تایید</button>
          )
          }
         </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;

// import React, { useEffect, useState } from 'react';
// import OTPInput from 'react-otp-input';
// import { useMutation } from '@tanstack/react-query';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { HiArrowRight } from 'react-icons/hi';
// import { CiEdit } from 'react-icons/ci';
// import Loading from '../../ui/Loading';

// const Resend_Time = 90;

// function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
//   const [otp, setOtp] = useState('');
//   const [time, setTime] = useState(Resend_Time);
//   const navigate = useNavigate();

//   const { isPending, mutateAsync } = useMutation({
//     mutationFn: checkOtp,
//   });

//   const checkOtpHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { message, user } = await mutateAsync({ phoneNumber, otp });
//       toast.success(message);
//       if (!user.isActive) return navigate('/Complete-Profile');
//       if (!user.status) {
//         navigate('/');
//         toast.error('پروفایل شما در انتظار تایید است');
//         return;
//       }
//       if (!user.role === 'OWNER') return navigate('/owner');
//       if (!user.role === 'FREELANCER') return navigate('/freelancer');
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, [time]);

//   return (
//     <div>
//       <div onClick={onBack}>
//         <HiArrowRight className='w-6 h-6 text-secondary-600' />
//       </div>

//       {otpResponse && (
//         <p className='flex gap-x-2 items-center my-4'>
//           <span> {otpResponse?.message} </span>
//           <button onClick={onBack}>
//             <CiEdit className='w-6 h-6 text-primary-900' />
//           </button>
//         </p>
//       )}

//       <div className='mb-4 text-secondary-500'>
//         {time > 0 ? (
//           <p>{time}ثانیه تا ارسال مجدد کد</p>
//         ) : (
//           <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
//         )}
//       </div>

//       <form className='space-y-8' onSubmit={checkOtpHandler}>
//         <p className='font-bold text-secondary-800'>کد تایید را وارد کنید</p>
//         <OTPInput
//           value={otp}
//           onChange={setOtp}
//           numInputs={6}
//           renderSeparator={<span>-</span>}
//           renderInput={(props) => <input {...props} />}
//           containerStyle='flex flex-row-reverse gap-x-2 justify-center'
//           inputStyle={{
//             width: '2.5rem',
//             padding: '0.5rem 0.2rem',
//             border: '1px solid rgb(var(--color-primary-300))',
//             borderRadius: '0.5rem',
//           }}
//         />
//         <div>
//           {isPending ? (
//             <Loading />
//           ) : (
//             <button type='submit' className='btn btn--primary w-full'>
//               تایید
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CheckOTPForm;