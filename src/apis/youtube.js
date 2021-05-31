import axios from "axios";

const KEY = "AIzaSyBTUvAYuRIGs76goKaUIjsHo1UiLopvxH4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
