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
        <> 
            <NavbarHeader>
                <NavbarWrapper>
                        <NavbarItems>
                            <ul>
                                <li><Link to="/"><span>Home</span> <FaHomeIcon className="icon-menu" /></Link></li>
                                <li><Link to="/about"><span>About</span> <BsFillPersonFillIcon className="icon-menu" /></Link></li>
                                <li><Link to="/projects"><span>Projects</span> <BsFillBriefcaseFillIcon className="icon-menu" /></Link></li>
                                <li><Link to="/contact"><span>Contact</span> <RiMailOpenFillIcon className="icon-menu" /></Link></li>
                            </ul>
                        </NavbarItems>
                </NavbarWrapper>
            </NavbarHeader>
            <Outlet />
        </>
    )
}

export default Navbar;