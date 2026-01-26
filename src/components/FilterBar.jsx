import { useExpenseContext } from "../context/ExpenseContext";
import { RiFilter2Line } from "react-icons/ri";
import { CATEGORIES } from '../utils/constants';

export const FilterBar = () => {
    const { filter, setFilter } = useExpenseContext();

    return (
        <div className="filter-bar">
            <h2>
                <RiFilter2Line />
                Recent Expenses
            </h2>

            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Categories</option>
                {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
}