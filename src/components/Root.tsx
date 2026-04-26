import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./mains/Home";
import About from "./mains/About";
import Profile from "./mains/Profile";
import Settings from "./mains/Settings";
import styled from "styled-components";
const PageWrapper = styled.div`
    width: 80vw;
    min-height: 100vh;
    margin: 0 auto;
    background-color: pink;
    box-sizing: border-box;
`;


export default function Root() {
    return (
        <>
            <PageWrapper>
            <Nav />

            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/settings"} element={<Settings />} />
            </Routes>
            </PageWrapper>
        </>
    );
}