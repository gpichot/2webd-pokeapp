export const baseUrl = "https://pokeapi.fly.dev/2webd";

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetcher(...args: Parameters<typeof fetch>) {
  const [url, ...rest] = args;
  const res = await fetch(`${baseUrl}${url}`, ...rest);

  await sleep(500);

  return await res.json();
}
