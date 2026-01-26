import { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext"

export const useBudget = () =>{
    
    const { budgets,setBudgetForCategory} = useExpenseContext();

    const [budgetInput,setBudgetInput] = useState('');

    const [selectedCategory,setSelectedCategory] = useState('Food');

    const handleSetBudget =() =>{
        if(budgetInput && selectedCategory){
            setBudgetForCategory(selectedCategory,budgetInput);
            setBudgetInput('');
        }
    };

    return{
        budgets,
        budgetInput,
        setBudgetInput,
        selectedCategory,
        setSelectedCategory,
        handleSetBudget
    };
};