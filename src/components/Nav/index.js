import React, { useEffect } from "react";

function Nav(props) {
  const { navTitles = [], currentNavTitle, setNavTitle } = props;

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
