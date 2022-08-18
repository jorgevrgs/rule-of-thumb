import type { VeredictProps } from '../types';
import Icon from './icon';

export default function Veredict({ positive, negative }: VeredictProps) {
  const positivePercentage = (positive / (positive + negative)) * 100;
  const negativePercentage = (negative / (positive + negative)) * 100;

  return (
    <>
      <div className="veredict">
        <div
          className="veredict__votes veredict__votes__positive"
          aria-label="thumbs up"
        >
          <Icon name="thumbs-up" width={16} height={16} />
          <span className="veredict__percentage">
            {positivePercentage.toFixed(2)} %
          </span>
        </div>
        <div
          className="veredict__votes veredict__votes__negative"
          aria-label="thumbs down"
        >
          <Icon name="thumbs-down" width={16} height={16} />
          <span className="veredict__percentage">
            {negativePercentage.toFixed(2)} %
          </span>
        </div>
      </div>
      <style jsx>{`
        .veredict {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .veredict__votes {
          display: flex;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 700;
          height: 3rem;
          padding: 0.5rem 1rem;
          color: var(--color-white);
        }

        .veredict__votes__positive {
          background-color: rgba(var(--color-green-positive), 0.8);
          width: ${positivePercentage}%;
        }

        .veredict__votes__negative {
          background-color: rgba(var(--color-yellow-negative), 0.8);
          width: ${negativePercentage}%;
        }

        .veredict__percentage {
          margin-left: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
