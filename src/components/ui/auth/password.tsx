interface PasswordTypes {
    password: string,
    passwordMsg: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Password = ({password, passwordMsg, handleInputChange}: PasswordTypes) => {
  return (
    <label htmlFor="password" className="flex flex-col font-semibold gap-1 w-[100%] text-xs text-gray-800 tracking-wide">
        Password
        <input type="password" onChange={handleInputChange} value={password} name="password" id="password" className="text-[16px] w-[100%] py-2 px-2 border-gray-500 border rounded-lg focus:outline-none focus:border-2 focus:border-[#17B3A6]" />
        <p className="text-xs font-medium text-red-600">
            {passwordMsg}
        </p>
    </label>
  )
}

export default Password