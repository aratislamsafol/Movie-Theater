export default function Loader(api1, api2) {
  return async () => {
    let movies = null;
    let tvSeries = null;

    if (api1) {
      const firstApi = await fetch(api1).then(res => res.json());
      movies = firstApi;
    }

    if (api2) {
      const secondApi = await fetch(api2).then(res => res.json());
      tvSeries = secondApi; 
    }

    return {
      movies,
      tvSeries
    };
  };
}
