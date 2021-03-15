import { Button } from './Button'
import { GenreResponseProps } from '../App';

interface SideBarProps {
  genres: GenreResponseProps[];
  genreId: number;
  handleClickButton(id: number): void;
}

export function SideBar({genres, genreId, handleClickButton} : SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}