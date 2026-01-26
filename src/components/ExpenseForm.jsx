import { useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { useExpenseContext } from "../context/ExpenseContext"
import { validateExpense } from '../utils/validators';
import { CATEGORIES } from "../utils/constants";

const ExpenseForm = () => {

    const { addExpense } = useExpenseContext();

    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: 'Food',
        date: new Date().toISOString().split('T')[0]
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target; //get input name and value
        setFormData({
            ...formData,
            [name]: value//update this field
        });
    };

    //handle form submission
    const handleAddExpense = () => {
        const validation = validateExpense(formData);

        if (validation.isValid) {
            addExpense(formData);

            //reset form
            setFormData({
                description: '',
                amount: '',
                category: 'Food',
                date: new Date().toISOString().split('T')[0],
            });
        }
    };



    return (
        <div className="expense-form">
            <h2>
                <LuCirclePlus />
                Add Expense
            </h2>

            <div className="form-group">
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Coffee, Groceries, etc" />
            </div>

            <div className="form-group">
                <label>Amount ($)</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="0.00" />
            </div>

            <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleInputChange}>
                    {CATEGORIES.map(cate => (
                        <option key={cate} value={cate}>{cate}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
            </div>

            <button className="btn-primary" onClick={handleAddExpense}>Add Expense</button>
        </div>
    );

}


export default ExpenseForm;