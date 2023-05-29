import React, { useEffect, useState } from "react";
import "./PrizeBox.css";
import xsV from "../../../img/5 2.png";
import xsN from "../../../img/3 66.png";
import mdV from "../../../img/5 2.png";
import mdS from "../../../img/4 2.png";
import mdN from "../../../img/2 2.png";
import PrizMd from "../../../img/IMG000 2.png";
import { Box } from "@mui/material";

export default function PrizeBox({ Clicks, Pl }) {
    const [Click, setClick] = useState(false);
    const [Click001, setClick001] = useState(false);

    useEffect(() => {
        if (Pl) {
            setClick001(true);
        }
    }, [Click]);
    return (
        <>
            <div
                onClick={() => {
                    setClick(true);
                    Clicks();
                }}
                className="PrizeBox"
            >
                <Box
                    sx={{ display: { xs: "none", md: "flex" } }}
                    className="PrizeBox_md"
                >
                    <img
                        style={{
                            marginBottom: `${Click && "-100px"}`,
                        }}
                        className="PrizeBox_V_md"
                        src={mdV}
                        alt=""
                    />
                    <img className="PrizeBox_S_md" src={mdS} alt="" />
                    <img className="PrizeBox_N_md" src={mdN} alt="" />
                    <img
                        style={{
                            display: `${Click001 ? "flex" : "none"}`,
                            top: `${Click001 && "50%"}`,
                        }}
                        className="PrizeBox_priz_md"
                        src={PrizMd}
                        alt=""
                    />
                </Box>
                <Box
                    sx={{ display: { xs: "flex", md: "none" } }}
                    className="PrizeBox_xs"
                >
                    <img
                        style={{
                            width: "100px",
                            marginBottom: `${Click && "-50px"}`,
                        }}
                        className="PrizeBox_V_xs"
                        src={xsV}
                        alt=""
                    />
                    <img className="PrizeBox_S_md" src={mdS} alt="" />
                    <img className="PrizeBox_N_md" src={mdN} alt="" />
                    <img
                        style={{
                            display: `${Click001 ? "flex" : "none"}`,
                            marginBottom: `${Click001 && "-10%"}`,
                        }}
                        className="PrizeBox_priz_xs"
                        src={PrizMd}
                        alt=""
                    />
                </Box>
            </div>
        </>
    );
}
