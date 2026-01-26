export const calculateTotalExpenses = (expenses) =>{
   return expenses.reduce((sum,exp) => sum + parseFloat(exp.amount) , 0);
};

export const calculateExpensesByCategory = (expenses) =>{
    return expenses.reduce((acc,exp)=>{
        acc[exp.category] = (acc[exp.category] || 0 ) + Number(exp.amount); //acc starts as {} and stores the value after adding
        return acc; 
    },{});
};

export const calculateBudgetPercentage = (spent,budget) =>{
    return budget ? (spent / budget) * 100 : 0
;};
