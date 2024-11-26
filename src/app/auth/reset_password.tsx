import { useState } from "react"
import Button from "../../components/ui/auth/button"
import validatePassword from "../../components/utils/auth/validate_password"
import validateConfirmPassword from "../../components/utils/auth/validate_confirm_password"
import Input from "../../components/ui/auth/input"

interface ResetPasswordTypes {
    password: string,
    passwordMsg: string,
    passwordError: boolean,
    confirmPassword: string,
    confirmPasswordMsg: string,
    confirmPasswordError: boolean
}


const ResetPasswordPage = () => {
    const [resetPassword, setResetPassword] = useState<ResetPasswordTypes>({
        password: '',
        passwordMsg: '',
        passwordError: false,
        confirmPassword: '',
        confirmPasswordMsg: '',
        confirmPasswordError: false
    })

    // show icon for password
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword =() => {
        setShowPassword(!showPassword)
    }

    // handle input change and remove error message temporarily
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResetPassword({ 
            ...resetPassword, 
            [event.target.name]: event?.target.value,
            passwordError: false, passwordMsg: '',
            confirmPasswordError: false, confirmPasswordMsg: '' 
            })
    }

    // handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

         // collect all user input validation result
         const passwordResult = validatePassword(resetPassword.password)
         const confirmPasswordResult = validateConfirmPassword(resetPassword.confirmPassword, resetPassword.password)

        // if it returns false then the user input is valid
        if (!passwordResult.passwordError && !confirmPasswordResult.passwordError) {
            // send request to the api
        } else {
            setResetPassword({
                ...resetPassword,
                passwordError: passwordResult.passwordError,
                passwordMsg: passwordResult.passwordMsg,
                confirmPasswordError: confirmPasswordResult.passwordError,
                confirmPasswordMsg: confirmPasswordResult.passwordMsg
            }) // set the error message as user input is invalid.
        }
    }

    
  return (
    <main className="flex items-center justify-center pt-[50px] bg-gradient-to-tl from-[#157D91] via-[#14718C] to-[#17B3A6] min-h-[100vh] w-[100%]">
        <section className="w-[450px] flex flex-col border gap-10 border-white shadow-md bg-white rounded-lg p-6">
            <div className="flex flex-col gap-2 w-[100%]">
                <h2 className="text-lg font-semibold self-center">
                    Reset Your Password
                </h2>
                <p className="text-sm self-center">
                    You’ve successfully accessed the link to reset your password. Please enter your new password below to continue.
                </p>
            </div>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 w-[100%]">
                <Input 
                name="PASSWORD"
                type="password"
                value={resetPassword.password}
                onInputChange={handleInputChange}
                placeholder="EMAIL"
                isPassword={false}
                showIcon={showPassword}
                onIconClick={togglePassword}
                error={resetPassword.passwordError}
                errorMessage={resetPassword.passwordMsg}
                />
                <Input 
                name="CONFIRM PASSWORD"
                type="password"
                value={resetPassword.confirmPassword}
                onInputChange={handleInputChange}
                placeholder="EMAIL"
                isPassword={false}
                showIcon={showPassword}
                onIconClick={togglePassword}
                error={resetPassword.confirmPasswordError}
                errorMessage={resetPassword.confirmPasswordMsg}
                />
                <Button 
                isLoading={true}
                text="Send" />
            </form>
        </section>
    </main>
  )
}

export default ResetPasswordPage