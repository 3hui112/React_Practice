import './index.css';

import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { getSongs } from '../../apis/song';
import { songsAtom } from '../../store/songs';

function SearchBar() {
  const setData = useSetRecoilState(songsAtom);
  const inputRef = useRef();

  const handleSearch = () => {
    getSongs(inputRef.current.value).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="SearchBar__input"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button className="SearchBar__button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}

export default SearchBar;