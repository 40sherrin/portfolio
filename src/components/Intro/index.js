import { 
    Container,
    ImageWrapper,
    IntroHeader,
    IntroTextContainer,
    PersonImageSection,
    IntroTextWrapper,
    IntroPara,
} from "./IntroElements";
const Intro = () => {
    return (
        <Container>
            <ImageWrapper>
                <PersonImageSection />
            </ImageWrapper>
            <IntroTextContainer>
                <IntroTextWrapper>
                    <IntroHeader>I'm Fareed Askari.</IntroHeader>
                    <IntroPara>
                        I'm a front-end developer focused on
                        crafting clean & user-friendly experiences,
                    </IntroPara>
                </IntroTextWrapper>
            </IntroTextContainer>
        </Container>
    )
}

export default Intro;