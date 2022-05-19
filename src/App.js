import Main from "./components/Main"
import { useEffect, useRef, useState } from 'react'
import { context } from './context';
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [search, setSearch] = useLocalStorage('London', 'city');
  const [nowTime, setNowTime] = useState(Date());

  let ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setNowTime(Date())
    }, 1000);

    return () => {
      clearInterval(ref)
    }
  }, [ref])
  return (
    <context.Provider value={{ search, setSearch, nowTime, setNowTime }}>
      <Main />
    </context.Provider>

  );
}

export default App;
