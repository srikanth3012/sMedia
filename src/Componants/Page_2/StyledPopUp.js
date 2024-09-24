// StyledPopUp.js
import styled from "styled-components";
import { Button, Card, Grid, Box } from "@mui/material";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const StyledButton = styled(Button)`
  margin: 1;
  padding: 1;
  box-shadow: 3;
  position: fixed;
  background-color: white;
  z-index: 4;
  top: 40%;
  ${({ direction }) => (direction === "left" ? "left: 10%;" : "right: 10%;")}
`;

export const StyledCard = styled(Card)`
  width: 1050px;
  height: 600px;
  margin: 1;
  padding: 1;
  box-shadow: 3;
  border: 2px solid white;
  border-radius: 2;
  position: fixed;
  top: 10%;
  left: 15.5%;
  z-index: 3;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
`;

export const UserImage = styled(Box)`
  width: 60px;
  height: 60px;
`;

export const Image = styled(Box)`
  width: 650px;
  height: 600px;
  object-fit: cover;
`;
