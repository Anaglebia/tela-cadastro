import './App.css';
import GlobalStyles from './Styles/Global';
import RoutesApp from './Routes';
import { AuthProvider } from './Contexts/auth';

function App() {
  return (
    <>
    <RoutesApp/>
    <GlobalStyles/>
    <AuthProvider/>
    </>
   
  );
}

export default App;
