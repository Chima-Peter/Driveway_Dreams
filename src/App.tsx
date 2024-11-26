import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./app/home_page"
import ExportNav from "./components/ui/nav/export_nav"
import ErrorPage from "./app/error_page"
import AuthModal from "./app/auth/auth_modal"
import ForgotPasswordPage from "./app/auth/forgot_password"
import Footer from "./components/ui/nav/footer"
import HowItWorksPage from "./app/how_it_works_page"
import ReviewsPage from "./app/reviews_page"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Driveway_Dreams/'}>
         <ExportNav />
         <ReviewsPage />
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="authenticate" element={<AuthModal />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
         </Routes> 
         <Footer />
      </BrowserRouter>
  )
}



