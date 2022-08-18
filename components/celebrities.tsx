import type { CelebritiesProps } from '../types';
import { Celebrity } from './celebrity';

export default function Celebrities({ celebrities }: CelebritiesProps) {
  return (
    <div className="celebrities">
      {celebrities.map((celebrity) => (
        <Celebrity celebrity={celebrity} key={celebrity.celebrityId} />
      ))}
    </div>
  );
}
