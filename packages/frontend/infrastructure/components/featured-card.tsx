import Image from 'next/image';
import { useContext } from 'react';
import { LayoutContext } from '../../infrastructure/contexts';
import Icon from './icon';

export default function FeaturedCard() {
  const { celebrity } = useContext(LayoutContext);

  if (!celebrity) {
    return null;
  }

  return (
    <>
      <Image
        layout="fill"
        className="absolute inset-0 w-full h-full object-cover"
        src={celebrity.picture}
        alt={celebrity.name}
        priority={true}
      />

      <div className="relative top-[5.5rem] left-4 overflow-hidden w-[55vw] max-h-[26rem] lg:left-0 lg:w-1/2 lg:min-w-[600px] lg:max-h-unset lg:mt-10">
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
              calc(-50vw + 650px) -6rem/105vw auto no-repeat url(${celebrity.picture});
            filter: blur(1rem);
          }

          @media all and (min-width: 768px) {
            background: center no-repeat
                linear-gradient(
                  var(--color-dark-background),
                  var(--color-dark-background)
                ),
              7vw -6.5rem/115vw auto no-repeat url(${celebrity.picture});
          }
        `}</style>

        <div className="relative p-4 text-white">
          <p className="whitespace-nowrap font-light">
            {"What's your opinion on"}
          </p>
          <h2 className="text-5xl font-normal mb-2">{celebrity.name}?</h2>
          <p className="text-lg font-light line-clamp-4 mb-3">
            {celebrity.description}
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
              aria-label="thumbs up"
            >
              <Icon name="thumbs-up" width={16} height={16} />
            </button>
            <button
              className="w-1/2 h-11 bg-yellow-negative/80"
              aria-label="thumbs down"
            >
              <Icon name="thumbs-down" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
