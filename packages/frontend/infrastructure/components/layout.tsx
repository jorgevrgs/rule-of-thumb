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
      <div className="flex flex-col relative w-full max-w-7xl mx-auto">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
