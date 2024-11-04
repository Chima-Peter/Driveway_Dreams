import { isAlpha, isEmpty } from "validator"

// function to validate user name
const validateName = (name: string, field: string) => {
    if (isEmpty(name)) {
        return { nameError: true, nameMsg: `What is your ${field}!` }
    }
    else if (!isAlpha(name)) {
        return {  nameError: true, nameMsg:'Enter only alphabets!' }
    }
    else {
        return { nameError: false, nameMsg: '' }
    }
}

export default validateName