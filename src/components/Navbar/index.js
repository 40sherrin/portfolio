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
                                <li><Link to="/"><span>Home</span> <FaHomeIcon /></Link></li>
                                <li><Link to="/about"><span>About</span> <BsFillPersonFillIcon /></Link></li>
                                <li><Link to="/projects"><span>Projects</span> <BsFillBriefcaseFillIcon /></Link></li>
                                <li><Link to="/contact"><span>Contact</span> <RiMailOpenFillIcon /></Link></li>
                            </ul>
                        </NavbarItems>
                </NavbarWrapper>
            </NavbarHeader>
            <Outlet />
        </>
    )
}

export default Navbar;