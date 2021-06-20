import React, { useState, useEffect } from "react";

import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies, getCategories } from "../actions/index";
import Pagination from "../components/pagination";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [0, "All"],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    };
  }

  // wait for the movies on server side before renders on browser
  static async getInitialProps() {
    const movies = await getMovies();
    const categories = await getCategories();
    // let movies = [];
    // let categories = [];
    // getMovies()
    //   .then((result) => {
    //     movies = result;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // getCategories()
    //   .then((result) => {
    //     categories = result;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    const images = movies.map((movie) => {
      return {
        id: `image-${movie.id}`,
        backdrop_path: movie.backdrop_path,
        title: movie.title,
      };
    });
    return { movies, categories, images };
  }

  handleChangeCategory = (category) => {
    this.setState({ filter: [category.id, category.name] });
  };

  filterMovies = (movies) => {
    if (this.state.filter[0] === 0) return movies;
    return movies.filter((m) => {
      return m.genre_ids && m.genre_ids.includes(this.state.filter[0]);
    });
  };

  render() {
    const { movies, images, categories } = this.props;

    const numberPages = Math.floor(this.state.totalResults / 10);

    return (
      <React.Fragment>
        <div className="home-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu
                  changeCategory={this.handleChangeCategory}
                  activeCategory={this.state.filter[0]}
                  appName={"Categorias"}
                  categories={categories || []}
                />
              </div>
              <div className="col-lg-9">
                <Carousel images={images || []} />
                <h4 className="my-4 c-red">
                  Mostrando {this.state.filter[1]} Filmes{" "}
                </h4>
                <div className="row">
                  {/* {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )} */}
                  <MovieList movies={this.filterMovies(movies) || []} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                { this.state.totalResults > 5 == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : "" }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Home;
