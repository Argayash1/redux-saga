import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import LatestNews from "./pages/latest-news/latest-news";
import PopularNews from "./pages/popular-news/popular-news";
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
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest-news" element={<LatestNews />} />
            <Route path="/popular-news" element={<PopularNews />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Измерение производительности
reportWebVitals();
