import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex flex-1 flex-col pt-10">
            <Routes>
              <Route path="*" element={<NotFoundPage />} />

              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;
