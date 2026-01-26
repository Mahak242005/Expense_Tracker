import { createContext, useContext, useState } from "react"

const ExpenseContext = createContext();//create the context object

//create hook to use the context
export const useExpenseContext = ()=>{
    const context = useContext(ExpenseContext);
    if(!context){
        throw new Error('useExpenseContext must be used within ExpenseProvider');
    }
    return context;
};



export const ExpenseProvider =({children})=>{

    const [expenses,setExpenses] = useState([]);
    const [budgets,setBudgets] = useState([]);
    const [filter,setFilter] = useState('all') //'all' :- doesnt filter anything but shows everything 

    //add new expenses
    const addExpense = (expense)=>{
        const newExpense ={
            id : Date.now(),
            ...expense,
            amount : parseFloat(expense.amount),
        };
        setExpenses([newExpense,...expenses]);
    }; 

    //Keep all expenses except the one with matching ID 
    const deleteExpense =(id)=>{
        setExpenses(expenses.filter(exp => exp.id !== id));
    };


    //set budget for category
    const setBudgetForCategory = (category,amount)=>{
        setBudgets({
            ...budgets,
            [category]:parseFloat(amount),//add/update this category
        });
    };

    const getFilteredExpenses = () =>{
                                    //return all : filter by category
        return filter === 'all' ? expenses : expenses.filter(exp => exp.category === filter)
    };  


    return(
        <ExpenseContext.Provider value={{
            expenses,
            budgets,
            filter,
            setFilter,
            addExpense,
            deleteExpense,
            setBudgetForCategory,
            getFilteredExpenses
        }}>
         {children} {/* Render all child components */}
        </ExpenseContext.Provider>
    );

}