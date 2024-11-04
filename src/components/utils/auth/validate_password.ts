import { isEmpty, isLength, isStrongPassword } from "validator"

// function to validate password and return the result
const validatePassword = (password: string) => {
    if (isEmpty(password)) {
        return{ passwordError: true, passwordMsg: "What's your password!" }
    }
    else if (!isLength(password, { min: 8 })) {
        return { passwordError: true, passwordMsg:'Password must be at least 8 characters!' }
    }
    else if (!isStrongPassword(password)) {
        return { passwordError: true, passwordMsg: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.' }
    }
    else {
        return { passwordError: false, passwordMsg: '' }
    }
}

export default validatePassword