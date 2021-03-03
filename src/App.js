import React, {useState, useEffect} from 'react';

import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';
import {handleLightTheme, handleDarkTheme} from './utils/utilities';

import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [isScientificMode, setIsScientificMode] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    handleLightTheme();
  }, [])
  
  const onClick = button => {
    if(button === "="){
      calculate();
    } else if(button === "C"){
      reset()
    } else if(button === "CE"){
      backspace()
    } else if(button === "square"){
      calculateSquare();
    } else if (button === "sqrt") {
      calculateSquareRoot();
    } else if (button === 'flip') {
      flip();
    } else {
      if (['+','-','*','/'].includes(button)) {
        setResult(result + button)
      } else {
        setResult(eval(result + button));
      }
    }
  };

  const calculateSquare = () => {
    try {
      setResult(result ** 2);
    } catch (e) {
      setResult("error");
    }
  }

  const calculateSquareRoot = () => {
    try {
      setResult(Math.sqrt(result));
    } catch (e) {
      setResult("error");
    }
  }

  const flip = () => {
    try {
      let flipValue = result.toString();

      if (flipValue.charAt(0) === '-') {
        flipValue = flipValue.slice(1);
      } else {
        flipValue = '-' + flipValue;
      }
      setResult(flipValue);
    } catch (e) {
      setResult("error");
    }
  }

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleTheme = (theme) => {
    if (theme === 'light') {
      setIsLightTheme(!isLightTheme);
      setIsDarkTheme(false);
      if (!isLightTheme) {
        handleLightTheme();
      }
    }

    if (theme === 'dark') {
      setIsDarkTheme(!isDarkTheme);
      setIsLightTheme(isDarkTheme ? true : false);
      if (!isDarkTheme) {
        handleDarkTheme();
      } else {
        handleLightTheme();
      }
    }
  }

  return (
    <div>
      <div className="calculator-body">
        <h1>{'Simple Calculator'}</h1>
        <ResultComponent result={result}/>
        <KeypadComponent onClick={onClick} isScientificMode={isScientificMode} />
        <div className={'other-action'}>
          <button 
            onClick={() => setIsScientificMode(!isScientificMode)} 
            style={isScientificMode ? {backgroundColor: '#b6b6b6'} : null}
          >
            {'Scientific Mode'}
          </button>
          <button 
            onClick={() => {handleTheme('light')}} 
            style={isLightTheme ? {backgroundColor: '#b6b6b6'} : null}
          >
            {'Light Theme'}
          </button>
          <button 
            onClick={() => {handleTheme('dark')}} 
            style={isDarkTheme ? {backgroundColor: '#b6b6b6'} : null}
          >
            {'Dark Theme'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
