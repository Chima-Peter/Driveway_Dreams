interface NameTypes {
  label: string,
  fieldName: string,
  name: string,
  nameMsg: string,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Name = ({label, fieldName, name, nameMsg, handleInputChange}: NameTypes) => {
  return (
    <label htmlFor="lastname" className="flex flex-col  font-semibold gap-1 w-[100%] md:w-[50%] text-xs text-gray-800 tracking-wide">
      {label}
      <input type="text" placeholder={`Enter your ${fieldName}`} onChange={handleInputChange} value={name} name={fieldName} id={fieldName} className={`text-[16px] w-[100%] placeholder:text-xs placeholder:font-medium py-2 px-2 border-gray-500 border rounded-lg focus:outline-none focus:border-2 focus:border-[#17B3A6] ${nameMsg != '' ? 'border border-red-500' : ''}`} />
      <p className="text-xs font-normal text-red-600">
          {nameMsg}
      </p>
    </label>
  )
}

export default Name