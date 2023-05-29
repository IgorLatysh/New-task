import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Dialog,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Quiz from "../../Quiz/Quiz";
import "./MainBody.css";
import img from "../../../img/1 33.png";

export default function MainBody({ Click }) {
    const mes =
        "December,January,February,March,April,May,June,July,August,September,October,November".split(
            ","
        );

    const [log, serlog] = useState(false);
    const [logT, setlogT] = useState(false);
    const [logT2, setlogT2] = useState(false);
    const day = new Date().getDate();
    const mon = mes[new Date().getDay()];
    useEffect(() => {
        if (log) {
            setTimeout(() => {
                setlogT(true);
                setTimeout(() => {
                    setlogT2(true);
                }, 10000);
            }, 1000);
        }
    }, [log]);
    return (
        <Box>
            <Box>
                <Typography fontSize={18}>
                    In order To get a promotional LG OLED evo C3 65 2023, please
                    complete the survey for confirming that you are a real
                    person.
                    <br />
                    Please hurry up, because the number of items on offer is
                </Typography>
            </Box>
            <Quiz Click={serlog} />

            <Dialog sx={{ transition: "all 1s" }} open={logT}>
                {logT2 ? (
                    <div className="T2">
                        <Box
                            sx={{ display: { xs: "none", md: "flex" } }}
                            className="dialog_box_md"
                        >
                            <Box>
                                <img className="imgB" src={img} alt="" />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h4">
                                    Congratulations, you have successfully
                                    verified that you are a real person.
                                </Typography>
                                <Typography variant="h6">
                                    Today, {day} {mon}, you have the opportunity
                                    to get LG suitcase.
                                </Typography>
                                <Typography variant="h6">
                                    All you need is just to choose the right
                                    gift box.
                                </Typography>
                                <Typography variant="h6">
                                    You've got 3 attempts, good luck!
                                </Typography>
                            </Box>
                            <Box>
                                <button
                                    onClick={() => Click(false)}
                                    className="button button_popap"
                                >
                                    OK
                                </button>
                            </Box>
                        </Box>
                        <Box
                            sx={{ display: { xs: "flex", md: "none" } }}
                            className="dialog_box_xs"
                        >
                            <Box>
                                <img
                                    className="imgB"
                                    style={{ marginTop: "-20px" }}
                                    src={img}
                                    alt=""
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    // gap: "10px",
                                }}
                            >
                                <Typography variant="h5">
                                    Congratulations, you have successfully
                                    verified that you are a real person.
                                </Typography>
                                <Typography variant="h6">
                                    Today, {day} {mon}, you have the opportunity
                                    to get LG suitcase.
                                </Typography>
                                <Typography variant="h6">
                                    All you need is just to choose the right
                                    gift box.
                                </Typography>
                                <Typography variant="h6">
                                    You've got 3 attempts, good luck!
                                </Typography>
                            </Box>
                            <Box>
                                <button
                                    onClick={() => Click(false)}
                                    className="button button_popap"
                                >
                                    OK
                                </button>
                            </Box>
                        </Box>
                    </div>
                ) : (
                    <Box
                        className="T1"
                        sx={{
                            width: "300px",
                            height: "250px",
                            textAlign: "left",
                            p: "10px",
                            fontWeight: 500,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <p>Your answers are being verified</p>
                            <CircularProgress />
                        </div>

                        <p className="l1">You answered 3/3 questions!</p>
                        <p className="l2">
                            There are no preliminary surveys of your IP
                        </p>
                        <p className="l3"> Gifts are loading..</p>
                    </Box>
                )}
            </Dialog>
        </Box>
    );
}
