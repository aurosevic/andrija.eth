import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import Resume from './pages/Resume/Resume';
import Software from './pages/Software/Software';
import Hardware from './pages/Hardware/Hardware';
import './styles/globals.css';
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/social-media" element={<SocialMedia/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/software" element={<Software/>}/>
                        <Route path="/hardware" element={<Hardware/>}/>
                        <Route path="/about-me" element={<AboutMe/>}/>
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;