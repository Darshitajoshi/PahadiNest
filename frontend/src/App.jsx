import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import Showcase from "./pages/Showcase";
import AddHomestay from "./pages/AddHomestay";
import EditHomestay from "./pages/EditHomestay";
import GoogleSuccess from "./pages/GoogleSuccess";
import AIChat from "./pages/AIChat";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/ai-chat" element={<AIChat />} />

        <Route
          path="/google-success"
          element={<GoogleSuccess />}
        />

        <Route path="/showcase" element={<Showcase />} />

        <Route
          path="/add-homestay"
          element={<AddHomestay />}
        />

        <Route
          path="/edit-homestay/:id"
          element={<EditHomestay />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;