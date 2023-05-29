import React from "react";
import "./Main.css";
import MainTitle from "./MainTitle/MainTitle";
import MainPhoto from "./MainPhoto/MainPhoto";
import MainBody from "./MainBody/MainBody";
import Feedback from "../Feedback/Feedback";

export default function Main({ Click }) {
    return (
        <main className="main">
            <MainTitle />
            <MainPhoto />
            <MainBody Click={Click} />
        </main>
    );
}
