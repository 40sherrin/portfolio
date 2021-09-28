import React from 'react'
import { createGlobalStyle } from "styled-components";
import constructionImage from '../images/undraw_under_construction_46pa.svg'

import { ImageWrapper } from './styles'

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`


const Home = () => {
    return (
        <>
            <GlobalStyle />
            <ImageWrapper>
                <div>
                    <img src={constructionImage} alt="construction svg" />
                    <h1>coming soon</h1>
                    <h1>This site is under construction</h1>
                </div>
            </ImageWrapper>
        </>
    )
}

export default Home