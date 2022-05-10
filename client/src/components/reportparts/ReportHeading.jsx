import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
const ReportHeading = () => {
  return (
    <>
      <h1 className="display-2 d-flex  justify-content-center mb-5">
        Monthly Report
      </h1>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <List sx={{ mb: 1, width: "70%" }}>
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
