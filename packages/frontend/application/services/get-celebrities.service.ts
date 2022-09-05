export async function getCelebritiesService<T>(): Promise<T> {
  return fetch(new URL('/api/celebrities', process.env.NEXT_FRONTEND_URL)).then(
    (res) => res.json()
  );
}
