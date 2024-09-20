import React, { useEffect, useState } from "react";
import Header from "./Layout.js/Header/Header";
import UserServices from "../Services/Api/UserServices";
import PostsService from "../Services/Api/PostsService";
import PhotoServices from "../Services/Api/PhotoServices";
import CombinedData from "../Helper/CombinedData";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addsetTheme } from "../redux/Slicers/themeSlicer";
import SearchBar from "./Layout.js/Searchbar/SearchBar";

var count = 0;
function apiServices() {
  UserServices();
  PostsService();
  PhotoServices();
  CombinedData();
}

const Body = () => {
  const [theme, setTheme] = useState();
  const dispatch = useDispatch();

  UserServices();
  PostsService();
  PhotoServices();
  CombinedData();

  let localsTorageMoonTheme = JSON.parse(localStorage.getItem("moon"));
  const reduxMoontheme = useSelector((store) => store?.theme?.themeStore);

  useEffect(() => {
    //updating setTheme of theme updated with moon to sun or sun to moon
    setTheme(reduxMoontheme);
  }, [reduxMoontheme]);
  useEffect(() => {
    //on first render if moon theme present in localStorage updating state with localstorage data theme
    if (localsTorageMoonTheme) {
      dispatch(addsetTheme(localsTorageMoonTheme));
      setTheme(localsTorageMoonTheme);
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: `${theme?.bgColor ? theme?.bgColor : "white"}`,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: `${theme?.bgColor ? theme?.bgColor : "white"}`,
        }}
      >
        <Header />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
          position: "sticky",
          zIndex: 1,
          top: "3%",
        }}
      >
        <SearchBar />
      </div>

      <Outlet />
    </div>
  );
};

export default Body;
