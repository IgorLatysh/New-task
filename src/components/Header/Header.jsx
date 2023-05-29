import {
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import "./Header.css";
import Logo from "../../img/logo.png";
import Flag from "../../img/Flag_of_Australia.svg.png";
import {
    KeyboardArrowDown,
    Person,
    Search,
    ShoppingCart,
} from "@mui/icons-material";

export default function Header() {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
                    <img className="header_logo" src={Logo} alt="" />
                </Box>
                <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                    className="nav"
                >
                    <Box className="nav_menu">
                        Shop
                        <KeyboardArrowDown />
                    </Box>
                    <Box className="nav_menu">
                        Product Support
                        <KeyboardArrowDown />
                    </Box>
                    <Box className="nav_menu">Business</Box>
                </Box>
                <Box className="flag">
                    <img style={{ width: "48px" }} src={Flag} alt="" />
                    Australia
                </Box>
                <Box className="nav_icon">
                    <IconButton sx={{ p: { xs: 0.5, md: 1 } }}>
                        <Search />
                    </IconButton>
                    <IconButton sx={{ p: { xs: 0.5, md: 1 } }}>
                        <Person />
                    </IconButton>

                    <IconButton sx={{ p: { xs: 0.5, md: 1 } }}>
                        <ShoppingCart />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
