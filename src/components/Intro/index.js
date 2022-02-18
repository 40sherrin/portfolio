import { 
    Container,
    ImageWrapper,
    IntroHeader,
    IntroTextContainer,
    PersonImageSection,
} from "./IntroElements";
const Intro = () => {
    return (
        <Container>
            <ImageWrapper>
                <PersonImageSection />
            </ImageWrapper>
            <IntroTextContainer>
                <IntroHeader>I'm Fareed Askari <span>Front End Developer</span></IntroHeader>
            </IntroTextContainer>
        </Container>
    )
}

export default Intro;