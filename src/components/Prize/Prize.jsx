import React, { useEffect, useState } from "react";
import "./Prize.css";
import { Box, Dialog, Grid } from "@mui/material";
import PrizeBox from "./PrizeBox/PrizeBox";
import icon from "../../img/free-icon-checkmark-1828710.png";
import priz from "../../img/IMG000 2.png";

const ll = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
export default function Present({ run1 }) {
    const [dg, setdg] = useState(false);
    const [Fn, setFn] = useState(0);
    const [Pl, setPl] = useState(false);
    const [dil, setdil] = useState(false);
    useEffect(() => {
        if (Pl) {
            setTimeout(() => {
                setdil(true);
                setTimeout(() => {
                    run1();
                }, 2500);
            }, 2000);
        }
    }, [Pl]);
    const sr = () => {
        if (Fn == 2) {
            setPl(true);
            return;
        }
        setTimeout(() => setdg(true), 1000);
        setFn(Fn + 1);
    };
    return (
        <>
            <Box className="prize_box">
                <Grid container spacing={2}>
                    {ll.map((g, i) => (
                        <Grid key={i} md={3} xs={4} item>
                            <PrizeBox Clicks={sr} Pl={Pl} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Dialog open={dg}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: { xs: "300px", md: '"400px"' },
                        height: "300px",
                        textAlign: "center",
                        p: "20px",
                        fontWeight: 500,
                    }}
                >
                    <img className="icon_tt" src={icon} alt="" />
                    <p>
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "20px",
                            }}
                        >
                            OHHH...
                        </span>
                        <br />
                        Sorry, but this gift is empty! You've got (
                        {Fn == 1 ? "2" : "1"}) more attempts.
                        <br />
                        Good luck!
                    </p>
                    <button
                        onClick={() => setdg(false)}
                        style={{
                            width: "150px",
                        }}
                        className="button"
                    >
                        OK
                    </button>
                </Box>
            </Dialog>
            <div style={{ display: `${dil ? "block" : "none"}` }}>
                <div className="div_priz">
                    <img className="priz" src={priz} alt="" />
                </div>
            </div>
        </>
    );
}
