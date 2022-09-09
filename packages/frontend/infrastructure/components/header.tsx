import FeaturedCard from './featured-card';

export default function Header() {
  return (
    <header className="relative overflow-hidden h-[80vh] h-min-[35rem] h-max-[38rem] mb-8 lg:min-h-[700px]">
      <FeaturedCard />

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
