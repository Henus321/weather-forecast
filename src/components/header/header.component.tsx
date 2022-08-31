import './header.component.scss';
import SearchBar from '../search-bar/search-bar.component';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__logo">LOGO</h2>
        <h3 className="header__title">Погода на неделю</h3>
        {/* Add class as prop late */}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
