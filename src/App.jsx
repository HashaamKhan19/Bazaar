import "./App.css";
import Header from "./components/Layout/Header";
import HeroSection from "./pages/Landing/HeroSection";
import { useTheme } from "./context/ThemeContext";
import Landing from "./pages/Landing";
import BestSellingCategories from "./pages/Landing/SellingCategories";
import SellingProducts from "./pages/Landing/SellingProducts";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <main
      className={`${isDarkMode ? "dark" : "light"}
      ${isDarkMode ? "text-background" : "text-foreground"}
      ${isDarkMode ? "bg-foreground" : "bg-background"}
      min-h-screen
      font-Poppins
    `}
    >
      <Header />
      <HeroSection />
      <BestSellingCategories />
      <SellingProducts />
      {/* <Landing /> */}
    </main>
  );
}

export default App;
