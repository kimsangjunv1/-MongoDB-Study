// 모델 정의 : 게시물
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    countryid: { type: String, required: true },
    listid: { type: String, required: true }
  });
  
  const genreSchema = new Schema({
    id: { type: String, required: true },
    countryid: { type: String, required: true },
    listid: { type: String, required: true },
    name: { type: String, required: true },
    urlPath: { type: String, required: true },
    count: { type: Number, required: true }
  });
  
  const songSchema = new Schema({
    id: { type: String, required: true },
    listid: { type: String, required: true },
    momentum_listid: { type: String, required: false },
    name: { type: String, required: true },
    cities: [citySchema],
    genres: [genreSchema]
  });

const Song = mongoose.model("Song", songSchema);
module.exports = Song;