import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsvisible] = useState(true);

  const handleVisiblity = () => setIsvisible((prev) => !prev);

  return (
    <>
      <header>
        <h1>Finally we got to React</h1>
      </header>
      <div>
        <button onClick={handleVisiblity}>
          {isVisible ? 'hide content' : 'show content'}
        </button>
        {isVisible && (
          <p>
            This is the part in the course I have been looking forward to the
            most.
          </p>
        )}
      </div>
    </>
  );
}

export default App;
