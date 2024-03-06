const key = '19d7581077169b98a2df1419d5b5340d'


const baseUrl = 'https://api.themoviedb.org/3';

const requests = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending:` ${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en_US&query=comedy&page=1&include_adult=false`,
  upcoming:` ${baseUrl}/movie/upcoming?api_key=${key}`,
  key:key
};

export default requests