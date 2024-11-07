import React from 'react'

interface EmailTypes {
    email: string,
    emailMsg: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// email component
const Email = ({email, emailMsg, handleInputChange}: EmailTypes) => {
  return (
    <label htmlFor="email" className="flex flex-col gap-1 text-xs font-semibold text-gray-800 tracking-wide">
      Email
      <input type="email" placeholder='Enter your email' onChange={handleInputChange} value={email} name="email" id="email" className={`text-[16px] w-[100%] py-2 placeholder:text-xs placeholder:font-medium px-2 border-gray-500 border rounded-lg focus:outline-none focus:border-2 focus:border-[#17B3A6] ${emailMsg != '' ? 'border border-red-500' : ''}`} />
      <p className="text-xs font-normal text-red-600">
          {emailMsg}
      </p>
    </label>
  )
}

export default Email