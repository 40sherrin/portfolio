import {
    Container,
    AboutMeHeader,
    H1Header,
    Span,
    SpanResume
} from './AboutElements';

const About = () => {
    return (
        <Container>
            <AboutMeHeader>
                <H1Header>About <Span>Me</Span></H1Header>
                <SpanResume>resume</SpanResume>
            </AboutMeHeader>
        </Container>
    )
}

export default About;