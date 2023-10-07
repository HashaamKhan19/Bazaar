import "./App.css";
import Header from "./components/Layout/Header";
import { useTheme } from "./context/ThemeContext";
import HeroSection from "./pages/Landing/HeroSection";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <main
      className={`${isDarkMode ? "dark" : "light"}
      ${isDarkMode ? "bg-foreground" : "bg-background"}
      h-screen
      font-Poppins
    `}
    >
      <Header />
      <HeroSection />
    </main>
  );
}

export default App;
