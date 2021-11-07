import { 
    NavbarHeader,
    NavbarSection,
    NavbarLogo,
    NavbarItems
    } from "./NavbarElements";
    

const Navbar = () => {
    return (
       <NavbarHeader>
           <NavbarSection>
                <NavbarLogo></NavbarLogo>
                <NavbarItems>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </NavbarItems>
           </NavbarSection>
       </NavbarHeader>
    )
}

export default Navbar;