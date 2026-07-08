# 💸 Expense Tracker App

A simple and intuitive **React Expense Tracker** that helps users track daily expenses, manage category-based budgets, and visualize spending patterns.

This project is built with **React**, **custom hooks**, focusing on clean component structure and reusable logic.

---

## 🚀 Live Demo

🌐 https://flourishing-travesseiro-9cf89e.netlify.app

---

## 🚀 Features

* ✅ Add, view, and delete expenses
* 📂 Categorize expenses (Food, Transport, Entertainment, etc.)
* 🔍 Filter expenses by category
* 📊 Category-wise expense breakdown
* 🎯 Set budgets per category
* ⚠️ Visual warnings when nearing or exceeding budgets
* 📈 Total expense summary and transaction count
* 🧩 Modular component-based architecture

---

## 🛠️ Tech Stack

* **React** (Functional Components)
* **Context API** for global state management
* **Custom Hooks** for reusable business logic
* **React Icons** for UI icons
* **CSS** for styling

---

## 🧠 State Management Overview

* **ExpenseContext**

  * Stores expenses, budgets, and filters
  * Exposes actions like `addExpense`, `deleteExpense`, `setFilter`

* **Custom Hooks**

  * `useExpenses` → calculates totals, category breakdowns, transaction count
  * `useBudget` → manages category budgets and budget input state

---

## 📊 Budget & Category Logic

* Users can assign budgets per category
* Progress bars visualize spending percentage
* Color indicators:

  * 🟢 Safe
  * 🟡 Near limit (above 90%)
  * 🔴 Exceeded budget

---

## 🧪 Validation

* Expense input is validated before submission
* Prevents empty fields or invalid amounts

---

Happy tracking! 💰
