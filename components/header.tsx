import FeaturedCard from 'components/featured-card';

export default function Header() {
  return (
    <header className="hero">
      <div className="contents lg:relative lg:w-full lg:max-w-5xl lg:mx-auto relative">
        <FeaturedCard />
      </div>
      <div className="hero__closing-gauge">
        <div className="closing-gauge__left">
          <span className="closing-gauge__title">closing in</span>
        </div>
        <div className="closing-gauge__right">
          <span className="closing-gauge__number">22</span>
          <span className="closing-gauge__desc">days</span>
        </div>
      </div>
    </header>
  );
}
