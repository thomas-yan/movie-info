import React from "react";
import Link from "next/link";

const NewMovies = props => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const key = "d5ec0a5c314e36218436d747448d15fc";

    // Get a date range between today and one month ago to dynamically update the link for the request
    let todayDate = new Date();
    let today =
      todayDate.getFullYear() +
      "-" +
      (todayDate.getMonth() + 1) +
      "-" +
      todayDate.getDate();
    let oneMonthAgo =
      (todayDate.getMonth() === 0
        ? todayDate.getFullYear() - 1
        : todayDate.getFullYear()) +
      "-" +
      (todayDate.getMonth() === 0
        ? todayDate.getMonth() + 12
        : todayDate.getMonth()) +
      "-" +
      todayDate.getDate();

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log("Error: " + response.status);
          return;
        }

        response.json().then(data => {
          const movies = data.results;
          setMovies(movies);
        });
      })
      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  });

  return (
    <section>
      <h2>What's new?</h2>
      <div className="newMovies">
        {movies.map((movie, index) => {
          return (
            <Link
              href={`/movie?id=${movies[index].id}`}
              key={index}
              className="movieLink"
            >
              <img
                src={
                  movies[index].poster_path === null
                    ? "http://via.placeholder.com/300x450"
                    : `https://image.tmdb.org/t/p/w300/${movies[index].poster_path}`
                }
                alt={`${movies.title} poster`}
                className="imgResponsive"
              />

              <div className="movieInfo">
                <h3>{movies[index].title}</h3>
                <p>{movies[index].release_date}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <style jsx>{`
        .newMovies {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
        }

        .newMovies a {
          width: 100%;
          display: block;
          margin-bottom: 30px;
        }

        @media (min-width: 576px) {
          .newMovies {
            justify-content: space-between;
          }
          .newMovies a {
            width: 48%;
          }
        }

        @media (min-width: 768px) {
          .newMovies a {
            width: 31.5%;
          }
        }

        @media (min-width: 992px) {
          .newMovies a {
            width: 23%;
          }
        }

        .movieLink {
          position: relative;
        }

        .movieInfo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          text-align: center;
          padding: 0 10px;
          width: 100%;
          height: 100%;
          background-color: #263238;
          color: #1de9b6;
          opacity: 0;
          visibility: hidden;
        }

        .movieLink:hover .movieInfo {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </section>
  );
};

export default NewMovies;
