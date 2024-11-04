import React, { useState } from "react"
import validateEmail from "../../utils/auth/validate_email"
import validatePassword from "../../utils/auth/validate_password"
import Password from "./password"
import Email from "./email"

// sign up state types
interface LoginState {
    email: string,
    password: string
}

// error of sign up state types
interface LoginError {
    emailError: boolean,
    emailMsg: string,
    passwordError: boolean,
    passwordMsg: string
}

const Login = () => {
    const [loginData, setLoginData] = useState<LoginState>({
        email: '',
        password: ''
    })

    const [loginError, setLoginError] = useState<LoginError>({
        emailError: false,
        emailMsg: '',
        passwordError: false,
        passwordMsg: ''
    })

    // collect user input on change event in any of the input fields
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [event.target.name]: event?.target.value })
    }

    // function to validate user input and submit form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // collect all user input validation result in object
        const validateInput = {
            email: validateEmail(loginData.email),
            password: validatePassword(loginData.password)
        }

        // if they all return false then the user input is valid
        if (!validateInput.email.emailError && !validateInput.password.passwordError) {
            // send request to the api
        } else {
            setLoginError({
                ...loginError,
                emailError: validateInput.email.emailError, emailMsg: validateInput.email.emailMsg,
                passwordError: validateInput.password.passwordError, passwordMsg: validateInput.password.passwordMsg
            }) // set the error message as user input is invalid.
        }
    }

  return (
    <main>
        <h1>
            Log In
        </h1>
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 w-[100%]">
            <Email
            email={loginData.email}
            emailMsg={loginError.emailMsg}
            handleInputChange={handleInputChange} />
            <Password 
            password={loginData.password}
            passwordMsg={loginError.passwordMsg}
            handleInputChange={handleInputChange} />
            <button type="submit" className="text-sm w-[100%] py-4 px-2 border-[#17B3A6] border rounded-2xl bg-[#17B3A6]">
                Log In
            </button>
            <p className="text-xs font-light text-red-600">
                {}
            </p>
        </form>
    </main>
  )
}

export default Login