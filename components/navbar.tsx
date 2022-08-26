import Icon from 'components/icon';
import type { NavLink } from 'domain/types';
import { LayoutContext } from 'infrastructure/contexts';
import { useContext } from 'react';

function Navbar() {
  const { navLinks } = useContext(LayoutContext);

  return (
    <nav className="nav" role="navigation">
      <div className="contents lg:relative lg:w-full lg:max-w-5xl lg:mx-auto">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button className="nav__hamburger icon-button">
          <Icon name="hamburger" width={25} height={20} />
        </button>
        <ul className="nav__links">
          {navLinks?.length &&
            navLinks.map(({ name, href }: NavLink) => (
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
