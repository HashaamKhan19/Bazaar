import { useTheme } from "./context/ThemeContext";
import HeroSection from "./pages/Customer/Landing/HeroSection";
import Cta from "./pages/Customer/Landing/Cta";
import Header from "./components/Customer/Layout/Header";
import Footer from "./components/Customer/Layout/Footer";
import BestSellingCategories from "./pages/Customer/Landing/SellingCategories";
import SellingProducts from "./pages/Customer/Landing/SellingProducts";

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
      <Cta />
      <Footer />
      {/* <Landing /> */}
    </main>
  );
}

export default App;
