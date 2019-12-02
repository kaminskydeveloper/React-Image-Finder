const API_URL =
  "";

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
