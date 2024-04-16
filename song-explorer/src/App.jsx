import './App.css';
import { RecoilRoot } from 'recoil';
import SearchPage from './pages/SearchPage';

const data = [
    {title: '비의 랩소디'    }
] 

function App() {
  return (
    <RecoilRoot>
      <SearchPage />
    </RecoilRoot>
  );
}

export default App;