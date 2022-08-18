import type { CelebritiesProps } from '../types';
import { Celebrity } from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  return (
    <>
      <section className="celebrities">
        {celebrities.map((celebrity) => (
          <Celebrity celebrity={celebrity} key={celebrity.celebrityId} />
        ))}
      </section>
      <style jsx>{`
        .celebrities {
          display: grid;
          overflow: auto;
          grid-template-columns: repeat(${celebrities.length}, 1fr);
          grid-auto-rows: 1fr;
          grid-auto-flow: column;
          grid-gap: 1rem;
          padding: 1rem 0;
        }
      `}</style>
    </>
  );
}
