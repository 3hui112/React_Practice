import './App.css';
import { RecoilRoot } from 'recoil';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <RecoilRoot>
      <SearchPage />
    </RecoilRoot>
  );
}

export default App;