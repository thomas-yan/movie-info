import React from 'react';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <li><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie Database</a></li>
        </ul>
      </nav>
    );
  }
}
