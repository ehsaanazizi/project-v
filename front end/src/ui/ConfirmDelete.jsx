function ConfirmDelete({Resoursename , onClose , onConfirm , disabled}){
  return (
    <div> 
      <h2 className=" bold-font text-base mb-8 text-secondary-700">
        مطمُن هستید؟ { Resoursename} آیا از حذف 
      </h2>
      <div className="flex justify-between items-center gap-x-16 ">
        <button
         className="btn btn--primary flex-1"
         onClick={onClose}
         disabled={disabled}
         >لغو</button>
        <button 
        className="btn btn--danger flex-1 py-3"
        onClick={onConfirm}
        disabled={disabled}
        >تایید </button>
 
      </div>
    </div>
  );
}

export default ConfirmDelete;







// function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
//   return (
//     <div>
//       <h2 className="font-bold text-base mb-8 text-secondary-700">
//         آیا از حذف {resourceName} مطمین هستید؟
//       </h2>
//       <div className="flex justify-between items-center gap-x-16">
//         <button
//           className="btn btn--primary flex-1"
//           onClick={onClose}
//           disabled={disabled}
//         >
//           لغو
//         </button>
//         <button
//           onClick={onConfirm}
//           disabled={disabled}
//           className="btn btn--danger flex-1 py-3"
//         >
//           تایید
//         </button>
//       </div>
//     </div>
//   );
// }
// export default ConfirmDelete;
