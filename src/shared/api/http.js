export async function httpGet(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
}
