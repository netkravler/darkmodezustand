import AppRouter from "./Components/App/AppRouter/AppRouter";
import { GlobalStyles } from "./Styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/App/AppTheme/AppTheme";
import { Toggler } from "./Components/DarkmodeSwitch/Toggler";
import { useDarkmodeStore } from "./Components/DarkmodeSwitch/useDarkmodeStore";

function App() {
  /** get value of theme from the themestore */
  const { theme } = useDarkmodeStore();

  /**set theme to dark or light */
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      {/** global css values  */}
      <GlobalStyles />
      {/** darkmode toggler */}
      <Toggler />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
