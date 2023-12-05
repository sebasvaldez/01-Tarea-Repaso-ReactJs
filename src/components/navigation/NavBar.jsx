import { MenuItem } from "./MenuItem";
import { menuData } from "../../data/Menu";

export const NavBar = ({ onClick,isLoginUser }) => {
  console.log(isLoginUser)
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <MenuItem dataMenu={menuData} />

        <form className="d-flex" role="search">
          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={onClick}
            >
              {isLoginUser ? "Logout" : "Login"}
              
            </button>
            {
              !isLoginUser ? <button type="button" className="btn btn-info" >Registrarse</button> : null
            }
            
          </div>
        </form>
      </div>
    </nav>
  );
};