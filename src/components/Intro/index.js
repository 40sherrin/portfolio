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
                        I'm a self-tuaght software developer, I'm (<span className="working">working</span> / <span className="developing">developing</span>) (<span className="with">with</span> / <span className="for">for</span>) [Shopify, Umbraco, Kentico]
                        <br />
                        Cyber security is also fun, more info on about me page.
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