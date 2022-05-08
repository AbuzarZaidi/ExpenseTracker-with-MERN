import express from 'express'
import {readExpense,createExpense,updateExpense,deleteExpense} from "../controllers/index"
const router=express.Router();
router.get('/',readExpense)
router.post('/',createExpense)
router.patch('/:id',updateExpense)
router.delete('/:id',deleteExpense)
export default router;