import { isEmail, isEmpty } from "validator"

// function to validate user email
const validateEmail = (email: string) => {
    if (isEmpty(email)) {
        return { emailError: true, emailMsg: "What's your email address!" }
    }
    else if (!isEmail(email)) {
        return {  emailError: true, emailMsg:'Enter a valid email address!' }
    }
    else {
        return { emailError: false, emailMsg: '' }
    }
}

export default validateEmail