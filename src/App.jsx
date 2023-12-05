import Aio from "./Aio";
import { useTheme } from "./context/ThemeContext";

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
