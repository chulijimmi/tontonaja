/**
 * Produce as an array related with
 * state movies from reducers Genres and
 * input from array genre_ids of movie objects
 * @param {Array} genres
 * @param {Array} input
 */
export const getGenreName = (genres, input) => {
  const result = [];

  if (input.length === 0) return false;
  if (input.length === 1) return genres.filter(genre => genre.id === input[0]);
  for (let i = 0; i < input.length; i++) {
    genres.map(item => {
      if (item.id === input[i]) {
        result.push(item);
      }
    });
  }
  return result;
};
