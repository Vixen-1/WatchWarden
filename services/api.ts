export const TMDC_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_ACCESS_TOKEN,
  headers: {
    accept: "application/json",
    authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
  },
};

export const fetchPopularMovies = async ({ query }: { query?: string }) => {
  const endpoint = query
    ? `${TMDC_CONFIG.BASE_URL}/search/movie?query=${encodeURI(query)}`
    : `${TMDC_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDC_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDC_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDC_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDC_CONFIG.headers,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
