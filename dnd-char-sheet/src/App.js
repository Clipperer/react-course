import "./App.css";
import { AppContextProvider } from "./contexts/app-context";
import Button from "./components/button";

function App() {
  const buttons = ["test1", "test2", "test3"];
  return (
    <>
      <AppContextProvider>
        {buttons.map((button, index) => {
          const buttonText = `${button}-${index}`;
          return <Button key={buttonText} text={buttonText} />;
        })}
      </AppContextProvider>
    </>
  );
}

export default App;
