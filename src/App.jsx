import "./App.css";
import Header from "./components/Layout/Header";
import { useTheme } from "./context/ThemeContext";
import Landing from "./pages/Landing";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <main
      className={`${isDarkMode ? "dark" : "light"}
      ${isDarkMode ? "text-background" : "text-foreground"}
      ${isDarkMode ? "bg-foreground" : "bg-background"}
      h-screen
      font-Poppins
    `}
    >
      <Header />
      {/* <Landing /> */}
    </main>
  );
}

export default App;
