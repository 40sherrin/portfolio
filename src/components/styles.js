import styled from "styled-components";

export const ImageWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div {
        position: absolute;
        transform: translate(0%, 90%);
        max-width: 600px;
        max-height: 600px;
        text-align: center;

        img {
            width: 100%;
        }
        h1{
            color: #0000009e;
            font-weight: bolder;
            font-size: 30px;
            text-transform: uppercase;
            letter-spacing: 5px;
        }
        > h1:last-child {
            font-size: 20px;
        }
    }
`