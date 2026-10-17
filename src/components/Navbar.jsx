import './Navbar.css'
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <>
        <nav>
        <Link to={"/"} className="a1"> Home </Link>
        <Link to={"/about"} className="a1"> About </Link>
        <Link to={"/contact"} className="a1"> Contact </Link>
        <Link to={"/login"} className="a1"> Login </Link>
        </nav>
        </>
)
}