import React, { useEffect } from "react";

function Nav(props) {
  //destructures props sent from app.js file
  const { navTitles = [], currentNavTitle, setNavTitle } = props;

  //updates page title dependant on which nav is clicked
  useEffect(() => {
    document.title = currentNavTitle;
  }, [currentNavTitle]);

  return (
    <header>
      <h2 className="header-name">Bradley Woodle</h2>
      <nav>
        <ul className="nav-container">
          {navTitles.map((titles) => (
            <li
              className={`nav-titles ${
                currentNavTitle === titles && "navActive"
              }`}
              key={titles}
            >
              <span
                onClick={() => {
                  setNavTitle(titles);
                }}
              >
                {titles}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
