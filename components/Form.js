import React from "react";
import FormResults from "./FormResults";

const Form = props => {
  const [results, setResults] = React.useState([]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleKeyUp = () => {
    document.getElementById("results").className = "formResults";
    let val = document.getElementById("searchInput").value;

    if (val === "") {
      document.getElementById("results").className = "noDisplay";
    }

    const key = "d5ec0a5c314e36218436d747448d15fc";

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log("Error: " + response.status);
          return;
        }

        response.json().then(data => {
          const newResults = data.results;
          setResults(newResults);
          return
        });
      })

      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <img src="/search.svg" alt="search icon" className="searchIcon" />
      <input
        onKeyUp={handleKeyUp}
        id="searchInput"
        className="searchBar"
        type="text"
        placeholder="Search a movie"
        required
      />
      <FormResults results={results} />
      <style jsx>{`
        form {
          position: relative;
          padding-top: 25px;
          text-align: center;
        }

        .searchBar {
          position: relative;
          font-family: "Acme", sans-serif;
          width: 100%;
          padding: 20px 0 20px 40px;
          border: 1px solid #bdbdbd;
          color: #000;
          outline: none;
          transition: all 0.35s ease-out;
        }

        .searchBar:focus {
          border: 1px solid #1de9b6;
        }

        ::placeholder {
          color: #000;
          transition: all 0.35s ease-out;
        }

        .searchBar:focus::placeholder {
          color: #1de9b6;
        }

        .searchIcon {
          position: absolute;
          z-index: 9999;
          margin: 18px 0 0 10px;
        }

        .noDisplay {
          display: none;
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
    </form>
  );
};

export default Form;
