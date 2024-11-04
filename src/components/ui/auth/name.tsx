interface NameTypes {
  fieldName: string,
  name: string,
  nameMsg: string,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Name = ({fieldName, name, nameMsg, handleInputChange}: NameTypes) => {
  return (
    <label htmlFor="lastname" className="flex flex-col gap-1 w-[100%] md:w-[45%] ">
      Last name
      <input type="text" onChange={handleInputChange} value={name} name={fieldName} id={fieldName} className="text-[16px] w-[100%] py-4 px-2 border-gray-500 border rounded-lg focus:outline-none focus:border-[#17B3A6]" />
      <p className="text-xs font-light text-red-600">
          {nameMsg}
      </p>
    </label>
  )
}

export default Name