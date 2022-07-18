import React from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default App;
