import { useExpenses } from "../hooks/useExpenses";
import { IoMdTrendingDown } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";


export const SummaryCard = () =>{

    const {totalExpenses,transitionCount} = useExpenses();

    return(
        <div>
            <h2>
                <IoMdTrendingDown/>
                Total Expenses
            </h2>

            {/* display calculated total */}
            <p className="total-amount">
                <MdOutlineCurrencyRupee />{totalExpenses.toFixed(2)}
            </p>

            {/* display transition count */}
            <p className="transaction-count">
                {transitionCount} transitions
            </p>

        </div>
    );  
};
