import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill, BsFillBriefcaseFill } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";


export const NavbarHeader = styled.header`
    position: fixed;
    right: 30px;
    bottom: 0%;
    z-index: 3;
    display: flex;
    align-items: center;
    height: calc(100vh - 200px);
    top: 100px;
    opacity: 1;
    transition: opacity 0.3s;
    --webkit-transition: opacity 0.3s;
`
export const NavbarWrapper = styled.div`
    background: transparent;
`
export const NavbarItems = styled.nav`
    margin: 0;
    padding: 0;
    ul {
        margin: 0;
        padding-top: 30px;
        li {
            width: 50px;
            height: 50px;
            list-style: none;
            position: relative;
            display: flex;
            align-items: center;
            transition: .3s;
            margin: 20px 0;
            border-radius: 50%;
            background: #2b2a2a;
            span {
                z-index: -1;
                position: absolute;
                top: 0;
                right: 0;
                opacity: 0;
                color: #fff;
                line-height: 50px;
                font-weight: 500;
                letter-spacing: 2.5px;
                transition: all .3s;
                border-radius: 30px;
                text-transform: uppercase;
                padding: 0 25px 0 30px;
                height: 50px
            }
            .icon-menu {
                position: absolute;
                left: 0;
                right: 0;
                margin: 0 auto;
                display: block;
                text-align: center;
                font-size: 19px;
                top: 15px;
            }
            &:hover {
                background-color: #ffb400;
                span{
                    opacity: 1;
                    background-color: #ffb400;
                    padding-right: 50px;
                    font-weight: 550;
                }
            }
        }
    }
`
export const FaHomeIcon = styled(FaHome)`
    font-size: 19px;
    color: white;
`
export const BsFillPersonFillIcon = styled(BsFillPersonFill)`
    font-size: 19px;
    color: white;
`
export const BsFillBriefcaseFillIcon = styled(BsFillBriefcaseFill)`
    font-size: 19px;
    color: white;
`
export const RiMailOpenFillIcon = styled(RiMailOpenFill)`
    font-size: 19px;
    color: white;
`