import { 
    Container,
    ImageWrapper,
    IntroHeader,
    IntroTextContainer,
    PersonImageSection,
    PersonInfo
} from "./IntroElements";
const Intro = () => {
    return (
        <Container>
            <ImageWrapper>
                <PersonImageSection>
                    <PersonInfo>
                        
                    </PersonInfo>
                </PersonImageSection>
            </ImageWrapper>
            <IntroTextContainer>
                <IntroHeader>I'm Fareed Askari <span>Front End Developer</span></IntroHeader>
            </IntroTextContainer>
        </Container>
    )
}

export default Intro;