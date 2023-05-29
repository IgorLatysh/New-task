import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Drawer,
    IconButton,
} from "@mui/material";
import React, { useState } from "react";
import "./Feedback.css";
import L from "../../img/Subtract.png";
import { Close, ExpandMore } from "@mui/icons-material";
const vop = [
    {
        v: "How long will I wait for my prize?",
        o: "It usually takes 5-7 business days.",
    },
    {
        v: "Are there any hidden costs?",
        o: "Absolutely not. Once you've won the prize and entered your details, we'll take care of the rest. Shipping costs are our responsibility!",
    },
    {
        v: "I'm a winner, why would I answer the questions / guess the box?",
        o: "You are still not a winner, but you were one of 10 people selected to try to win our prize..",
    },
    {
        v: "How can I get a prize if I win?",
        o: "First, you need to enter your shipping address and contact details, then our system will direct you. Then you have to prove that you are not a robot because the prize is only given to real people.",
    },
    {
        v: "Why should I pay 400 dollars for a prize?",
        o: "400 dollars is not a price - it is a withholding payment to prove that you are truly human. ALL payments will be refunded upon approval.",
    },
    {
        v: "I can't use my credit card, transaction failed?",
        o: "If you are unable to use your credit card, it means that your bank is blocking the transaction: you must verify it in your bank account.",
    },
];
export default function Feedback() {
    const [deg, setdeg] = useState(false);
    return (
        <>
            <Box className="Feedback">
                <IconButton onClick={() => setdeg(true)}>
                    <Box className="Feedback_C">
                        <img className="L" src={L} alt="" />
                        Feedback
                    </Box>
                </IconButton>
            </Box>
            <Drawer onClose={() => setdeg(false)} anchor="right" open={deg}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <IconButton onClick={() => setdeg(false)}>
                        <Close fontSize="large" />
                    </IconButton>
                </Box>
                <Box sx={{ m: "15px 0", width: { xs: "200px", md: "350px" } }}>
                    {vop.map((g, i) => (
                        <Accordion key={i}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                {g.v}
                            </AccordionSummary>
                            <AccordionDetails>{g.o}</AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Drawer>
        </>
    );
}
