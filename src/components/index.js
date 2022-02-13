import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './styles';
import Layout from './layout';
import Intro from './Intro';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import NoPage from './NoPage';


const App = () => {
    return (
        <>
        <GlobalStyle />
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Intro />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    </>
    )
}

export default App;