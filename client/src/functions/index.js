import * as api from '../api'
export const  readExpense=async()=>{
    try {
        const {data}=await api.readExpense();
        return data;
    } catch (error) {
        console.log(error);
        
    }
}

export const createExpense=async(newExpense)=>{
    try {
        const {data}=await api.createExpense(newExpense);
        return data;
    } catch (error) {
        console.log(error);
        
    }
}

export const updateExpense=async(id)=>{
    try {
        const {data}=await api.updateExpense(id);
        return data;
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteExpense=async(id)=>{
    try {
        
        await api.deleteExpense(id);
       
    } catch (error) {
        console.log(error);
        
    }
}