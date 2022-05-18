import Main from "./components/Main"
import { context } from './context';
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [search, setSearch] = useLocalStorage('London', 'city')
  return (
    <context.Provider value={{ search, setSearch }}>
      <Main />
    </context.Provider>

  );
}

export default App;
