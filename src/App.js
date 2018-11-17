import React, { Component } from "react";
import API from "./api";

class App extends Component {
  state = {
    title: "React Image Search",
    searchTerm: "",
    loading: false,
    images: []
  };

  searchTermChanged = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  formSubmitted = event => {
    event.preventDefault();
    this.setState({
      loading: true,
      images: [],
      searchTerm: ""
    });
    API.search(this.state.searchTerm).then(images => {
      this.setState({
        loading: false,
        images
      });
    });
  };

  render() {
    const { title, searchTerm, loading, images } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <form onSubmit={event => this.formSubmitted(event)}>
          <label htmlFor="searchTerm">Search Term</label>
          <input
            onChange={event => this.searchTermChanged(event)}
            type="text"
            id="searchTerm"
            name="searchTerm"
            className="u-full-width"
            value={searchTerm}
          />
          <button type="submit">Serach</button>
        </form>
        {loading ? (
          <img src="https://i.imgur.com/5sHokPz.gif" alt="loading..." />
        ) : (
          ""
        )}
        <section className="images">
          {images.map(image => {
            // console.log(image);
            return (
              <img
                alt={image.description}
                src={image.urls.full}
                key={image.id}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
