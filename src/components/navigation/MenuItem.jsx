import React from "react";

export const MenuItem = ({ dataMenu }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {dataMenu.map((item) => (
          <li className="nav-item " key={item.id}>
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

//esto es para que si no le pasamos nada a la prop dataMenu, no nos tire error

MenuItem.defaultProps = {
  dataMenu: [
    {
      id: 1,
      name: "Home",
      link: "/home",
      active: true,
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
      active: false,
    },
  ],
};
