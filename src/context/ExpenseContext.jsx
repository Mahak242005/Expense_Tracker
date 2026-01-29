import { createContext, useContext, useEffect, useState } from "react"

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

    const [expenses,setExpenses] = useState(() =>{
        const saved = localStorage.getItem('expenses');//parse: converts string to real javascript object/array
        return saved ? JSON.parse(saved) : [];  //if data exists then stores it : if not returns an empty array as default
    });

    const [budgets,setBudgets] = useState(() =>{
        const saved = localStorage.getItem('budgets');
        return saved ? JSON.parse(saved) : {}
    });

    const [filter,setFilter] = useState(() =>{
        return localStorage.getItem('filter') || 'all';  
    }); //'all' :- doesnt filter anything but shows everything 


    //store to local storage when data changes
    useEffect(()=>{
        localStorage.setItem('expenses',JSON.stringify(expenses));
    },[expenses]); //stringify:converts javascript value to JSON string

    useEffect(()=>{
        localStorage.setItem('budgets',JSON.stringify(budgets));
    },[budgets]);

    useEffect(()=>{
        localStorage.setItem('filter',filter)
    },[filter]);



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