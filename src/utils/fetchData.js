export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '997559568emshecf1d73f258405dp126a3djsn6ab33ca6d48b',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host':'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key':'997559568emshecf1d73f258405dp126a3djsn6ab33ca6d48b',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };