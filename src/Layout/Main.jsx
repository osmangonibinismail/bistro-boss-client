import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Pages/Shard/Footer/Footer"
import Navbar from "../Pages/Shard/Navbar/Navbar"


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    )
}

export default Main
