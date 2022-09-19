import Image from 'next/image';
import { useContext } from 'react';
import { LayoutContext } from '../../infrastructure/contexts';
import Icon from './icon';

export default function FeaturedCard() {
  const { featuredCelebrity } = useContext(LayoutContext);

  if (!featuredCelebrity) {
    return null;
  }

  return (
    <div className="contents lg:relative lg:w-full lg:max-w-5xl lg:mx-auto relative">
      <div className="absolute inset-0 ">
        <Image
          layout="fill"
          className="w-full h-full"
          src={featuredCelebrity.picture}
          alt={featuredCelebrity.name}
          priority={true}
          objectFit="cover"
          objectPosition="right"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative top-[5.5rem] overflow-hidden w-[55vw] max-h-[26rem] lg:left-0 lg:w-1/2 lg:min-w-[600px] lg:max-h-unset lg:mt-10">
          <div className="featured-card__glass-background absolute"></div>
          <style jsx>{`
            .featured-card__glass-background {
              top: -20%;
              left: -20%;
              width: 140%;
              height: 140%;
              background: center no-repeat
                  linear-gradient(
                    var(--color-dark-background),
                    var(--color-dark-background)
                  ),
                calc(-50vw + 650px) -6rem/105vw auto no-repeat url(${featuredCelebrity.picture});
              filter: blur(1rem);
            }

            @media all and (min-width: 768px) {
              background: center no-repeat
                  linear-gradient(
                    var(--color-dark-background),
                    var(--color-dark-background)
                  ),
                7vw -6.5rem/115vw auto no-repeat url(${featuredCelebrity.picture});
            }
          `}</style>

          <div className="relative p-4 text-white">
            <p className="whitespace-nowrap font-light">
              {"What's your opinion on"}
            </p>
            <h2 className="text-5xl font-normal mb-2">
              {featuredCelebrity.name}?
            </h2>
            <p className="text-lg font-light line-clamp-4 mb-3">
              {featuredCelebrity.description}
            </p>
            <p className="hidden md:inline-block md:font-light">
              <a href="http://wikipedia.com">
                <Icon name="wikipedia" width={27} height={18} />
                More information
              </a>
            </p>
            <p className="font-bold my-4 lg:mb-8 lg:mx-0">
              {"What's Your Veredict?"}
            </p>
            <div className="flex justify-between mt-0 -mx-4 -mb-4 md:mt-0 md:-mb-4 md:-mx-6">
              <button
                className="w-1/2 h-11 bg-green-positive/80"
                type="button"
                aria-label="Vote with thumbs up"
                disabled
              >
                <Icon name="thumbs-up" width={16} height={16} />
              </button>
              <button
                className="w-1/2 h-11 bg-yellow-negative/80"
                type="button"
                aria-label="Vote with thumbs down"
                disabled
              >
                <Icon name="thumbs-down" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
