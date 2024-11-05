import { isEmpty } from "validator"

// function to validate password and return the result
const validateConfirmPassword = (password: string, match: string) => {
    if (isEmpty(password)) {
        return{ passwordError: true, passwordMsg: "What's your password!" }
    }
    else if (match !== password) {
        return{ passwordError: true, passwordMsg: "Passwords don't match!" }
    }
    else {
        return { passwordError: false, passwordMsg: '' }
    }
}

export default validateConfirmPassword