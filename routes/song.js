const axios = require("axios");
const Song = require("../models/Song");
const dotenv = require("dotenv")

const key = process.env.FETCH_KEY;
const url = process.env.PORT;

// .env 파일에서 환경 변수를 로딩합니다.
dotenv.config();

async function fetchAndStoreSongs(query) {
  try {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/list',
      headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': url
      }
    };

    // const options = {
    //   method: "GET",
    //   url: "https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/shazam_track.json"
    // }

    const response = await axios.request(options);
    const songs = response.data.countries;
    console.log("?? : ", songs)

    for (let song of songs) {
      const newSong = new Song({
        id: song.id,
        listid: song.listid,
        momentum_listid: song.momentum_listid,
        name: song.name,
        cities: song.cities,
        genres: song.genres
      });

      await newSong.save();
    }
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}

module.exports = fetchAndStoreSongs;