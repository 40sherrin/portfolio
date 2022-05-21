import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerInfo = styled.div`
    h2 {
        color: rgb(255, 180, 0);
        font-size: 40px;
        font-weight: 700;
        text-transform: capitalize;
    }
`
export const ImgWrapper = styled.div`
    width: 500px;
    height: auto;
    position: relative;
    margin: 0 auto;
    text-align: center;
    
    img {
        width: 100%;
        margin-top: 10rem;
    }

`