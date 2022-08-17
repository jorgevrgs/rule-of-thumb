import Icon from './icon';

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
            <Icon name="wikipedia" width={27} height={18} />
            More information
          </a>
        </p>
        <p className="featured-card__cta">{"What's Your Veredict?"}</p>
        <div className="featured-card__buttons">
          <button className="icon-button" aria-label="thumbs up">
            <Icon name="thumbs-up" width={16} height={16} />
          </button>
          <button className="icon-button" aria-label="thumbs down">
            <Icon name="thumbs-down" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
