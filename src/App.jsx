import Aio from "./Aio";
import { useTheme } from "./context/ThemeContext";
import LandingPage from "./pages/Landing/LandingPage";

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
      <Aio />
    </main>
  );
}

export default App;
