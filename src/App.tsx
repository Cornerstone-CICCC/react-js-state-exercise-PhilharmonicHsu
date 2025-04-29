import LightToggle from './components/LightToggle.tsx';
import LottoNumbers from './components/LottoNumbers.tsx';
import ClickCounter from './components/ClickCounter.tsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [counter, setCounter] = useState<number>(0)

  const handleClickLightToogle = () => {
    setIsDark(prev => !prev)
  }

  const handleClickLottoNumbers = () => {
    const numbers = new Set<number>();

    while (numbers.size < 7) {
      const num = Math.floor(Math.random() * (50)) + 1;
      numbers.add(num);
    }
    setLottoNumbers(Array.from(numbers))
  }

  const handleClickCounter = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div style={{
      backgroundColor: isDark ? 'black' : 'white',
      color: isDark ? 'white' : 'black',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <h2>Light Toggle</h2>
      <LightToggle onToggle={handleClickLightToogle}/>
      <div>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onToggle={handleClickLottoNumbers}/>
      <div className="output">
        {lottoNumbers.join(',')}
      </div>

      <h2 >Click Counter</h2>
      <ClickCounter onToggle={handleClickCounter} />
      <div className="output">{counter}</div>
    </div>
  );
}

export default App
