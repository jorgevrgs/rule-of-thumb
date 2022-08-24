import { Celebrity } from 'components/celebrity';
import type { CelebritiesProps } from 'types';

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
