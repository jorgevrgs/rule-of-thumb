import Image from 'next/image';
import FeaturedCard from './featured-card';

export default function Header() {
  return (
    <header className="hero">
      <Image
        layout="fill"
        className="hero__background"
        src="/assets/img/pope-francis.@2x.png"
        alt="Pope Francis"
      />
      <div className="contents lg:relative lg:w-full lg:max-w-5xl lg:mx-auto">
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
