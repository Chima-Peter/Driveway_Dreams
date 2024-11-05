import React, { useState } from "react"
import validateName from "../../utils/auth/validate_name"
import validateEmail from "../../utils/auth/validate_email"
import validatePassword from "../../utils/auth/validate_password"
import Password from "./password"
import Email from "./email"
import Name from "./name"
import Button from "./button"

// sign up state types
interface SignupState {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

// error of sign up state types
interface SignupError {
    firstnameError: boolean,
    firstnameMsg: string,
    lastnameError: boolean,
    lastnameMsg: string,
    emailError: boolean,
    emailMsg: string,
    passwordError: boolean,
    passwordMsg: string
}

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<SignupState>({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const [signUpError, setSignUpError] = useState<SignupError>({
        firstnameError: false,
        firstnameMsg: '',
        lastnameError: false,
        lastnameMsg: '',
        emailError: false,
        emailMsg: '',
        passwordError: false,
        passwordMsg: ''
    })

    // collect user input on change event in any of the input fields
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpData({ ...signUpData, [event.target.name]: event?.target.value })
        // reset error object
        setSignUpError({
            firstnameError: false,
            firstnameMsg: '',
            lastnameError: false,
            lastnameMsg: '',
            emailError: false,
            emailMsg: '',
            passwordError: false,
            passwordMsg: ''
        })
    }

    // function to validate user input and submit form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // collect all user input validation result in object
        const validateInput = {
            firstName: validateName(signUpData.firstname, 'first name'),
            lastName: validateName(signUpData.lastname, 'last name'),
            email: validateEmail(signUpData.email),
            password: validatePassword(signUpData.password)
        }

        // if they all return false then the user input is valid
        if (!validateInput.firstName.nameError && !validateInput.lastName.nameError && !validateInput.email.emailError && !validateInput.password.passwordError) {
            // send request to the api
        } else {
            setSignUpError({
                ...signUpError,
                firstnameError: validateInput.firstName.nameError, firstnameMsg: validateInput.firstName.nameMsg,
                lastnameError: validateInput.lastName.nameError, lastnameMsg: validateInput.lastName.nameMsg,
                emailError: validateInput.email.emailError, emailMsg: validateInput.email.emailMsg,
                passwordError: validateInput.password.passwordError, passwordMsg: validateInput.password.passwordMsg
            }) // set the error message as user input is invalid.
        }
    }

  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-[1rem] font-semibold self-center">
            Sign up and get started today!
        </h1>
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 w-[100%]">
            <div className="flex gap-3 flex-col md:flex-row md:justify-between w-[100%]">
            <Name
                label='First Name'
                fieldName="firstname"
                name={signUpData.firstname}
                nameMsg={signUpError.firstnameMsg}
                handleInputChange={handleInputChange}/>
                <Name
                label='Last Name'
                fieldName="lastname"
                name={signUpData.lastname}
                nameMsg={signUpError.lastnameMsg}
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
            isLoading={true}
            text="Sign up" />
            <p className="text-xs font-medium text-red-600">
                {}
            </p>
        </form>
    </div>
  )
}

export default SignUp