import { SideBar } from './components/SideBar';
import { useState } from 'react';
import { Content } from './components/Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        setSelectedGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId}
        setGenres={setGenres} genres={genres}
      />

      <Content selectedGenreId={selectedGenreId} handleGenre={setGenres} />

    </div>
  )
}