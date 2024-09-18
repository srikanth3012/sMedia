import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import HeaderStyles from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch } from "react-redux";
import { addsetTheme } from "../../../redux/Slicers/themeSlicer";

const Header = () => {
  const [themeIcon, setThemeIcon] = useState("sun");
  const [theme, setTheme] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const themeColor = JSON.parse(localStorage.getItem("moon"));
  /// useEffect for if themeColorExist it will set ThemeColor at 1st render
  useEffect(() => {
    if (themeColor) {
      setTheme(themeColor);
      setThemeIcon("moon");
    }
  }, []);
  /// navigateHandler for navigate to user selected page
  const navigateHandler = (page) => {
    navigate(`/${page}`);
  };
  //themeHandler for set Dark or light mode
  const themeHandler = () => {
    let icon = themeIcon === "sun" ? "moon" : "sun";
    const moonthemeColor = { bgColor: "black", color: "white" };
    if (icon === "sun") {
      localStorage.removeItem("moon");
      dispatch(addsetTheme(""));
      setTheme("");
    } else {
      localStorage.setItem("moon", JSON.stringify(moonthemeColor));
      setTheme(moonthemeColor);
      dispatch(addsetTheme(moonthemeColor));
    }
    setThemeIcon(icon);
  };
  return (
    <div
      style={{
        color: theme?.color ? theme?.color : "#da9100",
      }}
    >
      <Grid sx={HeaderStyles.root}>
        <Grid item xs={12} md={6} display={"flex"}>
          <Typography variant="h3">sMedia</Typography>
          <div onClick={themeHandler}>
            {!themeColor ? (
              <LightModeIcon id="sun" sx={{ color: "orange" }} />
            ) : (
              <DarkModeIcon sx={{ color: "lightgray" }} />
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
          <Button onClick={() => navigateHandler("newsFeed")} color="#b33500">
            News Feed
          </Button>
          <Button onClick={() => navigateHandler("users")} color="#b33500">
            users
          </Button>
          <Button color="#b33500" onClick={() => navigateHandler("profile")}>
            Profile
          </Button>
          <AccountCircleIcon
            sx={{ fontSize: 30, color: theme?.color ? "white" : "#b33500" }}
            color="action"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
