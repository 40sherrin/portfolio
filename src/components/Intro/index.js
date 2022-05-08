import { 
    Container,
    ImageWrapper,
    IntroHeader,
    IntroTextContainer,
    PersonImageSection,
    IntroTextWrapper,
    IntroPara,
    MoreAboutMeButton,
    BiRightArrowAltIcon
} from "./IntroElements";


const Intro = () => {
    return (
        <Container>
            <ImageWrapper>
                <PersonImageSection />
            </ImageWrapper>
            <IntroTextContainer>
                <IntroTextWrapper>
                    <IntroHeader>I'm Fareed Askari. <span>Web Developer</span></IntroHeader>
                    <IntroPara>
                        I'm a self-tuaght software designer / developer, mainly working / developing with / for [Shopify, Umbraco, Kentico] 
                    </IntroPara>
                    <MoreAboutMeButton to="/about">
                        <span>more about me</span>
                        <BiRightArrowAltIcon />
                    </MoreAboutMeButton>
                </IntroTextWrapper>
            </IntroTextContainer>
        </Container>
    )
}

export default Intro;