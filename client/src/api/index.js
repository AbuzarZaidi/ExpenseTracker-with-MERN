import axios from "axios";
const url = "http://localhost:5000/expenses";
export const readExpense = () => axios.get(url);
export const createExpense = (newExpense) => axios.post(url, newExpense);
export const deleteExpense = (id) => axios.delete(`${url}/${id}`);
export const updateExpense = (id) => axios.patch(`${url}/${id}`);
