import {useState,useEffect} from 'react';
import * as React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ReportHeading from "../components/reportparts/ReportHeading";
import ReportContent from "../components/reportparts/ReportContent";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
const { readExpense } = require("../functions/index");

const Reports = () => {
  const [expensesList,setExpensesList]=useState(null);
  const [flag,setFlag]=useState(false);
//    const [age, setAge] = React.useState('');
 const [currentAmount,setCurrentAmount]=useState(0);
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
  useEffect(() => {
    const fetchData = async () => {
      const result = await readExpense();
      
      let amount=0;
      for(let i=0;i<result.length;i++){
        if(result[i].type==="Deposit"){
          amount+=result[i].amount;
        }
        else if(result[i].type==="Withdraw")
        amount-=result[i].amount;
      }
      setCurrentAmount(amount)
      setFlag(true);
      
        setExpensesList(result);
      
     
    };
    fetchData();
  }, [ setExpensesList]);
  return (
    <>
     {/* <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div> */}
      <ReportHeading  currentAmount={currentAmount}/>
      
      {/* <ReportContent  expense={expensesList}/> */}
{!flag&&
<Box sx={{ display: 'flex' , justifyContent: 'center'}}>
      <CircularProgress />
    </Box>}
    {flag&&expensesList.length===0&& <p className="display-6 d-flex  justify-content-center mb-5">Could find any data!</p>}
      {flag&&expensesList.length>0&&expensesList.map((expense,ind)=>{
      return <ReportContent index={ind+1} key={expense._id} date={expense.date}  amount={expense.amount} type={expense.type} description={expense.description}/>
      
      })}
    </>
  );
};

export default Reports;
