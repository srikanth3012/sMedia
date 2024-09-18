import React from "react";
import { useSelector } from "react-redux";
import UsersCard from "./UsersCard";
import { Container } from "@mui/material";

const Users = () => {
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);

  const sortedUsers = [...combinedData].sort((a, b) =>
    a.user.localeCompare(b.user)
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        textAlign: "left",
      }}
    >
      {sortedUsers?.map((item) => (
        <UsersCard user={item} />
      ))}
    </Container>
  );
};

export default Users;
