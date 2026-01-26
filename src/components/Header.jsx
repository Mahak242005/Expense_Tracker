import { LuDollarSign } from "react-icons/lu";

export const Header = () =>{
    return (
        <div className="header">
            <h1>
                <LuDollarSign />
                Expense Tracker
            </h1>
            <p>Track your expenses and manage your budget</p>
        </div>
    );
}