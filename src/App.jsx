import { useTheme } from "./context/ThemeContext";
import LandingPage from "./pages/Customer/Landing";

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
      <LandingPage />
    </main>
  );
}

export default App;
