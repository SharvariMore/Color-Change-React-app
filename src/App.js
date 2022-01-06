import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Sqaure from './Square';
import {useState} from 'react'; 

function App() {
  const[colorValue, setColorValue] = useState('')
  const[hexValue, setHexValue] = useState('')
  const[isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      
      <Sqaure 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />

      <Input
      colorValue={colorValue}
      setColorValue={setColorValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
