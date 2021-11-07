import { 
    NavbarHeader,
    NavbarWrapper,
    NavbarLogo,
    NavbarItems
    } from "./NavbarElements";
    

const Navbar = () => {
    return (
       <NavbarHeader>
           <NavbarWrapper>
                <NavbarLogo></NavbarLogo>
                <NavbarItems>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </NavbarItems>
           </NavbarWrapper>
       </NavbarHeader>
    )
}

export default Navbar;