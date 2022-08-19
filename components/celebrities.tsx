import type { CelebritiesProps } from '../types';
import { Celebrity } from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  return (
    <>
      <section className="grid grid-rows-fr grid-flow-col gap-4 py-4 overflow-auto">
        {celebrities.map((celebrity) => (
          <Celebrity celebrity={celebrity} key={celebrity.celebrityId} />
        ))}
      </section>
    </>
  );
}
