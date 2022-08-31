import type { CelebritiesProps } from '../domain/types';
import { Celebrity } from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  return (
    <>
      <section className="flex flex-col">
        <h2 className="text-4xl my-8 w-full">Previous Rulings</h2>

        <div className="grid grid-flow-col gap-4 overflow-x-auto">
          {celebrities.map((celebrity) => (
            <Celebrity key={celebrity.celebrityId} celebrity={celebrity} />
          ))}
        </div>
      </section>
    </>
  );
}
