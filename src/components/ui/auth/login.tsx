import React, { useState } from "react"
import validateEmail from "../../utils/auth/validate_email"
import validatePassword from "../../utils/auth/validate_password"
import Password from "./password"
import Email from "./email"
import Button from "./button"
import { Link, useNavigate } from "react-router-dom"
import { usePostLoginMutation } from "../../../redux/api/auth_api"
import { login } from '../../../redux/slices/auth'
import { useTypedDispatch } from "../../../redux/hooks"

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

    // error message
    const [error, setError] = useState('')
    
    // use mutation hook to send request to the api
    const [postLogin, { data }] = usePostLoginMutation()

    // state for loading the animations
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const dispatch = useTypedDispatch()

    // collect user input on change event in any of the input fields
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [event.target.name]: event?.target.value })
        // reset error object
        setLoginError({
            emailError: false,
            emailMsg: '',
            passwordError: false,
            passwordMsg: ''
        })
    }

    // function to validate user input and submit form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(async () => {
            // collect all user input validation result in object
            const validateInput = {
                email: validateEmail(loginData.email),
                password: validatePassword(loginData.password)
            }

            // if they all return false then the user input is valid
            if (!validateInput.email.emailError && !validateInput.password.passwordError) {
                // send request to the api
                try {
                    await postLogin(loginData).unwrap()
                    if (data?.status === 200) {
                        dispatch(login()) // dispatch login state to true
                        navigate('/') // if successful, redirect user.
                    }
                    // if it fails, then display error message
                    else {
                        setError(data?.message || 'An error occurred while signing up. Try again later.')
                    }
                } catch (err) {
                    setError('Check network connectivity and try again!')
                } finally {
                    setIsLoading(false) // stop loading animation when request is done
                }
            } else {
                setLoginError({
                    ...loginError,
                    emailError: validateInput.email.emailError, emailMsg: validateInput.email.emailMsg,
                    passwordError: validateInput.password.passwordError, passwordMsg: validateInput.password.passwordMsg
                }) // set the error message as user input is invalid.
                setIsLoading(false) // end animation
            }
        }, 1000)
    }

  return (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 w-[100%] bg-white p-6">
            <p className="font-extrabold text-sm text-blue-950">
                LOGIN
            </p>
            <Email
            email={loginData.email}
            emailMsg={loginError.emailMsg}
            handleInputChange={handleInputChange} />
            <Password 
            password={loginData.password}
            passwordMsg={loginError.passwordMsg}
            handleInputChange={handleInputChange} />
            <Link to={'forgot-password'} className="text-sm translate-y-[-10px] self-end text-blue-800 font-bold">
                Forgot your password?
            </Link>
            <Button 
            isLoading={isLoading}
            text="Log in" />
            <p className="text-xs font-normal text-red-600">
                {error}
            </p>
        </form>
  )
}

export default Login