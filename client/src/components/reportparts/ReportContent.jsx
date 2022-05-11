import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
const ReportContent = (props) => {
  // console.log("props.expense"+ props.expense)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ mb: 1, width: "70%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "10%", flexShrink: 0 }}>1</Typography>
            <Typography sx={{ width: "30%", flexShrink: 0 }}>${props.amount}</Typography>
            <Typography sx={{ width: "29%" }}>{props.type}</Typography>
            <Typography sx={{ width: "30%" }}>{props.date.split('T')[0]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color: "text.secondary", fontWeight: 600}}>
           Description:  {props.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default ReportContent;
