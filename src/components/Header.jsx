import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export const Header = () =>{
    return (
        <div className="header">
            <h1>
                <RiMoneyRupeeCircleFill />
                Expense Tracker
            </h1>
            <p>Track your expenses and manage your budget</p>
        </div>
    );
}