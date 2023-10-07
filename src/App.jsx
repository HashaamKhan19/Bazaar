import "./App.css";
import Header from "./components/Layout/Header";
import HeroSection from "./components/Layout/HeroSection";
import { useTheme } from "./context/ThemeContext";
import Landing from "./pages/Landing";

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
      {/* <Landing /> */}
    </main>
  );
}

export default App;
