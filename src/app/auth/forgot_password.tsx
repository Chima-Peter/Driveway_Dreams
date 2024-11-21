import { useState } from "react"
import Email from "../../components/ui/auth/email"
import Button from "../../components/ui/auth/button"
import validateEmail from "../../components/utils/auth/validate_email"

interface ForgotPasswordTypes {
    email: string,
    emailMsg: string,
    emailError: boolean
}


const ForgotPasswordPage = () => {
    const [forgotPassword, setForgotPassword] = useState<ForgotPasswordTypes>({
        email: '',
        emailMsg: '',
        emailError: false
    })

    // handle input change and remove error message temporarily
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForgotPassword({...forgotPassword, [event.target.name]: event?.target.value, emailError: false, emailMsg: '' })
    }

    // handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

         // collect all user input validation result
         const validateInput = validateEmail(forgotPassword.email)

        // if it returns false then the user input is valid
        if (!validateInput.emailError ) {
            // send request to the api
        } else {
            setForgotPassword({
                ...forgotPassword,
                emailError: validateInput.emailError,
                emailMsg: validateInput.emailMsg
            }) // set the error message as user input is invalid.
        }
    }
  return (
    <main className="flex items-center justify-center pt-[50px] bg-gradient-to-tl from-[#157D91] via-[#14718C] to-[#17B3A6] min-h-[100vh] w-[100%]">
        <section className="w-[450px] flex flex-col border gap-10 border-white shadow-md bg-white rounded-lg p-6">
            <div className="flex flex-col gap-2 w-[100%]">
                <h2 className="text-lg font-semibold self-center">
                    Forgot Your Password?
                </h2>
                <p className="text-sm self-center">
                    No worries! We can help you reset it. Please enter your email address below, and we'll send you instructions to reset your password.
                </p>
            </div>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 w-[100%]">
                <Email
                email={forgotPassword.email}
                emailMsg={forgotPassword.emailMsg}
                handleInputChange={handleInputChange} />
                <Button 
                isLoading={true}
                text="Send" />
            </form>
        </section>
    </main>
  )
}

export default ForgotPasswordPage