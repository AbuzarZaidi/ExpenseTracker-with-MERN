const express=require('express') 
const {readExpense,createExpense,updateExpense,deleteExpense}=require("../controllers/index") 
const router=express.Router();
router.get('/',readExpense)
router.post('/',createExpense)
router.patch('/:id',updateExpense)
router.delete('/:id',deleteExpense)
module.exports=router;