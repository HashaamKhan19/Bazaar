import "./App.css";
import { useTheme } from "./context/ThemeContext";
import Landing from "./pages/Landing";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <main
      className={`${isDarkMode ? "dark" : "light"}
      ${isDarkMode ? "text-foreground" : "text-background"}
      ${isDarkMode ? "bg-background" : "bg-foreground"}
      h-screen
      font-Poppins
    `}
    >
      <Landing />
    </main>
  );
}

export default App;
