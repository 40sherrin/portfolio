import {
    Container,
    AboutMeHeader,
    H1Header,
    Span,
    SpanResume,
    PersonalInfoContainer,
    PersonalInfoWrapper,
    PersonalInfoH3Header,
    PersonalInfo,
    DownloadButton,
    PersonalInfoBoxWrapper,
    PersonlInfoAwardBox
} from './AboutElements';

import resume from './../../Docs/Fareed\'s resume.docx'

const About = () => {
    return (
        <Container>
            <AboutMeHeader>
                <H1Header>About <Span>Me</Span></H1Header>
                <SpanResume>resume</SpanResume>
            </AboutMeHeader>
            <PersonalInfoContainer>
                <PersonalInfoWrapper>
                    <PersonalInfoH3Header>personal info</PersonalInfoH3Header>
                    <PersonalInfo>
                        <ul>
                            <li><span>first name :</span><span>Fareed</span></li>
                            <li><span>last name :</span><span>Askari</span></li>
                            <li><span>age :</span><span>24</span></li>
                            <li><span>Freelance :</span><span>Yes</span></li>
                        </ul>
                    </PersonalInfo>
                    <PersonalInfo>
                        <ul>
                            <li><span>Address :</span><span>Sydney, Australia</span></li>
                            <li><span>Phone :</span><span>+61 470 594 555</span></li>
                            <li><span>Email :</span><span>fareedaskari42@gmail.com</span></li>
                            <li><span>Languages :</span><span>Persian/Dari, English</span></li>
                        </ul>
                    </PersonalInfo>
                    <DownloadButton href={resume} download>
                        <span>Download cv</span>
                        <span> icon</span>
                    </DownloadButton>
                </PersonalInfoWrapper>
                <PersonalInfoBoxWrapper>
                    <PersonlInfoAwardBox>
                        <b>5 <p>years of experience</p></b>
                    </PersonlInfoAwardBox>
                    <PersonlInfoAwardBox>
                        <b>5 <p>years of experience</p></b>
                    </PersonlInfoAwardBox>
                    <PersonlInfoAwardBox>
                        <b>5 <p>years of experience</p></b>
                    </PersonlInfoAwardBox>
                    <PersonlInfoAwardBox>
                        <b>5 <p>years of experience</p></b>
                    </PersonlInfoAwardBox>
                </PersonalInfoBoxWrapper>
            </PersonalInfoContainer>
        </Container>
    )
}

export default About;