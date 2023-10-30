import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useEffect } from "react";
import { useAppState } from "./app-state";
import { NavBar } from "./nav-bar";

function App() {
  const appState = useAppState();

  useEffect(() => {
    document.documentElement.setAttribute("class", appState.themeMode);
  }, [appState.themeMode]);

  return (
    <Theme appearance={appState.themeMode}>
      <NavBar />
    </Theme>
  );
}

export default App;
