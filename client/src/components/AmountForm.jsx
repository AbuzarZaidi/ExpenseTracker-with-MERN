import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const { createExpense } = require("../functions/index");
const AmountForm = (props) => {
  const [checkEmptyField,setCheckEmptyField]=useState(false);
  const [checkAmountType,setCheckAmountType]=useState(false);
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    date: new Date(),
    type: props.type,
  });
  const createExpenseHandler = async(e) => {
    e.preventDefault();
    if (newExpense.amount > 0 && newExpense.description.length > 0) {

      const result = await createExpense(newExpense);
      console.log(result)
      clearData();
    }
    else{
      if(isNaN(newExpense.amount)){
        setCheckAmountType(true);
      setTimeout(() => {
        setCheckAmountType(false);
      }, 2000);
      }
      else{
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
      amount:"",
      description:"",
      date: new Date(),
      type:props.type
    });
  };
  return (
    <>
      <h1 className="display-2 d-flex  justify-content-center">
        {props.type} Amount
      </h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            width: "600px",
            m: "auto",
            display: "flex",
            justifyContent: "center",
          },

          p: 10,
        }}
        noValidate
        autoComplete="off"
      >
       {checkEmptyField&& <p style={{color:"red"}}>Text field cannot be empty</p>}
       {checkAmountType&&<p style={{color:"red"}}>Amount Should be a Number</p>}
        <TextField
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
      </Box>
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
