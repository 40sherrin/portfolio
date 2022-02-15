import { 
    Container,
    ImageWrapper,
    IntroHeader,
    IntroTextContainer,
    PersonImage
} from "./IntroElements";
const Intro = () => {
    return (
        <Container>
            <ImageWrapper>
                <PersonImage />
            </ImageWrapper>
            <IntroTextContainer>
                <IntroHeader>I'm Fareed Askari <span>Front End Developer</span></IntroHeader>
            </IntroTextContainer>
        </Container>
    )
}

export default Intro;