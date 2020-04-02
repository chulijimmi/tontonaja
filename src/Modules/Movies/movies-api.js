import { httpGet } from "../../Helper/HttpFetch";

// Try to fetching detail movie before
// push to route movie
export async function fetchDetailMovie(movieId) {
  const uri = `/3/movie/${movieId}?append_to_response=video,images,credits,jobs`;
  const response = await httpGet(uri);
  if (response.status === 200) {
    const json = await response.json();
    json.loaded = true;
    return json;
  }
  return false;
}
