import React from 'react'

interface EmailTypes {
    email: string,
    emailMsg: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// email component
const Email = ({email, emailMsg, handleInputChange}: EmailTypes) => {
  return (
    <label htmlFor="email" className="flex flex-col gap-1">
      Email Address
      <input type="email" onChange={handleInputChange} value={email} name="email" id="email" className="text-[16px] w-[100%] py-4 px-2 border-gray-500 border rounded-lg focus:outline-none focus:border-[#17B3A6]" />
      <p className="text-xs font-light text-red-600">
          {emailMsg}
      </p>
    </label>
  )
}

export default Email