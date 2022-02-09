import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";


export const NavbarHeader = styled.header`
    margin: 0;
    padding: 0;
`
export const NavbarWrapper = styled.div`
    background: #5624d0;
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