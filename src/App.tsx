import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./app/home_page"
import ExportNav from "./components/ui/nav/export_nav"
import ErrorPage from "./app/error_page"
import AuthPage from "./app/auth_page"
import ForgotPasswordPage from "./app/forgot_password"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Driveway_Dreams/'}>
         <ExportNav />
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="authenticate" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
         </Routes> 
      </BrowserRouter>
  )
}



