import type { CelebritiesProps } from '../types';
import { Celebrity } from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  return (
    <>
      <section className="grid grid-flow-col gap-4 overflow-x-auto">
        {celebrities.map((celebrity) => (
          <Celebrity celebrity={celebrity} key={celebrity.celebrityId} />
        ))}
      </section>
    </>
  );
}
