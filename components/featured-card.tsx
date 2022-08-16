import Image from 'next/image';
import WikipediSvg from './icons/wikipedia.icon';

export default function FeaturedCard() {
  return (
    <div className="hero__featured-card">
      <div className="featured-card__glass-background"></div>
      <div className="featured-card__content">
        <p className="featured-card__hairline">{"What's your opinion on"}</p>
        <h2 className="featured-card__title">Pope Francis?</h2>
        <p className="featured-card__desc">
          {`He's talking tough on clergy sexual abuse, or is he just another
              pervert protector? (thumbs down) or a true pedophile punishing
              pontiff? (thumbs up)`}
        </p>
        <p className="featured-card__more-info">
          <a href="http://wikipedia.com">
            <WikipediSvg />
            More information
          </a>
        </p>
        <p className="featured-card__cta">{"What's Your Veredict?"}</p>
        <div className="featured-card__buttons">
          <button className="icon-button" aria-label="thumbs up">
            <Image
              width={36}
              height={36}
              src="/assets/img/thumbs-up.svg"
              alt="thumbs up"
            />
          </button>
          <button className="icon-button" aria-label="thumbs down">
            <Image
              width={36}
              height={36}
              src="/assets/img/thumbs-down.svg"
              alt="thumbs down"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
