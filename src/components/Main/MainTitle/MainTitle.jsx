import { Box, Typography } from "@mui/material";
import React from "react";

export default function MainTitle() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: { sx: "10px", md: "12px" },
            }}
        >
            <Typography variant={"h4"}>Congratulations!</Typography>
            <Typography fontSize={18}>
                You may take part in the LG promotion! In connection with the
                release of a new model of LG TVs, we are giving away 100 units
                of LG OLED evo C3 65 inch 4K Smart TV 2023 for only 400 euros.
                limited!
            </Typography>
        </Box>
    );
}
