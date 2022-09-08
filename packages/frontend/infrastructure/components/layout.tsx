import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Header />
      <div className="contents lg:relative lg:w-full lg:max-w-5xl lg:mx-auto">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
