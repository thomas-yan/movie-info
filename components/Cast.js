import React from "react";

const Cast = props => {
  const link = "https://image.tmdb.org/t/p/w300";
  return (
    <div>
      <h3>Cast</h3>
      <div className="figureContainer">
        {props.cast.slice(0, 6).map((element, index) => {
          return (
            <figure key={index}>
              <img
                src={
                  props.cast[index].profile_path === null
                    ? "http://via.placeholder.com/300x450"
                    : link + props.cast[index].profile_path
                }
                key={index}
                alt={props.cast[index].name}
                className="imgResponsive"
              />
              <figcaption>{props.cast[index].name}</figcaption>
            </figure>
          );
        })}
      </div>
      <style jsx>{`
        .figureContainer {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          text-align: center;
          margin-top: 20px;
        }

        .figureContainer figure {
          width: 48%;
          margin: 0 0 20px;
        }

        @media (min-width: 768px) {
          .figureContainer {
            justify-content: flex-start;
          }
          .figureContainer figure {
            width: 31.5%;
            margin: 0 10.2px 20px 0;
          }
        }

        @media (min-width: 992px) {
          .figureContainer figure {
            width: 15.5%;
          }
        }
      `}</style>
    </div>
  );
};

export default Cast;
