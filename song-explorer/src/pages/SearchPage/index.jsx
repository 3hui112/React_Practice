import './index.css';
import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

function SearchPage() {
  return (
    <div className="SearchPage">
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;