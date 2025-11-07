import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);
  const cleanupTimeouts = useRef([]);

  // useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*(){}[]~-_=`';
    }
    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * (str.length + 1));
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
    setCopied(false);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    const inputText = passwordRef.current;
    if (!inputText) {
      return;
    }
    inputText.focus();
    inputText.select();
    inputText.setSelectionRange(0, 6);
    const selectedPassword =
      inputText.value.substring(inputText.selectionStart, inputText.selectionEnd);
    const clipboardTimeout = setTimeout(() => {
      window.navigator.clipboard.writeText(selectedPassword).then(() => {
        setCopied(true);
      }).catch((err) => {
        console.error('Clipboard Error', err);
      }).finally(() => {
        const copyTimeout = setTimeout(() => {
          setCopied(false);
        }, 1000);
        cleanupTimeouts.current.push(copyTimeout);
      });
    }, 50);
    cleanupTimeouts.current.push(clipboardTimeout);
  }, [password]);

  // useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    return () => {
      cleanupTimeouts.current.forEach(timeout => {
        clearTimeout(timeout);
      });
      cleanupTimeouts.current = [];
    };
  }, []);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
        px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-4xl'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4 mt-4 relative'>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3 mt-3 bg-white rounded-lg'
            placeholder='Password' readOnly
            ref={passwordRef} />
          <button className={`outline-none
             text-white absolute right-0 top-3 h-8
              rounded-lg text-center w-18 cursor-pointer transition-all duration-300
              ${copied ? 'bg-green-700' : 'bg-blue-700'}`}
            onClick={copyPasswordToClipboard}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6} max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(Number(e.target.value)); }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' id='chbNumber'
              checked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' id='chbCharacter'
              checked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
