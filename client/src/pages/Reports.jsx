import { useState, useEffect } from "react";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ReportHeading from "../components/reportparts/ReportHeading";
import ReportContent from "../components/reportparts/ReportContent";

const { readExpense } = require("../functions/index");

const Reports = () => {
  const [expensesList, setExpensesList] = useState(null);
  const [flag, setFlag] = useState(false);
  const [filter, setFilter] = useState("All");
  const [currentAmount, setCurrentAmount] = useState(0);
 const FilterHanlder=(value)=>{
  setFilter(value);
 }
  useEffect(() => {
    const fetchData = async () => {
      const result = await readExpense();

      let amount = 0;
      for (let i = 0; i < result.length; i++) {
        if (result[i].type === "Deposit") {
          amount += result[i].amount;
        } else if (result[i].type === "Withdraw") amount -= result[i].amount;
      }
      setCurrentAmount(amount);
      setFlag(true);

      setExpensesList(result);
    };
    fetchData();
  }, [setExpensesList, setFilter]);
  return (
    <>
     
      <ReportHeading currentAmount={currentAmount} changeHandler={FilterHanlder} />

     
      {!flag && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {flag && expensesList.length === 0 && (
        <p className="display-6 d-flex  justify-content-center mb-5">
          Could find any data!
        </p>
      )}
      {flag &&
        expensesList.length > 0 &&
        expensesList
          .filter((expense) =>
            filter === "All" ? expense.type !== filter : expense.type === filter
          )
          .map((expense, ind) => {
            return (
              <ReportContent
                index={ind + 1}
                key={expense._id}
                date={expense.date}
                amount={expense.amount}
                type={expense.type}
                description={expense.description}
              />
            );
          })}
    </>
  );
};

export default Reports;
