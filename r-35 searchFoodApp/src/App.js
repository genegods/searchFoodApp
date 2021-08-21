import React from "react";
import "./App.css";
import FoodApp from "./components/food/FoodApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <FoodApp />
      </Provider>
    </React.Fragment>
  );
};

export default App;
