import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/client" />} />
          <Route path="/client" element={<Home />} />
          <Route path="client/list" element={<ListPage />} />
          <Route path="client/create" element={<FormPage />} />
          <Route path="client/:id" element={<FormPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
