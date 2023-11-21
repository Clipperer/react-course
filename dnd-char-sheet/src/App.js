import "./App.css";
import { AppContextProvider } from "./contexts/app-context";
import Button from "./components/button";
import CountShower from "./components/CountShower";

function App() {
  return (
    <>
      <AppContextProvider>
        <Button text="test" />
        <Button text="test2" />
        <Button text="test3" />
        <CountShower />
      </AppContextProvider>
      <AppContextProvider>
        <Button text="second context" />
        <CountShower />
      </AppContextProvider>
    </>
  );
}

export default App;
