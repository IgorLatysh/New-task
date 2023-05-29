import React, { useState } from "react";
import Header from "./Header/Header";
import Prize from "./Prize/Prize";
import { Container, Slide, Snackbar } from "@mui/material";
import Main from "./Main/Main";
import Felicidades from "./Felicidades/Felicidades";
import Feedback from "./Feedback/Feedback";

export default function App() {
    const [Click, setClick] = useState(true);
    const [Click2, setClick2] = useState(false);
    const [Click3, setClick3] = useState(false);
    const [sn, setsn] = useState(true);

    const run1 = () => {
        setClick(false);
        setClick2(true);
    };
    const run2 = () => {
        setClick2(false);
        setClick3(true);
    };
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                {Click && <Main Click={run1} />}
                {Click2 && <Prize run1={run2} />}
                {Click3 && <Felicidades />}
                <Feedback />
            </Container>
        </>
    );
}
