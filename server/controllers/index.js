import mongoose from 'mongoose'
import Expenses from '../models/index'
export const readExpense =async(req,res)=>{
try {
    const expenses=await Expenses.find();
    res.status(200).json(expenses);
} catch (error) {
    res.status(404).json({error:error.message})
}
}

export const createExpense =async(req,res)=>{
    const  expenses=new  Expenses(req.body);
    try {
        await expenses.save();
        res.status(201).json(expenses);
    } catch (error) {
        res.status(409).json({error:error.message})
    }
    }

    export const updateExpense =async(req,res)=>{
        const {id}=params.id;
        const {title,content}=req.body;
       if(!mongoose.Types.ObjectId.isValid(true)){
           return res.status(404).send("The id is not valid");
       }
       const expenses={title,content,id:_id};
       await Expenses.findByIdAndUpdate(id,expenses,{new:true})
       res.json(expenses);
        }

        export const deleteExpense =async(req,res)=>{
            const {id}=params.id;
           if(!mongoose.Types.ObjectId.isValid(true)){
               return res.status(404).send("The id is not valid");
           }
         
           await Expenses.findByIdAndRemove(id)
           res.json({message:"Todo delete successfully"});
            }