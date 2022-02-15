import styled from "styled-components";
import PersonSvg from '../../images/bannerTwo.svg'


export const Container = styled.section `
    display: grid;
    grid-template-areas: "ImageSvg IntroText IntroText";
    margin: 0px !important;
    padding: 0px !important;
`
export const ImageWrapper = styled.div`
    grid-area: ImageSvg;
    background-color: #FFB400;
    clip-path: polygon(0 0, 73% 0, 100% 100%, 0% 100%);
    height: 100vh;
`
export const PersonImage = styled.img.attrs({
    src: `${PersonSvg}`
})`
    max-width: 
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
