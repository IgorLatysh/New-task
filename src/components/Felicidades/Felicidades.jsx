import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Dialog,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Felicidades.css";
import img from "../../img/IMG000.png";
import { ExpandMore } from "@mui/icons-material";
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
export default function Felicidades() {
    const [deg, setdeg] = useState(true);
    return (
        <>
            <Dialog sx={{ display: { xs: "none", md: "block" } }} open={deg}>
                <Box className="dialog_box_md">
                    <Box>
                        <img src={img} alt="" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h4">
                            Congratulations! You won!
                        </Typography>
                        <Typography variant="h6">
                            You won LG OLED evo C3 ship!
                        </Typography>
                        <ol
                            style={{
                                fontSize: "13px",
                            }}
                        >
                            <li>
                                1. Click "OK" below in order to go to the
                                shipping checkout page.
                            </li>
                            <li>
                                Fill out the form and pay for order to receive
                                LG OLED evo C3.
                            </li>
                            <li>
                                The package will be delivered within 5-7 days.
                            </li>
                        </ol>
                    </Box>
                    <Box>
                        <button
                            // onClick={() => setdeg(false)}
                            className="button button_popap"
                        >
                            OK
                        </button>
                    </Box>
                </Box>
            </Dialog>
            <Dialog
                open={deg}
                sx={{
                    display: { xs: "flex", md: "none" },
                }}
            >
                <Box className="dialog_box_xs">
                    <Box>
                        <img style={{ marginTop: "-20px" }} src={img} alt="" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <Typography variant="h5">
                            Congratulations! You won!
                        </Typography>
                        <Typography variant="h6">
                            You won LG OLED evo C3 ship!
                        </Typography>
                        <ol
                            style={{
                                fontSize: "13px",
                            }}
                        >
                            <li>
                                Click "OK" below in order to go to the shipping
                                checkout page.
                            </li>
                            <li>
                                Fill out the form and pay for order to receive
                                LG OLED evo C3.
                            </li>
                            <li>
                                The package will be delivered within 5-7 days.
                            </li>
                        </ol>
                    </Box>
                    <Box>
                        <button
                            // onClick={() => setdeg(false)}
                            className="button button_popap"
                        >
                            OK
                        </button>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}
{
    /* <>
    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: "15px",
        }}
    >
        <Box
            sx={{
                width: { xs: "80%", md: "45%" },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <img style={{ width: "80%" }} src={img} alt="" />
        </Box>
        <Box
            sx={{
                width: { xs: "90%", md: "45%" },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <form style={{ width: "100%" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "25px",
                        width: { xs: "100%", md: "100%" },
                        // height: { xs: "640px", md: "610px" },
                        borderRadius: "5px",
                        boxShadow: "0 0 5px",
                        padding: "15px",
                    }}
                >
                    <div style={{ fontWeight: "700", fontSize: "20px" }}>
                        Registration
                    </div>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            width: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <TextField
                                    label="First Name"
                                    variant="standard"
                                    required
                                />
                            </Box>
                            <Box>
                                <TextField
                                    label="Last Name"
                                    variant="standard"
                                    required
                                />
                            </Box>
                        </Box>
                        <TextField
                            label="Telephone number:"
                            variant="standard"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            variant="standard"
                            fullWidth
                            required
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontWeight: 500,
                                color: "green",
                            }}
                        >
                            I have read and agree to the
                            <Checkbox required />
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <button className="button_01">Submit</button>
                    </Box>
                </Box>
            </form>
        </Box>
    </Box>
    <Box sx={{ m: "15px 0" }}>
        {vop.map((g, i) => (
            <Accordion key={i}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    {g.v}
                </AccordionSummary>
                <AccordionDetails>{g.o}</AccordionDetails>
            </Accordion>
        ))}
    </Box>
</>; */
}
