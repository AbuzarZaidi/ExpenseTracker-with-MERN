import {useState,useEffect} from 'react';
import * as React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ReportHeading from "../components/reportparts/ReportHeading";
import ReportContent from "../components/reportparts/ReportContent";
const { readExpense } = require("../functions/index");
const Reports = () => {
  const [expensesList,setExpensesList]=useState(null);
  const [flag,setFlag]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readExpense();
      setFlag(true);
      
        setExpensesList(result);
      
     
    };
    fetchData();
  }, [ setExpensesList]);
  return (
    <>
      <ReportHeading />
      {/* <ReportContent  expense={expensesList}/> */}
{!flag&&
<Box sx={{ display: 'flex' , justifyContent: 'center'}}>
      <CircularProgress />
    </Box>}
    {flag&&expensesList.length===0&& <p className="display-6 d-flex  justify-content-center mb-5">Could find any data!</p>}
      {flag&&expensesList.length>0&&expensesList.map((expense)=>{
      return <ReportContent key={expense._id} date={expense.date}  amount={expense.amount} type={expense.type} description={expense.description}/>
      
      })}
    </>
  );
};

export default Reports;
