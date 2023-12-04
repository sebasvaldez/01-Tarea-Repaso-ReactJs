import { CardSection } from "./cardSection";
import { News } from "../../data/Novedades.js";

export const CustomNewsSection = ({ isLoginUser }) => {
  if (!isLoginUser) {
    return (
      <h1 className="text-center not-logged-in">
        Tienes que estar logueado para poder ver las novedades
      </h1>
    );
  } else {
    return (
      <div
        className="px-4 py-5 "
        id="featured-3"
        style={{ backgroundColor: "#f7f8f9" }}
      >
        <div className="container">
          <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
          <CardSection />

          <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
          <CardSection news={News} />
        </div>
      </div>
    );
  }
};
