import React, { useState } from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";

import CartContextProvider from "./store/contextProvider";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const cartHandler = () => {
    setCartOpen(true);
  };
  const closeHandler = () => {
    setCartOpen(false);
  };
  return (
    <CartContextProvider>
      {isCartOpen && <Cart closeCart={closeHandler} />}
      <Header onCartOpen={cartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartContextProvider>
  );
}

export default App;
