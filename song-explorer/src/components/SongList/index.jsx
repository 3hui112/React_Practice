import './index.css';
import Song from '../Song';
import { songsAtom } from '../../store/songs';
import { useRecoilValue } from 'recoil';

function SongList() {
  const list = useRecoilValue(songsAtom);

  const isSongEmpty = list === null;
  if (isSongEmpty) {
    return <div className="SongList__empty">노래를 검색해주세요.</div>;
  }
  const noResult = !list.length;
  if (noResult) {
    return <div className="SongList__empty">검색된 노래가 없습니다.</div>;
  }

  return (
    <div className="SongList">
      {list.map((song) => (
        <Song key={song.no} {...song} />
      ))}
    </div>
  );
}

export default SongList;