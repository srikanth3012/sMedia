import React from "react";
import Header from "./Layout.js/Header/Header";
import Homepage from "./Page_2/Homepage";
import UserServices from "../Services/Api/UserServices";
import PostsService from "../Services/Api/PostsService";
import PhotoServices from "../Services/Api/PhotoServices";
import CombinedData from "../Helper/CombinedData";

const Body = () => {
  UserServices();
  PostsService();
  PhotoServices();
  CombinedData();
  return (
    <div>
      <div>
        <Header />
      </div>
      <Homepage />
    </div>
  );
};

export default Body;
