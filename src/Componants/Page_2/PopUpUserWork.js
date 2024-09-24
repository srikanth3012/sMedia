import { Box, CardContent, Container } from "@mui/material";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "react-redux";

const PopUpUserWork = () => {
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);

  return (
    <Container>
      <CardContent sx={{ display: "flex", gap: 4 }}>
        {[BackupTableIcon, ContentCutIcon, DashboardIcon].map((Icon, index) => (
          <Icon key={index} sx={{ fontSize: 20 }} />
        ))}
      </CardContent>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: `28%`,
          overflow: "scroll",
        }}
      >
        {combinedData?.map((item) => (
          <Box
            key={item.id} // Assuming each item has a unique id
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
