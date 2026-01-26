import { useExpenseContext } from "../context/ExpenseContext";
import { useExpenses } from "../hooks/useExpenses"
import { FiPieChart } from "react-icons/fi";
import { CATEGORIES } from "../utils/constants";
import { calculateBudgetPercentage } from "../utils/calculations";
import { MdOutlineCurrencyRupee } from "react-icons/md";

export const CategoryBreakdown = () => {

    const { expenseByCategory } = useExpenses();

    const { budgets } = useExpenseContext();

    return (
        <div>
            <h2>
                <FiPieChart />
                Category Breakdown
            </h2>

            <div className="category-list">
                {CATEGORIES.map(cat => {
                    const spent = expenseByCategory[cat] || 0;
                    const budget = budgets[cat];
                    const percentage = calculateBudgetPercentage(spent, budget);

                    return (
                        <div key={cat} className="category-item">
                            <div className="category-header">
                                <span className="category-name">{cat}</span>
                                <span className="category-amounts">
                                    <MdOutlineCurrencyRupee />{spent.toFixed(2)}
                                    {budget && ` / $${budget.toFixed(2)}`}
                                </span>
                            </div>

                            {/* Progress bar */}
                            {budget && (
                                <div className="progress-bar-container">
                                    <div
                                        className={`progress-bar ${percentage > 90 ? (percentage > 100 ? 'danger' : 'warning') : ''}`}
                                        style={{ width: `${Math.min(percentage, 100)}%` }}
                                    />
                                </div>
                            )}

                            {/* warning if near or over budget*/}
                            {budget && percentage > 90 && (
                                <p className={`budget-warning ${percentage > 100 ? 'exceeded' : 'near-limit'}`}>
                                    {percentage > 100 ? 'Budget Exceeded!' : 'Near Budget Limit'}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}