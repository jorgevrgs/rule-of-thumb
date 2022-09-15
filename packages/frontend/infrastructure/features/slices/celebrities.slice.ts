import { CelebritiesType, CelebrityType } from '@app/shared';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { Stores, UpdateVoteParams } from '../../../domain';

export const celebritiesSlice = createApi({
  reducerPath: Stores.celebrities,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_FRONTEND_URL || 'http://localhost:3000',
  }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    getCelebrities: builder.query<CelebritiesType, number | void>({
      query: (limit = 12) =>
        '/api/celebrities' + (limit ? `?limit=${limit}` : ''),
    }),

    updateVote: builder.mutation<CelebrityType, UpdateVoteParams>({
      query: ({ celebrityId, ...payload }) => ({
        url: `/api/celebrities/${celebrityId}`,
        method: 'PATCH',
        body: payload,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCelebritiesQuery,
  useUpdateVoteMutation,
  util: { getRunningOperationPromises },
} = celebritiesSlice;

// export endpoints for use in SSR
export const { getCelebrities } = celebritiesSlice.endpoints;