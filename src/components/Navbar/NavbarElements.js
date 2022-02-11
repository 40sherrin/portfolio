import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill, BsFillBriefcaseFill } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";


export const NavbarHeader = styled.header`
    position: fixed;
    right: 30px;
`
export const NavbarWrapper = styled.div`
    background: transparent;
    height: 75px;
    padding: 0px 10px;
`

export const NavbarItems = styled.nav`
    ul {
        margin: 0;
        display: flex;
        padding-top: 30px;
        li {
            list-style: none;
            padding-left: 20px;
            color: white;
        }
    }
`
export const FaHomeIcon = styled(FaHome)`
    font-size: 2rem;
`
export const BsFillPersonFillIcon = styled(BsFillPersonFill)`
    font-size: 2rem;
`
export const BsFillBriefcaseFillIcon = styled(BsFillBriefcaseFill)`
    font-size: 2rem;
`
export const RiMailOpenFillIcon = styled(RiMailOpenFill)`
    font-size: 2rem;
`