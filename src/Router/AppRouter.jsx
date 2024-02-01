import { Route, Routes } from "react-router-dom"
import { HomeRouter } from "../components/Router/HomeRouter"
import { Footer } from "../shared/Footer"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<HomeRouter />} />
        </Routes>
        <Footer />
    </>
  )
}
