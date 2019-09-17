import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "ab9252545142fda52aa83074077e0381",
		language: "en-US"
	}
});

export default api;
