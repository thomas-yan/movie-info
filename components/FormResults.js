import Link from "next/link";

const FormResults = props => {
  const handleClick = () => {
    document.getElementById("results").className = "noDisplay";
    document.getElementById("searchInput").value = "";
  };

  const link = "https://image.tmdb.org/t/p/w300";
  return (
    <ul id="results" onClick={handleClick}>
      {props.results.map((element, index) => {
        return (
          <li key={index} onClick={handleClick}>
            <Link href={`/movie?id=${props.results[index].id}`}>
              <img
                src={
                  props.results[index].poster_path === null
                    ? "http://via.placeholder.com/300x450"
                    : `${link}${props.results[index].poster_path}`
                }
                alt={`${props.results[index].title} poster`}
                className="resultPoster"
              />
              <div>
                <p>{props.results[index].title}</p>
                <p>{props.results[index].release_date}</p>
              </div>
            </Link>
          </li>
        );
      })}
      <style jsx>{`
        .formResults {
          position: absolute;
          z-index: 9999;
          width: 100%;
          height: 500px;
          overflow-y: visible;
          text-align: left;
        }

        .formResults li {
          background-color: #263238;
          transition: all 0.35s ease-out;
        }

        .formResults li:hover {
          background-color: #000;
        }

        .formResults a {
          color: #fff;
          display: flex;
          padding: 20px 20px;
        }

        .resultPoster {
          width: 100px;
          margin-right: 20px;
          align-self: center;
        }
      `}</style>
    </ul>
  );
};

export default FormResults;
