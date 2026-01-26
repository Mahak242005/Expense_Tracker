import { useExpenseContext } from "../context/ExpenseContext"
import { ExpenseItem } from "./ExpenseItem";
import { FilterBar } from "./FilterBar";

export const ExpenseList = () => {

    const { getFilteredExpenses } = useExpenseContext();
    const filteredExpenses = getFilteredExpenses();

    return (
        <div>
            <FilterBar />
            <div className="expense-list-container">
                {filteredExpenses.length === 0 ? (
                    <p className="empty-state">No Expenses yet. Add your first expense above!</p>
                ) : (filteredExpenses.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense} />
                ))
                )}
            </div>
        </div>
    );
}