import { useExpenseContext } from "../context/ExpenseContext"
import { calculateExpensesByCategory, calculateTotalExpenses } from "../utils/calculations";
import { CATEGORIES } from "../utils/constants";

export const useExpenses = ()=>{
    
    const {expenses} = useExpenseContext();

    const totalExpenses = calculateTotalExpenses(expenses);

    const expenseByCategory = calculateExpensesByCategory(expenses,CATEGORIES);

    const transitionCount = expenses.length;

    return{
        totalExpenses,
        expenseByCategory,
        transitionCount
    };
};