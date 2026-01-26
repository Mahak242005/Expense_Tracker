import { useBudget } from "../hooks/useBudget";
import { CATEGORIES } from "../utils/constants";

export const BudgetManager = () => {

    const {
        budgetInput,
        setBudgetInput,
        selectedCategory,
        setSelectedCategory,
        handleSetBudget
    } = useBudget();

    return (
        <div className="budget-form">
            <h2>Set Budget</h2>
            <div className="budget-input-group">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <input type="number"
                    value={budgetInput}
                    onChange={(e) => setBudgetInput(e.target.value)}
                    placeholder="Budget amount"
                />
            </div>
            <button className="btn-primary" onClick={handleSetBudget}>Set Budget</button>
        </div>
    );

};