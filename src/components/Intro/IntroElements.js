import styled from "styled-components";
import PersonImage from '../../images/profileImage.jpg';


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
`
export const IntroPara = styled.p`
    margin: 15px 0 28px;
    font-size: 16px;
    line-height: 35px;
`
export const IntroReadMore = styled.div`

`
