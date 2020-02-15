import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div className="header">
          <img src="/logo.svg" alt="movie info logo" /> <h1>Movie Info</h1>
        </div>
      </Link>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 25px;
        }

        div.header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .navbar li {
          margin-bottom: 10px;
        }

        @media (min-width: 768px) {
          .navbar {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar li {
            margin: 0 10px;
          }
        }

        @media (min-width: 992px) {
          header {
            flex-direction: row;
            justify-content: space-between;
            padding: 0;
          }
          .navbar li {
            margin: 0 0 0 20px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
