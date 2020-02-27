const fs = require('fs');
const fetch = require('node-fetch');
const { key } = require('./api.json');

async function getIt(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
  return await res.json();
}

function saveItToFile(filename, movie) {
  fs.writeFile(`output/${filename}.json`, JSON.stringify(movie, null, 4), 'utf8', () => {
    console.log('done');
  });
}

async function main() {
  const movieInput = process.argv.slice(2);

  if (process.argv.length < 2) {
    console.error('USAGE: ./node downloader.js <moviename> <movieid>');
    os.exit(-1);
  }

  const movieName = movieInput[0];
  const movieId = movieInput[1];
  const movie = await getIt(movieId);
  saveItToFile(movieName, movie);
}

main();
