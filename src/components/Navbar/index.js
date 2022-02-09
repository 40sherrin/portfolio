import { Outlet, Link } from "react-router-dom";
import { 
    NavbarHeader,
    NavbarWrapper,
    NavbarItems
    } from "./NavbarElements";
    

const Navbar = () => {
    return (
       <NavbarHeader>
           <NavbarWrapper>
                <NavbarItems>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </NavbarItems>
                <Outlet />
           </NavbarWrapper>
       </NavbarHeader>
    )
}

export default Navbar;