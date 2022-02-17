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
`
export const IntroHeader = styled.h1`

`
export const IntroPara = styled.p`

`
export const IntroReadMore = styled.div`

`
