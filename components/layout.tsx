import type { NavLinkProps } from '../types';
import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

interface Props extends NavLinkProps {
  children: React.ReactNode;
}

function Layout({ children, navLinks }: Props): JSX.Element {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Header />
      <div className="max-centered">
        {children}

        <Footer />
      </div>
    </>
  );
}

export default Layout;
