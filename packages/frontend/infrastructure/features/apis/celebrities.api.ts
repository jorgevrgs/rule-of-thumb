import { CelebritiesType, CelebrityType, logger } from '@app/shared';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { Stores, UpdateVoteParams } from '../../../domain';

export const celebritiesApi = createApi({
  reducerPath: Stores.celebrities,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_FRONTEND_URL || 'http://localhost:3000',
  }),

  tagTypes: ['Celebrities'],

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
      async onQueryStarted(
        { celebrityId, ...patch },
        { dispatch, queryFulfilled }
      ) {
        try {
          const { data: updatedCelebrity } = await queryFulfilled;

          dispatch(
            celebritiesApi.util.updateQueryData(
              'getCelebrities',
              undefined,
              (draft) => {
                const postIndex = draft.findIndex(
                  (post) => post.celebrityId === celebrityId
                );

                if (postIndex !== -1) {
                  Object.assign(draft[postIndex], {
                    ...draft[postIndex],
                    ...updatedCelebrity,
                  });
                }

                return draft;
              }
            )
          );
        } catch (e) {
          logger.error(e);
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetCelebritiesQuery,
  useUpdateVoteMutation,
  util: { getRunningOperationPromises },
} = celebritiesApi;

// export endpoints for use in SSR
export const { getCelebrities } = celebritiesApi.endpoints;
