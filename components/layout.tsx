import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <div className="max-centered">
        {children}

        <Footer />
      </div>
    </>
  );
}

export default Layout;
