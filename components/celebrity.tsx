import Image from 'next/image';
import { CelebrityProps } from '../types';
import Veredict from './veredict';

export function Celebrity({ celebrity }: CelebrityProps) {
  return (
    <>
      <article className="celebrity">
        <Image
          src={celebrity.picture}
          alt={celebrity.name}
          className="celebrity__image"
          width={256}
          height={114}
          layout="fill"
          objectFit="cover"
        />

        <div className="celebrity__details">
          <h2 className="celebrity__name">{celebrity.name}</h2>
          <p className="celebrity__description">{celebrity.description}</p>
        </div>

        <div className="celebrity__stats">
          <Veredict {...celebrity.votes} />
        </div>
      </article>
      <style jsx>{`
        .celebrity {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
          position: relative;
          width: 256px;
          height: 256px;
          color: var(--color-white);
        }

        .celebrity__image {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .celebrity__details {
          z-index: 10;
        }

        .celebrity__name {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 1rem 0;
          color: var(--color-white);
        }

        .celebrity__description {
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 1.5;
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 3rem;
        }

        .celebrity__stats {
          width: 100%;
          margin-top: 1rem;
          z-index: 10;
          position: absolute;
          bottom: 0;
          right: 0;
        }

        @media (min-width: 768px) {
          .celebrity {
            padding: 0 2rem;
          }

          .celebrity__name {
            font-size: 2rem;
          }

          .celebrity__description {
            font-size: 1.25rem;
          }

          .celebrity__image {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
}
