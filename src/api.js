const API_URL =
  "https://api.unsplash.com/search/photos/?client_id=5cb163c5a827aa01ffc34e7ffc47ab094674c23fdfc309b70124746c7fe3194d";

export default {
  search(searchTerm) {
    const url = `${API_URL}&query=${searchTerm}`;
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result.results;
      });
  }
};
