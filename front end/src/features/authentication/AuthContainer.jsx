import { useMutation } from "@tanstack/react-query";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useState } from "react";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {isPending:isSendOtp , error , data:otpResponse , mutateAsync} = useMutation({
    mutationFn:getOtp
    });
    
    //usequery:get,
    //useMutation:post , put , delete ,...
    const sendOtpHandler= async(data)=>{
      e.preventDefault();
      try{
        const data =await mutateAsync({phoneNumber})
        setStep(2)
        // console.log(data.message);
        toast.success(data.message)
      } catch(error){
        toast.error(error?.response?.data?.message)
      }
    };




  const [step , setStep]=useState(2)
  // const[phoneNumber , setPhoneNumber]=useState("09354601979");
  const {handleSubmit  , register , getValues}=useForm()

const renderstep =()=>{
  switch (step) {
  case 1:
    return ( <SendOTPForm
    isSendOtp={isSendOtp}
    onSubmit={handleSubmit(sendOtpHandler)}
     setStep={setStep}
     register={register}
      // phoneNumber={phoneNumber} 
      // onChange={e=> setPhoneNumber(e.target.value)} />); 
      />);
  case 2:
    return  (<CheckOTPForm 
onReSendOtp={sendOtpHandler}
phoneNumber={getValues("phonenumber")}
onBack={() => setStep((s) => s - 1)}
      />);
     default :return null
  }
};
return <div className="w-full sm:max-w-sm">{renderstep()}</div>;
}

export default AuthContainer;










































// import { useEffect, useState } from "react";
// import SendOTPForm from "./SendOTPForm";
// import CheckOTPForm from "./CheckOTPForm";
// import { useMutation } from "@tanstack/react-query";
// import { getOtp } from "../../services/authService";
// import { toast } from "react-hot-toast";
// import { useForm } from "react-hook-form";
// import useUser from "./useUser";
// import { useNavigate } from "react-router-dom";

// function AuthContainer() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const { handleSubmit, register, getValues } = useForm();
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) navigate("/", { replace: true });
//   }, [user, navigate]);

//   const {
//     isPending: isSendingOtp,
//     mutateAsync,
//     data: otpResponse,
//   } = useMutation({
//     mutationFn: getOtp,
//   });

//   const sendOtpHandler = async (data) => {
//     try {
//       const { message } = await mutateAsync(data);
//       setStep(2);
//       toast.success(message);
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <SendOTPForm
//             isSendingOtp={isSendingOtp}
//             onSubmit={handleSubmit(sendOtpHandler)}
//             setStep={setStep}
//             register={register}
//             // onSubmit={sendOtpHandler}
//             // phoneNumber={phoneNumber}
//             // onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         );
//       case 2:
//         return (
//           <CheckOTPForm
//             onReSendOtp={sendOtpHandler}
//             phoneNumber={getValues("phoneNumber")}
//             onBack={() => setStep((s) => s - 1)}
//             otpResponse={otpResponse}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
// }
// export default AuthContainer;
