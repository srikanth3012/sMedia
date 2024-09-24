import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import UsersCard from "./UsersCard";
import { Container } from "@mui/material";

const Users = () => {
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  const searchFillterData = useSelector(
    (store) => store?.sfUsersDataArray?.sfUsersData
  );

  // Use useMemo to memoize the usersData
  const usersData = useMemo(() => {
    const data =
      searchFillterData?.length > 0 ? searchFillterData : combinedData;
    return [...data].sort((a, b) => a?.user?.localeCompare(b.user));
  }, [searchFillterData, combinedData]); // Add dependencies here

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        textAlign: "left",
      }}
    >
      {usersData.length > 0 ? (
        usersData.map((item) => (
          <UsersCard key={item.id} user={item} /> // Ensure you have a unique key
        ))
      ) : (
        <div>No users found.</div>
      )}
    </Container>
  );
};

// Wrap UsersCard with React.memo
export const MemoizedUsersCard = React.memo(UsersCard);

export default Users;
