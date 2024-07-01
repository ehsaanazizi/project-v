import React from 'react'

function TextField({label , name , register ,validationSchema,  required, errors , type="text"}) {
  return (
    <div>
      <div>
         <label className='mb-2 block' htmlFor={name}>{label}{required &&<span className='text-error'>+</span>}</label>
         <input
         {...register(name , validationSchema)}
         id={name}
         name={name}
         className='textField__input' 
         type={type}
         autoComplete='off' />
         {errors && errors[name] && (
          <span className='text-error block text-sm mt-2'>
            {errors[name]?.message}
          </span>
         )}
        </div>
    </div>
  );
}

export default TextField;

