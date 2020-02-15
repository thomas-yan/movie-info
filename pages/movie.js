import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Cast from "../components/Cast";
import { getData } from "../api";

const Movie = ({ movie }) => {
  return (
    <div className="container">
      <Header />
      <Form id="form" />

      <div className="moviePage">
        <div className="poster">
          <img
            src={
              movie.poster_path === null
                ? "http://via.placeholder.com/300x450"
                : `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            }
            alt={`${movie.title} poster`}
            className="posterImg"
          />
        </div>

        <section className="movieDetails">
          <h2 className="sectionTitle">{movie.title}</h2>
          <ul className="detailsList">
            <li>
              <span className="bold">Release date:</span> {movie.release_date}
            </li>
            <li>
              <span className="bold">Rating:</span> {movie.vote_average}
            </li>
            <li>
              <span className="bold">Vote count:</span> {movie.vote_count}
            </li>
            <li>
              <span className="bold">Genres: </span>{" "}
              {movie.genres.map((element, index) => {
                if (index < movie.genres.length - 1) {
                  return movie.genres[index].name + ", ";
                } else {
                  return movie.genres[index].name;
                }
              })}
            </li>
          </ul>

          <p>{movie.overview}</p>
        </section>
      </div>
      {/* moviePage */}

      <Cast cast={movie.credits.cast} />
      <style jsx>{`
        .moviePage {
          display: flex;
          flex-direction: column;
          margin-top: 25px;
        }

        .movieDetails {
          order: 1;
        }

        .sectionTitle {
          margin: 0;
        }

        .detailsList {
          margin-top: 20px;
        }

        .detailsList li {
          margin-bottom: 10px;
        }

        .bold {
          font-weight: 600;
        }

        .poster {
          order: 2;
        }

        .posterImg {
          width: 100%;
          height: auto;
        }

        @media (min-width: 768px) {
          .moviePage {
            flex-direction: row;
          }
          .movieDetails {
            flex: 2;
            order: 2;
          }
          .poster {
            flex: 1;
            order: 1;
            padding-right: 20px;
          }
          .posterImg {
            width: 300px;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

Movie.getInitialProps = async ctx => {
  const id = ctx.query.id;
  const data = await getData(id);
  return { movie: data };
};

export default Movie;
