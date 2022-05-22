import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    position: relative;
    padding: 0 20px;
    @media (min-width: 1200px) {
        max-width: 1140px;
        margin: 0 auto;
    }
`
export const AboutMeHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 60px 0px;
    text-align: center;
`
export const H1Header = styled.h1`
    font-size: 56px;
    font-weight: 900;
    text-transform: uppercase;
`
export const Span = styled.span`
    color: #ffb400;
`
export const SpanResume = styled.span`
    position: absolute;
    font-size: 110px;
    right: 0;
    left: 0;
    letter-spacing: 10px;
    line-height: 0.7;
    top: 50%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.07);
`
export const PersonalInfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`
export const PersonalInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`
export const PersonalInfoH3Header = styled.h3`
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`
export const PersonalInfo = styled.div`

`
export const DownloadButton = styled.a`
    
`
export const PersonalInfoBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`
export const PersonlInfoAwardBox = styled.div`
   
`