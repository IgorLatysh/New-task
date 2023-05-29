import {
    Box,
    Step,
    StepLabel,
    Stepper,
    Typography,
    Button,
    StepContent,
} from "@mui/material";
import React, { useState } from "react";

export default function Quiz({ Click }) {
    const steps = [
        {
            label: "Do you live in Australia?",
            description: ["Yes", "No"],
        },
        {
            label: "Have you used LG brand products?",
            description: ["Yes", "No"],
        },
        {
            label: "What size TV would you like?",
            description: ["45in", "55in", "65in"],
        },
    ];
    const [cl0, setcl0] = useState(true);
    const [cl1, setcl1] = useState(false);
    const [cl2, setcl2] = useState(false);

    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep == 2) {
            Click(true);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box className="Quiz">
            <Stepper
                sx={{ display: { xs: "none", md: "flex" } }}
                activeStep={activeStep}
            >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel />
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                                {step.label}
                                <div>
                                    {step.description.map((g, i) => (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {g}
                                        </Button>
                                    ))}
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <Stepper
                sx={{ display: { xs: "block", md: "none" } }}
                activeStep={activeStep}
                orientation="vertical"
            >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel />
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                                {step.label}
                                <div>
                                    {step.description.map((g, i) => (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {g}
                                        </Button>
                                    ))}
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
{
    /* <>
                <Box sx={{ display: cl0 ? "block" : "none" }}>
                <Box
                    sx={{
                        mt: { xs: "25px", md: "34px" },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: "3px", md: "5px" },
                    }}
                >
                    <Typography fontSize={18} sx={{ fontWeight: "bold" }}>
                        Question 1 of 3.
                    </Typography>
                    <Typography fontSize={18}>
                        Do you live in Australia?
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mt: { xs: "10px", md: "16px" },
                        mb: "30px",
                        gap: "5px",
                    }}
                >
                    <button
                        onClick={() => {
                            setcl0(false);
                            setcl1(true);
                        }}
                        className="button"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => {
                            setcl0(false);
                            setcl1(true);
                        }}
                        className="button"
                    >
                        No
                    </button>
                </Box>
            </Box>
            <Box sx={{ display: cl1 ? "block" : "none" }}>
                <Box
                    sx={{
                        mt: { xs: "25px", md: "34px" },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: "3px", md: "5px" },
                    }}
                >
                    <Typography fontSize={18} sx={{ fontWeight: "bold" }}>
                        Question 2 of 3.
                    </Typography>
                    <Typography fontSize={18}>
                        Question 2 of 3. Have you used LG brand products?
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mt: { xs: "10px", md: "16px" },
                        mb: "30px",
                        gap: "5px",
                    }}
                >
                    <button
                        onClick={() => {
                            setcl1(false);
                            setcl2(true);
                        }}
                        className="button"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => {
                            setcl1(false);
                            setcl2(true);
                        }}
                        className="button"
                    >
                        No
                    </button>
                </Box>
            </Box>
            <Box sx={{ display: cl2 ? "block" : "none" }}>
                <Box
                    sx={{
                        mt: { xs: "25px", md: "34px" },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: "3px", md: "5px" },
                    }}
                >
                    <Typography fontSize={18} sx={{ fontWeight: "bold" }}>
                        Question 3 of 3.
                    </Typography>
                    <Typography fontSize={18}>
                        What size TV would you like?
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mt: { xs: "10px", md: "16px" },
                        mb: "30px",
                        gap: "5px",
                    }}
                >
                    <button onClick={() => Click(true)} className="button">
                        45 in
                    </button>
                    <button onClick={() => Click(true)} className="button">
                        55 in
                    </button>
                    <button onClick={() => Click(true)} className="button">
                        65 in
                    </button>
                </Box>
            </Box>
</> */
}
