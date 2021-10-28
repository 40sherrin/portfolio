import React from 'react';
import { createGlobalStyle } from "styled-components";
import Layout from './layout';
import Intro from './Intro';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';



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
            <Layout>
                <Intro />
                <About />
                <Contact />
                <Projects />
            </Layout>
        </>
    )
}

export default Home