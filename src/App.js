import './App.css';
import Header from "./components/Header/Header"
import DropDown from "./components/DropDown/DropDown"
import Body from "./components/Body/Wheather"
import { GlobalProvider } from './context/GlobalContext';

function App() {
  
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <DropDown />
        <Body />
        </div>
    </GlobalProvider>

  
  );
}

export default App;
