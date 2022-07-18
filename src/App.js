import React, { useState } from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const cartHandler = () => {
    setCartOpen(true);
  };
  const closeHandler = () => {
    setCartOpen(false);
  };
  return (
    <React.Fragment>
      {isCartOpen && <Cart closeCart={closeHandler} />}
      <Header onCartOpen={cartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
}

export default App;
