import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      <Stack direction="row" spacing={5}>
        <Item>
          <AttachMoneyIcon />
        </Item>
        <Item>
          <MoneyOffIcon />
        </Item>
        <Item>
          <ListAltIcon />
        </Item>
      </Stack>
    </div>
  );
};
export default Home;
