// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Celebrities } from '@app/backend';
import {
  CELEBRITIES_COLLECTION,
  CelebrityDto,
  getCollection,
} from '@app/backend';
import omit from 'lodash.omit';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Celebrities>
) {
  const collection = await getCollection(CELEBRITIES_COLLECTION);

  const celebrities = (await collection
    .find({})
    .toArray()) as unknown as CelebrityDto[];

  res.status(200).json(
    celebrities.map((celebrity) => {
      return {
        celebrityId: celebrity._id,
        ...omit(celebrity, ['_id']),
      };
    }) as Celebrities
  );
}
