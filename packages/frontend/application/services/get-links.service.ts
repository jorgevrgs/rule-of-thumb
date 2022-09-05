export async function getLinksService<T>(): Promise<T> {
  return fetch(new URL('/api/links', process.env.NEXT_FRONTEND_URL)).then(
    (res) => res.json()
  );
}
