import Icon from './icon';

function Navbar() {
  const navLinks = [
    { name: 'Past Trials', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Login / Sign Up', href: '#' },
  ];

  return (
    <nav className="nav w-full z-30">
      <a
        href="#main"
        className="skip-link absolute -top-full w-px h-px overflow-hidden mx-auto transition-position delay-300 ease-in-out focus:w-auto focus:h-auto focus:top-0 focus:left-1/2 focus:-translate-x-1/2  focus:z-50 focus:bg-black/90 focus:text-white focus:px-4 focus:py-2 focus:rounded-b-lg"
      >
        Skip to main content
      </a>

      <div className="flex justify-between w-full md:relative md:w-full md:max-w-7xl md:mx-auto">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button
          className="nav__hamburger icon-button"
          type="button"
          aria-label="Open menu"
        >
          <Icon name="hamburger" width={25} height={20} />
        </button>

        <ul className="nav__links">
          {Boolean(navLinks?.length) &&
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
              <button
                className="nav__search icon-button"
                disabled
                type="submit"
                aria-label="Search button"
                tab-index="-1"
              >
                <span className="sr-only">Search</span>
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
