const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
  Amount:  {type:Number,required:true}, 
  type:  {type:String,required:true},
  description:  {type:String,required:true},
});

const ExpenseModel = mongoose.model('Todo', expenseSchema);
module.exports=ExpenseModel;