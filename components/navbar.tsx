import type { NavLinkProps } from '../types';
import Icon from './icon';

function Navbar({ navLinks }: NavLinkProps) {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button className="nav__hamburger icon-button">
          <Icon name="hamburger" width={25} height={20} />
        </button>
        <ul className="nav__links">
          {navLinks?.length &&
            navLinks.map(({ name, href }) => (
              <li key={name}>
                <a href={href}>{name}</a>
              </li>
            ))}
          <li>
            <form>
              <input
                className="nav__search-input"
                aria-label="search"
                type="text"
              />
              <button className="nav__search icon-button" type="submit">
                <Icon name="search" width={36} height={36} />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
