import styled from "styled-components";
import PersonImage from '../../images/fareedaskari.jpg';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaShopify, FaUmbraco } from "react-icons/fa";
import { SiKentico } from "react-icons/si";


export const Container = styled.section `
    display: grid;
    grid-template-areas: "ImageSvg IntroText";
    margin: 0px !important;
    padding: 0px !important;
`
export const ImageWrapper = styled.div`
    grid-area: ImageSvg;
    ::after {
        content: "";
        position: absolute;
        background-color: #ffb400;
        height: 200%;
        width: 100%;
        transform: rotate(-15deg);
        left: -83%;
        top: -50%;
    }
`
export const PersonImageSection = styled.div`
    background-image: url(${PersonImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
    height: calc(100vh - 80px);
    z-index: 111;
    border-radius: 30px;
    left: 40px;
    top: 40px;
    box-shadow: 0 0 7px rgb(0 0 0 / 90%);
    position: relative;
    overflow: hidden;
`
export const IntroTextContainer = styled.div`
    grid-area: IntroText;
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IntroTextWrapper = styled.div`

`

export const FaShopifyIcon = styled(FaShopify)`
    background: #ffb400;
    font-size: 16px;
    padding: 10px;
    border-radius: 50%;
`
export const FaUmbracoIcon = styled(FaUmbraco)`
    background: #ffb400;
    font-size: 16px;
    padding: 10px;
    border-radius: 50%;
`
export const SiKenticoIcon = styled(SiKentico)`
    background: #ffb400;
    font-size: 16px;
    padding: 10px;
    border-radius: 50%;
`
export const IntroHeader = styled.h1`
    color: #ffb400;
    font-size: 51px;
    line-height: 62px;
    font-weight: 700;
    margin: 18px 0 10px;
    position: relative;
    text-transform: uppercase;
    display: inline-block;
    ::before {
        content: '';
        position: absolute;
        background-color: #ffb400;
        left: -65px;
        top: 29px;
        height: 4px;
        width: 40px;
        border-radius: 10px;
    }
    & span {
        color: #fff;
        display: block;
    }
`
export const IntroPara = styled.p`
    margin: 15px 0 28px;
    font-size: 16px;
    line-height: 35px;
`
export const MoreAboutMeButton = styled(Link)`
    border: 1px solid #ffb400;
    overflow: hidden;
    display: inline-block;
    line-height: 1.4;
    border-radius: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;
    transition: all ease-in 0.5s;
    position: relative;
    z-index: 1;
    padding: 16px 70px 16px 35px;
    font-size: 15px;
    font-weight: 600;
    background-color: transparent;
    outline: none !important;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none !important;
    
    &:hover:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ffb400;
        transition: all ease-in 0.5s;
        top: 0px;
        left: 0px;
        z-index: -1;
    }
`
export const BiRightArrowAltIcon = styled(BiRightArrowAlt)`
    font-size: 28px;
    position: absolute;
    background: #ffb400;
    right: 0;
    top: 0px;
    width: 55px;
    padding: 13px 0px;
    border-radius: 50%;
`
