import React from "react";
import { Box } from "@mui/material";
import "./MainPhoto.css";
import PH1 from "../../../img/IMG000 (1).png";
import PH2 from "../../../img/IMG000.png";
import PH3 from "../../../img/IMG_6661 2.png";
import { Carousel } from "react-bootstrap";

export default function MainPhoto() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <img className="Main_Photo" src={PH1} alt="" />
                <img className="Main_Photo" src={PH2} alt="" />
                <img className="Main_Photo" src={PH3} alt="" />
            </Box>
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                    width: "260px",
                }}
            >
                <Carousel variant="dark" indicators={false} fade={true}>
                    <Carousel.Item>
                        <div className="carusel_item">
                            <img className="Main_Photo" src={PH1} alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carusel_item">
                            <img className="Main_Photo" src={PH2} alt="" />
                        </div>
                    </Carousel.Item>{" "}
                    <Carousel.Item>
                        <div className="carusel_item">
                            <img className="Main_Photo" src={PH3} alt="" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Box>
        </Box>
    );
}
