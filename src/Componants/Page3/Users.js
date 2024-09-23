import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UsersCard from "./UsersCard";
import { Container } from "@mui/material";

const Users = () => {
  const [usersData, setUsersData] = useState(useEffect(() => {}, []));
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  const searchFillterData = useSelector(
    (store) => store?.sfUsersDataArray?.sfUsersData
  );
  useEffect(() => {
    const data =
      searchFillterData?.length > 0 ? searchFillterData : combinedData;
    const sortedUsers = [...data].sort((a, b) => a.user.localeCompare(b.user));
    setUsersData(sortedUsers);
  }, [searchFillterData]);

  if (!usersData) return null;
  return (
    usersData && (
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "left",
        }}
      >
        {usersData?.map((item) => (
          <UsersCard user={item} />
        ))}
      </Container>
    )
  );
};

export default Users;
