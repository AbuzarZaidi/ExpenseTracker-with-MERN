import * as React from "react";
import { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ReportHeading = (props) => {
  const [selectValue, setSelectValue] = useState("All");
  const handleChange = (event) => {
    setSelectValue(event.target.value);
    props.changeHandler(event.target.value);
  };
  return (
    <>
      <h1 className="display-2 d-flex  justify-content-center mb-5">
        Monthly Report
      </h1>

      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <List sx={{ mb: 1, width: props.width}}>
            <Box
              sx={{ display: "flex", mt: 1, justifyContent: "space-between" }}
            >
              <FormControl sx={{ mb: 1, minWidth: 120 }}>
                <Select
                  value={selectValue}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Deposit"}>Deposit</MenuItem>
                  <MenuItem value={"Withdraw"}>Withdraw</MenuItem>
                </Select>
              </FormControl>
              <Fab variant="extended">
                <Typography sx={{ color: "text.secondary", fontWeight: 600 }}>
                  Current Amount:
                  <AttachMoneyIcon />
                  {props.currentAmount}
                </Typography>
              </Fab>
            </Box>
            <AccordionSummary>
              <Typography
                sx={{ width: "10%", color: "text.secondary", fontWeight: 600 }}
              >
                #
              </Typography>
              <Typography
                sx={{ width: "29%", color: "text.secondary", fontWeight: 600 }}
              >
                Amount
              </Typography>
              <Typography
                sx={{ width: "29%", color: "text.secondary", fontWeight: 600 }}
              >
                Type
              </Typography>
              <Typography
                sx={{ width: "33%", color: "text.secondary", fontWeight: 600 }}
              >
                Date
              </Typography>
            </AccordionSummary>
            <Divider />
          </List>
        </Box>
      </div>
    </>
  );
};

export default ReportHeading;