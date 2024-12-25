import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputTypes {
    type: string, // type of input field
    name: string, // name of input field used for collecting the state
    placeholder: string,
    value: string,
    isPassword: boolean, // whether the input field is password or not
    errorMessage: string, // the error message
    error: boolean, // whether the input field has errors
    showIcon?: boolean, //  whether to show the eye icon for the password field or not
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onIconClick?: () => void,
}


const Input = ({ type, name, placeholder, value, isPassword, errorMessage, error, showIcon, onInputChange, onIconClick }: InputTypes) => {
  return (
    <label className=" relative">
      <input 
        type={`${!showIcon ? type : 'text'}`} // change the type based on the icon being shown
        name={name} 
        value={value} 
        onChange={onInputChange}
        placeholder={placeholder}
        autoComplete="off"
        className={`text-[16px] xl:text-[20px] 2xl:text-[24px] placeholder:text-xs placeholder:uppercase placeholder:font-bold placeholder:text-blue-950 placeholder:opacity-80 text-blue-950 w-[100%] px-4 py-2 border  rounded-md focus:outline-blue-500 focus:outline-4 ${error ? 'border-red-500' : 'border-blue-800'}`}
      />
      <div className="absolute right-4 top-3">
        { isPassword && (
          !showIcon ? <FiEye onClick={onIconClick} className="text-blue-950 w-4 h-4 xl:w-6 xl:h-6 cursor-pointer" /> : <FiEyeOff onClick={onIconClick} className="text-blue-950 w-4 h-4 xl:w-6 xl:h-6 cursor-pointer" /> // showIcon is false, then show open eye else show closed eye.
        ) }
      </div>
      <p className="text-xs xl:text-[14px] 2xl:text-[16px] text-red-600 font-bold">
        {errorMessage}
      </p>
    </label>
  );
};



export default Input;
