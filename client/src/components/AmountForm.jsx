import { useState } from "react";
import * as React from "react";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { theme } from "./styles.js";
const { createExpense } = require("../functions/index");
const AmountForm = (props) => {
  const [checkEmptyField, setCheckEmptyField] = useState(false);
  const [checkAmountType, setCheckAmountType] = useState(false);

  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    date: new Date(),
    type: props.type,
  });
  const createExpenseHandler = async (e) => {
    e.preventDefault();
    if (newExpense.amount > 0 && newExpense.description.length > 0) {
      const result = await createExpense(newExpense);
      console.log(result);
      clearData();
    } else {
      if (isNaN(newExpense.amount)) {
        setCheckAmountType(true);
        setTimeout(() => {
          setCheckAmountType(false);
        }, 2000);
      } else {
        setCheckEmptyField(true);
        setTimeout(() => {
          setCheckEmptyField(false);
        }, 2000);
      }
    }

    clearData();
  };

  const clearData = () => {
    setNewExpense({
      amount: "",
      description: "",
      date: new Date(),
      type: props.type,
    });
  };
  const Responsive = styled("Box")(({ theme }) => ({
    [theme.breakpoints.up("mobile")]: {
      width: "100%",
     
    },
    [theme.breakpoints.up("tablet")]: {
      width: "100%",
    },
    [theme.breakpoints.up("laptop")]: {
      width: "50%",
      
    },
  }));
  
  return (
    <>
       <h1 className="display-2 d-flex  justify-content-center">
        {props.type} Amount
      </h1>

      <ThemeProvider theme={theme}>
        <Responsive>
        
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                // width: "600px",

                m: "auto",
                display: "flex",
                justifyContent: "center",
                 width: '75%',
              },

              p: 1,
            }}
            noValidate
            autoComplete="off"
          >
         
            <TextField
              sx={{ m: "auto" }}
              id="standard-basic"
              label="Enter Amount"
              variant="standard"
              value={newExpense.amount}
              onChange={(e) =>
                setNewExpense({ ...newExpense, amount: e.target.value })
              }
            />
          
            <br />{" "}
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              value={newExpense.description}
              onChange={(e) =>
                setNewExpense({ ...newExpense, description: e.target.value })
              }
            />
            {checkEmptyField === false && checkAmountType === false ? (
              <>
                <br />
                <br />
              </>
            ) : (
              ""
            )}
            {checkEmptyField && (
              <Stack sx={{ width: "50%" }} spacing={2}>
                <Alert severity="error">Text field cannot be empty</Alert>
              </Stack>
            )}
            {checkAmountType && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">Amount Should be a Number</Alert>
              </Stack>
            )}
           
          </Box>
         
        </Responsive>
      </ThemeProvider>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={createExpenseHandler}
        >
          {props.icon} {props.type}
        </Button>
        <Button variant="outlined" color="secondary">
          Go back
        </Button>
      </Stack>
    </>
  );
};

export default AmountForm;
