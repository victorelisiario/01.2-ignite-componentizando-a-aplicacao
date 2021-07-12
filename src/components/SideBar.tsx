import { useEffect } from 'react';

import { Button } from './Button';

import { api } from '../services/api';

import '../styles/global.scss';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface AppProps {
  setSelectedGenreId: (id: number) => void,
  selectedGenreId: number
  setGenres: ([]: GenreResponseProps[]) => void,
  genres: GenreResponseProps[]
}

export function SideBar(
  { setSelectedGenreId, selectedGenreId, setGenres, genres }: AppProps) {

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      return setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}