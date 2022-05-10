const mongoose = require("mongoose");
const { Schema } = mongoose;
const expenseSchema = new Schema({
  amount:  {type:Number,required:true}, 
  description:  {type:String,required:true},
  date:{type:String,required:true},
  type:  {type:String,required:true},
  
 
});

const ExpenseModel = mongoose.model('Expenses', expenseSchema);
module.exports=ExpenseModel;