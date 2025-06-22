
export default function Loader(api1, api2, api3) { 
  return async () => {
    let movies = null;
    let tvSeries = null;
    let upcomingMovies = null; 

    if (api1) {
      const firstApi = await fetch(api1).then(res => res.json());
      movies = firstApi;
    }

    if (api2) {
      const secondApi = await fetch(api2).then(res => res.json());
      tvSeries = secondApi;
    }


    if (api3) {
      const thirdApi = await fetch(api3).then(res => res.json());
      upcomingMovies = thirdApi;
    }

    return {
      movies,
      tvSeries,
      upcomingMovies 
    };
  };
}



