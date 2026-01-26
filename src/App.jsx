import './App.css'
import { BudgetManager } from './components/BudgetManager';
import { CategoryBreakdown } from './components/CategoryBreakdown';
import ExpenseForm from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { Header } from './components/Header';
import { SummaryCard } from './components/SummaryCard';
import { ExpenseProvider } from './context/ExpenseContext';

function App() {

  return (
    <ExpenseProvider>
      <div>
        <Header />
        <div className="app-container">
          {/* Left Column */}
          <div>
            <div className="card">
              <ExpenseForm />
            </div>
            <div className="card summary-card">
              <SummaryCard />
            </div>
            <div className="card">
              <BudgetManager />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="card">
              <CategoryBreakdown />
            </div>
            <div className="card">
              <ExpenseList />
            </div>
          </div>
        </div>
      </div>
    </ExpenseProvider>
  )
}

export default App;
