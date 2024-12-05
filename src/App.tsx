import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./app/home_page"
import ExportNav from "./components/ui/nav/export_nav"
import ErrorPage from "./app/error_page"
import ForgotPasswordPage from "./app/auth/forgot_password"
import Footer from "./components/ui/nav/footer"
import HowItWorksPage from "./app/how_it_works_page"
import ReviewsPage from "./app/reviews_page"
import SearchBar from "./components/ui/search/search_bar"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Driveway_Dreams/'}>
         <ExportNav />
         <SearchBar />
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
         </Routes> 
         <Footer />
      </BrowserRouter>
  )
}



