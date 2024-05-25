import { BiSolidContact } from "react-icons/bi"
import { FaAd, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa"
import { FaCalendar, FaList } from "react-icons/fa6"
import { IoMdMenu } from "react-icons/io"
import { NavLink, Outlet } from "react-router-dom"
import UseCart from "../Hooks/UseCart"


const DashBoard = () => {
    const [cart] = UseCart();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                        Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking">
                        <FaList></FaList>
                        My Booking</NavLink>
                    </li>
                    <div className="divider">

                    </div>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                        <IoMdMenu />
                        Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                        <FaShoppingBag />
                        Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                        <BiSolidContact />
                        Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashBoard
