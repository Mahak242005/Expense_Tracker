import { useExpenseContext } from "../context/ExpenseContext"
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";


export const ExpenseItem = ({ expense }) => {

    const { deleteExpense } = useExpenseContext();

    return (
        <div className="expense-item">
            <div className="expense-item-left">
                <div className={`category-indicator ${expense.category}`} />
                <div className="expense-details">
                    <p className="expense-description">
                        {expense.description}
                    </p>
                    <div className="expense-meta">
                        <span className="expense-category">{expense.category}</span>
                        <span className="expense-date">{expense.date}</span>
                    </div>
                </div>
            </div>
            <div className="expense-item-right">
                <span className="expense-amount"><LiaRupeeSignSolid />{expense.amount.toFixed(2)}</span>
                <button className="btn-delete" onClick={() => deleteExpense(expense.id)}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    );
}

