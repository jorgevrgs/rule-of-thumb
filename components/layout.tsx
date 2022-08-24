import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
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
