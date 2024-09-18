import { Box, CardContent, Container, StepContent } from "@mui/material";
import React from "react";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "react-redux";

const PopUpUserWork = () => {
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  return (
    <Container>
      {" "}
      <CardContent sx={{ display: "flex", gap: 4 }}>
        <BackupTableIcon sx={{ fontSize: 20 }} />

        <ContentCutIcon sx={{ fontSize: 20 }} />

        <DashboardIcon sx={{ fontSize: 20 }} />

        <hr />
      </CardContent>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "31.5%",
          overflow: "scroll",
        }}
      >
        {combinedData?.map((item) => (
          <Box
            component="img"
            alt="userImg"
            src={item?.webformatURL}
            sx={{ width: 50, height: 50, m: 1 }}
          />
        ))}
      </Container>
    </Container>
  );
};

export default PopUpUserWork;
