import React, { useState } from "react"
import validateName from "../../utils/auth/validate_name"
import validateEmail from "../../utils/auth/validate_email"
import validatePassword from "../../utils/auth/validate_password"
import Password from "./password"
import Email from "./email"
import Name from "./name"
import Button from "./button"
import { usePostSignUpMutation } from "../../../redux/api/auth_api"
import { SignUpRequest } from "../../../types"
import { useNavigate } from "react-router-dom"
import { useTypedDispatch } from "../../../redux/hooks"
import { signup } from "../../../redux/slices/auth"

// error of sign up state types
interface SignupError {
    first_nameError: boolean,
    first_nameMsg: string,
    last_nameError: boolean,
    last_nameMsg: string,
    emailError: boolean,
    emailMsg: string,
    passwordError: boolean,
    passwordMsg: string
}

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<SignUpRequest>({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const [signUpError, setSignUpError] = useState<SignupError>({
        first_nameError: false,
        first_nameMsg: '',
        last_nameError: false,
        last_nameMsg: '',
        emailError: false,
        emailMsg: '',
        passwordError: false,
        passwordMsg: ''
    })

    // the api request 
    const [postSignUp, { data }] = usePostSignUpMutation()

    const dispatch = useTypedDispatch()

    // error message
    const [error, setError] = useState('')

    // state to display animation while making sign up request
    const [isLoading, setIsLoading] = useState(false)

    // collect user input on change event in any of the input fields
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpData({ ...signUpData, [event.target.name]: event?.target.value })
        // reset error object
        setSignUpError({
            first_nameError: false,
            first_nameMsg: '',
            last_nameError: false,
            last_nameMsg: '',
            emailError: false,
            emailMsg: '',
            passwordError: false,
            passwordMsg: ''
        })
    }

    const navigate = useNavigate()

    // function to validate user input and submit form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true) // start loading animation while making request

        // load animation first
        setTimeout(async () => {
            // collect all user input validation result in object
            const validateInput = {
                first_name: validateName(signUpData.first_name, 'first name'),
                last_name: validateName(signUpData.last_name, 'last name'),
                email: validateEmail(signUpData.email),
                password: validatePassword(signUpData.password)
            }

            // if they all return false then the user input is valid
            if (!validateInput.first_name.nameError && !validateInput.last_name.nameError && !validateInput.email.emailError && !validateInput.password.passwordError) {
                // send request to the api
                try {
                    await postSignUp(signUpData).unwrap()
                    if (data?.status === 201) {
                        dispatch(signup()) // dispatch login state to true
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
                setSignUpError({
                    ...signUpError,
                    first_nameError: validateInput.first_name.nameError, first_nameMsg: validateInput.first_name.nameMsg,
                    last_nameError: validateInput.last_name.nameError, last_nameMsg: validateInput.last_name.nameMsg,
                    emailError: validateInput.email.emailError, emailMsg: validateInput.email.emailMsg,
                    passwordError: validateInput.password.passwordError, passwordMsg: validateInput.password.passwordMsg
                }) // set the error message as user input is invalid.
                setIsLoading(false) // stop loading animation when error occurs
            }
        }, 1000)
    }

  return (
    <div className="flex flex-col gap-6">
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 w-[100%]">
            <div className="flex gap-3 flex-col md:flex-row md:justify-between w-[100%]">
                <Name
                fieldName="first_name"
                name={signUpData.first_name}
                nameMsg={signUpError.first_nameMsg}
                handleInputChange={handleInputChange}/>
                <Name
                fieldName="last_name"
                name={signUpData.last_name}
                nameMsg={signUpError.last_nameMsg}
                handleInputChange={handleInputChange}/>
            </div>
            <Email
            email={signUpData.email}
            emailMsg={signUpError.emailMsg}
            handleInputChange={handleInputChange} />
            <Password 
            password={signUpData.password}
            passwordMsg={signUpError.passwordMsg}
            handleInputChange={handleInputChange} />
            <Button 
            isLoading={isLoading}
            text="Sign up" />
            <p className="text-xs font-normal text-red-600">
                {error}
            </p>
        </form>
    </div>
  )
}

export default SignUp