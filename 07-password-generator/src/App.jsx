import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
    let str = alphabets;
    if (charAllowed) str += specialChars;
    if (numberAllowed) str += numbers;
    for (let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    // passwordRef.current.select()
    passwordRef.current?.select(); // safer method
  };
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className=" bg-red-500 flex shodow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={18}
            value={length}
            name=""
            id=""
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id=""
            className="cursor-pointer"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            name=""
            id=""
            className="cursor-pointer"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
