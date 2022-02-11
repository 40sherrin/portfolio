import { Outlet, Link } from "react-router-dom";
import { 
    NavbarHeader,
    NavbarWrapper,
    NavbarItems,
    FaHomeIcon,
    BsFillPersonFillIcon,
    BsFillBriefcaseFillIcon,
    RiMailOpenFillIcon
    } from "./NavbarElements";
    

const Navbar = () => {
    return (
       <NavbarHeader>
           <NavbarWrapper>
                <NavbarItems>
                    <ul>
                        <li><Link to="/">Home <FaHomeIcon /></Link></li>
                        <li><Link to="/about">About <BsFillPersonFillIcon /></Link></li>
                        <li><Link to="/projects">Projects <BsFillBriefcaseFillIcon /></Link></li>
                        <li><Link to="/contact">Contact <RiMailOpenFillIcon /></Link></li>
                    </ul>
                </NavbarItems>
                <Outlet />
           </NavbarWrapper>
       </NavbarHeader>
    )
}

export default Navbar;