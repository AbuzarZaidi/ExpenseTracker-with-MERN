import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
const Withdraw = () => {
  return (
   <>
   <h1 class="display-2 d-flex  justify-content-center">Withdraw Amount</h1>
    <Box
      component="form"
      sx={{
        "& > :not(style)": {  width: "600px", m:'auto',display: 'flex',justifyContent: 'center' },
      
         p: 10 
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Enter Amount" variant="standard"  />
      <br />{" "}
      <TextField id="standard-basic" label="Description" variant="standard" />
     
    </Box>
    <Stack direction="row" spacing={2} sx={{
        display: 'flex',justifyContent: 'center' 
      }}>
      <Button variant="contained" color="success">
     < MoneyOffIcon/> Withdraw
      </Button>
      <Button variant="outlined" color="secondary">
        Go back
      </Button>
    </Stack>
    </>
  );
};

export default Withdraw;
