import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../Pages/AuthPage"
import { TestPage } from "../Pages/TestPage"


export const HomeRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={<AuthPage />} />
            <Route path="test" element={<TestPage />} />

            <Route path="/" element={<Navigate to='home' />} />
        </Routes>
    </>
  )
}
