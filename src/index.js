import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

// Находим корневой элемент
const rootElement = document.getElementById("root");
// Создаем корень
const root = createRoot(rootElement);

// Рендерим компонент
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Измерение производительности
reportWebVitals();
